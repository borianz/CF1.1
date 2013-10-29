/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-8
 * Time: 上午11:18
 * To change this template use File | Settings | File Templates.
 */
function roundRectPath(w,h,r,ctx)
{
    ctx.beginPath();
    ctx.moveTo(r,0);
    ctx.lineTo(w-r,0);
    ctx.quadraticCurveTo(w,0,w,r);
    ctx.lineTo(w,h-r);
    ctx.quadraticCurveTo(w,h,w-r,h);
    ctx.lineTo(r,h);
    ctx.quadraticCurveTo(0,h,0,h-r);
    ctx.lineTo(0,r)  ;
    ctx.quadraticCurveTo(0,0,r,0);
    ctx.closePath();
}

function pointTrianglePath(w,h,ctx,expaned)
{
    ctx.beginPath();
    if(expaned)
    {
        ctx.moveTo(0,0);
        ctx.lineTo(w,0);
        ctx.lineTo(w/2,h);
        ctx.lineTo(0,0);
    }
    else
    {
        ctx.moveTo(0,h/2);
        ctx.lineTo(w,h);
        ctx.lineTo(w,0);
        ctx.lineTo(0,h/2);
    }
    ctx.closePath();
}
function starPath(r,ctx){
    ctx.beginPath();
    ctx.moveTo(r,0);
    for (var i=0;i<9;i++)
    {   ctx.rotate(Math.PI/5);
        if(i%2 == 0) ctx.lineTo((r/0.525731)*0.200811,0);
        else ctx.lineTo(r,0);
    }
    ctx.closePath();
}