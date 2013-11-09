function dbRequest(dbname,version)
{
    var request=version?window.indexedDB.open(dbname,version):window.indexedDB.open(dbname);
    request.onsuccess=function(){
        var db=this.result;
        if(!db._errorFun){
            db._errorFun=this._errorFun;
            db.onerror=this.onerror;
        }
        addDBMethods(db);
        for(var i= 0,func=this._openFun[0];func;func=this._openFun[++i])
           try{func(db); }
           catch (e){db.onerror(e);}
        for(var j= 0,action=this._storeAction[0];action;action=this._storeAction[++j])
            try{
                if(action.write)
                    action.fun(db.writeTransaction(action.name).store);
                else
                    action.fun(db.readTransaction(action.name).store);
            }
            catch (e){ db.onerror(e);}
       this.db=db;
    };
    request.onupgradeneeded=function(){
        var db=this.result;
        this.db=db;
        db._errorFun=this._errorFun;
        db.onerror=this.onerror;
        db.createStore=function(storeName,keyPath,autoIncrement,indexes,objects){
            var store=this.createObjectStore(storeName,{keyPath:keyPath? keyPath:null,autoIncrement:autoIncrement});
            if(indexes)
            for(var i= 0,index=indexes[i];index;index=indexes[++i])
                if(index.attribute)
                    store.createIndex(index.name,index.path,index.attribute);
                else
                    store.createIndex(index.name,index.path);
            if(objects)
            for(var j= 0,obj=objects[j];obj;obj=objects[++j])
                store.put(obj);
            return store;
        };
        db.deleteStore=function(storeName){
            try{this.deleteObjectStore(storeName);}
            catch(ex){}
            return this;
        };
        for(var i= 0,func=this._changeFun[0];func;func=this._changeFun[++i])
            try{func(db); }
            catch (e){ db.onerror(e);}
    };
    request._openFun=[];
    request._changeFun=[];
    request._errorFun=[];
    request._successFun=[];
    request._storeAction=[];
    request.whenOpen=function(func)
    {
        this._openFun.push(func);
        return this;
    };
    request.writeStore=function(storeName,fun)
    {
       this._storeAction.push({name:storeName,fun:fun,write:true});
       return this;
    };
    request.readStore=function(storeName,fun){
        this._storeAction.push({name:storeName,fun:fun,write:false });
        return this;
    };
    request.whenConstruct=function(func)
    {
        this._changeFun.push(func);
        return this;
    };
    request.whenError=function(func)
    {
        this._errorFun.push(func);
        return this;
    };
    request.whenSuccess=function(func){
        this._successFun.push(func);
        return this;
    };
    request.onerror=function(e)
    {
        for(var i= 0,func=this._errorFun[0];func;func=this._errorFun[++i])
            func(e);
        return this;
    };
    request.db=undefined;
    return request;
}
function addDBMethods(db)
{
    db.readTransaction=function(storeName)
    {
        var trans= this.transaction(storeName);
        trans.store=trans.objectStore(storeName);
        addTransMethods(trans);
        addStoreReadMethods(trans.store);
        return trans;
    };
    db.writeTransaction=function(storeName)
    {
        var trans= this.transaction(storeName,'readwrite');
        addTransMethods(trans);
        trans.store=trans.objectStore(storeName);
        addStoreReadMethods(trans.store);
        addStoreWriteMethods(trans.store);
        return trans;
    };
    return db;
}
function addTransMethods(trans)
{
    trans.events=function(success,error,abort){
        trans.onsuccess=success;
        trans.onerror=error;
        trans.onabort=abort;
        return this;
    };
    return trans;
}
function onrequestSuccess(e)
{
    if(this.successFun)this.successFun(e,this.userContext);
    this.store.requests.remove(this);
    this.userContext=undefined;
    delete this;
}
function onrequestFail(e)
{
    if(this.errorFun)this.errorFun(e,this.userContext);
    this.store.requests.remove(this);
    this.userContext=undefined;
    delete this;
}
function addStoreReadMethods(store)
{
    store.addRequest=function(request,des,successFun,errorFun,userContext)
    {
        request.des=des;
        request.store=this;
        if(!this.requests)this.requests=[request];
        else this.requests.push(request);
        request.successFun=successFun;
        request.onsuccess=onrequestSuccess;
        request.errorFun=errorFun;
        request.onerror=onrequestFail;
        request.userContext=userContext;
        return this;
    };
    store.getObject=function(key,getFun,failFun,context)
    {
       var request= store.get(key);
       this.addRequest(request,'getObj:key;'+ key,getFun,failFun,context);
       request.onsuccess=function(e){
           if(this.successFun && this.result)this.successFun(this.result,this.userContext);
           else if(!this.result && this.errorFun)this.errorFun(e,this.userContext);
           this.store.requests.remove(this);
           this.userContext=undefined;
           delete this;
       };
       return this;
    };
    store.searhIndex=function(indexName,valueFilterFun,valueAction,endFun,keyRange,direction){
        if(!direction)direction='next';
        var request= this.index(indexName).openCursor(keyRange,direction);
        this.addRequest(request,'searchIndex:'+indexName);
        request.filter=valueFilterFun;
        request.act=valueAction;
        request.end=endFun;
        request.onsuccess=valueFilterFun?function() {
            var cursor=this.result;
            if(cursor){
                if(this.filter(cursor.value))
                    this.act(cursor.value);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end();
                this.store.requests.remove(this);
                delete this;
            }
        }:function(){
            var cursor=this.result;
            if(cursor){
                this.act(cursor.value);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end();
                this.store.requests.remove(this);
                delete this;
            }};
        return this;
    };
    store.select=function(valueFilterFun,resultsArray,endFun,userContext){
        var request=this.openCursor();
        this.addRequest(request,'selectValue');
        request.filter=valueFilterFun;
        request.end=endFun;
        request.context=userContext;
        request.results=resultsArray? resultsArray:[];
        request.onsuccess=valueFilterFun?function(){
            var cursor=this.result;
            if(cursor){
                if(this.filter(cursor.value))
                  this.results.push(cursor.value);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end(this.results,this.context);
                this.store.requests.remove(this);
                delete this;
            }
        }:function(){
            var cursor=this.result;
            if(cursor){
                this.results.push(cursor.value);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end(this.results,this.context);
                this.store.requests.remove(this);
                delete this;
            }};
        return this;
    };
    return store;
}
function addStoreWriteMethods(store)
{
    store.forEach=function(cursorActon,cursorFilterFun,endFun)
    {
        var request=this.openCursor();
        this.addRequest(request,'forEachCursor');
        request.filter=cursorFilterFun;
        request.act=cursorActon;
        request.end=endFun;
        request.onsuccess=cursorFilterFun?function(){
            var cursor=this.result;
            if(cursor){
                if(this.filter(cursor))
                    this.act(cursor);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end();
                this.store.requests.remove(this);
                delete this;
            }
        }:function(){
            var cursor=this.result;
            if(cursor){
            this.act(cursor);
            cursor.continue();
            }
            else {
                if(this.end)
                    this.end();
                this.store.requests.remove(this);
            delete this;
            }};
        return this;
    };
    store.addObjects=function(objects,successFun,failFun,context)
    {
        for(var i=0,obj=objects[i];obj;obj=objects[++i])
        {
           var request=this.add(obj);
           this.addRequest(request,'addObj'+i,successFun,failFun,context);
        }
        return this;
    };
    store.putObjects=function(objects,successFun,failFun,context)
    {
        for(var i=0,obj=objects[i];obj;obj=objects[++i])
        {
            var request=this.put(obj);
            this.addRequest(request,'putObj'+i,successFun,failFun,context);
        }
        return this;
    };
    store.addIndex=function(indexName,indexPath,unique,multiEntry,successFun,failFun,context)
    {
       var request=this.createIndex(indexName,indexPath,{unique:unique, multiEntry:multiEntry});
       this.addRequest(request,'addIndex:'+indexName,successFun,failFun,context);
       return this;
    };
    store.deleteObject=function(key,successFun,failFun,context){
        var r=this.delete(key);
        this.addRequest(r,'deleteObj:key'+key,successFun,failFun,context);
        return this;
    };
    return store;
}
function createStore(db,storeName,keyPath,autoIncrement,indexes,objects)
{
   var store=db.createObjectStore(storeName,{keyPath:keyPath? keyPath:null,autoIncrement:autoIncrement});
   for(var i= 0,index=indexes[i];index;index=indexes[++i])
   if(index.attribute)
       store.createIndex(index.name,index.path,index.attribute);
   else
     store.createIndex(index.name,index.path);
   for(var j= 0,obj=objects[j];obj;obj=objects[++j])
     store.put(obj);
   return store;
}
function deleteStore(dbName,storeName,version)
{
    var request=window.indexedDB.open(dbName,version);
    request.onupgradeneeded=function(event){
        var e=event;var db=this.result;
        db.deleteObjectStore(storeName);
    };
    return request;

}
function putObjects(db,storeName,objects,successFun,failFun)
{
   return db.writeTransaction(storeName).events(successFun,failFun,failFun).store.putObjects(objects).transaction;
}
function deleteObject(db,storeName,key,successFun,failFun)
{
   return db.writeTransaction(storeName).store.deleteObject(key,successFun,failFun).transaction;
}
function getObject(db,storeName,key,successFun,failFun)
{
    return db.writeTransaction(storeName).store.getObject(key,successFun,failFun).transaction;
}
function storeIndex(indexName,indexPath,unique,multiEntry)
{
    return {name:indexName,path:indexPath,attribute:{unique:unique,multiEntry:multiEntry? multiEntry:false}};
}