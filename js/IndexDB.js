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
        return db;
    };
    request.onupgradeneeded=function(){
        var db=this.result;
        db._errorFun=this._errorFun;
        db.onerror=this.onerror;
        db.createStore=function(storeName,keyPath,autoIncrement,indexes,objects){
            var store=this.createObjectStore(storeName,{keyPath:keyPath? keyPath:null,autoIncrement:autoIncrement});
            for(var i= 0,index=indexes[i];index;index=indexes[++i])
                if(index.attribute)
                    store.createIndex(index.name,index.path,index.attribute);
                else
                    store.createIndex(index.name,index.path);
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
            catch (e){db.onerror(e);}
        return db;
    };
    request._openFun=[];
    request._changeFun=[];
    request._errorFun=[];
    request._successFun=[];
    request.openFunc=function(func)
    {
        this._openFun.push(func);
        return this;
    };
    request.changeFunc=function(func)
    {
        this._changeFun.push(func);
        return this;
    };
    request.errorFunc=function(func)
    {
        this._errorFun.push(func);
        return this;
    };
    request.successFunc=function(func){
        this._successFun.push(func);
        return this;
    };
    request.onerror=function(e)
    {
        for(var i= 0,func=this._errorFun[0];func;func=this._errorFun[++i])
            func(e);
        return this;
    };

    return request;
}
function addDBMethods(db)
{
    db.readTransaction=function(storeName)
    {
        var trans= this.transaction(storeName);
        addTransMethods(trans);
        addStoreReadMethods(trans.store);
        trans.store=trans.objectStore(storeName);
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
function addStoreReadMethods(store)
{
    store.getObject=function(key,getFun,failFun)
    {
       var request= store.get(key);
        request.onsuccess=getFun;
        request.onerror=failFun;
        return this;
    };
    store.onerror=function()
    {
      if(this.transaction)
         this.transaction.abort();
    };

    return store;
}
function addStoreWriteMethods(store)
{
    store.forEach=function(callFunc,filterFun,endFun)
    {
        var request=this.openCursor();
        request.filter=filterFun;
        request.act=callFunc;
        request.end=endFun;
        request.onsuccess=function()
        {
            var cursor=this.result;
            if(cursor){
                if(this.filter && this.filter(cursor))
                    this.act(cursor);
                cursor.continue();
            }
            else {
                if(this.end)
                    this.end();
                delete this;
            }
        };
        return this;
    };
    store.addObjects=function(objects)
    {
        for(var i=0,obj=objects[i];obj;obj=objects[++i])
            this.add(obj);
        return this;
    };
    store.putObjects=function(objects)
    {
        for(var i=0,obj=objects[i];obj;obj=objects[++i])
            this.put(obj);
        return this;
    };
    store.addIndex=function(indexName,indexPath,unique,multiEntry,successFun,failFun)
    {
       var request=this.createIndex(indexName,indexPath,{unique:unique, multiEntry:multiEntry});
        request.onerror=failFun;
        request.onsuccess=successFun;
       return this;
    };
    store.putObject=function(obj,onsuccess,onerror)
    {
        var r=this.put(obj);
        r.onsuccess=onsuccess;
        r.onerror=onerror;
        return this;
    };
    store.addObject=function(obj,onsuccess,onerror)
    {
        var r=this.add(obj);
        r.onsuccess=onsuccess;
        r.onerror=onerror;
        return this;
    };
    store.deletObject=function(obj,onsuccess,onerror){
        var r=this.delete(obj);
        r.onsuccess=onsuccess;
        r.onerror=onerror;
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

}
function storeIndex(indexName,indexPath,unique,multiEntry)
{
    return {name:indexName,path:indexPath,attribute:{unique:unique,multiEntry:multiEntry? multiEntry:false}};
}