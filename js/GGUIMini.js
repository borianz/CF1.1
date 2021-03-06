/**
 * Created by Administrator on 13-11-8.
 */
//backpart
{
    function BtnLab() {
        var ui = new UIComponent(874,236,180,171);
        ui.spotter = new spotter(ui);
        ui.clicker = new clicker(ui);
        ui.paintFun = function (ctx) {
            ctx.save();
            if(this.spotter.mouseIn) {
                ctx.fillStyle='rgba(110,110,110,0.5)'
                ctx.fillRect(0,0,this.w,this.h);
            }
            ctx.fillStyle='white';
            ctx.beginPath();
            ctx.moveTo(131.3, 83.0);
            ctx.bezierCurveTo(132.4, 81.9, 132.4, 80.3, 131.3, 79.2);
            ctx.lineTo(103.8, 52.8);
            ctx.bezierCurveTo(102.8, 51.8, 100.9, 51.8, 99.9, 52.8);
            ctx.lineTo(92.1, 60.3);
            ctx.bezierCurveTo(89.2, 63.1, 88.8, 67.4, 91.2, 70.6);
            ctx.lineTo(56.1, 104.2);
            ctx.bezierCurveTo(50.2, 110.0, 50.2, 119.3, 56.1, 125.0);
            ctx.bezierCurveTo(59.0, 127.7, 62.8, 129.3, 66.9, 129.3);
            ctx.lineTo(66.9, 129.3);
            ctx.bezierCurveTo(71.0, 129.3, 74.8, 127.7, 77.7, 125.0);
            ctx.lineTo(112.8, 91.3);
            ctx.bezierCurveTo(114.2, 92.3, 115.9, 92.8, 117.6, 92.8);
            ctx.bezierCurveTo(119.8, 92.8, 121.9, 92.0, 123.5, 90.5);
            ctx.lineTo(131.3, 83.0);
            ctx.closePath();
            ctx.moveTo(73.8, 121.2);
            ctx.bezierCurveTo(72.0, 123.0, 69.5, 123.9, 66.9, 123.9);
            ctx.bezierCurveTo(64.3, 123.9, 61.9, 123.0, 60.1, 121.2);
            ctx.bezierCurveTo(56.3, 117.6, 56.3, 111.7, 60.1, 108.0);
            ctx.lineTo(75.4, 93.3);
            ctx.lineTo(102.9, 93.3);
            ctx.lineTo(73.8, 121.2);
            ctx.closePath();
            ctx.moveTo(116.0, 87.0);
            ctx.lineTo(114.1, 85.7);
            ctx.bezierCurveTo(113.0, 84.9, 111.5, 85.1, 110.5, 86.0);
            ctx.lineTo(108.4, 88.0);
            ctx.lineTo(80.9, 88.0);
            ctx.lineTo(96.8, 72.8);
            ctx.bezierCurveTo(97.7, 71.9, 97.9, 70.4, 97.1, 69.4);
            ctx.lineTo(95.7, 67.5);
            ctx.bezierCurveTo(94.9, 66.5, 95.0, 65.0, 96.0, 64.1);
            ctx.lineTo(101.9, 58.5);
            ctx.lineTo(125.4, 81.1);
            ctx.lineTo(119.6, 86.7);
            ctx.bezierCurveTo(118.6, 87.6, 117.1, 87.7, 116.0, 87.0);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(139.9, 106.5);
            ctx.bezierCurveTo(138.2, 102.1, 134.4, 97.9, 131.6, 95.1);
            ctx.bezierCurveTo(130.6, 94.1, 128.7, 94.1, 127.6, 95.1);
            ctx.bezierCurveTo(124.8, 97.9, 121.1, 102.1, 119.4, 106.5);
            ctx.bezierCurveTo(117.6, 110.5, 118.5, 115.1, 121.8, 118.1);
            ctx.bezierCurveTo(123.8, 120.2, 126.6, 121.3, 129.6, 121.3);
            ctx.bezierCurveTo(132.6, 121.3, 135.4, 120.2, 137.5, 118.1);
            ctx.bezierCurveTo(140.7, 115.1, 141.6, 110.5, 139.9, 106.5);
            ctx.closePath();
            ctx.moveTo(133.5, 114.4);
            ctx.bezierCurveTo(132.5, 115.4, 131.1, 115.9, 129.6, 115.9);
            ctx.bezierCurveTo(128.1, 115.9, 126.7, 115.4, 125.7, 114.4);
            ctx.bezierCurveTo(124.1, 112.8, 123.6, 110.6, 124.5, 108.5);
            ctx.bezierCurveTo(124.5, 108.5, 124.6, 108.4, 124.6, 108.3);
            ctx.bezierCurveTo(125.6, 105.7, 127.7, 103.0, 129.6, 100.9);
            ctx.bezierCurveTo(131.5, 103.0, 133.6, 105.7, 134.7, 108.4);
            ctx.bezierCurveTo(134.7, 108.4, 134.7, 108.5, 134.7, 108.6);
            ctx.bezierCurveTo(135.6, 110.6, 135.1, 112.8, 133.5, 114.4);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle='white';
            ctx.strokeStyle='white';
            ctx.font = "27.0px 'Arial'";
            ctx.fillText("lab", 82.0, 227.2);
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText("lab", 82.0, 227.2);
            ctx.restore();
        } ;
        return ui;
    }
    function BtnMsg() {
        var ui = new UIComponent(553,236,180,171);
        ui.spotter = new spotter(ui);
        ui.clicker=new clicker(ui);
        ui.paintFun = function (ctx) {
            ctx.save();
            if(this.spotter.mouseIn) {
                ctx.fillStyle='rgba(110,110,110,0.5)';
                ctx.fillRect(0,0,this.w,this.h);
            }
            ctx.fillStyle='white';
            ctx.strokeStyle='white';
            ctx.font = "27.0px 'Arial'";
            ctx.fillText("message", 44.9, 227.2);
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText("message", 44.9, 227.2);
            ctx.beginPath();
            ctx.moveTo(126.9, 71.0);
            ctx.lineTo(126.9, 53.1);
            ctx.bezierCurveTo(126.9, 52.2, 126.3, 51.4, 125.4, 50.9);
            ctx.bezierCurveTo(124.6, 50.5, 123.5, 50.5, 122.6, 50.9);
            ctx.lineTo(89.1, 68.4);
            ctx.lineTo(53.4, 68.4);
            ctx.bezierCurveTo(48.7, 68.4, 44.9, 71.8, 44.9, 76.1);
            ctx.lineTo(44.9, 96.5);
            ctx.bezierCurveTo(44.9, 100.7, 48.7, 104.1, 53.4, 104.1);
            ctx.lineTo(59.9, 104.1);
            ctx.lineTo(67.5, 123.3);
            ctx.bezierCurveTo(69.1, 127.1, 72.7, 130.9, 77.4, 130.9);
            ctx.lineTo(84.4, 130.9);
            ctx.bezierCurveTo(89.1, 130.9, 91.5, 127.1, 90.1, 123.3);
            ctx.lineTo(82.5, 104.1);
            ctx.lineTo(89.0, 104.1);
            ctx.lineTo(122.6, 121.6);
            ctx.bezierCurveTo(123.1, 121.9, 123.5, 122.0, 124.0, 122.0);
            ctx.bezierCurveTo(124.5, 122.0, 125.0, 121.9, 125.4, 121.6);
            ctx.bezierCurveTo(126.3, 121.2, 126.9, 120.3, 126.9, 119.4);
            ctx.lineTo(126.9, 101.6);
            ctx.bezierCurveTo(131.5, 101.6, 135.3, 98.1, 135.3, 93.9);
            ctx.lineTo(135.3, 78.6);
            ctx.bezierCurveTo(135.3, 74.4, 131.5, 71.0, 126.9, 71.0);
            ctx.closePath();
            ctx.moveTo(84.8, 124.9);
            ctx.bezierCurveTo(84.9, 125.4, 84.8, 125.7, 84.8, 125.8);
            ctx.bezierCurveTo(84.8, 125.8, 84.7, 125.8, 84.4, 125.8);
            ctx.lineTo(77.4, 125.8);
            ctx.bezierCurveTo(75.8, 125.8, 73.8, 123.9, 72.8, 121.5);
            ctx.lineTo(65.9, 104.1);
            ctx.lineTo(76.5, 104.1);
            ctx.lineTo(84.8, 124.9);
            ctx.closePath();
            ctx.moveTo(84.4, 99.0);
            ctx.lineTo(53.4, 99.0);
            ctx.bezierCurveTo(51.8, 99.0, 50.5, 97.9, 50.5, 96.5);
            ctx.lineTo(50.5, 76.1);
            ctx.bezierCurveTo(50.5, 74.7, 51.8, 73.5, 53.4, 73.5);
            ctx.lineTo(84.4, 73.5);
            ctx.lineTo(84.4, 99.0);
            ctx.closePath();
            ctx.moveTo(121.2, 115.0);
            ctx.lineTo(90.1, 98.8);
            ctx.lineTo(90.1, 73.8);
            ctx.lineTo(121.2, 57.5);
            ctx.lineTo(121.2, 115.0);
            ctx.closePath();ctx.moveTo(129.7, 93.9);
            ctx.bezierCurveTo(129.7, 95.3, 128.4, 96.5, 126.9, 96.5);
            ctx.lineTo(126.9, 76.1);
            ctx.bezierCurveTo(128.4, 76.1, 129.7, 77.2, 129.7, 78.6);
            ctx.lineTo(129.7, 93.9);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();
            ctx.restore();
        };
        return ui;
    }
    function BtnRecruit() {
        var ui = new UIComponent(223,236,180,171);
        ui.spotter = new spotter(ui);
        ui.clicker = new clicker(ui);
        ui.paintFun = function (ctx) {
            ctx.save();
            if(this.spotter.mouseIn)
            {
                ctx.fillStyle='rgba(110,110,110,0.5)';
                ctx.fillRect(0,0,this.w,this.h);
            }
            ctx.fillStyle='white';
            ctx.beginPath();
            ctx.moveTo(100.8, 91.2);
            ctx.bezierCurveTo(107.5, 87.0, 112.0, 79.6, 112.0, 71.1);
            ctx.bezierCurveTo(112.0, 58.0, 101.3, 47.4, 88.2, 47.4);
            ctx.bezierCurveTo(75.1, 47.4, 64.5, 58.0, 64.5, 71.1);
            ctx.bezierCurveTo(64.5, 79.6, 68.9, 87.0, 75.6, 91.2);
            ctx.bezierCurveTo(59.1, 95.7, 47.1, 108.6, 47.1, 123.9);
            ctx.bezierCurveTo(47.1, 128.2, 51.3, 131.8, 56.6, 131.8);
            ctx.lineTo(119.9, 131.8);
            ctx.bezierCurveTo(125.1, 131.8, 129.4, 128.2, 129.4, 123.9);
            ctx.bezierCurveTo(129.4, 108.6, 117.4, 95.7, 100.8, 91.2);
            ctx.closePath();
            ctx.moveTo(103.9, 63.2);
            ctx.bezierCurveTo(92.6, 62.7, 83.4, 60.0, 78.8, 55.6);
            ctx.bezierCurveTo(81.5, 53.8, 84.7, 52.7, 88.2, 52.7);
            ctx.bezierCurveTo(95.1, 52.7, 101.1, 57.0, 103.9, 63.2);
            ctx.closePath();
            ctx.moveTo(70.8, 71.1);
            ctx.bezierCurveTo(70.8, 66.8, 72.2, 62.8, 74.6, 59.6);
            ctx.bezierCurveTo(80.8, 65.0, 91.8, 68.3, 105.4, 68.5);
            ctx.bezierCurveTo(105.5, 69.4, 105.6, 70.2, 105.6, 71.1);
            ctx.bezierCurveTo(105.6, 81.3, 97.8, 89.6, 88.2, 89.6);
            ctx.bezierCurveTo(78.6, 89.6, 70.8, 81.3, 70.8, 71.1);
            ctx.closePath();
            ctx.moveTo(119.9, 126.5);
            ctx.lineTo(56.6, 126.5);
            ctx.bezierCurveTo(54.8, 126.5, 53.4, 125.3, 53.4, 123.9);
            ctx.bezierCurveTo(53.4, 107.9, 69.0, 94.9, 88.2, 94.9);
            ctx.bezierCurveTo(107.4, 94.9, 123.0, 107.9, 123.0, 123.9);
            ctx.bezierCurveTo(123.0, 125.3, 121.6, 126.5, 119.9, 126.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();
            ctx.fillStyle='white';
            ctx.strokeStyle='white';
            ctx.font = "27.0px 'Arial'";
            ctx.fillText("recruit", 47.1, 227.2);
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText("recruit", 47.1, 227.2);
            ctx.restore();
        };
        return ui;
    }
    function backGround(img) {
        var ui = new UIComponent();
        window.ctx.drawImage(img, 0, 0,canvas.width / scale ,canvas.height / scale );
        window.backImg=img;
        ui.oriImgdata=window.ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
        window.backImgData=ui.oriImgdata;
        ui.paint= function (ctx) {
            ctx.putImageData(this.oriImgdata,0,0);
        };
        return ui;
    }
    function InitBackUI(img) {
        adjustCanvas(canvas, ctx, img.naturalHeight, img.naturalWidth);
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
}

//LabPart
{
    function LabTask()
    {
        var t=new Task('Lab');
        var clock=new simpleClock(0.7,1,quartEaseOut,-Math.PI/2,Math.PI/2,true,false);
        var rp=new LabRightPanel();
        var lp=new LabLeftPanel();
        rp.clock=clock;
        lp.clock=clock;
        t.resetWait(1);
        clock.onend=function(){window.curTask.decreseWait();}
        clock.onreverse=function(){window.curTask.decreseWait();}
        t.leftPanel=lp;
        t.rightPanel=rp;
        t.cmdUIComponents.addCtrl(rp,'right');
        t.cmdUIComponents.addCtrl(lp,'left');
        t.cmdUIComponents.addCtrl(new LabLoading(),'loading');
        t.onbegin.subscribe(function () {
            if (!window.curTask.loaded) {
                window.channelMng.beginChannel(true, 'labChannel');
                LabService.GetIndex(function (data) {
                    var ets = data.ExpTypes;
                    var spanel = LabSindexPanel(ets);
                    var rpanel = LabRindexPanel(ets);
                    var ub = window.curTask.leftPanel.findByID('upBtn');
                    var db = window.curTask.leftPanel.findByID('downBtn');
                    db.focus = true;
                    spanel.clock.onreverse = function () {
                        window.curTask.leftPanel.sp.visible = false;
                        window.curTask.leftPanel.rp.x = 18;
                        window.curTask.leftPanel.rp.visible = true;
                        window.curTask.leftPanel.sp.x = 9999;
                        window.curTask.leftPanel.rp.clock.start();
                    };
                    rpanel.clock.onreverse = function () {
                        window.curTask.leftPanel.rp.visible = false;
                        window.curTask.leftPanel.sp.visible = true;
                        window.curTask.leftPanel.sp.x = 18;
                        window.curTask.leftPanel.rp.x = 9999;
                        window.curTask.leftPanel.sp.clock.start();
                    };
                    ub.clicker.onclick = function () {
                        this.p.focus = true;
                        window.curTask.leftPanel.findByID('downBtn').focus = false;
                        window.curTask.leftPanel.rp.clock.reverse();
                        window.curTask.rightPanel.findByID('allBtn').enable=false;
                        window.curTask.rightPanel.findByID('deleteBtn').enable=false;
                    };
                    db.clicker.onclick = function () {
                        this.p.focus = true;
                        window.curTask.leftPanel.findByID('upBtn').focus = false;
                        window.curTask.leftPanel.sp.clock.reverse();
                        window.curTask.rightPanel.findByID('allBtn').enable=false;
                        window.curTask.rightPanel.findByID('deleteBtn').enable=false;
                    };
                    window.curTask.leftPanel.sp = spanel;
                    window.curTask.leftPanel.rp = rpanel;
                    window.curTask.leftPanel.addCtrl(spanel, 'submit');
                    window.curTask.leftPanel.addCtrl(rpanel, 'read');
                    spanel.visible = false;
                    rpanel.clock.start();
                    window.curTask.loaded = true;
                    window.channelMng.endChannel();
                },function(e)
                {
                    alert(e.message);

                });
            }
        });
        return t;
    }
    function LabRightPanel()
    {
        var p=new Panel(491,15,690,730,'rgba(10,10,10,0.7)') ;
        var sb=new UIComponent(50,565,80,80);
        sb.clicker=new clicker(sb);
        p.addCtrl(sb,'submitBtn');
        var db=new UIComponent(600,565,80,80);
        db.clicker=new clicker(db);
        p.addCtrl(db,'deleteBtn');
        var gb=new UIComponent(305,565,80,80);
        gb.clicker=new clicker(gb);
        p.addCtrl(gb,'allBtn');
        var eb=new Button(690,10,30,30);
        eb.paintFun=function(ctx)
        {
            ctx.fillStyle='white';
            ctx.lineWidth=4;
            exitRectPath(this.w,5,ctx);
            ctx.stroke();
        };
        eb.clicker.onclick=function(){
            window.curTask.cmdUIComponents.findByID('left').clock.reverse();
            window.curTask.exit();
        } ;
        p.addCtrl(eb,'exitBtn');
        p.transFun=function (ctx){
            var sin=Math.sin(this.clock.value);
            var cos=Math.cos(this.clock.value);
            ctx.transform(cos,-sin,sin,cos,(1-cos)*this.w+this.x,this.y+sin*this.w);
        } ;
        gb.paintFun=function(ctx){
            ctx.save();
            ctx.font = "20.3px '幼圆'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("下载", 25, 92);
            ctx.beginPath();
            ctx.moveTo(49.0, 0.0);
            ctx.bezierCurveTo(21.9, 0.0, 0.0, 18.8, 0.0, 42.0);
            ctx.bezierCurveTo(0.0, 65.2, 21.9, 84.0, 49.0, 84.0);
            ctx.bezierCurveTo(76.1, 84.0, 98.0, 65.2, 98.0, 42.0);
            ctx.bezierCurveTo(98.0, 18.8, 76.1, 0.0, 49.0, 0.0);
            ctx.closePath();
            ctx.moveTo(49.0, 78.7);
            ctx.bezierCurveTo(25.4, 78.7, 6.1, 62.2, 6.1, 42.0);
            ctx.bezierCurveTo(6.1, 21.7, 25.4, 5.2, 49.0, 5.2);
            ctx.bezierCurveTo(72.7, 5.2, 91.9, 21.7, 91.9, 42.0);
            ctx.bezierCurveTo(91.9, 62.2, 72.7, 78.7, 49.0, 78.7);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 13.1);
            ctx.bezierCurveTo(49.9, 13.1, 50.6, 12.5, 50.6, 11.8);
            ctx.bezierCurveTo(50.6, 11.1, 49.9, 10.5, 49.0, 10.5);
            ctx.bezierCurveTo(28.7, 10.5, 12.3, 24.6, 12.3, 42.0);
            ctx.bezierCurveTo(12.3, 42.7, 12.9, 43.3, 13.8, 43.3);
            ctx.bezierCurveTo(14.6, 43.3, 15.3, 42.7, 15.3, 42.0);
            ctx.bezierCurveTo(15.3, 26.1, 30.4, 13.1, 49.0, 13.1);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(84.3, 40.7);
            ctx.bezierCurveTo(83.4, 40.7, 82.7, 41.3, 82.7, 42.0);
            ctx.bezierCurveTo(82.7, 57.9, 67.6, 70.8, 49.0, 70.8);
            ctx.bezierCurveTo(48.2, 70.8, 47.5, 71.4, 47.5, 72.2);
            ctx.bezierCurveTo(47.5, 72.9, 48.2, 73.5, 49.0, 73.5);
            ctx.bezierCurveTo(69.3, 73.5, 85.8, 59.3, 85.8, 42.0);
            ctx.bezierCurveTo(85.8, 41.3, 85.1, 40.7, 84.3, 40.7);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 18.4);
            ctx.bezierCurveTo(49.9, 18.4, 50.6, 17.8, 50.6, 17.1);
            ctx.bezierCurveTo(50.6, 16.3, 49.9, 15.7, 49.0, 15.7);
            ctx.bezierCurveTo(32.1, 15.7, 18.4, 27.5, 18.4, 42.0);
            ctx.bezierCurveTo(18.4, 42.7, 19.1, 43.3, 19.9, 43.3);
            ctx.bezierCurveTo(20.8, 43.3, 21.4, 42.7, 21.4, 42.0);
            ctx.bezierCurveTo(21.4, 29.0, 33.8, 18.4, 49.0, 18.4);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 65.6);
            ctx.bezierCurveTo(48.2, 65.6, 47.5, 66.2, 47.5, 66.9);
            ctx.bezierCurveTo(47.5, 67.6, 48.2, 68.2, 49.0, 68.2);
            ctx.bezierCurveTo(65.9, 68.2, 79.7, 56.4, 79.7, 42.0);
            ctx.bezierCurveTo(79.7, 41.3, 79.0, 40.7, 78.1, 40.7);
            ctx.bezierCurveTo(77.3, 40.7, 76.6, 41.3, 76.6, 42.0);
            ctx.bezierCurveTo(76.6, 55.0, 64.2, 65.6, 49.0, 65.6);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 23.6);
            ctx.bezierCurveTo(49.9, 23.6, 50.6, 23.0, 50.6, 22.3);
            ctx.bezierCurveTo(50.6, 21.6, 49.9, 21.0, 49.0, 21.0);
            ctx.bezierCurveTo(35.5, 21.0, 24.5, 30.4, 24.5, 42.0);
            ctx.bezierCurveTo(24.5, 42.7, 25.2, 43.3, 26.0, 43.3);
            ctx.bezierCurveTo(26.9, 43.3, 27.6, 42.7, 27.6, 42.0);
            ctx.bezierCurveTo(27.6, 31.9, 37.2, 23.6, 49.0, 23.6);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 60.3);
            ctx.bezierCurveTo(48.2, 60.3, 47.5, 60.9, 47.5, 61.7);
            ctx.bezierCurveTo(47.5, 62.4, 48.2, 63.0, 49.0, 63.0);
            ctx.bezierCurveTo(62.5, 63.0, 73.5, 53.6, 73.5, 42.0);
            ctx.bezierCurveTo(73.5, 41.3, 72.8, 40.7, 72.0, 40.7);
            ctx.bezierCurveTo(71.2, 40.7, 70.5, 41.3, 70.5, 42.0);
            ctx.bezierCurveTo(70.5, 52.1, 60.8, 60.3, 49.0, 60.3);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 28.9);
            ctx.bezierCurveTo(49.9, 28.9, 50.6, 28.3, 50.6, 27.5);
            ctx.bezierCurveTo(50.6, 26.8, 49.9, 26.2, 49.0, 26.2);
            ctx.bezierCurveTo(38.9, 26.2, 30.6, 33.3, 30.6, 42.0);
            ctx.bezierCurveTo(30.6, 42.7, 31.3, 43.3, 32.2, 43.3);
            ctx.bezierCurveTo(33.0, 43.3, 33.7, 42.7, 33.7, 42.0);
            ctx.bezierCurveTo(33.7, 34.7, 40.6, 28.9, 49.0, 28.9);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(49.0, 55.1);
            ctx.bezierCurveTo(48.2, 55.1, 47.5, 55.7, 47.5, 56.4);
            ctx.bezierCurveTo(47.5, 57.1, 48.2, 57.7, 49.0, 57.7);
            ctx.bezierCurveTo(59.2, 57.7, 67.4, 50.7, 67.4, 42.0);
            ctx.bezierCurveTo(67.4, 41.3, 66.7, 40.7, 65.9, 40.7);
            ctx.bezierCurveTo(65.0, 40.7, 64.3, 41.3, 64.3, 42.0);
            ctx.bezierCurveTo(64.3, 49.2, 57.5, 55.1, 49.0, 55.1);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(61.3, 42.0);
            ctx.bezierCurveTo(61.3, 36.2, 55.8, 31.5, 49.0, 31.5);
            ctx.bezierCurveTo(42.3, 31.5, 36.8, 36.2, 36.8, 42.0);
            ctx.bezierCurveTo(36.8, 47.8, 42.3, 52.5, 49.0, 52.5);
            ctx.bezierCurveTo(55.8, 52.5, 61.3, 47.8, 61.3, 42.0);
            ctx.closePath();
            ctx.moveTo(42.9, 42.0);
            ctx.bezierCurveTo(42.9, 39.1, 45.6, 36.7, 49.0, 36.7);
            ctx.bezierCurveTo(52.4, 36.7, 55.1, 39.1, 55.1, 42.0);
            ctx.bezierCurveTo(55.1, 44.9, 52.4, 47.2, 49.0, 47.2);
            ctx.bezierCurveTo(45.6, 47.2, 42.9, 44.9, 42.9, 42.0);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(50.6, 42.0);
            ctx.bezierCurveTo(50.6, 41.3, 49.9, 40.7, 49.0, 40.7);
            ctx.bezierCurveTo(48.2, 40.7, 47.5, 41.3, 47.5, 42.0);
            ctx.bezierCurveTo(47.5, 42.7, 48.2, 43.3, 49.0, 43.3);
            ctx.bezierCurveTo(49.9, 43.3, 50.6, 42.7, 50.6, 42.0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        db.paintFun=function(ctx){
            ctx.save();
            ctx.font = "21px '幼圆'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("删除", 22, 92);
            ctx.beginPath();
            ctx.moveTo(52.3, 74.4);
            ctx.bezierCurveTo(52.3, 74.4, 52.3, 74.5, 52.3, 74.5);
            ctx.bezierCurveTo(52.3, 74.5, 52.3, 74.5, 52.3, 74.4);
            ctx.bezierCurveTo(52.3, 74.4, 52.3, 74.4, 52.3, 74.4);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(41.0, 73.3);
            ctx.bezierCurveTo(42.7, 73.3, 44.0, 72.2, 44.0, 70.7);
            ctx.lineTo(44.0, 34.0);
            ctx.bezierCurveTo(44.0, 32.6, 42.7, 31.4, 41.0, 31.4);
            ctx.bezierCurveTo(39.4, 31.4, 38.1, 32.6, 38.1, 34.0);
            ctx.lineTo(38.1, 70.7);
            ctx.bezierCurveTo(38.1, 72.2, 39.4, 73.3, 41.0, 73.3);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(55.7, 73.3);
            ctx.bezierCurveTo(57.3, 73.3, 58.6, 72.2, 58.6, 70.7);
            ctx.lineTo(58.6, 34.0);
            ctx.bezierCurveTo(58.6, 32.6, 57.3, 31.4, 55.7, 31.4);
            ctx.bezierCurveTo(54.1, 31.4, 52.8, 32.6, 52.8, 34.0);
            ctx.lineTo(52.8, 70.7);
            ctx.bezierCurveTo(52.8, 72.2, 54.1, 73.3, 55.7, 73.3);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(26.4, 73.3);
            ctx.bezierCurveTo(28.0, 73.3, 29.3, 72.2, 29.3, 70.7);
            ctx.lineTo(29.3, 34.0);
            ctx.bezierCurveTo(29.3, 32.6, 28.0, 31.4, 26.4, 31.4);
            ctx.bezierCurveTo(24.8, 31.4, 23.5, 32.6, 23.5, 34.0);
            ctx.lineTo(23.5, 70.7);
            ctx.bezierCurveTo(23.5, 72.2, 24.8, 73.3, 26.4, 73.3);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(73.3, 13.1);
            ctx.lineTo(67.4, 13.1);
            ctx.lineTo(67.4, 5.2);
            ctx.bezierCurveTo(67.4, 2.3, 64.8, 0.0, 61.6, 0.0);
            ctx.lineTo(20.5, 0.0);
            ctx.bezierCurveTo(17.3, 0.0, 14.7, 2.3, 14.7, 5.2);
            ctx.lineTo(14.7, 13.1);
            ctx.lineTo(8.8, 13.1);
            ctx.bezierCurveTo(3.9, 13.1, 0.0, 16.6, 0.0, 21.0);
            ctx.lineTo(0.0, 26.2);
            ctx.lineTo(8.8, 26.2);
            ctx.lineTo(8.8, 76.0);
            ctx.bezierCurveTo(8.8, 80.3, 12.7, 83.8, 17.6, 83.8);
            ctx.lineTo(64.5, 83.8);
            ctx.bezierCurveTo(69.3, 83.8, 73.3, 80.3, 73.3, 76.0);
            ctx.lineTo(73.3, 26.2);
            ctx.lineTo(82.1, 26.2);
            ctx.lineTo(82.1, 21.0);
            ctx.bezierCurveTo(82.1, 16.6, 78.1, 13.1, 73.3, 13.1);
            ctx.closePath();
            ctx.moveTo(20.5, 5.2);
            ctx.lineTo(61.6, 5.2);
            ctx.lineTo(61.6, 13.1);
            ctx.lineTo(20.5, 13.1);
            ctx.lineTo(20.5, 5.2);
            ctx.closePath();
            ctx.moveTo(67.4, 76.0);
            ctx.bezierCurveTo(67.4, 77.4, 66.1, 78.6, 64.5, 78.6);
            ctx.lineTo(17.6, 78.6);
            ctx.bezierCurveTo(16.0, 78.6, 14.7, 77.4, 14.7, 76.0);
            ctx.lineTo(14.7, 26.2);
            ctx.lineTo(67.4, 26.2);
            ctx.lineTo(67.4, 76.0);
            ctx.closePath();
            ctx.moveTo(76.2, 21.0);
            ctx.lineTo(76.2, 23.6);
            ctx.lineTo(5.9, 23.6);
            ctx.lineTo(5.9, 21.0);
            ctx.lineTo(5.9, 21.0);
            ctx.bezierCurveTo(5.9, 19.5, 7.2, 18.3, 8.8, 18.3);
            ctx.lineTo(73.3, 18.3);
            ctx.bezierCurveTo(74.9, 18.3, 76.2, 19.5, 76.2, 21.0);
            ctx.lineTo(76.2, 21.0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        sb.paintFun=function(ctx){
            ctx.save();
            ctx.font = "21px '幼圆'";
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillText("上传", 12, 93);
            ctx.beginPath();
            ctx.moveTo(9.8, 83.4);
            ctx.bezierCurveTo(7.2, 83.4, 4.7, 82.3, 2.9, 80.3);
            ctx.bezierCurveTo(1.0, 78.3, 0.0, 75.7, 0.0, 72.9);
            ctx.bezierCurveTo(0.0, 70.2, 1.0, 67.5, 2.9, 65.6);
            ctx.lineTo(33.1, 33.4);
            ctx.bezierCurveTo(30.0, 24.4, 32.0, 14.1, 38.5, 7.2);
            ctx.bezierCurveTo(42.8, 2.6, 48.7, 0.0, 54.9, 0.0);
            ctx.bezierCurveTo(58.2, 0.0, 61.6, 0.8, 64.7, 2.3);
            ctx.bezierCurveTo(65.4, 2.6, 65.9, 3.4, 66.0, 4.2);
            ctx.bezierCurveTo(66.2, 5.0, 65.9, 5.9, 65.4, 6.5);
            ctx.lineTo(55.1, 17.4);
            ctx.lineTo(56.2, 23.6);
            ctx.lineTo(62.0, 24.8);
            ctx.lineTo(72.2, 13.9);
            ctx.bezierCurveTo(72.8, 13.3, 73.6, 13.1, 74.4, 13.2);
            ctx.bezierCurveTo(75.2, 13.4, 75.8, 14.0, 76.2, 14.7);
            ctx.bezierCurveTo(80.1, 24.2, 78.2, 34.9, 71.3, 42.2);
            ctx.bezierCurveTo(67.0, 46.9, 61.1, 49.4, 54.9, 49.4);
            ctx.lineTo(54.9, 49.4);
            ctx.bezierCurveTo(52.2, 49.4, 49.6, 49.0, 47.1, 48.0);
            ctx.lineTo(16.7, 80.3);
            ctx.bezierCurveTo(14.9, 82.3, 12.4, 83.4, 9.8, 83.4);
            ctx.closePath();
            ctx.moveTo(54.9, 5.2);
            ctx.bezierCurveTo(50.0, 5.2, 45.4, 7.2, 41.9, 10.9);
            ctx.bezierCurveTo(36.5, 16.7, 35.0, 25.5, 38.2, 32.9);
            ctx.bezierCurveTo(38.7, 33.9, 38.5, 35.1, 37.8, 35.8);
            ctx.lineTo(6.3, 69.3);
            ctx.bezierCurveTo(5.4, 70.2, 4.9, 71.5, 4.9, 72.9);
            ctx.bezierCurveTo(4.9, 74.3, 5.4, 75.6, 6.3, 76.6);
            ctx.bezierCurveTo(7.3, 77.6, 8.5, 78.1, 9.8, 78.1);
            ctx.bezierCurveTo(11.1, 78.1, 12.3, 77.6, 13.3, 76.6);
            ctx.lineTo(44.8, 43.1);
            ctx.bezierCurveTo(45.5, 42.4, 46.6, 42.1, 47.5, 42.6);
            ctx.bezierCurveTo(49.8, 43.7, 52.3, 44.2, 54.9, 44.2);
            ctx.bezierCurveTo(59.8, 44.2, 64.4, 42.2, 67.9, 38.5);
            ctx.bezierCurveTo(72.4, 33.7, 74.2, 27.0, 72.8, 20.6);
            ctx.lineTo(64.5, 29.4);
            ctx.bezierCurveTo(64.0, 30.1, 63.1, 30.3, 62.3, 30.2);
            ctx.lineTo(53.7, 28.3);
            ctx.bezierCurveTo(52.7, 28.1, 51.9, 27.3, 51.8, 26.3);
            ctx.lineTo(50.0, 17.1);
            ctx.bezierCurveTo(49.9, 16.2, 50.1, 15.3, 50.7, 14.7);
            ctx.lineTo(59.1, 5.7);
            ctx.bezierCurveTo(57.7, 5.4, 56.3, 5.2, 54.9, 5.2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        p.paintFun=function(ctx){
            ctx.beginPath();
            ctx.rect(0,0,this.w,this.h);
            ctx.closePath();
            ctx.clip();
            ctx.fillStyle=this.bc;
            ctx.fill();
            ctx.fillStyle='white';
            ctx.font='40px 幼圆';
            ctx.textBaseline='hanging';
            ctx.strokeStyle='white';
            ctx.fillText('详细信息',280,7);
            ctx.strokeText('详细信息',280,7);
            ctx.beginPath();
            ctx.moveTo(35,55);
            ctx.lineTo(690,55);
            ctx.closePath();
            ctx.stroke();
        };
        sb.update=function ()
        {
            var sp=this.p.findByID('submitPanel');
            if(sp)
            {
                var c = sp.exp.ExpParas.length;
                for (var i = 0; i < sp.controls.length; i++)
                    if (sp.controls[i].vtxt)
                        c--;
                this.enable = (c == 0);
            }
            else
                this.enable = false;
        } ;
        sb.clicker.onclick = function () {
            if(!this.p.enable) return true;
            else if (!window.channelMng.isLogIn) {DisplayLogWindow(); return true; }
            var sp = this.p.p.findByID('submitPanel');
            if (sp) {
                var str = '';
                for (var i = 0; i < sp.controls.length; i++)
                    if (sp.controls[i].vtxt)
                        str += sp.controls[i].paraType.ParaNo + '\t' + sp.controls[i].vtxt + '\r';
                window.channelMng.beginChannel(true, 'labChannel');
                LabService.TryAddParaValueForTest(sp.exp.ExpNo, str, function (b) {
                    DisplayMsgWindow(b[0], b[1]);
                    window.channelMng.endChannel();
                }, function (e) {
                    DisplayMsgWindow(e[0], e[1]);
                    window.channelMng.endChannel();
                });
            }
        };
        db.clicker.onclick = function () {
            if(!this.p.enable) return true;
            var rp = window.curTask.cmdUIComponents.findByID('right');
            var sp = rp.findByID('readPanel');
            if (sp && sp.exp)
                onTryDeletePV(sp.exp.ExpNo);
        };
        gb.clicker.onclick = function () {
            if(!this.p.enable) return true;
            var rp = window.curTask.cmdUIComponents.findByID('right');
            var sp = rp.findByID('readPanel');
            if (sp && sp.exp)
                onTryReadData(sp.exp.ExpNo);
        };
        db.enable=false;
        gb.enable=false;
        p.maxh= p.h;
        return p;
    }
    function LabLeftPanel()
    {
        var p=new Panel(45,15,690,425,'rgba(10,10,10,0.7)') ;
        var ub=new UIComponent(50,565,80,80);
        ub.clicker=new clicker(ub);
        p.addCtrl(ub,'upBtn');
        var db=new UIComponent(305,565,80,80);
        db.clicker=new clicker(db);
        p.addCtrl(db,'downBtn');
        p.transFun=function (ctx){
            ctx.translate(this.x,this.y);
            ctx.rotate(this.clock.value);
        } ;
        db.paintFun=function(ctx){
            ctx.save();
            if(this.focus){
                ctx.shadowBlur = 5;
                ctx.shadowColor='gray';
                ctx.shadowOffsetX=3;
                ctx.shadowOffsetY=3;
                ctx.fillStyle='white';
            }
            else
                ctx.fillStyle='gray';
            ctx.beginPath();
            ctx.moveTo(68.0, 0.0);
            ctx.lineTo(9.7, 0.0);
            ctx.bezierCurveTo(4.4, 0.0, 0.0, 3.4, 0.0, 7.6);
            ctx.lineTo(0.0, 73.4);
            ctx.bezierCurveTo(0.0, 77.5, 4.4, 80.9, 9.7, 80.9);
            ctx.lineTo(68.0, 80.9);
            ctx.bezierCurveTo(73.4, 80.9, 77.8, 77.5, 77.8, 73.4);
            ctx.lineTo(77.8, 7.6);
            ctx.bezierCurveTo(77.8, 3.4, 73.4, 0.0, 68.0, 0.0);
            ctx.closePath();
            ctx.moveTo(9.7, 5.1);
            ctx.lineTo(68.0, 5.1);
            ctx.bezierCurveTo(69.8, 5.1, 71.3, 6.2, 71.3, 7.6);
            ctx.lineTo(71.3, 10.1);
            ctx.lineTo(6.5, 10.1);
            ctx.lineTo(6.5, 7.6);
            ctx.bezierCurveTo(6.5, 6.2, 7.9, 5.1, 9.7, 5.1);
            ctx.closePath();
            ctx.moveTo(71.3, 12.7);
            ctx.lineTo(71.3, 63.2);
            ctx.lineTo(6.5, 63.2);
            ctx.lineTo(6.5, 12.7);
            ctx.lineTo(71.3, 12.7);
            ctx.closePath();
            ctx.moveTo(68.0, 75.9);
            ctx.lineTo(9.7, 75.9);
            ctx.bezierCurveTo(7.9, 75.9, 6.5, 74.7, 6.5, 73.4);
            ctx.lineTo(6.5, 65.8);
            ctx.lineTo(71.3, 65.8);
            ctx.lineTo(71.3, 73.4);
            ctx.bezierCurveTo(71.3, 74.7, 69.8, 75.9, 68.0, 75.9);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(38.9, 68.3);
            ctx.bezierCurveTo(37.1, 68.3, 35.6, 69.4, 35.6, 70.8);
            ctx.bezierCurveTo(35.6, 72.2, 37.1, 73.3, 38.9, 73.3);
            ctx.bezierCurveTo(40.7, 73.3, 42.1, 72.2, 42.1, 70.8);
            ctx.bezierCurveTo(42.1, 69.4, 40.7, 68.3, 38.9, 68.3);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(35.7, 20.4);
            ctx.lineTo(42.9, 20.4);
            ctx.lineTo(42.9, 44.2);
            ctx.lineTo(56.1, 44.2);
            ctx.lineTo(39.2, 54.9);
            ctx.lineTo(22.1, 44.2);
            ctx.lineTo(35.7, 44.2);
            ctx.lineTo(35.7, 20.4);
            ctx.closePath();
            ctx.fill();
            ctx.font = "21.0px '幼圆'";
            ctx.fillText("下载", 15, 92);
            ctx.restore();
        } ;
        ub.paintFun=function(ctx){
            ctx.save();
            if(this.focus){
                ctx.shadowBlur = 5;
                ctx.shadowColor='gray';
                ctx.shadowOffsetX=3;
                ctx.shadowOffsetY=3;
                ctx.fillStyle='white';
            }
            else
                ctx.fillStyle='gray';
            ctx.beginPath();
            ctx.moveTo(81.6, 16.8);
            ctx.lineTo(68.5, 3.9);
            ctx.bezierCurveTo(64.7, 0.2, 60.6, 0.0, 56.7, 0.0);
            ctx.lineTo(30.4, 0.0);
            ctx.bezierCurveTo(26.0, 0.0, 22.5, 3.5, 22.5, 7.7);
            ctx.lineTo(22.5, 10.3);
            ctx.lineTo(14.6, 10.3);
            ctx.bezierCurveTo(10.3, 10.3, 6.7, 13.8, 6.7, 18.0);
            ctx.lineTo(6.7, 74.8);
            ctx.bezierCurveTo(6.7, 79.0, 10.3, 82.5, 14.6, 82.5);
            ctx.lineTo(61.9, 82.5);
            ctx.bezierCurveTo(66.3, 82.5, 69.8, 79.0, 69.8, 74.8);
            ctx.lineTo(69.8, 72.2);
            ctx.lineTo(77.7, 72.2);
            ctx.bezierCurveTo(82.0, 72.2, 85.6, 68.7, 85.6, 64.4);
            ctx.lineTo(85.6, 28.4);
            ctx.bezierCurveTo(85.6, 24.5, 85.1, 20.2, 81.6, 16.8);
            ctx.closePath();
            ctx.moveTo(77.9, 20.4);
            ctx.bezierCurveTo(78.0, 20.5, 78.0, 20.6, 78.1, 20.6);
            ctx.lineTo(65.9, 20.6);
            ctx.bezierCurveTo(65.1, 20.6, 64.5, 20.0, 64.5, 19.3);
            ctx.lineTo(64.5, 7.3);
            ctx.bezierCurveTo(64.6, 7.4, 64.7, 7.4, 64.8, 7.5);
            ctx.lineTo(77.9, 20.4);
            ctx.closePath();
            ctx.moveTo(64.5, 74.8);
            ctx.bezierCurveTo(64.5, 76.2, 63.4, 77.3, 61.9, 77.3);
            ctx.lineTo(14.6, 77.3);
            ctx.bezierCurveTo(13.2, 77.3, 12.0, 76.2, 12.0, 74.8);
            ctx.lineTo(12.0, 18.0);
            ctx.bezierCurveTo(12.0, 16.6, 13.2, 15.5, 14.6, 15.5);
            ctx.lineTo(22.5, 15.5);
            ctx.lineTo(22.5, 64.4);
            ctx.bezierCurveTo(22.5, 68.7, 26.0, 72.2, 30.4, 72.2);
            ctx.lineTo(64.5, 72.2);
            ctx.lineTo(64.5, 74.8);
            ctx.closePath();
            ctx.moveTo(80.3, 64.4);
            ctx.bezierCurveTo(80.3, 65.9, 79.1, 67.0, 77.7, 67.0);
            ctx.lineTo(30.4, 67.0);
            ctx.bezierCurveTo(28.9, 67.0, 27.8, 65.9, 27.8, 64.4);
            ctx.lineTo(27.8, 7.7);
            ctx.bezierCurveTo(27.8, 6.3, 28.9, 5.2, 30.4, 5.2);
            ctx.lineTo(56.7, 5.2);
            ctx.bezierCurveTo(57.6, 5.2, 58.5, 5.2, 59.3, 5.2);
            ctx.lineTo(59.3, 19.3);
            ctx.bezierCurveTo(59.3, 22.9, 62.2, 25.8, 65.9, 25.8);
            ctx.lineTo(80.2, 25.8);
            ctx.bezierCurveTo(80.3, 26.6, 80.3, 27.4, 80.3, 28.4);
            ctx.lineTo(80.3, 64.4);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(67.2, 33.5);
            ctx.lineTo(56.7, 33.5);
            ctx.lineTo(56.7, 23.2);
            ctx.bezierCurveTo(56.7, 21.8, 55.5, 20.6, 54.0, 20.6);
            ctx.bezierCurveTo(52.6, 20.6, 51.4, 21.8, 51.4, 23.2);
            ctx.lineTo(51.4, 33.5);
            ctx.lineTo(40.9, 33.5);
            ctx.bezierCurveTo(39.4, 33.5, 38.3, 34.7, 38.3, 36.1);
            ctx.bezierCurveTo(38.3, 37.5, 39.4, 38.7, 40.9, 38.7);
            ctx.lineTo(51.4, 38.7);
            ctx.lineTo(51.4, 49.0);
            ctx.bezierCurveTo(51.4, 50.4, 52.6, 51.6, 54.0, 51.6);
            ctx.bezierCurveTo(55.5, 51.6, 56.7, 50.4, 56.7, 49.0);
            ctx.lineTo(56.7, 38.7);
            ctx.lineTo(67.2, 38.7);
            ctx.bezierCurveTo(68.6, 38.7, 69.8, 37.5, 69.8, 36.1);
            ctx.bezierCurveTo(69.8, 34.7, 68.6, 33.5, 67.2, 33.5);
            ctx.closePath();
            ctx.fill();
            ctx.font = "21.0px '幼圆'";
            ctx.fillText("上传", 10, 92);
            ctx.restore();
        };
        p.paintFun=function(ctx){
            ctx.beginPath();
            ctx.rect(0,0,this.w,this.h);
            ctx.closePath();
            ctx.clip();
            ctx.fillStyle=this.bc;
            ctx.fill();
            ctx.fillStyle='white';
            ctx.font='40px 幼圆';
            ctx.textBaseline='hanging';
            ctx.strokeStyle='white';
            ctx.fillText('目录',170,7);
            ctx.strokeText('目录',170,7);
            ctx.beginPath();
            ctx.moveTo(15,55);
            ctx.lineTo(410,55);
            ctx.closePath();
            ctx.stroke();
        };
        p.maxh= p.h;
        return p;
    }
    function LabLoading()
    {
        var l=new UIComponent(600,360,400,50);
        l.transFun=function(ctx) {
            ctx.translate(this.x,this.y);
            ctx.rotate(this.clock.value);
        };
        l.clock=new simpleClock(1.2,1,expoEaseInOut,Math.PI*2,0,true,true);
        l.txt='加载中,请稍后...';
        l.font='48px 幼圆';
        l.paintFun=function(ctx){
            ctx.fillStyle='white';
            ctx.font=this.font;
            var w=ctx.measureText(this.txt).width;
            ctx.fillText(this.txt,-w/2,0);
        };
        l.clock.start();
        l.visible=false;
        l.getter=window.loadingGetter;
        l.onchangeVisible=function()
        {
            if(this.visible) {
                this.txt=this.getter.get();
                window.ctx.font=this.font;
                var w=window.ctx.measureText(this.txt).width;
                this.x=(window.canvas.width-w)/1.9+w/2;
            }
        };
        return l;
    }
    function LabSindexPanel(ets) {
        var panel =new Panel(18, 65, 485, 390, 'rgba(0,0,0,0)');
        for (var i = 0; i < ets.length; i++) {
            var drop = new Drop(10, 12 + i * 70, 370, ets[i].ExpTypeName, '40px "黑体"', 'rgba(172,223,235,0.5)', 'white', 'rgba(172,223,235,0.3)', true);
            var exps = ets[i].Exps;
            var h=5;
            for (var j = 0; j < exps.length; j++) {
                if (!exps[j].CanSubmit) continue;
                var btn = new Button(2, h, 360, 45, exps[j].ExpName, '28px "黑体"', 'rgb(0,0,0,0)', true, null, 'white', true);
                h += 47;
                drop.addCtrl(btn, exps[j].ExpNo);
                btn.exp = exps[j];
                btn.clicker.onclick = function () {
                    var rightPanel=window.curTask.cmdUIComponents.findByID('right');
                    var sp=rightPanel.findByID('submitPanel');
                    if(sp && sp.exp.ExpNo==this.p.exp.ExpNo) return;
                    rightPanel.removeCtrl('submitPanel');
                    rightPanel.removeCtrl('readPanel');
                    var panel = new LabSubmitPanel(this.p.exp);
                    rightPanel.addCtrl(panel,'submitPanel');
                } ;
            }
            if (drop.controls.length > 0)
                panel.addCtrl(drop, ets[i].ExpTypeNo);
        }
        panel.clock=new simpleClock(0.3,1,linear,-1,1,true,false);
        panel.transFun=function(ctx)
        {
            ctx.translate(this.x,this.y);
            ctx.transform((1-this.clock.value),0,0,(1-this.clock.value),this.clock.value*this.w/2,this.clock.value*this.h/2);
        } ;
        return panel;
    }
    function LabRindexPanel(ets) {
        var panel = new Panel(18, 65, 485, 390, 'rgba(0,0,0,0)');
        for (var i = 0; i < ets.length; i++) {
            var drop = new Drop(10, 12 + i * 70, 370, ets[i].ExpTypeName, '40px "幼圆"', 'rgba(172,223,235,0.5)', 'rgb(150,237,222)', 'rgba(172,223,235,0.3)', true);
            var exps = ets[i].Exps;
            var h=5;
            for (var j = 0; j < exps.length; j++) {
                if (exps[j].CanRead == false) continue;
                var btn = new Button(2, h, 360, 45, exps[j].ExpName, '28px "幼圆"', 'rgba(0,0,0,0)', true, 'black', 'rgb(150,237,222)', true);
                h+=47;
                drop.addCtrl(btn, exps[j].ExpNo);
                btn.exp = exps[j];
                btn.clicker.onclick = function () {
                    getExpDetail(this.p.exp);
                }
            }
            if (drop.controls.length > 0)
                panel.addCtrl(drop, ets[i].ExpTypeNo);
        }
        panel.clock=new simpleClock(0.3,1,linear,-1,1,true,false);
        panel.transFun=function(ctx)
        {
            ctx.translate(this.x,this.y);
            ctx.transform((1-this.clock.value),0,0,(1-this.clock.value),this.clock.value*this.w/2,this.clock.value*this.h/2);
        } ;
        return panel;
    }
    function LabSubmitPanel(exp) {
        var panel = new Panel(35, 80, 455, 670, 'rgba(250,250,250,0.5)');
        panel.exp = exp;
        var font = '25px "幼圆"';
        var title = new Label(0, 1, exp.ExpName, 'bold 30px "幼圆"', 'black', 'rgba(0,0,0,0)');
        title.x = (panel.w - title.w) / 2;
        panel.addCtrl(title, 'title');
        for (var i = 0; i < exp.ExpParas.length; i++) {
            var para = exp.ExpParas[i];
            var pn = para.Name;
            var y=panel.controls[panel.controls.length-1].y+ panel.controls[panel.controls.length-1].h;
            var l = new Label(2, y+10 , pn + ':', font, 'black', 'rgba(0,0,0,0)');
            if (para.ValueType == 2) {
                var txts=para.Des.split(':');
                var s = new Switch(7, 0, 100, 40, 10, txts[0], txts[1], '20px "幼圆"', 'black', 'whitesmoke', 'rgb(172,223,235)', 'black');
                if((l.w+ s.w+10)>panel.w)
                { s.x=2;s.y= l.y+ l.h+ 5; }
                else
                { s.x= l.w+7;s.y= l.y; }
                s.paraType=para;
                s.toValue = function () {
                    return this.paraType.ParaNo + '\t' + this.vtxt + '\r';
                }  ;
                panel.addCtrl(l, 'l' + pn);
                panel.addCtrl(s, 'switch' + pn);
            } else {
                var txt = new TextBox(7,0,para.ValueType == 4? 600:400, font, 'rgb(41,159,218)', 'white', para.ValueType, 'gray', para.Des);
                if((txt.w+ l.w+10)>panel.w)
                { txt.w=300; txt.y= l.h+ l.y+5;}
                else
                {  txt.y= l.y;   txt.x= l.w+10; }
                txt.paraType = para;
                txt.toValue = function () {
                    return this.paraType.ParaNo + '\t' + this.vtxt + '\r';
                }  ;
                panel.addCtrl(l, 'l' + pn);
                panel.addCtrl(txt, 'txt' + pn);
            }
        };
        return panel;
    }
    function LabReadPanel(exp, expDes) {
        var panel = new Panel(35, 80, 455, 670, 'rgba(172,223,235,0.5)');
        panel.transFun = function (ctx) {
            ctx.translate(this.x, this.y);
        }
        var title = new Label(0, 1, exp.ExpName, 'bold 30px "幼圆"', 'black', 'rgba(0,0,0,0)');
        title.x = (panel.w - title.w) / 2;
        panel.addCtrl(title, 'title');
        var des=new Article (2,35,660,150,' 25px "幼圆"',false,' 25px "幼圆"','black','black','rgba(0,0,0,0)')  ;
        des.setText(expDes);
        panel.addCtrl(des, 'content');
        panel.exp=exp;
        return panel;
    }
    function getExpDetail(exp) {
        window.curTask.cmdUIComponents.removeCtrl('submitPanel');
        var rp=window.curTask.cmdUIComponents.findByID('right');
        rp.findByID('deleteBtn').enable=false;
        rp.findByID('allBtn').enable=false;
        var panel = new LabReadPanel(exp, exp.Des);
        rp.removeCtrl('readPanel');
        rp.removeCtrl('submitPanel');
        rp.addCtrl(panel, 'readPanel');
        window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
        if (window.channelMng.isLogIn) {
            window.channelMng.beginChannel(true, 'expDetail');
            LabService.UserPVDatails(exp.ExpNo, function (e, exp) {
                if (e.ok) {
                    window.curTask.cmdUIComponents.removeCtrl('submitPanel');
                    var rp = window.curTask.cmdUIComponents.findByID('right');
                    rp.findByID('deleteBtn').enable = e.data.hasSubmit;
                    rp.findByID('allBtn').enable = e.data.canRead;
                    var panel = rp.findByID('readPanel');
                    var seqlabel = new Label(35, 200, e.data.seqInfo, '25px "幼圆"', 'white');
                    panel.addCtrl(seqlabel, 'seqlabel');
                    var state = e.data;
                }
                window.channelMng.endChannel();
            }, null, exp);
        }
        else{
            DisplayLogWindow();
        }
    }
    function onTryReadData(expNo) {
        window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
        if (!window.channelMng.isLogIn)
            DisplayLogWindow();
        else {
            window.channelMng.beginChannel(true, 'readData');
            LabService.GetExpData(expNo,function (e) {
                DisplayMsgWindow(e[0], e[1]);
                window.channelMng.endChannel();
            });
        }
    }
    function onTryDeletePV(expNo) {
        if (!window.channelMng.isLogIn)
            DisplayLogWindow();
        else {
            DisplayConfirmWindow('确认删除?', '亲,删掉了不能恢复哦!', function () {
                window.channelMng.beginChannel(true, 'readData');
                LabService.DeleteParaValue(expNo, function (e) {
                    DisplayMsgWindow(e[0], e[1]);
                    window.curTask.cmdUIComponents.findByID('right').removeCtrl('readPanel');
                    window.channelMng.endChannel();
                });
            });
        }
    }
}
//MsgPart
{
    function MsgMainPanel()
    {
        var msgPanel=new Panel(15,15,690,1100,'rgba(10,10,10,0.5)');
        msgPanel.clock=new simpleClock(1,1,quartEaseOut,1,0,true,false);
        msgPanel.clock.onend=function()
        {
            window.curTask.decreseWait();
        };
        msgPanel.clock.onreverse=function()
        {
            window.curTask.decreseWait();
        };
        msgPanel.transFun=function(ctx)
        {
            var m=this.w/2;
            var n=this.h/2;
            var cos=Math.cos(this.clock.value*Math.PI*4);
            var sin=Math.sin(this.clock.value*Math.PI*4);
            var r=this.clock.value/this.clock.multiplier;
            ctx.transform(cos,-sin,sin,cos,m-cos*m-sin*n+this.x,n-cos*n+sin*m+this.y);
            ctx.transform(r,0,0,r,this.w/2*(1-r),this.h/2*(1-r));
        };
        var dp=new EventDetailPanel();
        msgPanel.addCtrl(dp,'detailPanel');
        msgPanel.detailPanel=dp;
        dp.visible=false;
        var eb=new Button(10,10,30,30);
        eb.paintFun=function(ctx)
        {
            ctx.strokeStyle='white';
            ctx.lineWidth=4;
            exitRectPath(this.w,5,ctx);
            ctx.stroke();
        };
        eb.clicker.onclick=function(){
            if(window.curTask.mainPanel.detailPanel)
                viewEvent();
            for(var i= 0,item=window.curTask.cmdUIComponents[i];item;item=window.curTask.cmdUIComponents[++i])
                if(item.clock) item.clock.reverse();
            window.curTask.exit();
        } ;
        var rb=new RefreshBtn();
        var fb=new PictureBtn();
        var publicMsg=new PublicMsgPanel();
        var cp=new CommentsPanel();
        msgPanel.indexPanel=publicMsg;
        var micon=new MusicBtn();
        var cicon=new CommentBtn();
        msgPanel.addCtrl(cp,'commentsPanel');
        msgPanel.addCtrl(rb,'refreshBtn');
        msgPanel.addCtrl(cicon,'commentBtn');
        msgPanel.addCtrl(fb,'flipBtn');
        msgPanel.addCtrl(micon,'musicBtn');
        msgPanel.addCtrl(publicMsg,'indexPanel');
        msgPanel.addCtrl(eb,'exitBtn');
        cicon.enable=false;
        cicon.commentsPanel=cp;
        msgPanel.commentBtn=cicon;
        msgPanel.commentsPanel=cp;
        cicon.clicker.onclick=function()
        {
            var dp=this.p.p.detailPanel;
            if(dp.event.comments){
                if(dp.event.no!=this.p.commentsPanel.event.no){
                    this.p.commentsPanel.changeComments(dp.event);
                }
                this.p.commentsPanel.clock.toggle();
            }
            else
                getComments(dp.event);
        };
        return msgPanel;
    }
    function MsgTask()
    {
        var t=new Task('Msg');
        var mp=new MsgMainPanel();
        t.cmdUIComponents.addCtrl(mp,'msgPanel');
        t.mainPanel=mp;
        var btn=new LogBtn();
        t.cmdUIComponents.addCtrl(btn,'logBtn');
        t.logBtn=btn;
        btn=new AdminBtn();
        t.cmdUIComponents.addCtrl(btn,'adminBtn');
        t.adminBtn=btn;
        var loading=new MsgLoading();
        t.cmdUIComponents.addCtrl(loading,'loading');
        t.resetWait(3);
        t.onbegin.subscribe(function(){
                if(!window.curTask.loaded){
                    window.channelMng.beginChannel(true,'publicEvents');
                    PublicEventService.GetIndex(function(e){ PublicEventsIndex(e);});
                }
            }
        );
        return t;
    }
    function LogBtn()
    {
        var txt=window.channelMng.isLogIn? '注销':'登陆';
        var btn=new FloatButton(1100+Math.random()*50,10,100,60,txt,'40px 黑体','rgb(250,250,51)',true,1110,0,1200,180);
        btn.update=function(){
            this.clock.update();
            this.animation.update();
            this.txt=window.channelMng.isLogIn? '注销':'登陆';
        };
        btn.clicker.onclick=function()
        {
            window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
            if(!window.channelMng.isLogIn){
                DisplayLogWindow();
            }
            else{
                window.channelMng.logOut();
                this.p.txt='登陆';
            }
        };
        return btn;
    }
    function FloatButton(x,y,w,h,txt,font,backColor,isCmdClock,minx,miny,maxx,maxy)
    {
        var logbtn=new Button(x,y,w,h,txt,font,backColor,isCmdClock);
        logbtn.paintFun=function(ctx)
        {
            roundRectPath(this.w,this.h,10,ctx);
            ctx.fillStyle='rgba(10,10,10,0.7)';ctx.fill();
            var w=ctx.measureText(this.txt).width;
            ctx.textBaseline='hanging';
            ctx.font=this.font;
            ctx.fillStyle='white';
            ctx.fillText(this.txt, (this.w - w) / 6, (this.h - this.fh) / 2, this.w);
        };
        logbtn.clock=new simpleClock(1,1,quartEaseOut,1,0,true,isCmdClock);
        logbtn.update=function(ctx)
        {
            this.clock.update();
            this.animation.update();
        };
        logbtn.transFun=function(ctx)
        {
            this.x=this.animation.x;
            this.y=this.animation.y;
            var r=this.clock.value/this.clock.multiplier;
            ctx.transform(r,0,0,r,this.w/2*(1-r)+this.x,this.h/2*(1-r)+this.y);
        };
        logbtn.clicker=new clicker(logbtn);
        logbtn.animation=new rectFloatAniamtion(x,y,Math.random()*50-25,Math.random()*50-25,isCmdClock,maxx,maxy,minx,miny) ;
        logbtn.clock.p=logbtn;
        logbtn.clock.onend=function() {
            this.p.animation.start();
            window.curTask.decreseWait();
        };
        logbtn.clock.onreverse=function(){this.p.animation.stop(); window.curTask.decreseWait();}
        return logbtn;
    }
    function AdminBtn()
    {
        var btn=new FloatButton(1100+Math.random()*50,210,100,60,'投稿','40px 黑体','rgb(250,250,51)',true,1110,210,1200,410);
        btn.clicker.onclick=function()
        {
            window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
            if(!window.channelMng.isLogIn)DisplayLogWindow();
            else
            if(window.channelMng.checkRole("MsgAdmin"))
                DisplayMsgWindow("管理员","请点击<a target='_blank' href='MsgAdmin/EventMaker.aspx'>这里</a>进入");
            else
                DisplayMsgWindow('亲,欢迎投稿!','请参见网站信息中的投稿须知');
        };
        return btn;
    }
    function MsgLoading()
    {
        var l=new UIComponent(320,360,400,50);
        l.update=function(){
            this.clock.update();
        };
        l.font='48px 黑体';
        l.clock=new simpleClock(1,1,linear,1,0,true,true);
        l.txt='  精彩内容,即将揭晓!  ';
        l.paintFun=function(ctx){
            var g=ctx.createLinearGradient(0,0,this.w,this.h);
            g.addColorStop(0,'white');
            g.addColorStop(this.clock.value,'gray');
            g.addColorStop(1,'white');
            ctx.fillStyle=g;
            ctx.font=this.font;
            ctx.fillText(this.txt,0,0);
        };
        l.clock.start();
        l.visible=false;
        l.getter=window.loadingGetter;
        l.onchangeVisible=function()
        {
            if(this.visible) {
                this.txt=this.getter.get();
                window.ctx.font=this.font;
                var w=window.ctx.measureText(this.txt).width;
                this.x=(window.canvas.width-w)/1.9;
            }
        };
        return l;
    }
    function PublicMsgPanel()
    {
        var p=new Panel(10,100,580,300,'rgba(0,0,0,0)');
        p.clock=new simpleClock(0.5,1,null,Math.PI/2,0,true,false);
        p.paint=function(ctx)
        {
            if (!this.visible)   return;
            if(this.clock.value<Math.PI/2){
                ctx.save();
                var cos = Math.cos(this.clock.value);
                var sin = Math.sin(this.clock.value);
                var cl = this.w / 2;
                ctx.transform(cos, sin, 0, 1, cl * (1 - cos) + this.x, -cl * sin + this.y);
                ctx.beginPath();
                ctx.rect(0, 0, this.w + 3, this.h);
                ctx.closePath();
                ctx.clip();
                ctx.fillStyle = this.bc;
                ctx.fillRect(0, 0, this.w, this.h);
                for (var i = 0,item=this.controls[i]; item; item=this.controls[++i])
                    item.paint(ctx);
                ctx.restore();
            }
        };
        p.flip=function()
        {
            this.clock.toggle();
        };
        return p;
    }
    function EventDetailPanel()
    {
        var p=new Panel(310,5,680,780,'rgba(0,0,0,0.7)');
        var tl=new Label(0,10,'','35px "宋体"','white');
        tl.x= (p.w-tl.w)/2;
        p.addCtrl(tl,'title');
        var al=new Label(0,50,'','30px"宋体 "','white');
        al.clicker=new clicker(al);
        al.x=(p.w-al.w)/2;
        al.clock=new simpleClock(0.2,1,expoEaseInOut,10,-5,true,true);
        al.clock.start();
        p.addCtrl(al,'author');
        var body=new Article(5,85,770,580,'22px "宋体"',false,'22px "宋体"','white','white','rgba(0,0,0,0)',1.2);
        p.addCtrl(body,'body');
        p.clock=new simpleClock(0.5,1,null,Math.PI/2,0,true,false);
        p.clock.onreverse=function()
        {
            window.curTask.mainPanel.detailPanel.findByID('body').visible=true;

        };
        p.paint=function(ctx)
        {
            if (!this.visible)   return;
            if(this.clock.value<Math.PI/2){
                ctx.save();
                var cos = Math.cos(this.clock.value);
                var sin = Math.sin(this.clock.value);
                var cl = this.w / 2;
                ctx.transform(cos, sin, 0, 1, cl * (1 - cos) + this.x, -cl * sin + this.y);
                ctx.beginPath();
                ctx.rect(0, 0, this.w + 3, this.h);
                ctx.closePath();
                ctx.clip();
                ctx.fillStyle = this.bc;
                ctx.fillRect(0, 0, this.w, this.h);
                for (var i = 0,item=this.controls[i]; item; item=this.controls[++i])
                    item.paint(ctx);
                ctx.restore();
            }
        };
        p.flip=function()
        {
            this.clock.toggle();
            if(this.clock.t==0){
                this.findByID('body').visible=false;
                window.curTask.mainPanel.bc='rgba(0,0,0,0)';
            }
            else if(this.clock.t==1)
            {
                window.curTask.mainPanel.bc='rgba(10,10,10,0.3)';
            }
        };
        return p;
    }
    function viewEvent(event)
    {
        var dp=window.curTask.mainPanel.detailPanel;
        window.curTask.mainPanel.commentsPanel.clock.reverse();
        if(event)
        {
            dp.visible=true;
            var tl=dp.findByID('title');
            tl.changeText(event.title);
            tl.x= (dp.w-tl.w)/2;
            var al=dp.findByID('author');
            al.changeText(event.authorName);
            if(event.authorName=='展开评论'){
                al.transFun=function(ctx){ctx.translate(this.x+this.clock.value,this.y);};
                al.clicker.onclick=function(){
                    this.p.transFun=function(ctx){ctx.translate(this.x,this.y);};
                    window.curTask.mainPanel.commentBtn.clicker.onclick(); };
                al.fc='rgba(172,223,235,0.9)';
            }
            else{
                al.clicker.onclick=function(){};
                al.fc='white';
                al.transFun=function(ctx){ctx.translate(this.x,this.y);};
            }
            al.x=(dp.w-al.w)/2;
            dp.findByID('body').setText(event.text);
            window.curTask.mainPanel.findByID('commentBtn').enable=true;
        }
        else
        {
            dp.findByID('title').changeText('');
            dp.findByID('author').changeText('');
            dp.findByID('body').setText('');
            window.curTask.mainPanel.findByID('commentBtn').enable=false;
        }
        dp.event=event;
    }
    function changeBack(img)
    {
        if(img.naturalWidth==0)
            img=window.backImg;
        window.ctx.drawImage(img,0,0,window.canvas.width/window.scale,window.canvas.height/window.scale);
        window.backImgData=window.ctx.getImageData(0,0,window.canvas.width,window.canvas.height);
    }
    function PublicEventsIndex(cats)
    {
        window.eventsRecorder.load();
        var recorder=window.eventsRecorder;
        var serverEvents=[];var serverEvt,local;
        for(var j= 0,cat=cats[j];cat;cat=cats[++j]){
            var drop=new Drop(5,5+j*70,280,cat.name,'40px "黑体"','rgba(172,223,235,0.3)', 'white', 'rgba(172,223,235,0.3)', true);
            drop.category=cat;
            var h=5;
            for(var i= 0,item=cat.events[i];item;item=cat.events[++i]){
                var btn = new Button(5, h, 265, 45, item.mtitle, '28px "黑体"', 'rgb(0,0,0,0)', true, null, 'white',false);
                h += 47;local=undefined;
                serverEvt={no:item.no,updateTime:Date.parse(item.updateTime)};
                serverEvents.push(serverEvt);
                var eventTime=recorder.getEventTime(item.no);
                if(eventTime&& eventTime==serverEvt.updateTime){
                    local=recorder.getEvent(item.no);
                    if(local)
                        item=local;
                }
                if(!local){
                    drop.hb='rgba(172,223,235,0.7)';
                    drop.onheaderClick=function(){
                        this.hb='rgba(172,223,235,0.3)';
                    };
                    btn.fc='black';
                    btn.clock.restart();
                }
                drop.addCtrl(btn, item.no);
                btn.event=item;
                btn.clicker.onclick=viewEventDetail;
            }
            window.curTask.mainPanel.indexPanel.addCtrl(drop,'cat'+cat.no);
        }
        window.curTask.loaded=true;
        recorder.save(serverEvents);
        window.channelMng.endChannel();
    }
    function viewEventDetail()
    {
        if(this.p.event.title==undefined||this.p.event.title==null){
            window.channelMng.beginChannel(true,'eventDetail');
            PublicEventService.GetEvent(this.p.event.no,
                function(e,u){
                    if(e.ok){
                        u.event = e.data;
                        window.eventsRecorder.saveEvent(e.data);
                        viewEvent(e.data);
                        if(e.data.imgUrl)
                        {
                            var img=document.createElement('img');
                            img.style.display='none';
                            img.setAttribute('src', e.data.imgUrl);
                            u.img=img;
                            img.onload=function()
                            {
                                changeBack(this);
                            };
                            u.clock.reset();
                            u.clock.stop();
                        }
                        else
                            changeBack(window.backImg);
                    }
                    else DisplayMsgWindow("亲,出错了", e.msg);
                    window.channelMng.endChannel();
                },null,this.p);
        }
        else{
            var dp=window.curTask.mainPanel.detailPanel;
            if(dp.event!==this.p.event){
                viewEvent(this.p.event);
                if(this.p.event.imgUrl){
                    if(this.p.img)
                        changeBack(this.p.img);
                    else
                    {
                        var img=document.createElement('img');
                        img.style.display='none';
                        img.setAttribute('src', this.p.event.imgUrl);
                        img.btn=this.p;
                        img.onload=function()
                        {
                            changeBack(this);
                            this.btn.img=this;
                        };
                        img.onerror = function () {
                            changeBack(window.backImg);
                        }
                    }
                }
                else
                    changeBack(window.backImg);
            }
        }
        behaviorRecorder.record('pbeventClick'+this.p.event.no);
        return true;
    }
    function MusicBtn()
    {
        var btn=new UIComponent(80,50,50,50);
        btn.clicker=new clicker(btn);
        btn.paintFun=function(ctx)
        {
            ctx.fillStyle='rgba(0,0,0,0.3)';
            ctx.fillRect(0,0,this.w,this.h);
            ctx.translate(0,5);
            ctx.beginPath();
            ctx.moveTo(29.3, 4.6);
            ctx.bezierCurveTo(26.7, 3.3, 24.3, 2.1, 24.3, 1.3);
            ctx.bezierCurveTo(24.3, 0.6, 23.5, 0.0, 22.4, 0.0);
            ctx.bezierCurveTo(21.4, 0.0, 20.6, 0.6, 20.6, 1.3);
            ctx.lineTo(20.6, 29.5);
            ctx.bezierCurveTo(18.4, 28.4, 15.4, 27.7, 12.2, 27.7);
            ctx.bezierCurveTo(5.4, 27.7, 0.0, 30.5, 0.0, 34.0);
            ctx.bezierCurveTo(0.0, 37.5, 5.4, 40.3, 12.2, 40.3);
            ctx.bezierCurveTo(18.9, 40.3, 24.3, 37.5, 24.3, 34.0);
            ctx.bezierCurveTo(24.3, 33.9, 24.3, 33.9, 24.3, 33.8);
            ctx.bezierCurveTo(24.3, 33.7, 24.3, 33.7, 24.3, 33.6);
            ctx.lineTo(24.3, 17.6);
            ctx.bezierCurveTo(28.2, 17.7, 37.5, 18.5, 41.4, 23.3);
            ctx.bezierCurveTo(41.7, 23.7, 42.3, 24.0, 43.0, 24.0);
            ctx.bezierCurveTo(43.2, 24.0, 43.3, 23.9, 43.5, 23.9);
            ctx.bezierCurveTo(44.3, 23.8, 44.9, 23.3, 44.9, 22.7);
            ctx.bezierCurveTo(44.9, 12.2, 35.5, 7.6, 29.3, 4.6);
            ctx.moveTo(12.2, 37.8);
            ctx.bezierCurveTo(7.6, 37.8, 3.7, 36.1, 3.7, 34.0);
            ctx.bezierCurveTo(3.7, 32.0, 7.6, 30.2, 12.2, 30.2);
            ctx.bezierCurveTo(16.7, 30.2, 20.6, 32.0, 20.6, 34.0);
            ctx.bezierCurveTo(20.6, 36.1, 16.7, 37.8, 12.2, 37.8);
            ctx.moveTo(24.3, 15.1);
            ctx.lineTo(24.3, 5.2);
            ctx.bezierCurveTo(25.2, 5.7, 26.1, 6.1, 27.1, 6.6);
            ctx.bezierCurveTo(32.1, 9.1, 38.7, 12.3, 40.6, 18.7);
            ctx.bezierCurveTo(35.2, 15.7, 27.8, 15.2, 24.3, 15.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();
        };
        btn.enable=false;
        return btn;
    }
    function CommentBtn()
    {
        var btn=new UIComponent(140,50,50,50);
        btn.clicker=new clicker(btn);
        btn.spotter=new spotter(btn);
        btn.fc='white';
        btn.shadowBlur=0;
        btn.spotter.onmouseIn=function(){
            this.p.fc='yellow';
            this.p.shadowBlur=20;
        };
        btn.spotter.onmouseOut=function(){
            this.p.fc='white';
            this.p.shadowBlur=0;
        };
        btn.paintFun=function(ctx)
        {
            ctx.fillStyle='rgba(0,0,0,0.3)';
            ctx.fillRect(0,0,this.w,this.h);
            ctx.beginPath();
            ctx.moveTo(8.6, 18.6);
            ctx.lineTo(25.8, 18.6);
            ctx.lineTo(25.8, 16.3);
            ctx.lineTo(8.6, 16.3);
            ctx.lineTo(8.6, 18.6);
            ctx.moveTo(8.6, 23.3);
            ctx.lineTo(21.0, 23.3);
            ctx.lineTo(21.0, 21.0);
            ctx.lineTo(8.6, 21.0);
            ctx.lineTo(8.6, 23.3);
            ctx.moveTo(8.6, 14.0);
            ctx.lineTo(25.8, 14.0);
            ctx.lineTo(25.8, 11.6);
            ctx.lineTo(8.6, 11.6);
            ctx.lineTo(8.6, 14.0);
            ctx.moveTo(47.8, 28.5);
            ctx.bezierCurveTo(47.8, 20.7, 41.3, 14.4, 33.2, 14.0);
            ctx.bezierCurveTo(31.8, 6.1, 25.0, 0.0, 16.7, 0.0);
            ctx.bezierCurveTo(7.5, 0.0, 0.0, 7.6, 0.0, 16.9);
            ctx.bezierCurveTo(0.0, 23.2, 3.4, 28.7, 8.5, 31.6);
            ctx.bezierCurveTo(8.5, 33.0, 8.4, 34.7, 8.0, 36.6);
            ctx.bezierCurveTo(6.7, 41.8, 5.9, 42.1, 8.0, 41.7);
            ctx.bezierCurveTo(12.8, 40.7, 16.2, 36.7, 17.5, 33.7);
            ctx.bezierCurveTo(17.8, 33.7, 18.0, 33.7, 18.2, 33.7);
            ctx.bezierCurveTo(20.4, 39.2, 26.0, 43.1, 32.5, 43.1);
            ctx.bezierCurveTo(32.5, 43.1, 32.6, 43.1, 32.6, 43.1);
            ctx.bezierCurveTo(33.9, 45.5, 36.1, 48.1, 39.2, 48.8);
            ctx.bezierCurveTo(40.7, 49.1, 40.1, 48.9, 39.2, 44.2);
            ctx.bezierCurveTo(39.0, 43.4, 38.9, 42.5, 38.8, 41.8);
            ctx.bezierCurveTo(44.1, 39.5, 47.8, 34.4, 47.8, 28.5);
            ctx.moveTo(16.7, 31.4);
            ctx.bezierCurveTo(16.5, 31.4, 16.2, 31.4, 16.0, 31.4);
            ctx.bezierCurveTo(15.4, 33.6, 13.4, 37.3, 10.5, 38.6);
            ctx.bezierCurveTo(9.3, 39.1, 9.3, 39.3, 10.1, 36.0);
            ctx.bezierCurveTo(10.8, 33.2, 10.6, 30.8, 10.5, 30.1);
            ctx.bezierCurveTo(5.4, 27.8, 1.9, 22.7, 1.9, 16.9);
            ctx.bezierCurveTo(1.9, 8.8, 8.5, 2.3, 16.7, 2.3);
            ctx.bezierCurveTo(24.9, 2.3, 31.5, 8.8, 31.5, 16.9);
            ctx.bezierCurveTo(31.5, 24.9, 24.9, 31.4, 16.7, 31.4);
            ctx.closePath();
            ctx.strokeStyle =this.fc;
            ctx.shadowColor=this.fc;
            ctx.fillStyle=this.fc;
            ctx.shadowBlur=this.shadowBlur;
            ctx.stroke();
            ctx.fill();
        };
        return btn;
    }
    function PictureBtn(){
        var fb=new UIComponent(10,50,50,50);
        fb.clicker=new clicker(fb);
        fb.imgMode=false;
        fb.clicker.onclick=function(){
            if(window.curTask.mainPanel.detailPanel){
                var dp= window.curTask.mainPanel.detailPanel;
                if(dp.clock.t==0){
                    this.p.imgMode=true;
                    window.curTask.mainPanel.findByID('exitBtn').visible=false;
                    var logbtn=window.curTask.cmdUIComponents.findByID('logBtn');
                    logbtn.clock.reverse();
                    logbtn.enable=false;
                    window.curTask.adminBtn.clock.reverse();
                    window.curTask.adminBtn.enable=false;
                }
                else if(dp.clock.t==1){
                    this.p.imgMode=false;
                    window.curTask.mainPanel.findByID('exitBtn').visible=true;
                    var logbtn=window.curTask.cmdUIComponents.findByID('logBtn');
                    logbtn.clock.start();
                    logbtn.enable=true;
                    window.curTask.adminBtn.clock.start();
                    window.curTask.adminBtn.enable=true;
                }dp.flip();
                window.curTask.mainPanel.indexPanel.flip();
            }};
        fb.fc='white';
        fb.shadowBlur=0;
        fb.spotter=new spotter(fb);
        fb.spotter.onmouseIn=function(){
            this.p.fc='cornflowerblue';
            this.p.shadowBlur=20;
        };
        fb.spotter.onmouseOut=function(){
            this.p.fc='white';
            this.p.shadowBlur=0;
        };
        fb.paintFun=function(ctx){
            ctx.fillStyle='rgba(0,0,0,0.3)';
            ctx.fillRect(0,0,this.w,this.h);
            ctx.lineWidth=2;
            ctx.shadowBlur=this.shadowBlur;
            if(this.shadowBlur)ctx.shadowColor=this.fc;
            ctx.strokeStyle=this.fc;
            ctx.fillStyle=this.fc;
            if(!this.imgMode){
                ctx.beginPath();
                ctx.moveTo(48.5, 0.0);
                ctx.lineTo(5.0, 0.0);
                ctx.bezierCurveTo(2.2, 0.0, 0.0, 2.0, 0.0, 4.5);
                ctx.lineTo(0.0, 43.9);
                ctx.bezierCurveTo(0.0, 46.4, 2.2, 48.5, 5.0, 48.5);
                ctx.lineTo(48.5, 48.5);
                ctx.bezierCurveTo(51.3, 48.5, 53.5, 46.4, 53.5, 43.9);
                ctx.lineTo(53.5, 4.5);
                ctx.bezierCurveTo(53.5, 2.0, 51.3, 0.0, 48.5, 0.0);
                ctx.closePath();
                ctx.moveTo(5.0, 3.0);
                ctx.lineTo(48.5, 3.0);
                ctx.bezierCurveTo(49.4, 3.0, 50.2, 3.7, 50.2, 4.5);
                ctx.lineTo(50.2, 35.6);
                ctx.lineTo(44.5, 35.6);
                ctx.lineTo(38.6, 24.4);
                ctx.bezierCurveTo(38.4, 23.9, 37.9, 23.6, 37.3, 23.5);
                ctx.bezierCurveTo(36.7, 23.5, 36.2, 23.7, 35.8, 24.1);
                ctx.lineTo(32.0, 28.4);
                ctx.lineTo(22.9, 15.1);
                ctx.bezierCurveTo(22.6, 14.6, 22.0, 14.4, 21.4, 14.4);
                ctx.bezierCurveTo(20.8, 14.4, 20.3, 14.7, 20.0, 15.2);
                ctx.lineTo(9.0, 35.6);
                ctx.lineTo(3.3, 35.6);
                ctx.lineTo(3.3, 4.5);
                ctx.bezierCurveTo(3.3, 3.7, 4.1, 3.0, 5.0, 3.0);
                ctx.closePath();
                ctx.moveTo(12.7, 35.6);
                ctx.lineTo(21.7, 19.0);
                ctx.lineTo(30.4, 31.9);
                ctx.bezierCurveTo(30.7, 32.3, 31.2, 32.5, 31.7, 32.6);
                ctx.bezierCurveTo(32.3, 32.6, 32.8, 32.4, 33.1, 32.0);
                ctx.lineTo(36.8, 27.9);
                ctx.lineTo(40.8, 35.6);
                ctx.lineTo(12.7, 35.6);
                ctx.closePath();
                ctx.moveTo(48.5, 45.4);
                ctx.lineTo(5.0, 45.4);
                ctx.bezierCurveTo(4.1, 45.4, 3.3, 44.8, 3.3, 43.9);
                ctx.lineTo(3.3, 38.6);
                ctx.lineTo(50.2, 38.6);
                ctx.lineTo(50.2, 43.9);
                ctx.bezierCurveTo(50.2, 44.8, 49.4, 45.4, 48.5, 45.4);
                ctx.moveTo(38.5, 19.7);
                ctx.bezierCurveTo(42.1, 19.7, 45.1, 17.0, 45.1, 13.6);
                ctx.bezierCurveTo(45.1, 10.3, 42.1, 7.6, 38.5, 7.6);
                ctx.bezierCurveTo(34.8, 7.6, 31.8, 10.3, 31.8, 13.6);
                ctx.bezierCurveTo(31.8, 17.0, 34.8, 19.7, 38.5, 19.7);
                ctx.closePath();
                ctx.moveTo(38.5, 10.6);
                ctx.bezierCurveTo(40.3, 10.6, 41.8, 12.0, 41.8, 13.6);
                ctx.bezierCurveTo(41.8, 15.3, 40.3, 16.7, 38.5, 16.7);
                ctx.bezierCurveTo(36.6, 16.7, 35.1, 15.3, 35.1, 13.6);
                ctx.bezierCurveTo(35.1, 12.0, 36.6, 10.6, 38.5, 10.6);
                ctx.closePath();
                ctx.fill();
            }
            else
            {
                roundRectPath(this.w,this.h,5,ctx);
                ctx.stroke();
                ctx.moveTo(0,this.h/4);
                ctx.lineTo(this.w,this.h/4);
                ctx.moveTo(0,this.h/2);
                ctx.lineTo(this.w,this.h/2);
                ctx.moveTo(0,this.h/2);
                ctx.lineTo(this.w,this.h/2);
                ctx.moveTo(0,this.h/4*3);
                ctx.lineTo(this.w,this.h/4*3);
                ctx.stroke();
            }
        };
        return fb;
    }
    function RefreshBtn(){
        var ui=new UIComponent(50,10,30,30);
        ui.paintFun=function(ctx){
            ctx.beginPath();
            ctx.moveTo(26.1, 20.0);
            ctx.bezierCurveTo(24.8, 19.1, 23.2, 19.2, 22.4, 20.2);
            ctx.bezierCurveTo(19.7, 23.8, 14.0, 24.1, 9.7, 20.9);
            ctx.bezierCurveTo(5.4, 17.7, 4.1, 12.2, 6.8, 8.6);
            ctx.bezierCurveTo(9.3, 5.3, 14.3, 4.8, 18.5, 7.3);
            ctx.lineTo(16.2, 10.3);
            ctx.bezierCurveTo(16.0, 10.6, 16.0, 11.0, 16.3, 11.4);
            ctx.bezierCurveTo(16.4, 11.5, 16.5, 11.6, 16.6, 11.7);
            ctx.bezierCurveTo(16.8, 11.9, 17.1, 12.0, 17.4, 12.0);
            ctx.lineTo(27.5, 11.8);
            ctx.bezierCurveTo(27.8, 11.8, 28.1, 11.7, 28.2, 11.5);
            ctx.bezierCurveTo(28.4, 11.3, 28.4, 11.0, 28.3, 10.7);
            ctx.lineTo(25.6, 0.9);
            ctx.bezierCurveTo(25.5, 0.5, 25.2, 0.2, 24.7, 0.1);
            ctx.bezierCurveTo(24.3, -0.1, 23.9, 0.0, 23.7, 0.3);
            ctx.lineTo(21.4, 3.4);
            ctx.bezierCurveTo(14.7, -0.9, 6.2, -0.2, 2.2, 5.2);
            ctx.bezierCurveTo(-2.1, 10.9, 0.0, 19.6, 6.9, 24.7);
            ctx.bezierCurveTo(13.7, 29.8, 22.7, 29.4, 27.0, 23.7);
            ctx.bezierCurveTo(27.8, 22.6, 27.4, 21.0, 26.1, 20.0);
            ctx.closePath();
            ctx.fillStyle='white';
            ctx.fill();
        }
        ui.clicker=new clicker(ui);
        ui.clicker.onclick=function(){
            window.curTask.mainPanel.indexPanel.clearCtrls();
            window.curTask.mainPanel.commentsPanel.clock.reverse();
            viewEvent();
            window.curTask.loaded=false;
            window.channelMng.beginChannel(true,'publicEvents');
            PublicEventService.GetIndex(function(e){ PublicEventsIndex(e);});
        };
        return ui;
    }
    function CommentsPanel()
    {
        var p=new Panel(310,0,680,780,'rgba(255,255,255,0.7)');
        p.clock=new simpleClock(0.5,1,expoEaseInOut,690,-685,true);
        p.update=function(){
            this.clock.update();
            this.y=this.clock.value;
            for (var i = 0,item=this.controls[i]; item;item=this.controls[++i])
                item.update();
        };
        p.clock.onend=function(){
            window.curTask.mainPanel.detailPanel.visible=false;
        };
        p.clock.onreverse=function(){
            window.curTask.mainPanel.detailPanel.visible=true;
        };
        var title=new Label(0,5,'在这里写评论','30px "黑体"','black');
        var cp=new Panel(0,40,500,780,'rgba(0,0,0,0)');
        var tb=new TextBlock(5,570,600,100,'18px "宋体"','black','rgba(255,255,255,0.7)');
        var l=new Label(5,545,'我来说说','22px "黑体"');
        var addbtn=new Button(610,635,70,40,'发表','25px "黑体"','rgba(172,223,235,0.7)');
        var anobtn=new Button(690,635,70,40,'匿名','25px "黑体"','rgba(172,223,235,0.7)');
        var sort=new Select(610,545,160,'25px "黑体"',['较新回复','最少支持','最多支持','较老回复'],'rgba(172,223,235,0.7)','black','回复排序方式','black');
        sort.onSelected=function(num){
            var cms=this.p.cp.controls;
            switch (num){
              case 0:
                  cms.sort(function(a,b){
                      return a.comment.setDate> b.comment.setDate? -1:1;
                  });
                  break;
              case 1:
                  cms.sort(function(a,b){
                      return a.comment.score<b.comment.score? -1:1;
                  });
                  break;
              case 2:
                  cms.sort(function(a,b){
                      return a.comment.score> b.comment.score? -1:1;
                  });
                  break;
              case 3:
                  cms.sort(function(a,b){
                      return a.comment.setDate< b.comment.setDate? -1:1;
                  });
                  break;
          }
            for(var i=0;i<cms.length;i++)
                cms[i].y=i*110+5;

        };
        anobtn.visible=false;
        p.addCtrl(l,'mc');
        p.addCtrl(title,'title');
        p.addCtrl(cp,'cp');
        p.addCtrl(tb,'tb');
        p.addCtrl(addbtn,'addBtn');
        p.addCtrl(anobtn,'anoBtn');
        p.addCtrl(sort,'sortSelect');
        p.commit=addbtn;
        p.tb=tb;
        anobtn.clicker.onclick=function(){
            var cp=this.p.p;
            var event=cp.event;
            if(!event || !cp.commit.comment) return;
            var msg=cp.commit.comment.anonymouse? '要恢复显示您的大名?':'你要成为一个匿名回答者?';
            DisplayConfirmWindow("确定修改?",msg,function(c){
                var js=c;
                js.body=p.tb.getText().replace(/\n{2,}/g,"\n");
                js.eventNo=event.no;
                updateComment(js,event,true);
            },cp.commit.comment);
        };
        addbtn.clicker.onclick=function()
        {
            if(!window.channelMng.isLogIn){
              DisplayLogWindow();
              return true;
            }
            var cp=this.p.p;
            var event=cp.event;
            if(!event) return true;
            else if(event.mycomment)
                DisplayConfirmWindow("确定修改?","你确定修改你的回复?",function(c){
                    var js=c;
                    js.body=p.tb.getText().replace(/\n{2,}/g,"\n");
                    js.eventNo=event.no;
                    updateComment(js,event);
                },event.mycomment);
            else
                DisplayConfirmWindow("确定发布?","同一篇文章一个人只能发表一次回复,但是可以任意修改",function(event){
                    var js=new Msg.CommentJS();
                    js.body=p.tb.getText().replace(/\n{2,}/g,"\n");
                    addComment(js,event);
                },event);
        };
        title.x=(p.w-title.w)/2;
        p.title=title;
        p.cp=cp;
        p.anoBtn=anobtn;
        p.bestClock=new simpleClock(0.5,1,linear,30,0,true,true);
        p.bestClock.start();
        p.changeComments=function(event,mycomment)
        {
            this.title.changeText(event.title);
            title.x=(p.w-title.w)/2;
            this.cp.clearCtrls();
            for(var i= 0,comment=event.comments[i];comment;comment=event.comments[++i]){
                this.cp.addCtrl(new CommentExpand(i*110+5,comment));
                comment.score=comment.good+comment.best*3;
            }

            this.event=event;
            if(!event.mycomment && mycomment)
                event.mycomment=mycomment;
            if(event.mycomment)
            {
                this.commit.txt='修改';
                this.commit.comment=event.mycomment;
                this.tb.setText(event.mycomment.body);
                this.anoBtn.visible=true;
                if(event.mycomment.anonymouse)
                    this.anoBtn.txt='实名';
                else
                    this.anoBtn.txt='匿名';
            }
            else{
                this.commit.txt='发表';
                this.anoBtn.visible=false;
                this.tb.setText('');
            }
        };
        return p;
    }
    function CommentExpand(y,comment)
    {
        var ep=new Expand(5,y,750,105,'rgba(0,0,0,0)',720,5,25,25,'black');
        var nl=new Label(8,0,comment.anonymouse?'匿名者':comment.authorName,'bold 22px "宋体"',comment.color);
        var dl=new Label(nl.w+25,2,comment.dateString +":",'20px "黑体"');
        var body=new Article(5,30,750,150,'18px "宋体"',false,'18px "宋体"','black','black','rgba(0,0,0,0)');
        var good=new GoodBtn(comment.good);
        var best=new BestBtn(comment.best);
        body.drager=undefined;
        body.wheeler=undefined;
        body.setText(comment.body);
        body.h = body.getMaxH() + 3;
        body.setMaxLine(4);
        ep.addCtrl(nl,'name');
        ep.addCtrl(dl,'date');
        ep.addCtrl(body,'body');
        ep.drager=undefined;
        ep.addCtrl(good,'goodBtn');
        ep.addCtrl(best,'bestBtn');
        ep.goodBtn=good;
        ep.bestBtn=best;
        ep.changeEval=changeEval;
        ep.comment=comment;
        ep.body=body;
        ep.onheaderClick=function(){
            if(this.expanded)
               this.body.setMaxLine();
            else
                this.body.setMaxLine(4);
        };
        ep.changeEval(comment.authorEval,comment.goodCount,comment.bestCount);
        return ep;
    }
    function changeEval(evalType,goodCount,bestCount)
    {
        var good=this.goodBtn;
        var best=this.bestBtn;
        if(goodCount!=undefined)good.count=goodCount;
        if(bestCount!=undefined)best.count=bestCount;
        if(!evalType)
        {
            good.selected=false;
            best.selected=false;
            best.clicker.onclick=addEval;
            good.clicker.onclick=addEval;
        }
        else if(evalType==1){
            good.selected=true;
            best.selected=false;
            good.clicker.onclick=deleteEval;
            best.clicker.onclick=function(){};
        }
        else
        {
            best.selected=true;
            good.selected=false;
            best.clicker.onclick=deleteEval;
            good.clicker.onclick=function(){};
        }
    }
    function addEval()
    {
        var cp=this.p.p;
        var comment=cp.comment;
        var isBest=this.p.isBest;
        if(!window.channelMng.isLogIn) DisplayLogWindow();
        else
        {
            window.channelMng.beginChannel(true,'addeval');
            PublicEventService.AddEval(comment.no, isBest,
                function(e,u){
                    if(e.ok)
                        u.changeEval(e.data.evalType, e.data.gcount, e.data.bcount);
                    else
                        DisplayMsgWindow('Sorry!', e.msg);
                    window.channelMng.endChannel();
                }, null, cp);
        }
    }
    function deleteEval(){
        var cp=this.p.p;
        var comment=cp.comment;
        if(!window.channelMng.isLogIn) DisplayLogWindow();
        else
        {
            window.channelMng.beginChannel(true,'deleteeval');
            PublicEventService.DeleteEval(comment.no,
                function(e,u){
                    if(e.ok)u.changeEval(null, e.data.good, e.data.best);
                    else
                        DisplayMsgWindow('Sorry!', e.msg);
                    window.channelMng.endChannel();
                }
                , null, cp);
        }
    }
    function getComments(event) {
        window.channelMng.beginChannel();
        PublicEventService.GetComments(event.no, 0, function (e, u) {
            if (e.ok) {
                u.comments = e.data.comments;
                window.curTask.mainPanel.commentsPanel.changeComments(u, e.data.mycomment);
                window.curTask.mainPanel.commentsPanel.clock.start();
            }
            else
                DisplayMsgWindow("囧", e.msg);
            window.channelMng.endChannel();
        }, null, event);
 }
    function updateComment(js,event,reversAnonymous)
    {
        if (window.channelMng.isLogIn) {
            window.channelMng.beginChannel();
            js.body.trimEnd();
            js.eventNo=event.no;
            if(reversAnonymous)
                js.anonymouse=!js.anonymouse;
            PublicEventService.UpdateComment(js, function (e, u) {
                if (e.ok) {
                    for (var i = 0; i < u.comments.length; i++)
                        if (u.comments[i].no == e.data.no) {u.comments[i]=e.data;break;}
                    window.curTask.mainPanel.commentsPanel.changeComments(u, e.data);
                }
                else
                    DisplayMsgWindow("囧", e.msg);
                window.channelMng.endChannel();
            }, null, event);
        }
        else
            DisplayLogWindow();
    }
    function addComment(js,event) {
        if (window.channelMng.isLogIn) {
            window.channelMng.beginChannel();
            js.body.trimEnd();
            js.eventNo=event.no;
            PublicEventService.AddComment(js, function (e, u) {
                if (e.ok) {
                    u.comments.push(e.data);
                    window.curTask.mainPanel.commentsPanel.changeComments(u, e.data);
                }
                else
                    DisplayMsgWindow("囧", e.msg);
                window.channelMng.endChannel();
            }, null, event);
        }
        else
            DisplayLogWindow();
    }
    function GoodBtn(g)
    {
        var btn=new UIComponent(600,3,30,30);
        btn.clicker=new clicker(btn);
        btn.selected=false;
        btn.count=g;
        btn.isBest=false;
        btn.paintFun=function(ctx){
            ctx.beginPath();
            ctx.moveTo(28.9, 12.3);
            ctx.bezierCurveTo(28.9, 10.9, 27.7, 9.7, 26.3, 9.7);
            ctx.lineTo(19.3, 9.7);
            ctx.bezierCurveTo(19.4, 8.7, 19.6, 7.0, 19.6, 5.3);
            ctx.bezierCurveTo(19.6, 2.0, 17.8, 0.5, 16.0, 0.5);
            ctx.bezierCurveTo(13.8, 0.5, 13.8, 2.8, 13.8, 5.8);
            ctx.bezierCurveTo(13.8, 7.9, 10.5, 11.1, 8.8, 12.6);
            ctx.bezierCurveTo(8.4, 12.4, 8.0, 12.3, 7.6, 12.3);
            ctx.lineTo(3.2, 12.3);
            ctx.bezierCurveTo(1.7, 12.3, 0.5, 13.5, 0.5, 15.0);
            ctx.lineTo(1.4, 22.9);
            ctx.bezierCurveTo(1.6, 24.3, 2.6, 25.5, 4.1, 25.5);
            ctx.lineTo(7.6, 25.5);
            ctx.bezierCurveTo(8.8, 25.5, 9.7, 24.8, 10.1, 23.8);
            ctx.lineTo(11.5, 24.5);
            ctx.bezierCurveTo(11.7, 24.6, 11.8, 24.6, 12.0, 24.6);
            ctx.lineTo(23.8, 24.6);
            ctx.bezierCurveTo(25.2, 24.6, 26.3, 23.5, 26.3, 22.2);
            ctx.bezierCurveTo(26.3, 21.8, 26.2, 21.5, 26.0, 21.2);
            ctx.bezierCurveTo(26.7, 20.7, 27.1, 20.0, 27.1, 19.1);
            ctx.bezierCurveTo(27.1, 18.7, 27.0, 18.4, 26.9, 18.0);
            ctx.bezierCurveTo(27.6, 17.6, 28.0, 16.8, 28.0, 15.9);
            ctx.bezierCurveTo(28.0, 15.4, 27.9, 14.9, 27.7, 14.6);
            ctx.bezierCurveTo(28.4, 14.1, 28.9, 13.3, 28.9, 12.3);
            ctx.moveTo(23.8, 22.9);
            ctx.lineTo(12.2, 22.9);
            ctx.lineTo(10.3, 21.9);
            ctx.bezierCurveTo(10.3, 21.9, 10.2, 14.2, 10.0, 13.9);
            ctx.bezierCurveTo(11.6, 12.5, 15.6, 8.8, 15.6, 5.8);
            ctx.bezierCurveTo(15.6, 4.0, 15.6, 2.3, 16.0, 2.3);
            ctx.bezierCurveTo(16.9, 2.3, 17.8, 3.3, 17.8, 5.3);
            ctx.bezierCurveTo(17.8, 7.8, 17.4, 10.4, 17.4, 10.4);
            ctx.bezierCurveTo(17.3, 10.7, 17.4, 11.0, 17.6, 11.2);
            ctx.bezierCurveTo(17.8, 11.4, 18.0, 11.5, 18.3, 11.5);
            ctx.lineTo(26.3, 11.5);
            ctx.bezierCurveTo(26.7, 11.5, 27.1, 11.9, 27.1, 12.3);
            ctx.bezierCurveTo(27.1, 12.8, 26.7, 13.2, 26.3, 13.2);
            ctx.lineTo(25.3, 13.2);
            ctx.bezierCurveTo(24.8, 13.2, 24.4, 13.6, 24.4, 14.1);
            ctx.bezierCurveTo(24.4, 14.6, 24.8, 15.0, 25.3, 15.0);
            ctx.lineTo(25.4, 15.0);
            ctx.bezierCurveTo(25.4, 15.0, 25.4, 15.0, 25.4, 15.0);
            ctx.bezierCurveTo(25.9, 15.0, 26.3, 15.4, 26.3, 15.9);
            ctx.bezierCurveTo(26.3, 16.3, 25.9, 16.7, 25.4, 16.7);
            ctx.lineTo(24.8, 16.7);
            ctx.bezierCurveTo(24.7, 16.7, 24.7, 16.7, 24.7, 16.7);
            ctx.bezierCurveTo(24.7, 16.7, 24.7, 16.7, 24.7, 16.7);
            ctx.lineTo(24.4, 16.7);
            ctx.bezierCurveTo(23.9, 16.7, 23.5, 17.1, 23.5, 17.6);
            ctx.bezierCurveTo(23.5, 18.1, 23.9, 18.5, 24.4, 18.5);
            ctx.lineTo(24.7, 18.5);
            ctx.bezierCurveTo(25.1, 18.5, 25.4, 18.8, 25.4, 19.1);
            ctx.bezierCurveTo(25.4, 19.5, 25.1, 19.8, 24.7, 19.8);
            ctx.lineTo(23.8, 19.8);
            ctx.bezierCurveTo(23.8, 19.8, 23.8, 19.8, 23.8, 19.8);
            ctx.bezierCurveTo(23.8, 19.8, 23.8, 19.8, 23.8, 19.8);
            ctx.bezierCurveTo(23.3, 19.8, 22.9, 20.2, 22.9, 20.7);
            ctx.bezierCurveTo(22.9, 21.2, 23.3, 21.6, 23.8, 21.6);
            ctx.bezierCurveTo(24.2, 21.6, 24.5, 21.8, 24.5, 22.2);
            ctx.bezierCurveTo(24.5, 22.6, 24.2, 22.9, 23.8, 22.9);
            ctx.closePath();
            if(this.selected)
                ctx.fillStyle = "rgb(255, 255, 47)";
            else
                ctx.fillStyle='white';
            ctx.fill();
            ctx.textBaseline='hanging';
            ctx.font='25px "Arial"';
            ctx.fillText(this.count,35,0,40);
        };
        return btn;
    }
    function BestBtn(g)
    {
        var btn=new UIComponent(660,3,30,30);
        btn.clicker=new clicker(btn);
        btn.selected=false;
        btn.isBest=true;
        btn.count=g;
        btn.paintFun=function(ctx){
            ctx.beginPath();
            ctx.moveTo(20.7, 0.0);
            ctx.bezierCurveTo(14.4, 0.0, 13.5, 4.8, 13.5, 4.8);
            ctx.lineTo(13.3, 4.8);
            ctx.bezierCurveTo(13.3, 4.8, 12.4, 0.0, 6.1, 0.0);
            ctx.bezierCurveTo(-0.2, 0.0, -2.9, 9.6, 4.3, 14.3);
            ctx.bezierCurveTo(12.4, 19.7, 13.3, 22.9, 13.3, 22.9);
            ctx.lineTo(13.5, 22.9);
            ctx.bezierCurveTo(13.5, 22.9, 14.4, 19.7, 22.5, 14.3);
            ctx.bezierCurveTo(29.6, 9.6, 27.0, 0.0, 20.7, 0.0);
            ctx.closePath();
            if(this.selected){
                ctx.fillStyle = "rgb(243, 42, 10)";
                this.p.p.p.bestClock.update();
                ctx.shadowBlur=this.p.p.p.bestClock.value;
                ctx.shadowColor='orange';
            }
            else
                ctx.fillStyle='white';
            ctx.fill();
            ctx.textBaseline='hanging';
            ctx.font='25px "Arial"';
            ctx.fillText(this.count,35,0,40);
        };
        return btn;
    }

}
//tools
{
    var loadingGetter=
    {
        important:['没有一个冬天不可逾越','在所有人事已非的景色里，我最喜欢你','年华似水匆匆一瞥，多少岁月轻描淡写','将来的你一定会感激现在拼命的你','那些不能将你打败的，必将使你更加强大','相信我，你并不孤独'],
        normal:['加载中,请稍后','亲,等一下就好哦','你今天吃早餐了吗','精彩内容稍后呈现','吾日三省吾身:省钱,省电,省流量','嘿咻,嘿咻...'],
        load:function(){
            if(window.localStorage)
            {
                var local= JSON.parse(window.localStorage.getItem('normalLoadings'));
                if(!local)local=[];
                local.forEach(function(item){if(loadingGetter.normal.indexOf(item)<0)loadingGetter.normal.push(item);});
                local=JSON.parse(window.localStorage.getItem('normalLoadings'));
                if(!local) local=[];
                local.forEach(function(item){if(loadingGetter.important.indexOf(item)<0)loadingGetter.important.push(item);});
            }
            if(window.localStorage)
            {
                window.localStorage.setItem('normalLoadings',JSON.stringify(this.normal));
                window.localStorage.setItem('importantLoadings',JSON.stringify(this.important));
            }
            this.interval=5;
        },
        interval:5,
        get:function()
        {
            if(this.important.length>0)
            {
                var w=this.important[parseInt(Math.random()*this.important.length)];
                this.important.remove(w);
                return w;
            }
            else{
                    if(this.interval==0)
                        this.load();
                    else
                        this.interval--;
                return this.normal[parseInt(Math.random()*this.normal.length)];
            }
        }
    };
    var eventsRecorder = {
        _events:[],
        _loaded: false,
        save: function (events) {
            var unuse=true;var key;
            if(events) this._events=events;
            for(var k= 0;k<window.localStorage.length;k++){
                key=window.localStorage.key(k);
                if(key.match(/pbEvent\d+/)){
                    unuse=true;
                    var no=parseInt(key.replace('pbEvent',''));
                    for(var i= 0,e=this._events[i];e;e=this._events[++i])
                      if(e.no==no){
                          unuse=false;break;
                      }
                    if(unuse) window.localStorage.removeItem(key);
                }
            }
           window.localStorage.setItem('pbEvents',JSON.stringify(this._events));
        },
        load: function () {
            if (this._loaded) return this;
            if (localStorage.pbEvents) {
                 this._events=JSON.parse(window.localStorage.getItem('pbEvents'));
            }
            this._loaded=true;
            return this._events;
        },
        getEventTime: function (eventNo) {
           for(var i= 0,e=this._events[i];e;e=this._events[++i])
               if(e.no==eventNo) return e.updateTime;
            return undefined;
        },
        putEventTime: function (no,time) {
            for(var i= 0;i<this._events.length;i++)
                if(this._events[i].no==no){
                    this._events[i].updateTime=time;
                    return true;
                }
            this._events.push({no:no,updateTime:time});
            return true;
        },
        saveEvent:function(event){
          window.localStorage.setItem('pbEvent'+event.no,JSON.stringify(event));
        },
        getEvent:function(eventNo){
            return JSON.parse(window.localStorage.getItem('pbEvent'+eventNo));
        }
    };
    var tipWindow={
        tips:[{title:'读图模式',msg:'点击"心路"上面的第 1 个按钮<br/>可以查看背景图片哦!'},
            {title:'查看讨论',msg:'点击"心路"上面的第 3 个按钮<br/>发表和查看大家的讨论吧!'},
            {title:'点赞狂魔',msg:'你的支持是对作者的肯定和感谢<br/>记得对你喜欢的评论点赞哦!'},
            {title:'联系我们',msg:'我们希望听到你的反馈,请发送邮件到<br/><b>xlbaishushu@163.com</b>'}],
        show:function(logIn){
            var i=parseInt(window.localStorage.tipIndex);
            if(isNaN(i))i=0;
            else if(i>=this.tips.length)i=0;
            var tip=this.tips[i];
            if(logIn)DisplayMsgWindow(tip.title,tip.msg);
            else DisplayConfirmWindow(tip.title,tip.msg+'<br/>要登录吗',DisplayLogWindow);
            window.localStorage.tipIndex=++i;
        },
        addTip:function(title,msg){
            this.tips.push({title:title,msg:msg});
        }

    };
    var behaviorRecorder={
        _ids:[],
        _loaded:false,
        _lastSubmit:undefined,
        record:function(key){
            this.load();
            if(this._ids.indexOf(key)==-1){
                if(!window.localStorage.behaviorKeys)window.localStorage.behaviorKeys=key;
                else window.localStorage.behaviorKeys=window.localStorage.behaviorKeys+'\t'+key;
                this._ids.push(key);
            }
            var i=parseInt(window.localStorage.getItem(key));
            if(isNaN(i))i=0;
            window.localStorage.setItem(key,++i);
        },
        load:function(submit){
            if(!this._loaded){
                this._lastSubmit=window.localStorage.lastSubmit?new Date(parseInt(window.localStorage.lastSubmit)):new Date(1);
                if(window.localStorage.behaviorKeys)
                    this._ids=window.localStorage.behaviorKeys.split('\t');
                else {
                    this._ids=[];
                }
                this._loaded=true;
                if(submit)
                    this.submit();
            }

        },
        submit:function()
        {
            if(Date.now()-this._lastSubmit>1000*60*60*24*3)
            {
                var pbs=[];var b, c;
                for(var i= 0,key=this._ids[i];key;key=this._ids[++i]){
                    if(key.indexOf('pbeventClick')==0){
                        c= window.localStorage.getItem(key);
                        if(c==0)continue;
                        b= new Msg.BehaviorJS();
                        b.click=c;
                        b.type=0;
                        b.eventNo=key.replace('pbeventClick','');
                        pbs.push(b);
                    }}
                if(pbs.length>0)
                    PublicEventService.SubmitBehaviors(pbs, function (e,pbs) {
                        if(e.ok){
                            behaviorRecorder._lastSubmit=Date.now();
                            window.localStorage.lastSubmit=behaviorRecorder._lastSubmit;
                            for(var i= 0,b=pbs[i];b;b=pbs[++i])
                                window.localStorage.removeItem('pbeventClick'+ b.eventNo);
                        } }, function (e) {
                    },pbs);
                else{
                        this._lastSubmit=Date.now();
                        window.localStorage.lastSubmit=this._lastSubmit;
                    }

            }
        }
    }

}