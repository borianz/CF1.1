/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-26
 * Time: 上午10:47
 * To change this template use File | Settings | File Templates.
 */
var oriImgdata;
var neoImgdata;
var disImgdata;
var appendArray;

onmessage=function(e){
    if( e.data.oriImgdata){
        oriImgdata= e.data.oriImgdata;
        neoImgdata= e.data.neoImgdata;
        disImgdata= e.data.disImgdata;
        appendArray=new Uint8Array(oriImgdata.data.length);
    }
    var p = e.data.p;
    var mode= e.data.mode;
    switch (mode){
        case 'fade':
            FadeEffect(oriImgdata.data,neoImgdata.data,disImgdata.data,p);
            break;
        case 'random':
            if( e.data.oriImgdata)
            {
               CopyArray(oriImgdata.data,disImgdata.data);
            }
            RandomEffect(oriImgdata.data,neoImgdata.data,disImgdata.data,p);
            break;
        case 'black':
            BlackEffect(neoImgdata.data,disImgdata.data);
            p=1;
            break;
        case 'slide':
            SlideEffect(oriImgdata.data,neoImgdata.data,disImgdata.data,p, e.data.recNum? e.data.recNum:10,oriImgdata.width,oriImgdata.height);
            break;
        case 'color':
            if(p==0)
                BlackOriAndDis();
            else
               FadeEffect(oriImgdata.data,neoImgdata.data,disImgdata.data,p);
            break;
        case 'colorSlide':
            ColorSlide(oriImgdata.data,neoImgdata.data,disImgdata.data,p,oriImgdata.width,oriImgdata.height);
            break;
       default :
            CopyArray(neoImgdata.data,disImgdata.data);
            p=1;
        break;
    }
    postMessage({disImgdata:disImgdata,stage:p,mode:mode});
};
function CopyArray (srcArray,desArray)
{
    var len=srcArray.length;
    for(var i=0;i<len;i++)
        desArray[i]=srcArray[i];
}
function FadeEffect(oriArray,neoArray,disArray,p)
{
   var steps=oriArray.length;
   for(var i=0;i<steps;i+=4)
   {
       disArray[i]=oriArray[i]+Math.floor((neoArray[i]-oriArray[i])*p);
       disArray[i+1]=oriArray[i+1]+Math.floor((neoArray[i+1]-oriArray[i+1])*p);
       disArray[i+2]=oriArray[i+2]+Math.floor((neoArray[i+2]-oriArray[i+2])*p);
       disArray[i+3]=neoArray[i+3];
   }
}
function ColorSlide(oriArray,neoArray,disArray,p,width,height)
{
    if(p==0){
        var avg;  var len=neoArray.length;
        for( var pos=0;pos<len;pos+=4){
            avg=Math.floor((neoArray[pos]+neoArray[pos+1]+neoArray[pos+2])/3);
            if(avg>255) avg=255;
            disArray[pos]=oriArray[pos]=avg;
            disArray[pos+1]=oriArray[pos+1]=avg;
            disArray[pos+2]=oriArray[pos+2]=avg;
            disArray[pos+3]=oriArray[pos+3]=255;
        }
    }else{
        var py=parseInt(height*p);
        var pos=(py*width)*4+1;
        for(var i=0;i<pos;i++)
            disArray[i]=neoArray[i];
        for(var i=pos;i<disArray.length;i++)
            disArray[i]=oriArray[i];
    }

}
function RandomEffect (oriArray,neoArray,disArray,p)
{
    var steps=oriArray.length;
    var r;
    for(var i=0;i<steps;i+=4)
    {
        r=Math.random();
        if(!appendArray[i] && r<p){
            disArray[i]=neoArray[i];
            disArray[i+1]=neoArray[i+1];
            disArray[i+2]=neoArray[i+2];
            disArray[i+3]=neoArray[i+3];
            appendArray[i]=true;
        }
    }
}
function BlackEffect(neoArray,disArray)
{
     var avg;  var len=neoArray.length;
     for( var pos=0;pos<len;pos+=4){
         avg=Math.floor((neoArray[pos]+neoArray[pos+1]+neoArray[pos+2])/3);
         if(avg>255) avg=255;
         disArray[pos]=avg;
         disArray[pos+1]=avg;
         disArray[pos+2]=avg;
         disArray[pos+3]=255;
     }
}
function BlackOriAndDis()
{
    var disArray=disImgdata.data;
    var neoArray=neoImgdata.data;
    var oriArray=oriImgdata.data;
    var avg;  var len=neoArray.length;
    for( var pos=0;pos<len;pos+=4){
        avg=Math.floor((neoArray[pos]+neoArray[pos+1]+neoArray[pos+2])/3);
        if(avg>255) avg=255;
        disArray[pos]=oriArray[pos]=avg;
        disArray[pos+1]=oriArray[pos+1]=avg;
        disArray[pos+2]=oriArray[pos+2]=avg;
        disArray[pos+3]=oriArray[pos+3]=255;
    }
}
function SlideEffectWithSlop(oriArray,neoArray,disArray,p,recNum,width,height)
{
    var dw=width/recNum;
    var len=oriArray.length;
    var nx,npos=0;
    var dx=0; var dy=0;var iw=dw;
    var evenH=Math.floor(height*p);
    var oddH=height-evenH;
    var even=true;var neo=true;
    npos=(oddH*width)*4;
    for(var i=0;i<len;i+=4)
    {
        if(neo)
        {
            disArray[i]=neoArray[npos];
            disArray[i+1]=neoArray[npos+1];
            disArray[i+2]=neoArray[npos+2];
            disArray[i+3]=neoArray[npos+3];
        }
        else
        {
            disArray[i]=oriArray[i];
            disArray[i+1]=oriArray[i+1];
            disArray[i+2]=oriArray[i+2];
            disArray[i+3]=oriArray[i+3];
        }
        if(++dx>width)
        {
            dx=0;iw=dw;
            dy++;
            even=true;
            if(dy>evenH){
                neo=false;
                npos=(dy-oddH)*width*4;
            }
            else
            {
               neo=true;
               npos=(dy+oddH)*width*4;
            }
        }
        else if(dx>iw)
        {
           iw+=dw;
           even=!even;
           neo=even? dy<evenH:dy>oddH;
        }
        npos+=4;
    }
}
function SlideEffect(oriArray,neoArray,disArray,p,recNum,width,height)
{
    var dw=width/recNum; var dposplus=width*4;
    var dx,dy,ny,dpos,npos,limtdy=0;
    dx=0;
    for(var di=0;di<recNum;di++)
    {
        if(di%2==0)
        {
            limtdy=height*p;
            dpos=npos =0;
            for(var iw=0;iw<dw;iw++){
                dy=0;ny=Math.floor(height*(1-p));
                dpos=(dy*width+dx)*4;
                npos=(ny*width +dx)*4;
              while(dy<=limtdy){
                  disArray[dpos]=neoArray[npos];
                  disArray[dpos+1]=neoArray[npos+1];
                  disArray[dpos+2]=neoArray[npos+2];
                  disArray[dpos+3]=255;
                  dy++;ny++;
                  npos+=dposplus;
                  dpos+=dposplus;
              }
                while(dy<height){
                  disArray[dpos]=oriArray[dpos];
                  disArray[dpos+1]=oriArray[dpos+1];
                  disArray[dpos+2]=oriArray[dpos+2];
                  disArray[dpos+3]=255;
                  dpos+=dposplus;
                  dy++;
              }
              dx++;
          }
        }
        else
        {
            limtdy=height*(1-p);
            for(var iw=0;iw<dw;iw++){
                dy=0;ny=0;
                dpos=npos=dx*4;
                while(dy< limtdy)
                {
                    disArray[dpos]=oriArray[dpos];
                    disArray[dpos+1]=oriArray[dpos+1];
                    disArray[dpos+2]=oriArray[dpos+2];
                    disArray[dpos+3]=255;
                    dpos+=dposplus;
                    dy++;
                }
                while(dy<height){
                    disArray[dpos]=neoArray[npos];
                    disArray[dpos+1]=neoArray[npos+1];
                    disArray[dpos+2]=neoArray[npos+2];
                    disArray[dpos+3]=255;
                    dy++;ny++;
                    dpos+=dposplus;
                    npos+=dposplus;
                }
                dx++;
            }
        }
    }

}