/**
 * Created by Administrator on 13-11-7.
 */

function readBackImg(src,img){
    imgDb=dbRequest('Images').whenConstruct(function(db){
        db.createStore('backImg','src',true);
        img.src=src;
        img.data={src:src,data:undefined};
        img.onload=function(){
            var canvas=document.getElementById('canvas');
            var ctx=canvas.getContext('2d');
            ctx.drawImage(this,0,0,canvas.width,canvas.height);
            var dataurl=canvas.toDataURL('image/jpeg',0.5);
            this.data.data=dataurl;
            saveBackImg(this.data);
            this.data=undefined;
        };
    }).readStore('backImg',function(store){
            store.getObject(src,function(e){
                var img2=new Image();
                img2.src= e.data;
                img2.onload=function(){
                    var canvas=document.getElementById('canvas');
                    var ctx=canvas.getContext('2d');
                    ctx.drawImage(this,0,0,canvas.width,canvas.height);
                }
            },function(e,u)
            {
                img.src=u;
                img.data={src:u,data:undefined};
                img.onload=function(){
                    var canvas=document.getElementById('canvas');
                    var ctx=canvas.getContext('2d');
                    ctx.drawImage(this,0,0,canvas.width,canvas.height);
                    var dataurl=canvas.toDataURL('image/jpeg',0.5);
                    this.data.data=dataurl;
                    saveBackImg(this.data);
                    this.data=undefined;
                };
            },src)});
}
function saveBackImg(data)
{
    imgDb.db.writeTransaction('backImg').store.putObjects([data],function(e,u){
            window.localStorage.backImg=u;},function(e){
            window.localStorage.backImg=undefined;},data.src);
}