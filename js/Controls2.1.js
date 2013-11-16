/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-5
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */
function roundRectPath(w, h, r, ctx) {
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(w - r, 0);
    ctx.quadraticCurveTo(w, 0, w, r);
    ctx.lineTo(w, h - r);
    ctx.quadraticCurveTo(w, h, w - r, h);
    ctx.lineTo(r, h);
    ctx.quadraticCurveTo(0, h, 0, h - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
}
function pointTrianglePath(w, h, ctx, expaned) {
    ctx.beginPath();
    if (expaned) {
        ctx.moveTo(0, 0);
        ctx.lineTo(w, 0);
        ctx.lineTo(w / 2, h);
        ctx.lineTo(0, 0);
    }
    else {
        ctx.moveTo(0, h / 2);
        ctx.lineTo(w, h);
        ctx.lineTo(w, 0);
        ctx.lineTo(0, h / 2);
    }
    ctx.closePath();
}
function ellipsePath(w, h, ctx) {
    ctx.beginPath();
    var w2 = w / 2;
    var h2 = h / 2;
    ctx.moveTo(0, h2);
    ctx.quadraticCurveTo(0, h, w2, h);
    ctx.quadraticCurveTo(w, h, w, h2);
    ctx.quadraticCurveTo(w, 0, w2, 0);
    ctx.quadraticCurveTo(0, 0, 0, h2);
    ctx.closePath();
}
function exitRectPath(d, r, ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, d, d);
    ctx.moveTo(r, r);
    ctx.lineTo(d - r, d - r);
    ctx.moveTo(r, d - r);
    ctx.lineTo(d - r, r);
    ctx.closePath();
}
function starPath(r, ctx) {
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 == 0) ctx.lineTo((r / 0.525731) * 0.200811, 0);
        else ctx.lineTo(r, 0);
    }
    ctx.closePath();
}

function UIComponent(x, y, w, h) {
    var borian = 'borian@vip.qq.com';
    this.contactMe = function () {
        alert(borian);
    };
    this.paintFun = undefined;
    this.transFun = function (ctx) {
        ctx.translate(this._x, this._y);
    };
    this.clock = undefined;
    this.update = function () {
        if (!this.enable) return;
        if (this.clock)
            this.clock.update();
    };
    this.enable = true;
    this._visible = true;
    this.paint = function (ctx) {
        if (!this._visible)   return;
        ctx.save();
        if (!this.enable)
            ctx.globalAlpha = 0.4;
        this.transFun(ctx);
        this.paintFun(ctx);
        ctx.restore();
    };
    this._x = x;
    this._y = y;
    this.w = w;
    this.h = h;
    this._z = 0;
    this._p = undefined;
    this.isBackUI = null;
    this.onchangeY = undefined;
    this.onchangeX = undefined;
    this.onchangeVisible=undefined;
    this.dispose = function () {
        if (this.clicker)
            this.clicker.dispose();
        if (this.drager)
            this.drager.dispose();
        if (this.spotter)
            this.spotter.dispose();
        if (this.controls)
            for (var i = 0; i < this.controls.length; i++)
                this.controls[i].dispose();
        if (this.clock)
            this.clock = null;
        delete  this;
    };
    return this;
}
function Article(x, y, w, h, font, flCenter, flfont, fcolor, flcolor, backColor,lineSpace) {
    this.drager = new drager(this);
    this.mouseY = 0;
    this.drager.onDragMove = function (e) {
        var d = this.p.mouseY - e.cy;
        if (Math.abs(d) > this.p.fh) {
            if (d > 0)
                this.p.moveUp();
            else
                this.p.moveDown();
            this.p.mouseY = e.cy;
        }
    };
    this.lines = new Array();
    this.curline = 0;
    this.bc = backColor ? backColor : 'rgba(200,200,200,0.7)';
    this.w = w;
    this.h = h;
    this._x = x;
    this._y = y;
    var ls=lineSpace? lineSpace:1.2;
    this.fc = fcolor ? fcolor : 'black';
    this.flcolor = flcolor ? flcolor : 'black';
    this.font = font ? font : '25px "幼圆"';
    this.fh =parseInt(parseFloat(this.font.match(/\b\d+px/i)[0].replace('px', ''))*ls);
    this.flf = flfont ? flfont : '40px "幼圆"';
    this.flc = flCenter;
    this.flh = parseInt(parseFloat(this.flf.match(/\b\d+px/i)[0].replace('px', ''))*ls);
    this.moveDown = function () {
        if (this.curline > 0) {
            this.curline--;
            return true;
        }
        return false;

    };
    this.moveUp = function () {
        var texh = (this.lines.length - this.curline) * this.fh;
        if (this.flc && this.curline == 0)
            texh += this.flh - this.fh;
        if (texh > this.h) {
            this.curline++;
            return true;
        }
        return false;
    };
    this.setText = function (string) {if(string)this.lines = breakText(string, ctx, this.w, this.font);else this.lines=new Array();};
    this.addText = function (string) {if(string)this.lines=this.lines.concat(breakText(string, window.ctx, this.w, this.font));};
    this.paintFun = function (ctx) {
        ctx.textBaseline = 'hanging';
        ctx.beginPath();
        ctx.rect(0,0,this.w+5,this.h+5);
        ctx.closePath();
        ctx.clip();
        ctx.fillStyle = this.bc;
        ctx.fillRect(0, 0, this.w, this.h + 5);
        ctx.font = this.font;
        ctx.fillStyle = this.fc;
        var curh = 0;
        var maxh = this.h - this.fh;
        if(this.maxLine)
            for (var l = this.curline; curh <= maxh && l < this.maxLine; l++) {
                if (this.flc) {
                    if (l == 0) {
                        ctx.font = this.flf;
                        ctx.fillStyle = this.flcolor;
                        var left = (this.w - ctx.measureText(this.lines[0]).width) / 2;
                        ctx.fillText(this.lines[0], left, 0);
                        ctx.font = this.font;
                        curh = this.flh;
                        ctx.fillStyle = this.fc;
                    }
                    else {
                        if (this.curline == 0)
                            ctx.fillText(this.lines[l], 0, (l - 1) * this.fh + this.flh);
                        else
                            ctx.fillText(this.lines[l], 0, (l - this.curline) * this.fh);
                        curh += this.fh;
                    }

                }
                else {
                    ctx.fillText(this.lines[l], 0, (l - this.curline) * this.fh);
                    curh += this.fh;
                }
            }
        else
            for (var l = this.curline; curh <= maxh && l < this.lines.length; l++) {
            if (this.flc) {
                if (l == 0) {
                    ctx.font = this.flf;
                    ctx.fillStyle = this.flcolor;
                    var left = (this.w - ctx.measureText(this.lines[0]).width) / 2;
                    ctx.fillText(this.lines[0], left, 0);
                    ctx.font = this.font;
                    curh = this.flh;
                    ctx.fillStyle = this.fc;
                }
                else {
                    if (this.curline == 0)
                        ctx.fillText(this.lines[l], 0, (l - 1) * this.fh + this.flh);
                    else
                        ctx.fillText(this.lines[l], 0, (l - this.curline) * this.fh);
                    curh += this.fh;
                }

            }
            else {
                ctx.fillText(this.lines[l], 0, (l - this.curline) * this.fh);
                curh += this.fh;
            }
        }
        ctx.fillRect(this.w - 4, 0, 4, this.h * l / this.lines.length);
    };
    this.setMaxLine=function(val){
        this.maxLine=val;
    };
    this.wheeler = new wheeler(this);
    this.wheeler.fire = function (ctx, e) {
        if (!this.enable) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            if (e.up)
                this.onwheelUp();
            else
                this.onwheelDown();
            return true;
        }
        else
            return false;
    };
    this.wheeler.onwheelDown = function () {
        return this.p.moveUp();
    };
    this.wheeler.onwheelUp = function () {
        return this.p.moveDown();
    };
    this.getText=function(){this.lines.join('');};
    this.getMaxH=function()
    {
        var c=this.lines.length;
        if(c==0)return 0;
        else return this.flh+this.fh*(c-1);
    };
    this.changeLineSapce=function(ls)
    {
        if(ls)
        {
            this.fh =parseInt(parseFloat(this.font.match(/\b\d+px/i)[0].replace('px', ''))*ls);
            this.flh = parseInt(parseFloat(this.flf.match(/\b\d+px/i)[0].replace('px', ''))*ls);
        }
    };
    return this;
}
function Label(x, y, txt, font, fontColor, backColor) {
    this._x = x;
    this._y = y;
    this.txt = txt;
    this.font = font ? font : '25px "幼圆"';
    ctx.save();
    ctx.font = this.font;
    this.w = window.ctx.measureText(this.txt).width;
    ctx.restore();
    this.h = parseInt(this.font.match(/\b\d+px/i)[0].replace('px', ''));
    this.fc = fontColor ? fontColor : 'black';
    this.bc = backColor ? backColor : 'rgba(0,0,0,0)';
    this.paintFun = function (ctx) {
        ctx.textBaseline = 'hanging';
        ctx.font = this.font;
        ctx.fillStyle = this.bc;
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.fillStyle = this.fc;
        ctx.fillText(this.txt, 0, 0);
    };
    this.changeText = function (txt) {
        this.txt = txt;
        ctx.save();
        ctx.font=this.font;
        this.w = window.ctx.measureText(this.txt).width;
        ctx.restore();
    };
    return this;
}
function Button(x, y, w, h, txt, font, backColor, isCmdClock, frameColor, textColor, useSpotter) {
    this.clicker = new clicker(this);
    if (useSpotter) {
        this.spotter = new spotter(this);
        this.spotter.onmouseIn = function () {
            this.p.clock.restart();
        };
        this.spotter.onmouseOut = function () {
            this.p.clock.reset();
            this.p.clock.stop();
        }
    }
    this.bc = backColor ? backColor : 'rgba(110,110,110,0.7)';
    this._x = x;
    this._y = y;
    this.w = w;
    font = font ? font : '25px "幼圆"';
    this.fh = parseInt(font.match(/\b\d+px/i)[0].replace('px', ''));
    this.h = this.fh > h ? this.fh : h;
    this.font = font;
    this.txt = txt;
    this.tc = textColor ? textColor : 'black';
    this.fc = frameColor ? frameColor : 'gray';
    this.clock = new clock(0.7, 0, 1, true, 0, quartEaseInOut, 1.1, 1, -0.1, isCmdClock);
    this.paintFun = function (ctx) {
        ctx.font = this.font;
        ctx.textBaseline = 'hanging';
        var w = ctx.measureText(this.txt).width;
        ctx.fillStyle = this.bc;
        roundRectPath(this.w, this.h, 5, ctx);
        ctx.fill();
        if (this.clock.value > 0 && this.clock.value < 1) {
            var gradient = ctx.createLinearGradient(0, 0, this.w, this.h);
            gradient.addColorStop(0.00, this.fc);
            gradient.addColorStop(this.clock.value, "rgba(249, 249, 249,0.5)");
            gradient.addColorStop(1.00, this.fc);
            var txtg = ctx.createLinearGradient(0, 0, this.w, this.h);
            txtg.addColorStop(0, this.tc);
            txtg.addColorStop(this.clock.value, "rgba(249, 249, 249,0.5)");
            txtg.addColorStop(1, this.tc);
            ctx.strokeStyle = gradient;
            ctx.fillStyle = txtg;
        }
        else
            ctx.fillStyle = this.tc;
        ctx.strokeStyle = this.fc;
        ctx.stroke();
        ctx.fillText(this.txt, w > this.w ? 0 : (this.w - w) / 2, (this.h - this.fh) / 2, this.w);
    };
    this.clock.stop();
    return this;
}
function Switch(x, y, w, h, r, ltxt, rtxt, font, txtColor, backColor, upColor, frameColor) {
    this._x = x;
    this._y = y;
    this.font = font ? font : '25px "幼圆"';
    this.fh = parseInt(this.font.match(/\b\d+px/i)[0].replace('px', ''));
    this.h = h > this.fh ? h : this.fh + 6;
    this.r = r ? r : this.h / 2;
    this.ltxt = ltxt;
    this.rtxt = rtxt;
    this.vtxt = rtxt;
    window.ctx.font = this.font;
    var w1 = window.ctx.measureText(this.ltxt).width;
    var w2 = window.ctx.measureText(this.rtxt).width;
    this.w = w1 > w2 ? w1 * 2 + this.r * 2 : w2 * 2 + this.r * 2;
    if (w > this.w)
        this.w = w;
    this.left = false;
    this.tc = txtColor ? txtColor : 'black';
    this.bc = backColor ? backColor : 'white';
    this.fc = frameColor ? frameColor : 'black';
    this.uc = upColor ? upColor : 'gray';
    this.clicker = new clicker(this);
    this.clicker.onclick = function (e) {
        var p = this.p;
        if ((e.cx - p.absX) > p.w / 2) {
            p.left = true;
            p.vtxt = p.ltxt;
        }
        else {
            p.left = false;
            p.vtxt = p.rtxt;
        }
    };
    this.paintFun = function (ctx) {
        ctx.font = this.font;
        ctx.textBaseline = 'hanging';
        ctx.strokeStyle = this.fc;
        ctx.fillStyle = this.bc;
        ctx.lineWidth = 2;
        roundRectPath(this.w, this.h, this.r, ctx);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = this.tc;
        if (this.left) {
            ctx.fillText(this.ltxt, r - 2, (this.h - this.fh) / 2, this.w / 2);
            ctx.translate(this.w / 2 + 2, 2);
        }
        else {
            ctx.fillText(this.rtxt, this.w / 2 + 2, (this.h - this.fh) / 2, this.w / 2);
            ctx.translate(2, 2);
        }
        roundRectPath(this.w / 2 - 4, this.h - 4, this.r, ctx);
        ctx.fillStyle = this.uc;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.uc;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.stroke();
        ctx.fill();
    };
    return this;
}
function Panel(x, y, h, w, backColor) {
    this.drager = new drager(this);
    this.clicker = new clicker(this);
    this.wheeler = new wheeler(this);
    this._x = x;
    this._y = y;
    this.w = w;
    this.h = h;
    this.bc = backColor ? backColor : 'rgba(250,250,250,0.7)';
    this.baseLine = 0;
    this.maxh = 10;
    this.controls = new Array();
    this.addCtrl = function (ctrl, id) {
        this.controls.push(ctrl);
        ctrl.p = this;
        if (id)
            ctrl.id = ctrl.id ? ctrl.id : id;
        else
            ctrl.id = ctrl.id ? ctrl.id : 'ctrl' + this.controls.length;
        if (this.isBackUI == true)
            registerEvent(ctrl, true);
        else if (this.isBackUI == false)
            registerEvent(ctrl, false, curTask);
        if (ctrl.y + ctrl.h > this.maxh)this.maxh = ctrl.y + ctrl.h + 10;
        //写个panel一直bug....联系我吧 borian@vip.qq.com
    };
    this.findByID = function (id) {
        for (var i = 0; i < this.controls.length; i++)
            if (this.controls[i].id == id) return this.controls[i];
        return null;
    };
    this.removeCtrl = function (id) {
        var index = -1;
        var ctrl;
        for (var i = 0; i < this.controls.length; i++)
            if (this.controls[i].id == id) {
                index = i;
                ctrl = this.controls[i];
                break;
            }
        if (index != -1) {
            this.controls.splice(index, 1);
            removeEvent(ctrl);
            if (this.maxh == ctrl.y + ctrl.h + 10)
                this.maxh -= ctrl.h;
            ctrl.p = null;
            ctrl.dispose();
        }
    };
    this.clearCtrls = function () {
        for (var i = 0; i < this.controls.length; i++) {
            removeEvent(this.controls[i]);
            this.controls[i].dispose();
        }
        this.controls = new Array();
        this.maxh = 0;
    };
    this.paintFun = function (ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, this.w + 3, this.h);
        ctx.closePath();
        ctx.clip();
        ctx.fillStyle = this.bc;
        ctx.fillRect(0, 0, this.w, this.h);
    };
    this.paint = function (ctx) {
        if (!this.visible) return;
        ctx.save();
        this.transFun(ctx);
        this.paintFun(ctx);
        if (!this.enable)
            ctx.globalAlpha = 0.4;
        for (var i = 0, item = this.controls[i]; item; item = this.controls[++i]) {
            if (item.h + item.y > 0 && item.y <= this.h)
                item.paint(ctx);
        }
        ctx.restore();
    };
    this.moveBaseline = function (dy) {
        for (var i = 0; i < this.controls.length; i++)
            this.controls[i].y += dy;
        this.baseLine += dy;
    };
    this.mouseY = 0;
    this.drager.onDragEnd = function (e) {
        this.p.mouseY = 0;
        var ctrls = this.p.controls;
        if (this.p.h >= this.p.maxh) {
            for (var i = 0, item = ctrls[i]; item; item = ctrls[++i])
                item.y -= this.p.baseLine;
            this.p.baseLine = 0;
        }
        else {
            if (this.p.baseLine > 0) {
                for (var i = 0, item = ctrls[i]; item; item = ctrls[++i])
                    item.y -= this.p.baseLine;
                this.p.baseLine = 0;
            }
            else if (this.p.h > (this.p.baseLine + this.p.maxh)) {
                var d = this.p.h - this.p.maxh - this.p.baseLine;
                for (var i = 0, item = ctrls[i]; item; item = ctrls[++i])
                    item.y += d;
                this.p.baseLine += d;
            }
        }
    };
    this.drager.onDragMove = function (e) {
        if (this.p.maxh <= this.p.h)return;
        var dy = e.cy - this.p.mouseY;
        if (dy > 20) dy = 20;
        else if (dy < -20) dy = -20;
        this.p.moveBaseline(dy);
        this.p.mouseY = e.cy;
    };
    this.clicker.fire = function (ctx, e) {
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            var ctrls = this.p.controls;
            for (var i = ctrls.length - 1, item = ctrls[i]; item; item = ctrls[--i])
                if (item.clicker && item.clicker.fire(window.ctx, e)) return true;
            return this.onclick(e);
        }
        else
            return false;
    };
    this.clicker.onclick = function (e) {
        return true;
    }
    this.wheeler.onwheelDown = function () {
        var d=this.p.h-this.p.maxh;
        if (this.p.baseLine >d) {
            if(d<-35)
            this.p.moveBaseline(-35);
            else
            this.p.moveBaseline(-this.p.baseLine);
            return true;
        }
        return false;
    };
    this.wheeler.onwheelUp = function () {
        if (this.p.baseLine < 0) {
            if(this.p.baseLine<-35)
            this.p.moveBaseline(35);
            else
            this.p.moveBaseline(-this.p.baseLine);
            return true;
        }
        return false;
    };
    this.update = function () {
        if (this.clock)
            this.clock.update();
        for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
            item.update();
    };
    return this;
}
function Expand(x, y,w,h, backColor,ix,iy,iw,ih,strokeColor,arrayColor) {
    this._x = x;
    this._y = y;
    this.w = w;
    this.minh=h;
    this.h = h;
    this.ix=ix;
    this.iy=iy;
    this.iw=iw;
    this.ih=ih;
    this.expanded = false;
    this.onheaderClick=undefined;
    this.bc = backColor;
    this.sc=strokeColor;
    this.ac=arrayColor? arrayColor:'black';
    this.paintFun = function (ctx) {
        var h=this.expanded? this.maxh:this.minh;
        ctx.strokeStyle=this.sc;
        ctx.fillStyle = this.bc;
        ctx.fillRect(0,0,this.w,h);
        ctx.strokeRect(0,0,this.w,h);
        ctx.beginPath();
        ctx.rect(0,0,this.w,h);
        ctx.closePath();
        ctx.stroke();
        ctx.clip();
        ctx.lineWidth=2;
        if(!this.expanded && this.maxh>this.minh){
            ctx.translate(this.ix,this.iy);
            pointTrianglePath(this.iw,this.ih,ctx,false);
            ctx.fillStyle=this.ac;
            ctx.shadowBlur=10;
            ctx.shadowColor=this.ac;
            ctx.fill();
            ctx.shadowBlur=0;
            ctx.translate(-this.ix,-this.iy);
        }
        else if(this.expanded){
            ctx.translate(this.ix,this.iy);
            pointTrianglePath(this.iw,this.ih,ctx,true);
            ctx.fillStyle=this.ac;
            ctx.shadowBlur=10;
            ctx.shadowColor=this.ac;
            ctx.fill();
            ctx.shadowBlur=0;
            ctx.translate(-this.ix,-this.iy);
        }
    };
    this.toggle=function(){
        var dh=this.expanded? this.minh-this.maxh:this.maxh-this.minh;
        if(this.p)
        {
            var ctrls=this.p.controls;
            for(var i= 0,item=ctrls[i];item;item=ctrls[++i])
               if(item.y>this.y)item.y+=dh;
            this.p.maxh+=dh;
        }
        this.expanded=!this.expanded;
        this.h=this.expanded? this.maxh:this.minh;
        if(this.onheaderClick)this.onheaderClick();
    };
    this.clicker = new clicker(this);
    this.clicker.pathFun = function (ctx) {
        ctx.beginPath();
        if (this.p.expanded)
            ctx.rect(this.p.absX, this.p.absY, this.p.w, this.p.maxh);
        else
            ctx.rect(this.p.absX, this.p.absY, this.p.w, this.p.h);
        ctx.closePath();

    };
    this.drager = new drager(this);
    this.clicker.fire=function(ctx,e)
    {
        if (!(this.p.visible && this.p.enable && this.enable)) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            if((!this.p.expanded && this.p.maxh>this.p.minh)|| this.p.expanded){
                var ox= e.cx-this.p.absX-this.p.ix;
                var oy= e.cy-this.p.absY-this.p.iy;
                if(ox>0&& oy>0 && ox<this.p.iw && oy<this.p.ih)
                {
                    this.p.toggle();
                    return true;
                }
            }
            var ctrls = this.p.controls;
            for (var i = ctrls.length - 1, item = ctrls[i]; item; item = ctrls[--i])
                if (item.clicker && item.clicker.fire(window.ctx, e)) return true;
            return this.onclick(e);
        }
        else
            return false;
    };
    this.controls = new Array();
    return this;
}
function Drop(x, y, w, headerText, headerFont, headerBack, headerColor, backColor, isCmdClock) {
    this._x = x;
    this._y = y;
    this.w = w;
    this.hf = headerFont ? headerFont : '30px "幼圆"';
    this.hfh = parseInt(this.hf.match(/\b\d+px/i)[0].replace('px', ''));
    this.h = this.hfh * 1.3;
    this.offsetY = this.h;
    this.expanded = false;
    this.offsetX = 5;
    this.ht = headerText;
    this.hb = headerBack ? headerBack : 'rgba(250,250,250,0.7)';
    this.hc = headerColor ? headerColor : 'black';
    this.bc = backColor ? backColor : 'rgba(250,250,250,0.7)';
    this.clicker = new clicker(this);
    this.onheaderClick=undefined;
    this.clock = new clock(0.7, 0, 1, true, 1, bounceEaseOut, 1, 1, 0, isCmdClock);
    this.clicker.pathFun = function (ctx) {
        ctx.beginPath();
        if (this.p.expanded)
            ctx.rect(this.p.absX, this.p.absY, this.p.w, this.p.h);
        else
            ctx.rect(this.p.absX, this.p.absY, this.p.w, this.p.offsetY);
        ctx.closePath();

    };
    this.clicker.onclick = function (e) {
        var p = this.p;
        if (p.expanded)
            if (e.cy > p.absY + p.offsetY) {
                for (var i = p.controls.length - 1, item = p.controls[i]; item; item = p.controls[--i])
                    if (item.clicker)
                        if (item.clicker.fire(ctx, e))break;
                return true;
            }
            else {
                p.expanded = false;
                p.clock.reverse();
                if(p.onheaderClick)p.onheaderClick();
            }
        else {
            p.expanded = true;
            p.clock.restart();
            if(p.onheaderClick)p.onheaderClick();
        }
        return true;
    };
    this.addCtrl = function (ctrl, id) {
        this.controls.push(ctrl);
        ctrl.p = this;
        ctrl.y = this.h;
        ctrl.x += this.offsetX;
        if (id)
            ctrl.id = ctrl.id ? ctrl.id : id;
        else
            ctrl.id = ctrl.id ? ctrl.id : 'ctrl' + this.controls.length;
        if (this.isBackUI == true) {
            registerEvent(ctrl, true);
        }
        else if (this.isBackUI == false) {
            registerEvent(ctrl, false, curTask);
        }
        this.h = ctrl.y + ctrl.h + 10;
    };
    this.removeCtrl = function (id) {
        var index = -1;
        var ctrl;
        for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
            if (item.id == id) {
                index = i;
                ctrl = item;
                break;
            }
        if (index != -1) {
            for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
                if (item.y > ctrl.y)
                    item.y -= ctrl.h;
            this.controls.splice(index, 1);
            this.h -= ctrl.h;
            removeEvent(ctrl);
            ctrl.p = null;
            // ctrl.dispose();
        }
        return ctrl;
    };
    this.clearCtrls = function () {
        for (var i = 0, item = this.controls[i]; item; item = this.controls[++i]) {
            removeEvent(item);
        }
        this.controls = new Array();
        this.h = this.offsetY;
    };
    this.paintFun = function (ctx) {
        ctx.fillStyle = this.hb;
        ctx.fillRect(0, 0, this.w, this.offsetY);
        ctx.fillStyle = this.hc;
        ctx.font = this.hf;
        ctx.textBaseline = 'hanging';
        ctx.fillText(this.ht, 3, (this.offsetY - this.hfh) / 5, this.w - this.offsetY);
        var d = this.offsetY * 0.5;
        ctx.translate(this.w - d, d / 2);
        pointTrianglePath(d, d, ctx, this.expanded);
        ctx.fill();
        ctx.translate(d - this.w, -d / 2);
        ctx.beginPath();
        ctx.rect(this.offsetX, this.offsetY, this.w - this.offsetX, (this.h - this.offsetY) * this.clock.value);
        ctx.closePath();
        ctx.clip();
        ctx.fillStyle = this.bc;
        ctx.fillRect(this.offsetX, this.offsetY, this.w - this.offsetX, this.h - this.offsetY);
    };
    this.update = function (ctx) {
        var oh = this.clock.value;
        this.clock.update();
        var dh = (this.h - this.offsetY) * (this.clock.value - oh);
        if (dh != 0) {
            if (this.p && this.p.controls) {
                this.p.maxh += dh;
                for (var i = 0, item = this.p.controls[i]; item; item = this.p.controls[++i])
                    if (item.y > this.y)
                        item.y += dh;
            }
        }
        for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
            item.update();
    };
    this.controls = new Array();
    return this;
}
function TextBox(x, y, w, font, fontcolor, backcolor, validateType, wtrmkColor, wtrmktxt) {
    this._x = x;
    this._y = y;
    this.font = font ? font : '25px "幼圆"';
    this.h = parseInt(this.font.match(/\b\d+px/i)[0].replace('px', ''));
    this.wmc = wtrmkColor ? wtrmkColor : 'gray';
    switch (validateType) {
        case 0:
            this.waterMark = '请填写数字';
            this.regExp = /^-?\d+(\.\d+)?$/;
            break;
        case 1:
            this.waterMark = '请填写整数';
            this.regExp = /^-?\d+$/;
            break;
        default :
            this.waterMark = '请填认真填写';
            this.regExp = /^[\S ]+$/;
            break
    }
    if (wtrmktxt)
        this.waterMark = wtrmktxt;
    this.txt = '';
    this.vtxt = null;
    if (w)
        this.w = w;
    else {
        ctx.font = this.font;
        var ww = ctx.measureText(this.waterMark).width;
        this.w = 180 > ww ? 180 : ww;
    }
    this.fc = fontcolor ? fontcolor : 'black';
    this.bc = backcolor ? backcolor : 'white';
    this.validate = function (txt) {
        if (txt.match(this.regExp)) {
            this.vtxt = txt;
            return true;
        }
        else
            this.vtxt = null;
        return false;
    };
    this.update = function () {
        if (this.input) {
            this.txt = this.input.value;
            this.input.resetPosition(this);
        }
    };
    this.paintFun = function (ctx) {
        if (this.input && this.input.isShow()) return;
        ctx.textBaseline = 'hanging';
        ctx.strokeStyle = 'black';
        ctx.globalAlpha = 0.7;
        ctx.strokeRect(-2, -2, this.w + 4, this.h + 4);
        ctx.font = this.font;
        ctx.fillStyle = this.bc;
        ctx.fillRect(-2, -2, this.w + 4, this.h + 4);
        if (!this.vtxt) {
            ctx.fillStyle = this.wmc;
            ctx.font = 'italic ' + this.font;
            ctx.fillText(this.waterMark, 0, 4 / 25 * this.h, this.w);
        }
        else {
            ctx.fillStyle = this.fc;
            ctx.fillText(this.vtxt, 0, 0, this.w);
        }
        ctx.globalAlpha = 1;
    };
    this.clicker = new clicker(this);
    this.clicker.fire = function (ctx, e) {
        if (!this.p.enable || !this.enable)
            return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            if (!this.p.input) {
                window.boxInput.bind(this.p);
                this.p.input.reveal();
            }
            return  true
        }
        else
            return false;}
}
function Select(x, y, w, headerFont, items, backColor, headerColor, wtrmkTxt, frameColr) {
    this._x = x;
    this._y = y;
    this.w = w;
    this.font = headerFont;
    this.h = parseInt(this.font.match(/\b\d+px/i)[0].replace('px', '')) + 5;
    this.bc = backColor ? backColor : 'ghostwhite';
    this.hc = headerColor ? headerColor : 'black';
    this.waterMark = wtrmkTxt ? wtrmkTxt : '请选择';
    this.fc = frameColr ? frameColr : 'gray';
    this.selectedIndex = -1;
    this.onSelected = function (num) {
    };
    this.items = items ? items : new Array();
    this.selectedItem = function () {
        return this.selectedIndex == -1 ? null : this.items[this.selectedIndex];
    };
    this.expanded = false;
    this.clicker = new clicker(this);
    this.paintFun = function (ctx) {
        roundRectPath(this.w, this.h, 5, ctx);
        ctx.fillStyle = this.bc;
        ctx.strokeStyle = this.fc;
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = this.hc;
        var d = this.h / 4;
        ctx.textBaseline = 'hanging';
        ctx.font = this.font;
        ctx.fillText(this.selectedIndex == -1 ? this.waterMark : this.selectedItem(), 2, 2, this.w - d * 2);
        ctx.translate(this.w - d * 2 - 2, d);
        pointTrianglePath(d * 2, d * 2, ctx, this.expanded);
        ctx.fillStyle = this.fc;
        ctx.fill();
    };
    this.concealSheet = function () {
        var array;
        if (!this.p)
            if (window.curTask)
                array = window.curTask.cmdUIComponents;
            else
                array = window.backUIComponents;
        else
            array = this.p.controls;
        array.splice(array.indexOf(this.sheet), 1);
        this.sheet.visible = false;
        this.expanded = false;
    };
    this.revealSheet = function () {
        if (!this.p)
            if (window.curTask)
                window.curTask.cmdUIComponents.addCtrl(this.sheet, this.ID + 'sheet');
            else
                window.backUIComponents.addCtrl(this.sheet, this.ID + 'sheet');
        else
            this.p.addCtrl(this.sheet, this.ID + 'sheet');
        this.sheet.visible = true;
        this.expanded = true;
    };
    this.clicker.onclick = function () {
        if (this.p.expanded)
            this.p.concealSheet();
        else
            this.p.revealSheet();
    };
    this.sheet = new SelectSheet(this);
}
function TextBlock(x, y, w, h, font, fontcolor, backcolor) {
    this._x = x;
    this._y = y;
    this.w = w;
    this.h = h;
    this.article = new Article(x, y, w, h, font, false, font, fontcolor, fontcolor, backcolor);
    this.textarea = document.createElement('textarea');
    this.textarea.style.position = 'absolute';
    this.textarea.style.width =parseInt(this.w * scale) + 'px';
    this.textarea.style.height =parseInt( this.h * scale) + 'px';
    this.textarea.style.color = fontcolor;
    this.textarea.style.font = font;
    this.textarea.style.zIndex=9;
    this.resetPosition = function () {
        var ts = this.textarea;
        this.article.x = this.x;
        this.article.y = this.y;
        if (this.y < 0 || (this.p && this.y + this.h > this.p.h))
            ts.style.display='none';
        else {
            ts.style.display='inline';
            ts.style.width = parseInt(this.w * scale) + 'px';
            ts.style.height = parseInt( this.h * scale) + 'px';
            ts.style.top =parseInt( absoluteY(this.absY)) + 'px';
            ts.style.left =parseInt(absoluteX(this.absX))+ 'px';
        }
    };
    this._show = false;
    this.paint = function (ctx) {
        if (!this._show)this.article.paint(ctx);
    };
    this.onchangeY = function (y) {
        this.resetPosition();
    };
    this.onchangeX = function (x) {
        this.resetPosition();
    };
    this.show = function () {
        if(!this.enable ||this._show) return;
        if(this.y<0 ||(this.p && this.p.h<this.y+this.h))return;
        this._show = true;
        this.resetPosition();
        window.ta.textblock = this;
        document.body.appendChild(this.textarea);
    };
    this.conceal = function () {
        if(!this._show)return;
        this._show = false;
        this.article.setText(this.textarea.value);
        document.body.removeChild(this.textarea);
        window.ta.textblock = null;
    };
    this.clicker = new clicker(this);
    this.clicker.onclick = function () {
        this.p.show();
    };
    this.setText=function(string){
        if(!string)string='';
        this.article.setText(string);
        this.textarea.value=string;
    };
    this.getText=function(){return this.textarea.value;};
    return this;
}
function SelectSheet(select) {
    this.select = select;
    this.select.sheet = this;
    this.clicker = new clicker(this);
    this.sh = select.h - 5;
    this.h = this.sh * select.items.length;
    this.w = select.w;
    this.x = select.x;
    this.y = select.y + select.h;
    this.clicker = new clicker(this);
    this.clicker.onclick = function (e) {
        var d = e.cy - this.p.absY;
        this.p.select.selectedIndex = Math.floor(d / this.p.sh);
        this.p.select.onSelected(Math.floor(d / this.p.sh));
        this.p.select.concealSheet();
    };
    this.paintFun = function (ctx) {
        ctx.fillStyle = this.select.bc;
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.fillStyle = this.select.hc;
        ctx.font = this.select.font;
        ctx.textBaseline = 'hanging';
        for (var i = 0; i < this.select.items.length; i++)
            ctx.fillText(this.select.items[i], 2, i * this.sh, this.select.w);
    };
    return this;
}
function BoxedInput() {
    var input = document.createElement('input');
    input.autofocus = "true";
    var show = false;
    input.zIndex = 3;
    input.style.position = 'absolute';
    this.setValue = function (val) {
        input.value = val;
    };
    this.getValue = function () {
        return input.value;
    };
    this.bind = function (textbox) {
        if(textbox &&!textbox.enable)return;
        if (this.textbox)
            this.unbind();
        this.textbox = textbox;
        textbox.input = this;
        this.resetPosition(textbox);
        input.value = textbox.vtxt ? textbox.vtxt : '';
        input.style.font = textbox.font.replace(textbox.h, parseInt(textbox.h * scale * 0.8));
        input.style.color = textbox.fc;
    };
    this.unbind = function () {
        if (this.textbox) {
            var txt = this.textbox;
            txt.validate(input.value);
            txt.input = undefined;
            this.textbox = undefined;
            this.conceal();
        }};
    this.resetPosition = function (textbox) {
        if (textbox.y < 0 || (textbox.p && textbox.y + textbox.h > textbox.p.h))
            this.conceal();
        else {
            input.style.width = textbox.w * scale + 'px';
            input.style.height = textbox.h * scale + 'px';
            input.style.top = absoluteY(textbox.absY) + 'px';
            input.style.left = absoluteX(textbox.absX) + 'px';
        }
    };
    this.conceal = function () {
        if (show) {
            document.body.removeChild(input);
            show = false;
        }
    };
    this.reveal = function () {
        if (!show) {
            document.body.appendChild(input);
            show = true;
        }
    };
    this.isShow = function () {
        return show;
    }
}
var ta = {
    textblock: undefined,
    unbind: function () {
        if (this.textblock)this.textblock.conceal();
    }
};

var boxInput = new BoxedInput();
UIComponent.prototype = {
    get absX() {
        return this._p ? this._x + this.px : this._x;
    },
    get absY() {
        return this._p ? this._y + this.py : this._y;
    },
    set p(val) {
        this._p = val;
        if (!val) {
            this._z = 0;
        } else {
            this._z = val.z + 1;
            this.px = val.absX;
            this.py = val.absY;
        }
        adjustChildern(this);
    },
    get p() {
        return this._p;
    },
    set y(val) {
        if(this.onchangeY){
            var ovalue=this._y;
            this._y=val;
            this.onchangeY(ovalue,val);
        }
        else
            this._y = val;
        adjustChildern(this);
    },
    set x(val) {
        if(this.onchangeX)
        {
            var ox=this._x;
            this._x=val;
            this.onchangeX(ox,val);
        }
        else
            this._x = val;
        adjustChildern(this);
    },
    get x() {
        return this._x;
    },
    get y() {
        return this._y;
    },
    get z() {
        return this._z;
    },
    get visible(){
        return this._visible;},
    set visible(val){
        if(val!=this._visible){this._visible=val;if(this.onchangeVisible)this.onchangeVisible();}}

};
BoxedInput.prototype = {
    set value(val) {
        this.setValue(val);
    },
    get value() {
        return this.getValue();
    }
}

function eventer() {
    this.p;
    this.enable = true;
    this.pathFun = function (ctx) {
        ctx.beginPath();
        ctx.rect(this.p.absX, this.p.absY, this.p.w, this.p.h);
        ctx.closePath();
    }
}
function wheeler(parent) {
    this.p = parent;
    this.onwheelUp = function () {
        return true;
    }
    this.onwheelDown = function () {
        return true;
    }
    this.fire = function (ctx, e) {
        if (!(this.p.visible && this.p.enable && this.enable)) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy))
            if (this.p.controls) {
                for (var i = 0, item = this.p.controls[i]; item; item = this.p.controls[++i])
                    if (item.wheeler && item.wheeler.fire(ctx, e))  return true;
                if (e.up)
                    return this.onwheelUp();
                else
                    return this.onwheelDown();
            }
            else if (e.up)
                return this.onwheelUp();
            else
                return this.onwheelDown();
        else
            return false;
    }

}
function clicker(parent) {
    this.p = parent;
    this.onclick = function (e) {
        return true
    };
    this.fire = function (ctx, e) {
        if (!(this.p.visible && this.p.enable && this.enable)) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            this.onclick(e);
            return true;
        }
        else
            return false;
    }
    this.dispose = function () {
        if (this.p)
            this.p.clicker = null;
        this.p = null;
    }

    return this;
}
function spotter(parent) {
    this.p = parent;
    this.mouseIn = false;
    this.onmouseIn = function () {
    };
    this.onmouseOut = function () {
    };
    this.fire = function (ctx, e) {
        if (!(this.p.enable && this.enable && this.p.visible)) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            if (!this.mouseIn) {
                this.mouseIn = true;
                this.onmouseIn();
                return true;
            }
            else return false;
        }
        else {
            if (this.mouseIn) {
                this.mouseIn = false;
                this.onmouseOut();
                return true;
            }
            else return false;
        }
        return this;
    };
    this.dispose = function () {
        removeEvent(this.p);
        delete this;
    }
    return this;
}
//panel中的panel的drager会有问题,删掉里面的drager
function drager(parent) {
    this.p = parent;
    this.isEnter = false;
    this.onDragMove = function (e) {
    };
    this.onDragEnd = function (e) {
    };
    this.fire = function (ctx, e) {
        if (!(this.p.visible && this.p.enable && this.enable)) return false;
        this.pathFun(ctx);
        if (ctx.isPointInPath(e.ox, e.oy)) {
            this.isEnter = true;
            window.activeDrager = this;
            if (this.p.controls) {
                var ctrls = this.p.controls;
                for (var i = 0; i < ctrls.length; i++)
                    if (ctrls[i].drager && ctrls[i].drager.fire(ctx, e)) {
                        this.isEnter = false;
                        break;
                    }

            }
            return true;
        }
        else return false;
    };
    this.dispose = function () {
        this.p.drager = undefined;
        this.p = null;
    };
    return this;
}
drager.prototype = new eventer();
clicker.prototype = new eventer();
spotter.prototype = new eventer();
wheeler.prototype = new eventer();
Panel.prototype = new UIComponent();
Button.prototype = new UIComponent();
Label.prototype = new UIComponent();
Article.prototype = new UIComponent();
TextBox.prototype = new UIComponent();
Expand.prototype = new Panel();
Drop.prototype = new Panel();
Select.prototype = new UIComponent();
Switch.prototype = new UIComponent();
SelectSheet.prototype = new UIComponent();
TextBlock.prototype = new UIComponent();
function adjustChildern(ctrl) {
    if (ctrl.controls) {
        var controls = ctrl.controls;
        for (var i = 0, item = controls[i]; item; item = controls[++i]) {
            item.px = ctrl.absX;
            item.py = ctrl.absY;
            item._z = ctrl.z + 1;
            if (item.controls)
                adjustChildern(item);
        }
    }
}
function breakText(text, ctx, maxw, font) {
    var lines = new Array();
    var i = 0;
    var curw = 0;
    var line = '';
    text = text ? text : '';
    ctx.font = font;
    while (i < text.length) {
        while (curw < maxw) {
            if (text[i] == '\n') {
                i++;
                break;
            }
            else {
                line += text[i];
                curw = ctx.measureText(line).width;
                if (curw >= maxw) {
                    line = line.slice(0, line.length - 1);
                    break;
                }
                else
                    i++;
            }
            if (i >= text.length)break;
        }
        lines.push(line);
        line = '';
        curw = 0;
    }
    return lines;
}