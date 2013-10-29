/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-30
 * Time: 上午10:51
 * To change this template use File | Settings | File Templates.
 */
var canvas;
var ctx;
var isPress = false;
var activeDrager;
var scale;
var BackSpotters = new Array();
var curTask;
var fps = 30;
var backUIComponents = new Array();
var backStdClock = new standardClock('back');
var cmdStdClock = new standardClock('cmd');
var tasks = new Array();
var cvsTop = 0;
var cvsLeft = 0;
var backImg;
var worker;
function animate() {
    if (window.requestAnimationFrame) {
        rePaint();
        window.requestAnimationFrame(animate, window.canvas);
    }
    else if (window.msRequestAnimationFrame) {
        rePaint();
        window.msRequestAnimationFrame(animate);
    }
    else if (window.webkitRequestAnimationFrame) {
        rePaint();
        window.webkitRequestAnimationFrame(animate, window.canvas);
    }
    else
        setInterval(rePaint, 1000 / fps);
}
function Init() {
    window.canvas.addEventListener('click', onCanvasClick, true);
    window.canvas.addEventListener('mousedown', onCanvasMouseDown, true);
    window.canvas.addEventListener('mouseup', onCanvasMouseUp, true);
    window.canvas.addEventListener('mousemove', onCanvasMouseMove, true);
    window.canvas.addEventListener('mousewheel', onCanvasMouseWheel, true);
    window.canvas.addEventListener('touchstart', onCanvasTouchStart, true);
    window.canvas.addEventListener('touchend', onCanvasTouchEnd, true);
    window.canvas.addEventListener('touchmove', onCanvasTouchMove, true);
    window.canvas.addEventListener('touchcancel', onCanvasTouchEnd, true);
    window.canvas.addEventListener('DOMMouseScroll',onCanvasMouseWheel,false);
    addCanvasDropHandler();
    window.backStdClock.start();
    window.cmdStdClock.start();
    animate();
    /*
     柏子蜀黍吐血力作 E-mail：borian@vip.qq.com
     */
}
function rePaint() {
    cmdStdClock.move();
    if (curTask && backImgData)
        window.ctx.putImageData(backImgData, 0, 0);
    else {
        if (!window.curTask) window.backStdClock.move();
        for (var i = 0, item = window.backUIComponents[i]; item; item = window.backUIComponents[++i]) {
            item.update();
            item.paint(window.ctx);
        }
    }
    try {
        if (window.curTask)
            for (var k = 0, item = curTask.cmdUIComponents[k]; item; item = curTask.cmdUIComponents[++k]) {
                item.update();
                item.paint(window.ctx);
            }
    }
    catch (ex) {
    }
}
function Task(ID) {
    this.ID = ID;
    this.isEnter = false;
    this.clock = null;
    this.onbegin = new customEvent('onBegin');
    this.onexit = new customEvent('onExit');
    this.begin = function () {
        if (curTask == this && !this.isEnter) {
            this.isEnter = true;
            this.clock = cmdStdClock;
            workOnBackImg();
        }
    }
    this.sw = 0;
    this.wait = 0;
    this.decreseWait = function () {
        if (this.wait > 0) {
            this.wait--;
            if (this.wait == 0) {
                if (this.isEnter) {
                    this.onbegin.fire(null, 'onBegin');
                }
                else {
                    this.clock = null;
                    // window.backStdClock.start();
                    window.curTask = null;
                    //  window.cmdStdClock.stop();
                    this.onexit.fire(null, 'onExit');

                }
                this.wait = this.sw;
            }
        }
    }
    this.resetWait = function (num) {
        this.wait = num;
        this.sw = num;
    }
    this.exit = function () {
        if (curTask == this && this.isEnter) {
            this.isEnter = false;
            window.backImgData = undefined;
        }
    }
    this.activeSpotters = new Array();
    this.cmdUIComponents = new Array();
    this.cmdUIComponents.task = this;
    this.cmdUIComponents.addCtrl = function (uic, id) {
        uic.isBackUI = false;
        uic.p = null;
        if (id)
            uic.ID = id;
        this.push(uic);
        registerEvent(uic, false, this.task);
    }
    this.loaded = false;
    return this;
}
function ChannelManager() {
    var isChanneling;
    var beginers = new Array();
    var enders = new Array();
    var tempender = new Array();
    this.addBeginHander = function (fun, id) {
        beginers.push({fire: fun, ID: id});
    }
     this.logIn = function () {
        if (window.channelMng.isLogIn) {
            $get('logStatus').innerHTML = window.channelMng.userName + ',欢迎你!';
            return;
        }
        var userName = $get('userName').value;
        var password = $get('password').value;
        if (userName.length<6) {
            $get('logStatus').innerHTML = '用户名输入不正确...';
            return;
        }
        window.channelMng.beginChannel(true, 'login');
        $get('logStatus').innerHTML = '登陆中,请稍后';
        var intervalID = setInterval(function () {
            var txt = $get('logStatus').innerHTML;
            if (txt.length < 10)
                txt += '.';
            else txt = '登陆中,请稍后';
            $get('logStatus').innerHTML = txt;

        }, 500);
        Sys.Services.AuthenticationService.login(userName, password, true, null, null, function (e, intervalid) {
            if (e) {
                window.currentModalWindow.close();
                window.channelMng.isLogIn = true;
                window.channelMng.userName = $get('userName').value;
                window.channelMng.password = $get('password').value;
                window.channelMng.getProfile();
                window.channelMng.loadRoles();
                clearInterval(intervalid);
            }
            else {
                clearInterval(intervalid);
                $get('logStatus').innerHTML = '学号或者密码错误';
            }
            window.channelMng.endChannel();
        }, function (e, intervalid) {
            window.channelMng.endChannel();
            clearInterval(intervalid);
            $get('logStatus').innerHTML = '请报告管理员<br/>' + e._message;
        }, intervalID);
    }
    this.logOut=function()
    {
        Sys.Services.AuthenticationService.logout();
    }
    this.loadRoles=function()
    {
        if(!this.loadedRoles)
            Sys.Services.RoleService.load(function(e){
                window.channelMng.loadedRoles=true;});
    }
    this.getProfile = function () {
        if (this.getProfiled)return;
        else
            RecruitService.GetReProfile(window.channelMng.userName, window.channelMng.password, function (e) {
                if (e[0] != -1)
                    window.channelMng.subjectNo = e[0];
                if (e[1] != -1)
                    window.channelMng.advertiserNo = e[1];
            });

    };
    this.clearProfile = function () {
        if (this.getProfiled) {
            this.subjectNo = undefined;
            this.advertiserNo = undefined;
            this.userName = undefined;
            this.password = undefined;
        }
    };
    this.checkRole=function(str)
    {
        if(!this.loadedRoles){
            this.loadRoles();
            return false;
        }
        else
            return  Sys.Services.RoleService.isUserInRole(str);
    };
    this.addEndHander = function (fun, id) {
        enders.push({fire: fun, ID: id});
    };
    this.addTempEnder = function (fun) {
        tempender.push(fun);
    }
    var doingID;
    this.busy = function () {
        return isChanneling;
    }
    this.beginChannel = function (throwError, id) {
        if (throwError != false) throwError = true;
        if (isChanneling && throwError)
            throw new Error('busy!');
        else if (!isChanneling) {
            for (var i = 0, item = beginers[i]; item; item = beginers[++i])
                if (!item.ID || item.ID == id) item.fire();
            doingID = id;
            isChanneling = true;
            if (window.curTask) {
                var loading = window.curTask.cmdUIComponents.findByID('loading');
                if (loading)
                    loading.visible = true;
            }
        }
    }
    this.endChannel = function () {
        if (isChanneling) {
            isChanneling = false;
            for (var i = 0, item = enders[i]; item; item = beginers[++i])
                if (!item.ID || item.ID == doingID) item.fire();
            tempender.forEach(function (e, i, a) {
                e();
            });
            delete tempender;
            tempender = new Array();
            doingID = null;
        }
        if (window.curTask) {
            var loading = curTask.cmdUIComponents.findByID('loading');
            if (loading)
                loading.visible = false;
        }
    }
    this._isLogIn = false;
    this.userName = '';
    this.password = '';
    this.subjectNo = undefined;
    this.advertiserNo = undefined;
    this.getProfiled = false;
    return this;
}
ChannelManager.prototype = {
    get isLogIn() {
        return this._isLogIn;
    },
    set isLogIn(val) {
        this._isLogIn = val;
        if (val){ 
        this.getProfile();
        this.loadRoles();
       }
    }
}
var channelMng = new ChannelManager();

function adjustScale(iw,ih){
    var cw=window.canvas.width;
    var ch=window.canvas.height;
    if(cw/ch>iw/ih)
    {
       var sw=iw;
       var sh=ih*cw/ch;
        var sx=0;
        var sy=(ih-sh)/2;

    }
    else
    {
      var sh=ih;
      var sw=iw*ch/cw;
      var sy=0;
      var sx=(iw-sw)/2;
    }
   return {sx:sx,sy:sy,sw:sw,sh:sh};
}
function adjustCanvas(canvas, ctx, ph, pw) {
    var winw = document.documentElement.clientWidth - 8;
    var winh = document.documentElement.clientHeight - 8 * document.documentElement.clientHeight / document.documentElement.clientWidth;
    if (winw / winh > pw / ph) {
        canvas.height = winh;
        canvas.width = pw / ph * winh;
        window.scale = winh / 720;
        canvas.style.left = (document.documentElement.clientWidth - canvas.width) / 2 + 'px';
        canvas.style.top = '0px';
    }
    else {
        canvas.width = winw;
        canvas.height = ph / pw * winw;
        window.scale = winw / 1280;
        canvas.style.top = (document.documentElement.clientHeight - canvas.height) / 2 + 'px';
        canvas.style.left = '0px';
    }
    cvsLeft = canvas.offsetLeft;
    cvsTop = canvas.offsetTop;
    ctx.scale(window.scale, window.scale);
}
function absoluteX(x) {
    return x * window.scale + window.cvsLeft;
}
function absoluteY(y) {
    return  y * window.scale + window.cvsTop;
}
function onCanvasMouseDown(e) {
    var ep = mouseArg(e);
    if (e.button == 0 && !window.isPress) {
        if (window.curTask && window.curTask.isEnter) {
            for (var i = window.curTask.cmdUIComponents.length - 1, item = window.curTask.cmdUIComponents[i]; item; item = window.curTask.cmdUIComponents[--i])
                if (item.drager && item.drager.fire(ctx, ep)) {
                        window.isPress = true;
                        return true;
                    }
        }
        else
            for (var i = window.backUIComponents.length - 1, item = window.backUIComponents[i]; item; item = window.backUIComponents[--i])
                if (item.drager && item.drager.fire(ctx, ep)) {
                        window.isPress = true;
                        return true;
                    }
        return false;
    }
    else if (e.button == 2 && window.isPress) {
        window.activeDrager.isEnter = false;
        window.activeDrager.onDragEnd(ep);
        window.activeDrager = null;
        window.isPress = false;
    }
    return true;
}
function onCanvasMouseUp(e) {
    if (window.isPress) {
        var ce = mouseArg(e);
        window.activeDrager.isEnter = false;
        window.activeDrager.onDragEnd(ce);
        window.activeDrager = null;
        window.isPress = false;
    }
}
function onCanvasClick(e) {
    e = mouseArg(e);
    if (window.channelMng.busy())return;
    window.boxInput.unbind();
    window.ta.unbind();
    if (window.curTask && window.curTask.isEnter) {
        for (var i = window.curTask.cmdUIComponents.length - 1, item = window.curTask.cmdUIComponents[i]; item; item = window.curTask.cmdUIComponents[--i])
            if (item.clicker&&item.clicker.fire(ctx, e)) return true;
    }
    else
        for (var i = window.backUIComponents.length - 1, item = window.backUIComponents[i]; item; item = window.backUIComponents[--i])
            if (item.clicker&&item.clicker.fire(ctx, e)) return true;
    return false;
}
function onCanvasMouseMove(e) {
    var curMouse = mouseArg(e);
    if (window.channelMng.busy()) return;
    if (isPress && activeDrager != null) {
        activeDrager.onDragMove(curMouse);
    }
    else {
        if (window.curTask && window.curTask.isEnter) {
            for (var i = 0, item = window.curTask.activeSpotters[i]; item; item = window.curTask.activeSpotters[++i])
                if (item.fire(ctx, curMouse)) return true;
        }
        else
            for (var i = 0, item = window.BackSpotters[i]; item; item = window.BackSpotters[++i])
                if (item.fire(ctx, curMouse)) return true;
    }
}
function onCanvasMouseWheel(e) {
    e.preventDefault();
    var we = mouseArg(e);
    if (e.wheelDelta)
        we.up = e.wheelDelta > 0;
    else if (e.detail)
        we.up = e.detail < 0;
    if (window.curTask && window.curTask.isEnter) {
        for (var i = window.curTask.cmdUIComponents.length - 1, item = window.curTask.cmdUIComponents[i]; item; item = window.curTask.cmdUIComponents[--i])
            if (item.wheeler &&item.wheeler.fire(ctx, we))return true;
    }
    else
        for (var i = window.backUIComponents.length - 1, item = window.backUIComponents[i]; item; item = window.backUIComponents[--i])
            if (item.wheeler &&item.wheeler.fire(ctx, we)) return true;
}
function onCanvasTouchStart(e) {
    if (e.touches.length == 1) {
        e.preventDefault();
        onCanvasClick(e.touches.item(0));
        if (window.isPress)
            onCanvasMouseUp(e.touches.item(0));
        if (!window.isPress) {
            var ep = mouseArg(e.touches.item(0));
            if (window.curTask && window.curTask.isEnter) {
                for (var i = window.curTask.cmdUIComponents.length - 1, item = window.curTask.cmdUIComponents[i]; item; item = window.curTask.cmdUIComponents[--i])
                    if (item.drager && item.visible && item.enable)
                        if (item.drager.fire(ctx, ep)) {
                            window.isPress = true;
                            return true;
                        }
            }
            else
                for (var i = window.backUIComponents.length - 1, item = window.backUIComponents[i]; item; item = window.backUIComponents[--i])
                    if (item.drager && item.visible && item.enable)
                        if (item.drager.fire(ctx, ep)) {
                            window.isPress = true;
                            return true;
                        }
            return false;
        }
    }
}
function onCanvasTouchEnd(e) {
    e.preventDefault();
    if (window.isPress)
        onCanvasMouseUp(e.changedTouches.item(0));

}
function onCanvasTouchMove(e) {
    e.preventDefault();
    if (window.channelMng.busy()) return;
    if (e.touches.length == 1 && window.isPress && activeDrager != null) {
        var curMouse = mouseArg(e.touches.item(0));
        activeDrager.onDragMove(curMouse);
    }
}
function addCanvasDropHandler()
{
    window.canvas.ondrop=function(e){
        e.preventDefault();
        var data= e.dataTransfer;
        var file=data.files[0];
        window.backImg.src=window.URL.createObjectURL(file);
    };
    window.canvas.ondragover=function(e)
    {
        e.preventDefault();
        return false;
    };
}
function mouseArg(e) {
    var arg = new Object();
    var left = document.body.scrollLeft + document.documentElement.scrollLeft - window.cvsLeft;
    var top = document.body.scrollTop + document.documentElement.scrollTop - window.cvsTop;
    arg.cx = parseInt((e.clientX + left ) / scale);
    arg.cy = parseInt(( e.clientY + top) / scale);
    arg.ox = e.clientX + left;
    arg.oy = e.clientY + top;
    return arg;
}
function workOnBackImg() {
    var data = window.ctx.getImageData(0, 0, window.canvas.width, window.canvas.height);
    window.backImgData = data;
    if (window.Worker) {
        var w = new Worker('js/blurWorker.js');
        window.worker = w;
        w.onmessage = function (e) {
            window.backImgData = e.data;
        }
        w.postMessage(data);
    }
}
Array.prototype.addEventer = function (eventer) {
    if (this.indexOf(eventer) == -1) {
        for (var i = 0; i < this.length; i++) {
            if (eventer.p.z >= this[i].p.z) {
                this.splice(i, 0, eventer);
                return;
            }
        }
        this.push(eventer);
    }

}
Array.prototype.removeEventer = function (eventer) {
    var i = this.indexOf(eventer);
    if (i != -1)
        this.splice(i, 1);
}
backUIComponents.addCtrl = function (uic, id) {
    uic.isBackUI = true;
    uic.p = null;
    if (id)
        uic.ID = id;
    this.push(uic);
    registerEvent(uic, true);
}
Array.prototype.removeCtrl = function (id) {
    var ctrl;
    for (var i = 0; i < this.length; i++)
        if (this[i].ID == id) {
            ctrl = this[i];
            break;
        }
    if (ctrl) {
        removeEvent(ctrl);
        this.splice(i, 1);
        ctrl.dispose();
    }

    return ctrl;

}
function registerEvent(uic, isBack, task) {
    if (isBack) {
        uic.isBackUI = true;
        if (uic.spotter)
            window.BackSpotters.addEventer(uic.spotter);
    }
    else if (isBack == false) {
        this.isBackUI = false;
        uic.task = task;
        if (uic.spotter)
            uic.task.activeSpotters.addEventer(uic.spotter);
    }
    if (uic.controls)
        for (var i = 0; i < uic.controls.length; i++)
            registerEvent(uic.controls[i], isBack, task);

}
function removeEvent(uic) {
    if (uic.isBackUI) {
        if (uic.spotter) {
            window.BackSpotters.removeEventer(uic.spotter);
            uic.spotter = undefined;
        }
    }
    else {
        if (uic.spotter) {
            uic.task.activeSpotters.removeEventer(uic.spotter);
            uic.spotter = undefined;
        }
    }

}
Array.prototype.findByID = function (id) {
    for (var i = 0; i < this.length; i++)
        if (this[i].ID && this[i].ID == id) return this[i];
    return undefined;

}
function FindCtrl(ID, TID) {
    if (!TID)return curTask.cmdUIComponents.findByID(ID);
    else
        for (var i = 0, t = tasks[i]; t; t = tasks[++i])
            if (t.ID == TID)return t.cmdUIComponents.findByID(ID);
    return false;

}