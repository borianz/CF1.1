function SlideAnimation(backUI){
    var disImgdata=ctx.createImageData(canvas.width,canvas.height);
    backUI.stage=0.1;
    backUI.worker=new Worker('js/backPixelsWorker.js');
    backUI.worker.p=backUI;
    backUI.worker.onmessage=function(e)
    {
        var s= e.data.stage+0.1;
        var disImgdata= e.data.disImgdata;
        var backUI=this.p;
        if(s <= 1)
        {
            backUI.disImgdata=disImgdata;
            backUI.paint=function(ctx){ctx.putImageData(this.disImgdata,0,0);}
            backUI.stage=s;
            backUI.worker.postMessage({p:backUI.stage,mode:'slide'});
        }
        else
        {
            backUI.oriImgdata=backUI.neoImgdata; backUI.disImgdata=undefined;
            backUI.paint=function(ctx){ctx.putImageData(this.oriImgdata,0,0);}
        }
    } ;
    backUI.worker.postMessage({oriImgdata:backUI.oriImgdata,neoImgdata:backUI.neoImgdata,disImgdata:disImgdata,p:backUI.stage,mode:'slide'}) ;
}
function RandomAnimation(backUI){
    var disImgdata=ctx.createImageData(canvas.width,canvas.height);
    backUI.stage=0;
    backUI.pause=4;
    backUI.worker=new Worker('js/backPixelsWorker.js');
    backUI.worker.p=backUI;
    backUI.worker.onmessage=function(e)
    {
        var s= e.data.stage+0.1;
        var disImgdata= e.data.disImgdata;
        var backUI=this.p;
        if(s <= 1)
        {
            backUI.disImgdata=disImgdata;
            backUI.stage=s;
        }
        else
        {
            backUI.oriImgdata=backUI.neoImgdata; backUI.disImgdata=undefined;
            backUI.update=function(){};
            backUI.paint=function(ctx){ ctx.putImageData(this.oriImgdata,0,0);}

        }
    } ;
    backUI.worker.postMessage({oriImgdata:backUI.oriImgdata,neoImgdata:backUI.neoImgdata,disImgdata:disImgdata,p:backUI.stage,mode:'random'}) ;
    backUI.update=function()
    {
        if(this.pause>0)this.pause--;
        else
        {
            if(this.stage<=0.5)
                this.pause=4;
            else
                this.pause=2;
            this.worker.postMessage({p:this.stage,mode:'random'});
        }
    };
    backUI.paint=function(ctx){
        if(this.disImgdata)
            ctx.putImageData(this.disImgdata,0,0);
        else
            ctx.putImageData(this.oriImgdata,0,0)   }
}
function SaveImgdata(imgdata,username){
    if(window.indexedDB)
    {
        var request=indexedDB.open('backImgDB');
        request.onsuccess=function(){
            var db=request.result;
            var tx=db.transaction('backData','readwrite');
            var store=tx.objectStore("backData");
            store.delete(username);
            store.put({imgdata:imgdata,username:username});
        };
        request.onupgradeneeded=function(){
            var db=request.result;
            var store=db.createObjectStore("backData",{keyPath:'username'});
            store.put({imgdata:imgdata,username:username});
        }
    }
}
function GetImgdataIndexedBD(){
    if(window.indexedDB)
    {
        var request=indexedDB.open('backImgDB');
        request.onsuccess=function(evt){
            var db=evt.target.result;
            var tx=db.transaction('backData','readonly');
            var store=tx.objectStore("backData");
            var r= store.get('borian');
            r.onsuccess=function()
            {
                if(r.result){
                    var backUI=window.backUIComponents.findByID('backGround');
                    backUI.neoImgdata= r.result.imgdata;
                    SlideAnimation(backUI);
                }}
        };
        request.onupgradeneeded=function(evt){
            var db=evt.target.result;
            var store=db.createObjectStore("backData",{keyPath:'username'});
        }
    }
}
function ImgWorker(oriImgData,neoImgDate,workerURL,updateFun,endFun,animation,duration,isCmdClock){
    this.oriImgdata=oriImgData;
    this.neoImgdata=neoImgDate;
    this.disImgdata=ctx.createImageData(canvas.width,canvas.height);
    this.worker=new Worker(workerURL? workerURL:'js/backPixelsWorker.js');
    this.worker.p=this;
    this.onupdate=updateFun? updateFun:function(worker,disImgdata){return true;};
    this.onend=endFun;
    this.started=false;
    this.animation=animation;
    this.clock=new simpleClock(duration,1,linear,1,0,isCmdClock);
    this.start=function()
    {
        if(!this.started)
        {
            this.started=true;
            this.clock.restart();
            this.worker.postMessage({oriImgdata:this.oriImgdata,neoImgdata:this.neoImgdata,
                disImgdata:this.disImgdata,p:0,mode:this.animation}) ;
        }
    };
    this.restart=function(oriImgdate,neoImgdate,animation)
    {
        if(oriImgdate){
            delete this.oriImgdata;
            delete this.neoImgdata;
            delete this.disImgdata;
            this.oriImgdata=oriImgdate;
            this.neoImgdata=neoImgdate;
            this.disImgdata=window.ctx.createImageData(window.canvas.width,window.canvas.height);
            if(animation)this.animation=animation;
        }
        this.started=true;
        this.clock.restart();
        this.worker.postMessage({oriImgdata:this.oriImgdata,neoImgdata:this.neoImgdata,disImgdata:this.disImgdata,p:0,mode:this.animation}) ;
    };
    this.worker.onmessage=function(e)
    {
        this.p.clock.update();
        this.p.disImgdata= e.data.disImgdata;
        if(this.p.clock.value<1){
            if(this.p.onupdate(this.p, e.data))
                this.postMessage({p:this.p.clock.value,mode:this.p.animation});
        }
        else{
            this.p.onend(this.p, e.data);
            this.p.started=false;
        }
    };

}
function ColorAnimation(backUI){
    var disImgdata=ctx.createImageData(canvas.width,canvas.height);
    backUI.stage=0;
    backUI.pause=9;
    backUI.worker=new Worker('js/backPixelsWorker.js');
    backUI.worker.p=backUI;
    backUI.worker.onmessage=function(e)
    {
        var s= e.data.stage+0.1;
        var disImgdata= e.data.disImgdata;
        var backUI=this.p;
        if(s <= 1)
        {
            backUI.disImgdata=disImgdata;
            backUI.stage=s;
        }
        else
        {
            backUI.oriImgdata=backUI.neoImgdata;  backUI.disImgdata=undefined;
            backUI.update=function(){};
            backUI.paint=function(ctx){ ctx.putImageData(this.oriImgdata,0,0);}
        }
    } ;
    backUI.worker.postMessage({oriImgdata:backUI.oriImgdata,neoImgdata:backUI.neoImgdata,disImgdata:disImgdata,p:backUI.stage,mode:'color'}) ;
    backUI.update=function()
    {
        if(this.pause>0)this.pause--;
        else
        {
            if(this.stage<=0.5)
                this.pause=9;
            else
                this.pause=4;
            this.worker.postMessage({p:this.stage,mode:'color'});
        }
    };
    backUI.paint=function(ctx){
        if(this.disImgdata)
            ctx.putImageData(this.disImgdata,0,0);
        else
            ctx.putImageData(this.oriImgdata,0,0)   }
}
function InitBackUI(img) {
    adjustCanvas(canvas, ctx, img.naturalHeight, img.naturalWidth);
    window.backImg.onload=function()
    {
        var backUI=window.backUIComponents.findByID('backGround');
        ctx.drawImage(window.backImg,0,0,window.canvas.width/window.scale,window.canvas.height/window.scale);
        backUI.neoImgdata=ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
        SaveImgdata(backUI.neoImgdata,'borian');
        ctx.putImageData(backUI.oriImgdata,0,0);
        var disImgdata=ctx.createImageData(window.canvas.width,window.canvas.height);
        RandomAnimation(backUI);
    } ;
    backUIComponents.addCtrl(new backGround(img),'backGround');
    var labBtn = new BtnLab();
    labBtn.clicker.onclick = function (e) {
        var t = tasks.findByID('Lab');
        if (!t) {
            t = new LabTask();
            tasks.push(t);
        }
        window.curTask = t;
        t.begin();
        t.cmdUIComponents.findByID('left').clock.start();
    };
    var msgBtn = new BtnMsg();
    msgBtn.clicker.onclick=function()
    {
        window.behaviorRecorder.load(true);
        var t=window.tasks.findByID('Msg');
        if(!t){
            t=new MsgTask();
            window.tasks.push(t);
        }
        window.curTask=t;
        t.begin();
        for(var i= 0,item=window.curTask.cmdUIComponents[i];item;item=window.curTask.cmdUIComponents[++i])
            if(item.clock) item.clock.start();
    };
    var recBtn = new BtnRecruit();
    backUIComponents.addCtrl(msgBtn, 'msgBtn');
    backUIComponents.addCtrl(labBtn, 'labBtn');
    backUIComponents.addCtrl(recBtn, 'recBtn');
    return true;
}
function changeBack(img)
{
    if(img.naturalWidth==0)
        img=window.backImg;
    if(window.Worker)
    {
        window.ctx.drawImage(img,0,0,window.canvas.width/window.scale,window.canvas.height/window.scale);
        var neoImgdate=window.ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
        var oriImgdate=window.ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
        window.ctx.putImageData(window.backImgData,0,0);
        if( window.curTask.imgWorker)
            window.curTask.imgWorker.restart(oriImgdate,neoImgdate);
        else
        {
            var imgworker=new ImgWorker(oriImgdate,neoImgdate,null,function(iw){
                window.backImgData=iw.disImgdata;
                return true;
            },function(iw){
                window.backImgData=iw.neoImgdata;
            },'color',1,true);
            window.curTask.imgWorker=imgworker;
            imgworker.start();
        }
    }
    else{
        window.ctx.drawImage(img,0,0,window.canvas.width/window.scale,window.canvas.height/window.scale);
        window.backImgData=window.ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
    }

}