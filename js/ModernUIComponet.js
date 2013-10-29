/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-27
 * Time: 下午2:46
 * To change this template use File | Settings | File Templates.
 */
//RecruitPart
{
    function RecruitPanel() {
        var rp = new Panel(0, 0, 720, 1280, 'rgba(0,0,0,0)');
        rp.clock = new clock(1, 0, 1, true, 1, quartEaseInOut, 1469, 1, 0, true);
        rp.paintFun = function (ctx) {
            ctx.beginPath();
            ctx.arc(this.w / 2, this.h / 2, this.clock.value, 0, 6.3, true);
            ctx.closePath();
            ctx.clip();
        }
        rp.update = function () {
            this.clock.update();
            for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
                item.update();
        }
        rp.clock.finished.subscribe(function () {
            if (window.curTask)window.curTask.decreseWait();
        })
        rp.clicker.fire = function (ctx, e) {
            ctx.beginPath();
            ctx.rect(1200, 25, 45, 35);
            ctx.closePath();
            if (ctx.isPointInPath(e.ox, e.oy)) {
                window.curTask.exit();
                this.p.clock.reverse();
            }
            else {
                this.pathFun(ctx);
                if (ctx.isPointInPath(e.ox, e.oy))
                    return  this.onclick(e);
                else
                    return false;
            }
        }
        return rp;

    }
     function sortDetailItems(i)
     {
         var items = window.curTask.detailPanel.controls;
         switch (i)
         {
             case 0:
                 items.sort(function(a,b)
                 {
                     return b.ad.Price- a.ad.Price;
                 })
                 break;
             case 1:
                 items.sort(function (a, b) {
                     return a.ad.EndDate -b.ad.EndDate ;
                 })
                 break;
             case 2:
                 items.sort(function (a, b) {
                     return b.ad.SetDate - a.ad.SetDate;
                 })
                 break;
             case 3:
                 items.sort(function (a, b) {
                     return b.ad.ExpMins - a.ad.ExpMins;
                 })
                 break;
             case 4:
                 items.sort(function (a, b) {
                     return a.ad.ExpMins - b.ad.ExpMins;
                 })
                 break;
             case 5:
                 items.sort(function (a, b) {
                     return a.ad.Price - b.ad.Price;
                 })
                 break;
         }
         for (var j = 0; j < items.length; j++)
             items[j].y = j * 90;
     }
    function RecruitDetailPanel() {
        var rdp = new Panel(512, 16, 760, 760, 'rgba(0,0,0,0)');
        var gradient = ctx.createLinearGradient(4.0, 346.8, 760.2, 346.8);
        gradient.addColorStop(0.00, "rgb(239, 64, 54)");
        gradient.addColorStop(0.12, "rgb(240, 77, 47)");
        gradient.addColorStop(0.93, "rgb(240, 90, 40)");
        rdp.gradient = gradient;
        var p = new Panel(23, 125, 550, 760, 'rgba(0,0,0,0)');
        rdp.addCtrl(p, 'panel');
        rdp.panel = p;
        var rangeSelect = new Select(85, 15, 250, '40px 幼圆', ["价格较高", "即将结束", "最新开始", "时间较长", "时间较短", "价格较低"], 'orange', 'black', '实验排序');
        var label=new Label(85,70,'请在左边选择实验的日期和时间','30px 幼圆');
        rangeSelect.onSelected=sortDetailItems;
        rdp.addCtrl(rangeSelect, 'rangeSelect');
        rdp.addCtrl(label,'label');
        rdp.paintFun = function (ctx) {
            recruitDetailPanelPaint(ctx, this.gradient);
        }
        function recruitDetailPanelPaint(ctx, gradient) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(760.2, 675.4);
            ctx.bezierCurveTo(760.2, 683.2, 754.8, 689.6, 748.2, 689.6);
            ctx.lineTo(16.0, 689.6);
            ctx.bezierCurveTo(9.4, 689.6, 4.0, 683.2, 4.0, 675.4);
            ctx.lineTo(4.0, 18.1);
            ctx.bezierCurveTo(4.0, 10.3, 9.4, 4.0, 16.0, 4.0);
            ctx.lineTo(748.2, 4.0);
            ctx.bezierCurveTo(754.8, 4.0, 760.2, 10.3, 760.2, 18.1);
            ctx.lineTo(760.2, 675.4);
            ctx.closePath();
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.lineWidth = 8.0;
            ctx.strokeStyle = "rgb(112, 29, 45)";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(22.8, 116.0);
            ctx.lineTo(741.4, 116.0);
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fill();
            ctx.strokeStyle = "rgb(107, 31, 32)";
            ctx.stroke();
            ctx.font = "40.0px '幼圆'";
            ctx.fillText("筛", 31.0, 51.1);
            ctx.lineWidth = 1.0;
            ctx.strokeStyle = "rgb(5, 5, 5)";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText("筛", 31.0, 51.1);
            ctx.fillText("选", 31.0, 93.0);
            ctx.strokeText("选", 31.0, 93.0);
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(742.6, 38.5);
            ctx.bezierCurveTo(742.6, 43.9, 738.2, 48.3, 732.7, 48.3);
            ctx.lineTo(707.9, 48.3);
            ctx.bezierCurveTo(702.4, 48.3, 698.0, 43.9, 698.0, 38.5);
            ctx.lineTo(698.0, 24.7);
            ctx.bezierCurveTo(698.0, 19.3, 702.4, 14.9, 707.9, 14.9);
            ctx.lineTo(732.7, 14.9);
            ctx.bezierCurveTo(738.2, 14.9, 742.6, 19.3, 742.6, 24.7);
            ctx.lineTo(742.6, 38.5);
            ctx.closePath();
            ctx.lineWidth = 6.0;
            ctx.strokeStyle = "rgb(112, 29, 45)";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 10.0;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(705.8, 24.2);
            ctx.lineTo(735.5, 40.8);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(705.8, 40.8);
            ctx.lineTo(736.9, 24.2);
            ctx.stroke();
            ctx.restore();
            ctx.restore();
        }

        return rdp;
    }

    function MyRecruitPanel() {
        var mrp = new Panel(15, 369, 329, 478, 'rgba(0,0,0,0)');
        var gradient = window.ctx.createLinearGradient(242.9, 332.6, 242.9, 4.0);
        gradient.addColorStop(0.00, "rgb(189, 37, 39)");
        gradient.addColorStop(0.76, "rgb(214, 51, 46)");
        gradient.addColorStop(0.93, "rgb(239, 64, 54)");
        mrp.gradient = gradient;
        mrp.paintFun = function (ctx) {
            myRecruitPanel(ctx, this.gradient);
        }
        var cp = new Panel(25, 75, 240, 430, 'rgba(0,0,0,0)')
        mrp.addCtrl(cp, 'panel');
        mrp.panel = cp;
        function myRecruitPanel(ctx, gradient) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(481.8, 326.5);
            ctx.bezierCurveTo(481.8, 329.9, 470.9, 332.6, 457.5, 332.6);
            ctx.lineTo(28.2, 332.6);
            ctx.bezierCurveTo(14.9, 332.6, 4.0, 329.9, 4.0, 326.5);
            ctx.lineTo(4.0, 10.1);
            ctx.bezierCurveTo(4.0, 6.7, 14.9, 4.0, 28.2, 4.0);
            ctx.lineTo(457.5, 4.0);
            ctx.bezierCurveTo(470.9, 4.0, 481.8, 6.7, 481.8, 10.1);
            ctx.lineTo(481.8, 326.5);
            ctx.closePath();

            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.lineWidth = 8.0;
            ctx.strokeStyle = "rgb(107, 31, 32)";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(30.2, 67.0);
            ctx.lineTo(455.6, 67.0);
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fill();
            ctx.stroke();
            ctx.font = "40.0px '幼圆'";
            ctx.fillText("我的预约", 155.8, 50.6);
            ctx.lineWidth = 1.0;
            ctx.strokeStyle = "rgb(5, 5, 5)";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText("我的预约", 155.8, 50.6);
            ctx.restore();
        }

        return mrp;
    }
    function RecruitDetailItem(x,y,ad)
    {
        var dp = new Panel(x, y, 85, 715, 'rgba(250,250,250,0.5)');
        dp.wheeler = undefined;
        dp.drager = undefined;
        dp.ad=ad;
        dp.expanded=false;
        var ed=ad.EndDate;
        dp.date=ed.getFullYear()+'-'+(ed.getMonth()+1)+'-'+ed.getDate();
      dp.lines=breakText(ad.Des,window.ctx,700,'20px 微软雅黑');
      dp.clicker.onclick = function (e) {
          if (e.cx > this.p.absX + 640 && e.cx < this.p.absX + 690 && e.cy > this.p.absY && e.cy < this.p.absY + 50) {
              this.p.expanded = !this.p.expanded;
              if (this.p.expanded) {
                  var items = this.p.p.controls;
                  for (var i = 0, item = items[i]; item; item = items[++i])
                      if (item.y > this.p.y)
                          item.y += 115;
                  this.p.h = 200;
                  this.p.p.maxh += 115;
              }
              else {
                  var items = this.p.p.controls;
                  for (var i = 0, item = items[i]; item; item = items[++i])
                      if (item.y > this.p.y)
                          item.y -= 115;
                  this.p.h = 85;
                  this.p.p.maxh -= 115;
              }
          }
          else if (this.p.expanded && e.cx > this.p.absX + 620 && e.cx < this.p.absX + 700 && e.cy > this.p.absY + 70 && e.cy < this.p.absY + 110) {
              window.curTask.data.applyAd(this.p.ad.No);
          }
      }
        dp.paintFun=function(ctx)
        {
            roundRectPath(this.w,this.h,8,ctx);
            ctx.textBaseline='hanging';
            ctx.fillStyle=this.bc;
            ctx.strokeStyle='black';
            ctx.fill();ctx.stroke();
            ctx.translate(40,40);
            ctx.save();
            starPath(30,ctx);
            ctx.stroke();
            ctx.restore();
            ctx.translate(60,-35);
            ctx.fillStyle='black';
            ctx.font="bold 32px 微软雅黑";
            ctx.fillText(this.ad.Name,0,0,350);
            ctx.font="30px 微软雅黑";
            ctx.translate(10,35);
            ctx.fillText('男:',0,0);
            ctx.fillText('女:',100,0);
            ctx.fillStyle='white';
            ctx.fillText(this.ad.MaleRequired,40,0);
            ctx.fillText(this.ad.FemaleRequired,140,0);
            ctx.translate(355,-35);
            ctx.fillText(this.ad.ExpMins,0,0,50);
            ctx.fillText(this.ad.Price,0,30,50);
            ctx.fillStyle='black';
            ctx.fillText('分钟',50,0);
            ctx.fillText('元/小时',50,30,50);
            ctx.translate(190,0);
            ctx.strokeRect(0,0,40,40);
            ctx.font=' 60px 微软雅黑'
            if(!this.expanded)
             ctx.fillText('+',-3,-25);
            else   {
                ctx.fillText('-',5,-25);
                ctx.font="30px 微软雅黑";
                ctx.translate(-30,70) ;
                roundRectPath(80,35,5,ctx);
                ctx.fillStyle='white';
                ctx.fillText('申请',9,-4);
                ctx.stroke();
                ctx.fillStyle='black';
                ctx.translate(-320,0);
                ctx.fillText("结束时间:",0,0);
                ctx.fillStyle='white';
                ctx.fillText(this.date,135,0);
                ctx.translate(-300,0);
                ctx.fillStyle='black';
                ctx.fillText('说明',0,0);
                ctx.font="20px 微软雅黑";
                ctx.translate(0,32);
                for(var i=0;i<4 && i<this.lines.length;i++)
                 ctx.fillText(this.lines[i],0,i*22);


            }
        }

        return dp;
    }
    function DataIndexPanel() {
        var dip = new Panel(15, 15, 337, 478, 'rgba(0,0,0,0)');
        var d = new Date();
        dip.date = d.getFullYear() + '-' + ( d.getMonth() + 1) + '-' + d.getDate();
        dip.paintFun = function (ctx) {
            dataIndexPanel(ctx, this.gradient, this.date);
        }
        var p = new Panel(27, 65, 260, 428, 'rgba(0,0,0,0)');
        dip.addCtrl(p, 'panel');
        dip.panel = p;
        function dataIndexPanel(ctx, gradient, date) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(481.8, 334.1);
            ctx.bezierCurveTo(481.8, 337.6, 470.9, 340.4, 457.5, 340.4);
            ctx.lineTo(28.2, 340.4);
            ctx.bezierCurveTo(14.9, 340.4, 4.0, 337.6, 4.0, 334.1);
            ctx.lineTo(4.0, 10.3);
            ctx.bezierCurveTo(4.0, 6.8, 14.9, 4.0, 28.2, 4.0);
            ctx.lineTo(457.5, 4.0);
            ctx.bezierCurveTo(470.9, 4.0, 481.8, 6.8, 481.8, 10.3);
            ctx.lineTo(481.8, 334.1);
            ctx.closePath();
            gradient = ctx.createLinearGradient(242.9, 340.4, 242.9, 4.0);
            gradient.addColorStop(0.00, "rgb(189, 37, 39)");
            gradient.addColorStop(0.76, "rgb(214, 51, 46)");
            gradient.addColorStop(0.93, "rgb(239, 64, 54)");
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.lineWidth = 8.0;
            ctx.strokeStyle = "rgb(107, 31, 32)";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(30.2, 57.7);
            ctx.lineTo(455.6, 57.7);
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fill();
            ctx.stroke();
            ctx.font = "40.0px '幼圆'";
            ctx.fillText('招募时段信息', 110, 45);
            ctx.lineWidth = 1.0;
            ctx.lineJoin = "miter";
            ctx.miterLimit = 0.0;
            ctx.strokeText('招募时段信息', 110, 45);
            ctx.restore();
        }

        return dip;
    }
    function RecruitLoading()
    {
        var ui=new Label(220,300,'数据加载中..','50px 微软雅黑','ghostwhite','rgba(0,0,0,0)');
        ui.clock=new clock(0.1,0,1,true,0,bounceEaseInOut,30,1,10,true);
        ui.clock.start();
        ui.transFun=function (ctx){
            ctx.translate(this.x+this.clock.value,this.y);
        }
        return ui;
    }
    function RecruitTask() {
        var task = new Task('Recruit');
        var rePanel = new RecruitPanel();
        var detailPanel = new RecruitDetailPanel();
        var myPanel = new MyRecruitPanel();
        var indexPanel = new DataIndexPanel();
        task.resetWait(1);
        rePanel.addCtrl(detailPanel, 'detailPanel');
        task.detailPanel = detailPanel.panel;
        rePanel.addCtrl(myPanel, 'myPanel');
        task.myPanel = myPanel.panel;
        rePanel.addCtrl(indexPanel, 'indexPanel');
        task.indexPanel = indexPanel.panel;
        task.cmdUIComponents.addCtrl(rePanel, 'rePanel');
        var loading=new RecruitLoading();
        task.cmdUIComponents.addCtrl(loading,'loading');
        task.data = new RecruitData();
        return task;
    }
    function MyReItem(x,y,MyRe)
    {
      var mrp=new  UIComponent(x,y,400,55);
      mrp.myRe=MyRe;
      mrp.paintFun=function(ctx)
      {
          roundRectPath(this.w,this.h,5,ctx);
          ctx.fillStyle="rgba(250,250,250,0.4)";
          ctx.strokeStyle='black';
          ctx.fill();
          ctx.stroke();
          ctx.textBaseline='hanging';
          ctx.font='25px 幼圆';
          ctx.fillStyle='rgb(0,0,0)';
          if(!this.dx) {
            var nw=ctx.measureText(this.myRe.Name).width;
            if(nw>this.w) this.dx=0;
            else this.dx=(this.w-nw)/2;
          }
          ctx.fillText(this.myRe.Name,this.dx,0,this.w);
          ctx.translate(0,30);
          ctx.font='20px 幼圆';
          ctx.fillText('主试:'+this.myRe.AderName,5,0,90);
          ctx.fillText(this.myRe.AderPhone,100,0,180);
          ctx.fillText(this.myRe.SetDate+'接受申请',220,0,170);

      }
        return mrp;
    }
    function IndexPanelItem(dataIndex) {
        var p = new Panel(2, 0, 55, 400, 'rgba(250,250,250,0.4)');
        p.wheeler = undefined;
        p.drager=undefined;
        p.maxh= p.h-2;
        var d = dataIndex.date;
        var dl = new Label(2, 2, (d.getMonth() + 1) + '-' + d.getDate(), '24px 微软雅黑', 'yellow', 'rgba(0,0,0,0)');
        var dtxt = "星期";
        switch (d.getDay()) {
            case 0:
                dtxt += "天";
                break;
            case 1:
                dtxt += "一";
                break;
            case 2:
                dtxt += "二";
                break;
            case 3:
                dtxt += "三";
                break;
            case 4:
                dtxt += "四";
                break;
            case 5:
                dtxt += "五";
                break;
            case 6:
                dtxt += "六";
                break;
        }
        var wl = new Label(2, 27, dtxt, '24px 幼圆', 'white', 'rgba(0,0,0,0)');
        p.addCtrl(dl);
        p.addCtrl(wl);
        var ab = new Button(202, 2, 80, 50, dataIndex.a.length, '48px 幼圆', 'rgba(0,0,0,0)', true, 'skyblue', 'skyblue', true);
        var mb = new Button(102, 2, 80, 50, dataIndex.m.length, '48px 幼圆', 'rgba(0,0,0,0)', true, 'lawngreen', 'lawngreen', true);
        var nb = new Button(302, 2, 80, 50, dataIndex.n.length, '48px 幼圆', 'rgba(0,0,0,0)', true, 'darkmagenta', 'darkmagenta', true);
        ab.nos=dataIndex.a;
        mb.nos=dataIndex.m;
        nb.nos=dataIndex.n;
        ab.clicker.onclick= click;
        nb.clicker.onclick=click;
        mb.clicker.onclick=click;
        function click() {
         var nos = window.curTask.data.filterNos(this.p.nos);
         if (nos.length > 0)
             window.curTask.data.getAdsByNo(nos);
         else {
             var adsToshow = window.curTask.data.adsOnShow;
             var dp = window.curTask.detailPanel;
             dp.clearCtrls();
             var ads = window.curTask.data.ads;
             for (var i = 0, No = adsToshow[i]; No; No = adsToshow[++i])
                 for (var j = 0, ad = ads[j]; ad; ad = ads[++j])
                     if (ad.No == No) {
                         var di = new RecruitDetailItem(2, i * 90, ad);
                         dp.addCtrl(di, ad.No);
                         break;
                     } 
         }
        }
        p.addCtrl(ab, 'ab');
        p.addCtrl(mb, 'mb');
        p.addCtrl(nb, 'nb');
        return p;
    }

    function RecruitData() {
        this.indexes = new Array();
        this.ads = new Array();
        this.adsOnShow = null;
        this.loaded = false;
        this.filterNos = function (Nos) {
            var r = new Array();
            this.adsOnShow = Nos;
            for (var i = 0, item = Nos[i]; item; item = Nos[++i]) {
                for (var j = 0, exist = this.ads[j]; exist; exist = this.ads[++j])
                    if (exist.No == item) break;
                if (j == this.ads.length) r.push(item);
            }
            return r;
        }
        this.addAds=function(array)
        {
            array.forEach(function(item){this.ads.push(item);})  ;
        }
        this.applyAd=function(adNo)
        {
            if(window.channelMng.isLogIn)  {
                if(window.channelMng.subjectNo)
                {
                    DisplayConfirmWindow("确认申请?","主试将获得你的联系方式",
                    function(){
                    window.channelMng.beginChannel();
                    RecruitService.ApplyAD(adNo,window.channelMng.subjectNo ,function (e){
                        if (e[0] == "1") DisplayMsgWindow("申请成功", "亲,主试会尽快联系你的!");
                        else DisplayMsgWindow("囧,失败了", e[1]);
                        window.channelMng.endChannel();});});
                }
                else
                {
                    var m="要先填写资料才能申请哦!"+"<a target='_self' onclick='window.currentModalWindow.close();' href='SubjectMaker.aspx'>现在填写</a> "
                    DisplayMsgWindow("亲,还差一步",m);
                }
            }
            else
             DisplayLogWindow();
        }
        this.loadMyRes=function()
        {
            if(!this.myRes&& window.channelMng.subjectNo>0)
            {
                RecruitService.GetMyRecruit(window.channelMng.subjectNo, function (e) {
                    window.curTask.data.myRes=e;
                    var panel=window.curTask.myPanel;
                    for(var i=0;i< e.length;i++)
                    {
                       var item=new MyReItem(15,i*55,e[i]);
                       panel.addCtrl(item,e[i].Name);
                    }
                });
            }
        }
        this.myRes=undefined;
        this.getAdsByNo = function (nos) {
            window.channelMng.beginChannel();
            RecruitService.SelectAdsByNo(nos, function (array) {
                for (var i = 0; i < array.length; i++)
                    window.curTask.data.ads.push(array[i]);
                var adsToshow = window.curTask.data.adsOnShow;
                var dp = window.curTask.detailPanel;
                dp.clearCtrls();
                var ads = window.curTask.data.ads;
                for (var i = 0, No = adsToshow[i]; No; No = adsToshow[++i])
                    for (var j = 0, ad = ads[j]; ad; ad = ads[++j])
                        if (ad.No == No) {
                            var di = new RecruitDetailItem(2, i * 90, ad);
                            dp.addCtrl(di, ad.No);
                            break;
                        }
                window.channelMng.endChannel();
            }, null);
        }
        return this;
    }
}
//BackPart
{
    function InitBackUI(img) {
        adjustCanvas(canvas, ctx, img.naturalHeight, img.naturalWidth);
        backUIComponents.push(new backGound(img));
        var labBtn = new BtnLab();
        labBtn.clicker.onclick = function (e) {
            var t = tasks.findByID('Lab');
            if (!t) {
                t = new LabTask();
                tasks.push(t);
                t.onbegin.subscribe(function () {
                    var t = tasks.findByID('Lab');
                    if (!t.sPanel) {
                        window.channelMng.beginChannel(true, 'labChannel');
                        LabService.GetIndex(function (data) {
                            var ets = data.ExpTypes;
                            var panel = LabSindexPanel(ets);
                            var bpanel = LabRindexPanel(ets);
                            var t = tasks.findByID('Lab');
                            var lpan = t.cmdUIComponents.findByID('left');
                            bpanel.clock = lpan.rotateClock;
                            panel.clock = lpan.rotateClock;
                            bpanel.transFun = function (ctx) {
                                var r = this.clock.value - Math.PI;
                                var cos = Math.cos(r);
                                var sin = Math.sin(r);
                                var cl = this.w / 2;
                                ctx.transform(cos, sin, 0, 1, cl * (1 - cos) + this.x, -cl * sin + this.y);
                            }
                            bpanel.update = function () {
                                if (this.clock.value > Math.PI / 2) {
                                    this.visible = true;
                                    for (var i = 0, item = this.controls[i]; item; item = this.controls[++i])
                                        item.update();
                                }
                                else
                                    this.visible = false;
                            }
                            panel.transFun = function (ctx) {
                                if (this.clock.duration == 0.7) {
                                    var cos = Math.cos(this.clock.value);
                                    var sin = Math.sin(this.clock.value);
                                    var cl = this.w / 2;
                                    ctx.transform(cos, sin, 0, 1, cl * (1 - cos) + this.x, -cl * sin + this.y);
                                }
                                else
                                    ctx.translate(this.x, this.y + this.clock.value);
                            }
                            panel.update = function () {
                                if (this.clock.value < Math.PI / 2)
                                    this.visible = true;
                                else
                                    this.visible = false;
                                for (var i = 0; i < this.controls.length; i++)
                                    this.controls[i].update();
                            }
                            t.sPanel = panel;
                            t.cmdUIComponents.addCtrl(panel, 'sIndex');
                            t.cmdUIComponents.addCtrl(bpanel, 'rIndex');
                            window.channelMng.endChannel();
                        });
                    }
                });
            }
            window.curTask = t;
            t.begin();
            t.cmdUIComponents.findByID('left').clock.start();
            t.cmdUIComponents.findByID('right').clock.start();
        }
        var msgBtn = new BtnMsg();
        msgBtn.clicker.onclick=function()
        {
            var t=tasks.findByID('Msg');
            if(!t){
                t=new MsgTask();
                window.tasks.push(t);
            }
            window.curTask=t;
            t.begin();
            for(var i= 0,item= t.cmdUIComponents[i];item;item= t.cmdUIComponents[++i])
               if(item.clock)item.clock.start();
        }
        var RecBtn = new BtnRecruit();
        RecBtn.clicker.onclick = function (e) {
            var t = tasks.findByID('Recruit');
            if (!t) {
                t = new RecruitTask();
                tasks.push(t);
                t.onbegin.subscribe(function() {
                    if (window.curTask.data.loaded == false) {
                        window.channelMng.beginChannel();
                        RecruitService.GetAdIndexFromToday(7, function (array) {
                            var indexes = window.curTask.data.indexes;
                            for (var i = 0; i < array.length; i++) {
                                indexes.push(array[i]);
                                var item = new IndexPanelItem(array[i]);
                                item.y = i * 55;
                                window.curTask.indexPanel.addCtrl(item);
                            }
                            window.channelMng.endChannel();
                            window.curTask.data.loaded = true;
                        });
                        curTask.data.loadMyRes();
                    }
                });
            }
            window.curTask = t;
            t.begin();
            t.cmdUIComponents.findByID('rePanel').clock.restart();
        }
        backUIComponents.addCtrl(msgBtn, 'msgBtn');
        backUIComponents.addCtrl(labBtn, 'labBtn');
        backUIComponents.addCtrl(RecBtn, 'recBtn');
        return true;
    }

    function backGound(img) {
        var ui = new UIComponent();
        ui.img = img;
        ui.paint = function (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
        }
        return ui;
    }

    function RedLatern() {
        var e = new UIComponent(0, 0, 100, 70);
        var g = window.ctx.createRadialGradient(e.w / 2, e.h / 0.7 / 2, e.h / 8, e.w / 2, e.h / 0.7 / 2, e.w / 2);
        g.addColorStop(0.16, "rgb(255, 250, 195)");
        g.addColorStop(0.20, "rgb(255, 246, 97)");
        g.addColorStop(0.48, "rgb(255, 241, 0)");
        g.addColorStop(0.59, "rgb(247, 154, 17)");
        g.addColorStop(0.87, "rgba(239, 67, 35,0.8)");
        g.addColorStop(1, "rgba(240, 84, 34,0.1)");
        e.g = g;
        e.paintFun = function (ctx) {
            ellipsePath(this.w, this.h, ctx);
            if (this.spotter.mouseIn)
                ctx.globalAlpha = this.clock.value;
            ctx.scale(1, 0.7);
            ctx.fillStyle = this.g;
            ctx.fill();

        };
        var b2 = new linerBoundary(true, 223, 406, 411, 360);
        var b3 = new linerBoundary(true, 411, 360, 587, 9);

        e.animation = new floatAnimation(220 + 300 * Math.random(), 300 * Math.random(), 40 + Math.random() * 40, 40 + Math.random() * 40, [b2, b3], false, 1200, 1200, 212, 1);
        e.update = function () {
            this.animation.update();
            this.x = this.animation.x;
            this.y = this.animation.y;
            if (this.spotter.mouseIn) {
                this.clock.update();
            }
        }
        e.clock = new clock(0.5, 0, 1, true, 0, cubicEaseIn, 1, 0.2, 0.8, false);
        e.clock.start();
        e.animation.start();
        e.spotter = new spotter(e);
        e.spotter.onmouseIn = function () {
            this.p.animation.stop();
        }
        e.spotter.onmouseOut = function () {
            this.p.animation.start();
        }
        return e;
    }

    function BtnTube() {
        var tube = new UIComponent(1122, 557, 98, 106);
        tube.gradients = new Array();
        tubeGradients(tube);
        tube.paintFun = function (ctx) {
            btnTube(ctx, this.gradients);
        }
        tube.transFun = function (ctx) {
            if (this.clock)
                ctx.translate(this.x, this.y + this.clock.value);
            else
                ctx.translate(this.x, this.y);
        }
        tube.paint = function (ctx) {
            if (!this.visible)   return;
            ctx.save();
            if (!this.enable)
                ctx.globalAlpha = 0.4;
            else if (window.channelMng.busy())
                ctx.globalAlpha = this.fadeClock.value;
            this.transFun(ctx);
            this.paintFun(ctx);
            if (this.enable && curTask.cmdUIComponents.findByID('submitPanel')) {
                ctx.font = "25px '幼圆'";
                ctx.fillStyle = 'white';
                ctx.fillText('点我上传!', -10, 0);
            }
            ctx.restore();
        }
        tube.fadeClock = new clock(0.5, 0, 1, true, 0, linear, 0.4, 1, 0.6, true);
        tube.update = function () {
            if (window.channelMng.busy())
                this.fadeClock.update();
            var sp = curTask.cmdUIComponents.findByID('submitPanel');
            if (sp) {
                var c = sp.exp.ExpParas.length;
                for (var i = 0; i < sp.controls.length; i++)
                    if (sp.controls[i].vtxt)
                        c--;
                this.enable = (c == 0);
            }
        };
        tube.fadeClock.start();
        tube.clicker = new clicker(tube);
        tube.clicker.onclick = function () {
            SubmitPanelToValue();
        };
        function btnTube(ctx, gradients) {

            var gradient;

            // btnTube/Tube
            ctx.save();

            // btnTube/Tube/
            ctx.save();

            // btnTube/Tube//
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(82.8, 101.7);
            ctx.bezierCurveTo(82.8, 104.6, 64.3, 106.9, 41.4, 106.9);
            ctx.bezierCurveTo(18.5, 106.9, 0.0, 104.6, 0.0, 101.7);
            ctx.bezierCurveTo(0.0, 98.8, 18.5, 96.4, 41.4, 96.4);
            ctx.bezierCurveTo(64.3, 96.4, 82.8, 98.8, 82.8, 101.7);
            ctx.closePath();
            ctx.save();
            ctx.transform(0.949, 0.000, 0.000, -0.120, -1535.1, -44.4);
            ctx.fillStyle = gradients[0];
            ctx.fill();

            // btnTube/Tube//
            ctx.restore();

            // btnTube/Tube///
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(51.4, 52.1);
            ctx.lineTo(51.4, 30.3);
            ctx.bezierCurveTo(51.4, 30.1, 53.0, 29.4, 53.0, 28.5);
            ctx.lineTo(53.0, 28.2);
            ctx.bezierCurveTo(53.0, 25.4, 48.0, 24.4, 41.0, 24.4);
            ctx.bezierCurveTo(34.0, 24.4, 28.9, 25.4, 28.9, 28.2);
            ctx.lineTo(28.9, 28.5);
            ctx.bezierCurveTo(28.9, 29.5, 31.0, 30.3, 31.0, 30.5);
            ctx.lineTo(31.0, 53.0);
            ctx.lineTo(14.8, 91.2);
            ctx.bezierCurveTo(14.8, 98.2, 24.0, 102.5, 41.5, 102.5);
            ctx.bezierCurveTo(59.1, 102.5, 68.0, 98.8, 68.0, 91.2);
            ctx.lineTo(51.4, 52.1);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.197, 0.000, 0.000, -1.066, -1769.8, -626.5);
            ctx.fillStyle = gradients[1];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(41.7, 71.3);
            ctx.bezierCurveTo(30.0, 71.3, 22.7, 75.1, 22.7, 75.1);
            ctx.lineTo(16.5, 90.5);
            ctx.bezierCurveTo(16.5, 97.2, 25.2, 101.3, 41.8, 101.3);
            ctx.bezierCurveTo(58.4, 101.3, 66.8, 97.8, 66.8, 90.5);
            ctx.lineTo(60.3, 75.1);
            ctx.bezierCurveTo(60.3, 75.1, 53.4, 71.3, 41.7, 71.3);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.197, 0.000, 0.000, -1.066, -1769.8, -626.5);
            ctx.fillStyle = gradients[2];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(60.3, 75.3);
            ctx.bezierCurveTo(60.3, 78.0, 51.8, 80.1, 41.4, 80.1);
            ctx.bezierCurveTo(30.9, 80.1, 22.4, 78.0, 22.4, 75.3);
            ctx.bezierCurveTo(22.4, 72.7, 30.9, 70.5, 41.4, 70.5);
            ctx.bezierCurveTo(51.8, 70.5, 60.3, 72.7, 60.3, 75.3);
            ctx.closePath();

            ctx.fillStyle = gradients[3];
            ctx.fill();

            // btnTube/Tube///
            ctx.beginPath();
            ctx.moveTo(41.1, 29.2);
            ctx.bezierCurveTo(35.9, 29.2, 31.6, 28.3, 31.6, 27.3);
            ctx.bezierCurveTo(31.6, 26.2, 35.9, 25.4, 41.2, 25.4);
            ctx.bezierCurveTo(46.4, 25.5, 50.7, 26.3, 50.7, 27.4);
            ctx.bezierCurveTo(50.7, 28.4, 46.4, 29.3, 41.1, 29.2);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.197, -0.010, -0.012, -1.066, -1759.3, -635.7);

            ctx.fillStyle = gradients[4];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(32.9, 31.9);
            ctx.lineTo(32.9, 54.2);
            ctx.lineTo(16.9, 92.9);
            ctx.bezierCurveTo(16.9, 92.9, 16.9, 93.3, 17.3, 94.0);
            ctx.bezierCurveTo(17.7, 94.5, 18.3, 95.3, 18.4, 95.4);
            ctx.bezierCurveTo(19.4, 96.5, 19.6, 96.2, 19.8, 95.6);
            ctx.bezierCurveTo(19.9, 95.3, 32.4, 63.4, 35.6, 54.2);
            ctx.bezierCurveTo(35.6, 44.3, 35.5, 35.1, 35.5, 35.1);
            ctx.bezierCurveTo(35.5, 35.1, 35.7, 32.6, 34.7, 32.4);
            ctx.bezierCurveTo(34.2, 32.3, 32.9, 31.9, 32.9, 31.9);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.197, 0.000, 0.000, -1.066, -1769.8, -626.5);

            ctx.fillStyle = gradients[5];
            ctx.fill();

            // btnTube/Tube/
            ctx.restore();
            ctx.restore();
            ctx.restore();

            // btnTube/Tube//
            ctx.save();

            // btnTube/Tube///
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(48.6, 5.5);
            ctx.bezierCurveTo(43.7, 9.8, 40.9, 13.7, 43.1, 15.7);
            ctx.lineTo(43.3, 15.9);
            ctx.bezierCurveTo(44.1, 16.6, 46.2, 15.8, 46.4, 15.9);
            ctx.lineTo(82.4, 47.8);
            ctx.bezierCurveTo(84.3, 49.5, 88.7, 49.4, 93.5, 45.1);
            ctx.bezierCurveTo(98.2, 40.9, 98.7, 36.7, 96.7, 35.0);
            ctx.lineTo(60.6, 3.1);
            ctx.bezierCurveTo(60.4, 2.9, 61.0, 1.5, 60.3, 0.9);
            ctx.lineTo(60.1, 0.7);
            ctx.bezierCurveTo(57.8, -1.3, 53.6, 1.1, 48.6, 5.5);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.066, 0.000, 0.000, -0.943, -1280.8, -549.0);

            ctx.fillStyle = gradients[6];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(52.6, 8.9);
            ctx.bezierCurveTo(48.6, 12.4, 44.6, 14.5, 43.7, 13.7);
            ctx.bezierCurveTo(42.8, 12.9, 45.4, 9.5, 49.4, 6.0);
            ctx.bezierCurveTo(53.5, 2.5, 57.5, 0.3, 58.4, 1.1);
            ctx.bezierCurveTo(59.3, 1.9, 56.7, 5.4, 52.6, 8.9);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.066, 0.000, 0.000, -0.943, -1280.8, -549.0);
            ctx.fillStyle = gradients[7];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(49.6, 5.5);
            ctx.bezierCurveTo(52.9, 2.7, 56.0, 0.8, 57.8, 0.3);
            ctx.bezierCurveTo(56.3, 0.2, 52.6, 2.4, 48.9, 5.6);
            ctx.bezierCurveTo(44.6, 9.3, 41.9, 13.0, 42.8, 13.8);
            ctx.bezierCurveTo(43.0, 14.0, 43.5, 14.0, 44.0, 13.9);
            ctx.bezierCurveTo(43.8, 13.9, 43.7, 13.8, 43.5, 13.7);
            ctx.bezierCurveTo(42.6, 12.9, 45.3, 9.2, 49.6, 5.5);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();

            // btnTube/Tube///
            ctx.beginPath();

            // btnTube/Tube////
            ctx.moveTo(38.3, 25.6);
            ctx.bezierCurveTo(38.3, 21.0, 41.7, 16.8, 44.3, 13.9);
            ctx.bezierCurveTo(44.1, 18.5, 47.7, 23.3, 47.7, 25.6);
            ctx.bezierCurveTo(47.7, 27.9, 45.6, 29.8, 43.0, 29.8);
            ctx.bezierCurveTo(40.4, 29.8, 38.3, 27.9, 38.3, 25.6);
            ctx.closePath();
            ctx.save();
            ctx.transform(1.066, 0.000, 0.000, -0.943, -1280.8, -549.0);

            ctx.fillStyle = gradients[8];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(41.5, 18.3);
            ctx.bezierCurveTo(40.9, 20.0, 41.2, 21.9, 41.6, 23.5);
            ctx.bezierCurveTo(42.1, 24.9, 42.8, 26.0, 42.9, 26.7);
            ctx.bezierCurveTo(43.2, 27.8, 42.3, 28.5, 41.6, 28.7);
            ctx.bezierCurveTo(41.4, 28.7, 41.0, 28.7, 40.7, 28.7);
            ctx.bezierCurveTo(40.6, 28.7, 40.4, 28.7, 40.3, 28.6);
            ctx.bezierCurveTo(39.3, 28.2, 38.8, 27.6, 38.6, 26.9);
            ctx.bezierCurveTo(38.1, 25.9, 38.1, 24.8, 38.4, 23.7);
            ctx.bezierCurveTo(38.6, 23.1, 38.8, 22.6, 39.1, 22.0);
            ctx.bezierCurveTo(39.4, 21.4, 39.7, 20.9, 40.1, 20.2);
            ctx.bezierCurveTo(40.5, 19.5, 41.4, 18.4, 41.5, 18.3);
            ctx.closePath();

            ctx.fillStyle = gradients[9];
            ctx.fill();

            // btnTube/Tube///

            // btnTube/Tube////
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(54.5, 10.7);
            ctx.bezierCurveTo(51.9, 13.0, 49.9, 14.4, 47.4, 15.4);
            ctx.lineTo(81.7, 45.7);
            ctx.bezierCurveTo(84.3, 48.0, 88.4, 47.9, 91.0, 45.7);
            ctx.lineTo(94.1, 42.9);
            ctx.bezierCurveTo(96.6, 40.7, 97.0, 36.7, 94.5, 34.4);
            ctx.bezierCurveTo(94.5, 34.4, 60.1, 4.0, 60.0, 3.9);
            ctx.bezierCurveTo(59.2, 5.8, 57.7, 7.8, 54.5, 10.7);
            ctx.closePath();

            ctx.fillStyle = gradients[10];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(81.8, 23.6);
            ctx.bezierCurveTo(82.4, 25.6, 78.4, 28.2, 72.9, 29.4);
            ctx.bezierCurveTo(67.4, 30.7, 62.4, 30.0, 61.9, 28.0);
            ctx.bezierCurveTo(61.3, 26.0, 65.3, 23.4, 70.8, 22.2);
            ctx.bezierCurveTo(76.3, 21.0, 81.2, 21.6, 81.8, 23.6);
            ctx.closePath();
            ctx.save();
            ctx.transform(0.970, -0.242, -0.183, -0.733, -792.9, -154.2);

            ctx.fillStyle = gradients[11];
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();

            // btnTube/Tube////
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(48.5, 14.7);
            ctx.lineTo(83.5, 45.7);
            ctx.bezierCurveTo(83.5, 45.7, 84.3, 46.4, 84.9, 46.6);
            ctx.bezierCurveTo(85.4, 46.8, 86.0, 46.8, 86.5, 46.9);
            ctx.bezierCurveTo(87.1, 46.9, 87.7, 46.6, 87.4, 46.1);
            ctx.bezierCurveTo(87.0, 45.6, 52.7, 15.5, 52.7, 15.5);
            ctx.bezierCurveTo(52.7, 15.5, 50.9, 13.6, 50.1, 14.0);
            ctx.bezierCurveTo(49.7, 14.2, 48.5, 14.7, 48.5, 14.7);
            ctx.closePath();
            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fill();

            // btnTube/Tube///
            ctx.restore();
            ctx.beginPath();
            ctx.moveTo(59.5, 4.0);
            ctx.bezierCurveTo(58.6, 5.5, 56.5, 8.2, 53.4, 10.8);
            ctx.bezierCurveTo(50.2, 13.6, 47.0, 15.6, 45.2, 16.0);
            ctx.bezierCurveTo(46.7, 16.1, 50.6, 14.2, 54.4, 10.9);
            ctx.bezierCurveTo(57.3, 8.5, 59.2, 5.8, 60.1, 4.2);
            ctx.bezierCurveTo(60.5, 3.4, 60.5, 3.0, 60.4, 2.9);
            ctx.bezierCurveTo(60.1, 2.6, 59.7, 3.5, 59.5, 4.0);
            ctx.closePath();

            ctx.fillStyle = gradients[12];
            ctx.fill();
            ctx.restore();
            ctx.restore();
            ctx.restore();
            ctx.restore();
        }

        return tube;
    }

    function BtnLab() {
        var ui = new UIComponent();
        ui.x = 10.3;
        ui.y = 514.6;
        ui.w = 185;
        ui.h = 115;
        ui.clock = new clock(2, 1, 1, true, 0, quadEaseOut, 0.5, 1, 0.5, false);
        ui.paintFun = function (ctx) {
            if (!this.spotter.mouseIn)
                ctx.globalAlpha = this.clock.value;
            btnLabPath(ctx);
        }

        ui.spotter = new spotter(ui);
        ui.clock.start();
        ui.clicker = new clicker(ui);
        return ui;
    }

    function BtnMsg() {
        var ui = new UIComponent();
        ui.x = 7.5;
        ui.y = 292.5;
        ui.w = 179;
        ui.h = 107;
        ui.clock = new clock(2, 1, 1, true, 0, quartEaseIn, 0.5, 1, 0.5, false);
        ui.paintFun = function (ctx) {
            if (!this.spotter.mouseIn)
                ctx.globalAlpha = this.clock.value;
            btnMsgPath(ctx);
        }
        ui.spotter = new spotter(ui);
        ui.clock.start();
        ui.clicker=new clicker(ui);
        return ui;
    }

    function BtnRecruit() {
        var ui = new UIComponent();
        ui.x = 4.5;
        ui.y = 54.2;
        ui.w = 190;
        ui.h = 113;
        ui.clock = new clock(2, 1, 1, true, 0, cubicEaseInOut, 0.5, 1, 0.5, false);
        ui.paintFun = function (ctx) {
            if (!this.spotter.mouseIn)
                ctx.globalAlpha = this.clock.value;
            btnRecruitPath(ctx);
        }
        ui.spotter = new spotter(ui);
        ui.clicker = new clicker(ui);
        ui.clock.start();
        return ui;
    }


}
//LabPart
{
    function LabRightPanel() {
        var labr = new UIComponent();
        labr.x = 540;
        labr.y = 35.3;
        labr.h = 655;
        labr.w = 705;
        labr.clock =new clock(1, 0, 1, true, 1, expoEaseOut, -canvas.height - labr.y, 1, -1, true);
        labr.clock.finished.subscribe(function () {
         window.tasks.findByID('Lab').decreseWait();
      })
        labr.paintFun = function (ctx) {
            labRight(ctx);
        }
        labr.transFun = function (ctx) {
            ctx.translate(this.x, this.y + this.clock.value);
        }
        labr.clicker = new clicker(labr);
        labr.clicker.pathFun = function (ctx) {
            ctx.beginPath();
            ctx.rect(this.p.x + 613, this.p.y + 29, 43, 49);
            ctx.closePath();
        }
        labr.clicker.onclick = function (e) {
            var task = tasks.findByID('Lab');
            if (curTask == task) {
                var labl = curTask.cmdUIComponents.findByID('left');
                var labr = curTask.cmdUIComponents.findByID('right');
                if (labl.rotateClock.value > Math.PI / 2) {
                    labl.rotateClock.finished.subscribe(rotateAndExit);
                    labl.rotateClock.reverse();
                }
                else {
                    labl.clock = labl.moveClock;
                    if (curTask.sPanel)
                        curTask.sPanel.clock = labl.moveClock;
                    curTask.exit();
                    labl.clock.reverse();
                    labr.clock.reverse();

                }
            }
        }
        return labr;
    }

    function LabTask() {
        var t = new Task('Lab');
        t.cmdUIComponents.addCtrl(new LabLeftPanel(), 'left');
        var r = new LabRightPanel();
        var btnTube = new BtnTube();
        btnTube.clock = r.clock;
        t.cmdUIComponents.addCtrl(r, 'right');
        t.cmdUIComponents.addCtrl(btnTube, 'btnTube');
        t.cmdUIComponents.addCtrl(new LoadingUI(), 'loading');
        t.onbegin.subscribe(function () {
            var labl = curTask.cmdUIComponents.findByID('left');
            labl.clock = labl.rotateClock;
            var spanel = curTask.cmdUIComponents.findByID('sIndex');
            if (spanel)
                spanel.clock = labl.rotateClock;
        });
        t.onexit.subscribe(function () {
          var task = tasks.findByID('Lab');
          task.cmdUIComponents.findByID('right').clock.reset();
            task.cmdUIComponents.findByID('left').clock.reset();
        });
        t.resetWait(2);
        return t;
    }

    function rotateAndExit() {
        var labl = curTask.cmdUIComponents.findByID('left');
        var labr = curTask.cmdUIComponents.findByID('right');
        labl.clock = labl.moveClock;
        if (curTask.sPanel)
            curTask.sPanel.clock = labl.moveClock;
        labl.clock.reverse();
        labr.clock.reverse();
        curTask.exit();
        labl.rotateClock.finished.unSubscribe(rotateAndExit);
    }

    function LabLeftPanel() {
        var labl = new UIComponent();
        labl.x = 249;
        labl.y = 42.8;
        labl.h = 640;
        labl.w = 280;
        labl.rotateClock = new clock(0.7, 0, 1, true, 1, sineEaseInOut, Math.PI, 1, 0, true);
        labl.moveClock = new clock(1, 0, 1, true, 1, expoEaseOut, labl.y + labl.h, 1, -1, true);
        labl.clock = labl.moveClock;
        labl.transFun = function (ctx) {
            if (this.clock == this.moveClock) {
                ctx.translate(this.x, this.y + this.clock.value);
            }
            else {
                var cos = Math.cos(this.clock.value);
                var sin = Math.sin(this.clock.value);
                var cl = this.w / 2;
                ctx.transform(cos, sin, 0, 1, cl * (1 - cos) + this.x, -cl * sin + this.y);
            }
        }
        var gradient = ctx.createLinearGradient(23.7, 65.1, 256.3, 65.1);
        gradient.addColorStop(0.00, "rgb(68, 195, 213)");
        gradient.addColorStop(0.11, "rgb(61, 173, 212)");
        gradient.addColorStop(0.41, "rgb(54, 151, 211)");
        gradient.addColorStop(0.75, "rgb(41, 134, 199)");
        gradient.addColorStop(1.00, "rgb(27, 117, 187)");
        labl.gradient = gradient;
        labl.paintFun = function (ctx) {
            labLeftPath(ctx, this.rotateClock.value > Math.PI / 2, this.gradient);
        }
        labl.isSubmit = true;
        labl.clicker = new clicker(labl);
        labl.clicker.pathFun = function (ctx) {
            ctx.beginPath();
            ctx.rect(this.p.x, this.p.y + 560, this.p.w, 80);
            ctx.closePath();
        }
        labl.clicker.onclick = function () {
            this.p.isSubmit = !this.p.isSubmit;
            if (this.p.task.cmdUIComponents.findByID('submitPanel'))
                this.p.task.cmdUIComponents.findByID('submitPanel').visible = this.p.isSubmit;
            if (this.p.rotateClock.isFinished) this.p.rotateClock.reverse(); else this.p.rotateClock.start();
        }
        labl.moveClock.finished.subscribe(function () {
            tasks.findByID('Lab').decreseWait();
        })

        return labl;

    }

    function LoadingUI() {
        var loading = new UIComponent(700, 360, 200, 100);
        loading.clock = new clock(2, 0, 1, false, 0, quartEaseOut, 80, 1, 0, true);
        var g = ctx.createLinearGradient(0, 0, 400, 0);
        g.addColorStop(0.3, 'rgb(46,49,133)');
        g.addColorStop(0.5, 'rgb(176,39,168)');
        g.addColorStop(0.8, 'rgb(46,49,133)');
        loading.g = g;
        loading.paintFun = function (ctx) {
            ctx.font = this.clock.value + 'px "幼圆"';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.fillStyle = this.g;
            ctx.strokeText('数据通讯中..', 0, 0);
            ctx.fillText('数据通讯中..', 0, 0);

        }
        loading.clock.start();

        return loading;

    }

    function tubeGradients(tube) {
        var gradient;
        gradient = ctx.createRadialGradient(1661.2, -1213.7, 0.0, 1661.2, -1213.7, 42.8);
        gradient.addColorStop(0.00, "rgb(42, 56, 143)");
        gradient.addColorStop(0.46, "rgb(104, 112, 157)");
        gradient.addColorStop(1.00, "rgb(167, 169, 171)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1516.6, -661.0, 0.0, 1515.4, -643.0, 49.5);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(1.00, "rgb(39, 169, 225)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1512.6, -642.0, 0.0, 1512.6, -642.0, 32.5);
        gradient.addColorStop(0.00, "rgb(209, 209, 209)");
        gradient.addColorStop(0.55, "rgb(255, 255, 255)");
        gradient.addColorStop(0.62, "rgb(68, 69, 156)");
        gradient.addColorStop(1.00, "rgb(59, 47, 144)");
        tube.gradients.push(gradient);
        gradient = ctx.createLinearGradient(37.3, 66.8, 50.2, 94.1);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(0.59, "rgb(113, 200, 241)");
        gradient.addColorStop(1.00, "rgb(68, 69, 156)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1502.3, -635.2, 0.0, 1502.3, -635.2, 7.8);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(1.00, "rgb(159, 159, 159)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1511.0, -625.8, 0.0, 1511.0, -625.8, 60.9);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(0.55, "rgb(255, 255, 255)");
        gradient.addColorStop(0.61, "rgb(171, 222, 233)");
        gradient.addColorStop(0.91, "rgb(46, 103, 177)");
        gradient.addColorStop(1.00, "rgb(255, 255, 255)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1266.8, -588.6, 0.0, 1266.8, -588.6, 87.1);
        gradient.addColorStop(0.00, "rgb(209, 209, 209)");
        gradient.addColorStop(0.70, "rgb(104, 191, 224)");
        gradient.addColorStop(1.00, "rgb(0, 173, 239)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1243.0, -596.4, 0.0, 1243.0, -596.4, 13.0);
        gradient.addColorStop(0.00, "rgb(209, 209, 209)");
        gradient.addColorStop(1.00, "rgb(255, 255, 255)");
        tube.gradients.push(gradient);
        gradient = ctx.createRadialGradient(1237.4, -613.4, 0.0, 1237.4, -604.2, 12.3);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(0.59, "rgb(42, 56, 143)");
        gradient.addColorStop(1.00, "rgb(42, 56, 143)");
        tube.gradients.push(gradient);
        gradient = ctx.createLinearGradient(39.0, 27.2, 48.0, 15.2);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(0.55, "rgb(0, 173, 239)");
        gradient.addColorStop(1.00, "rgb(46, 48, 146)");
        tube.gradients.push(gradient);
        gradient = ctx.createLinearGradient(67.7, 12.7, 74.5, 35.7);
        gradient.addColorStop(0.00, "rgb(209, 209, 209)");
        gradient.addColorStop(0.55, "rgb(255, 255, 255)");
        gradient.addColorStop(0.61, "rgb(38, 34, 97)");
        gradient.addColorStop(1.00, "rgb(101, 44, 144)");
        tube.gradients.push(gradient);
        gradient = ctx.createLinearGradient(785.4, -508.0, 805.8, -508.0);
        gradient.addColorStop(0.00, "rgb(255, 255, 255)");
        gradient.addColorStop(0.59, "rgb(42, 56, 143)");
        gradient.addColorStop(1.00, "rgb(68, 69, 156)");
        tube.gradients.push(gradient);
        gradient = ctx.createLinearGradient(61.4, 3.4, 36.6, 24.5);
        gradient.addColorStop(0.00, "rgb(158, 158, 158)");
        gradient.addColorStop(0.51, "rgb(206, 206, 206)");
        gradient.addColorStop(1.00, "rgb(255, 255, 255)");
        tube.gradients.push(gradient);
    }

    function labLeftPath(ctx, isOver, gradient) {
        var uptxt = '上传数据';
        var downtxt = '获得数据';
        if (isOver) {
            downtxt = '上传数据';
            uptxt = '获得数据';
        }
        // labLeft/
        ctx.save();
        // labLeft//
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(247.3, 0.0);
        ctx.bezierCurveTo(265.3, 0.0, 279.8, 33.1, 279.8, 74.2);
        ctx.lineTo(279.8, 565.9);
        ctx.bezierCurveTo(279.8, 606.9, 265.3, 640.2, 247.3, 640.2);
        ctx.lineTo(32.5, 640.2);
        ctx.bezierCurveTo(14.5, 640.2, 0.0, 606.9, 0.0, 565.9);
        ctx.lineTo(0.0, 74.2);
        ctx.bezierCurveTo(0.0, 33.1, 14.5, 0.0, 32.5, 0.0);
        ctx.lineTo(247.3, 0.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 0, 12)";
        ctx.fill();

        // labLeft//
        ctx.beginPath();
        ctx.moveTo(242.9, 5.6);
        ctx.bezierCurveTo(260.1, 5.6, 274.0, 38.1, 274.0, 78.4);
        ctx.lineTo(274.0, 560.9);
        ctx.bezierCurveTo(274.0, 601.2, 260.1, 633.8, 242.9, 633.8);
        ctx.lineTo(36.8, 633.8);
        ctx.bezierCurveTo(19.6, 633.8, 5.7, 601.2, 5.7, 560.9);
        ctx.lineTo(5.7, 78.4);
        ctx.bezierCurveTo(5.7, 38.1, 19.6, 5.6, 36.8, 5.6);
        ctx.lineTo(242.9, 5.6);
        ctx.closePath();
        gradient = ctx.createLinearGradient(5.7, 319.7, 274.0, 319.7);
        gradient.addColorStop(0.00, "rgb(113, 200, 241)");
        gradient.addColorStop(0.06, "rgb(84, 175, 226)");
        gradient.addColorStop(0.20, "rgb(54, 151, 211)");
        gradient.addColorStop(0.50, "rgb(41, 134, 199)");
        gradient.addColorStop(1.00, "rgb(27, 117, 187)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // labLeft//
        ctx.beginPath();
        ctx.moveTo(23.7, 65.1);
        ctx.lineTo(256.3, 65.1);

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.stroke();

        // labLeft//
        ctx.beginPath();
        ctx.moveTo(23.5, 559.1);
        ctx.lineTo(256.1, 559.1);
        gradient = ctx.createLinearGradient(23.5, 559.1, 256.1, 559.1);
        gradient.addColorStop(0.00, "rgb(68, 195, 213)");
        gradient.addColorStop(0.11, "rgb(61, 173, 212)");
        gradient.addColorStop(0.41, "rgb(54, 151, 211)");
        gradient.addColorStop(0.75, "rgb(41, 134, 199)");
        gradient.addColorStop(1.00, "rgb(27, 117, 187)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.stroke();

        // labLeft/
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(88.8, 590.7);
        ctx.bezierCurveTo(88.8, 605.7, 75.9, 617.9, 59.8, 617.9);
        ctx.bezierCurveTo(43.8, 617.9, 30.8, 605.7, 30.8, 590.7);
        ctx.bezierCurveTo(30.8, 575.7, 43.8, 563.6, 59.8, 563.6);
        ctx.bezierCurveTo(75.9, 563.6, 88.8, 575.7, 88.8, 590.7);
        ctx.closePath();
        ctx.lineWidth = 3.0;
        if (isOver)
            ctx.strokeStyle = 'rgb(81, 199, 229)';
        else
            ctx.strokeStyle = "black";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 10.0;
        ctx.stroke();

        // labLeft/downCircle/
        ctx.beginPath();
        ctx.moveTo(81.4, 591.3);
        ctx.bezierCurveTo(81.4, 602.3, 71.9, 611.1, 60.1, 611.1);
        ctx.bezierCurveTo(48.3, 611.1, 38.7, 602.3, 38.7, 591.3);
        ctx.bezierCurveTo(38.7, 580.4, 48.3, 571.5, 60.1, 571.5);
        ctx.bezierCurveTo(71.9, 571.5, 81.4, 580.4, 81.4, 591.3);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        // labLeft/upArray/

        ctx.save();
        if (isOver) {
            ctx.transform(1, 0, 0, -1, 5, 75);
            ctx.strokeStyle = 'rgb(81,199,229)';
        }
        else
            ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(223.3, 15.4);
        ctx.lineTo(202.3, 26.2);
        ctx.lineTo(216.5, 26.2);
        ctx.lineTo(216.8, 38.4);
        ctx.lineTo(216.9, 47.9);
        ctx.lineTo(232.0, 47.9);
        ctx.lineTo(232.0, 25.7);
        ctx.lineTo(246.2, 25.5);
        ctx.lineTo(223.3, 15.4);
        ctx.closePath();
        ctx.lineWidth = 3.0;
        ctx.lineJoin = "miter";
        ctx.miterLimit = 10.0;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(202.4, 51.9);
        ctx.bezierCurveTo(201.2, 44.9, 216.9, 42.8, 216.9, 42.8);
        ctx.lineTo(217.0, 47.5);
        ctx.lineTo(232.1, 47.5);
        ctx.lineTo(232.1, 41.9);
        ctx.bezierCurveTo(232.1, 41.9, 250.2, 41.9, 246.3, 50.0);
        ctx.bezierCurveTo(242.4, 58.1, 234.1, 58.2, 231.9, 58.7);
        ctx.bezierCurveTo(229.8, 59.3, 204.0, 61.5, 202.4, 51.9);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();


        ctx.font = "40.0px '幼圆'";
        ctx.strokeStyle = "rgb(5, 5, 5)";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 0.0;
        if (isOver) {
            ctx.save();
            ctx.fillStyle = 'rgb(81,199,229)';
            ctx.strokeStyle = 'rgb(81,199,229)';
            ctx.transform(-1, 0, 0, 1, 270, 0);
            ctx.fillText(uptxt, 70.3, 50.7);
            ctx.strokeText(uptxt, 70.3, 50.7);
            ctx.restore();
        }
        else {
            ctx.fillText(uptxt, 32.3, 50.7);
            ctx.strokeText(uptxt, 32.3, 50.7);
        }

        // labLeft/
        ctx.font = "36.0px '幼圆'";
        ctx.save();
        ctx.transform(-1.000, 0.000, 0.000, 1.000, 250.0, 599.8);
        if (isOver) {
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'black';
        }
        else {
            ctx.fillStyle = "rgb(81,199,229)";
            ctx.strokeStyle = "rgb(81,199,229)";
        }
        ctx.fillText(downtxt, 0, 0);
        ctx.strokeText(downtxt, 0, 0);


        ctx.restore();
        ctx.restore();
    }

    function btnLabPath(ctx) {
        // goLab//
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(173.1, 6.3);
        ctx.bezierCurveTo(185.0, 6.3, 194.6, 12.3, 194.6, 19.7);
        ctx.lineTo(194.6, 108.2);
        ctx.bezierCurveTo(194.6, 115.6, 185.0, 121.5, 173.1, 121.5);
        ctx.lineTo(30.6, 121.5);
        ctx.bezierCurveTo(18.7, 121.5, 9.1, 115.6, 9.1, 108.2);
        ctx.lineTo(9.1, 19.7);
        ctx.bezierCurveTo(9.1, 12.3, 18.7, 6.3, 30.6, 6.3);
        ctx.lineTo(173.1, 6.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(32, 24, 76)";
        ctx.fill();

        // goLab//
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.50)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = 0.0;
        ctx.shadowBlur = 10.0;

        // goLab///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(168.0, 15.0);
        ctx.bezierCurveTo(179.1, 15.0, 188.1, 20.2, 188.1, 26.6);
        ctx.lineTo(188.1, 103.2);
        ctx.bezierCurveTo(188.1, 109.6, 179.1, 114.8, 168.0, 114.8);
        ctx.lineTo(35.1, 114.8);
        ctx.bezierCurveTo(24.0, 114.8, 15.0, 109.6, 15.0, 103.2);
        ctx.lineTo(15.0, 26.6);
        ctx.bezierCurveTo(15.0, 20.2, 24.0, 15.0, 35.1, 15.0);
        ctx.lineTo(168.0, 15.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(27, 117, 187)";
        ctx.fill();

        // goLab///
        ctx.beginPath();
        ctx.moveTo(161.3, 25.0);
        ctx.bezierCurveTo(171.3, 25.0, 179.5, 29.2, 179.5, 34.5);
        ctx.lineTo(179.5, 97.3);
        ctx.bezierCurveTo(179.5, 102.5, 171.3, 106.7, 161.3, 106.7);
        ctx.lineTo(41.2, 106.7);
        ctx.bezierCurveTo(31.2, 106.7, 23.1, 102.5, 23.1, 97.3);
        ctx.lineTo(23.1, 34.5);
        ctx.bezierCurveTo(23.1, 29.2, 31.2, 25.0, 41.2, 25.0);
        ctx.lineTo(161.3, 25.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 82, 149)";
        ctx.fill();

        // goLab//Go
        ctx.restore();
        ctx.restore();
        ctx.font = "55.8px 'Microsoft YaHei UI'";
        ctx.save();
        ctx.transform(0.729, 0.000, 0.000, 1.000, 23.1, 72.9);
        ctx.fillStyle = "rgb(59, 198, 244)";
        ctx.fillText("Go", 0, 0);
        ctx.restore();

        // goLab//Lab
        ctx.font = "Bold 55.8px 'Microsoft YaHei UI'";
        ctx.save();
        ctx.transform(0.729, 0.000, 0.000, 1.000, 80.7, 104.7);
        ctx.fillStyle = "rgb(212, 238, 252)";
        ctx.fillText("Lab", 0, 0);
        ctx.restore();
        ctx.restore();
    }

    function btnRecruitPath(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(178.3, 9.1);
        ctx.bezierCurveTo(190.5, 9.1, 200.4, 14.9, 200.4, 22.1);
        ctx.lineTo(200.4, 108.4);
        ctx.bezierCurveTo(200.4, 115.6, 190.5, 121.4, 178.3, 121.4);
        ctx.lineTo(32.0, 121.4);
        ctx.bezierCurveTo(19.8, 121.4, 9.9, 115.6, 9.9, 108.4);
        ctx.lineTo(9.9, 22.1);
        ctx.bezierCurveTo(9.9, 14.9, 19.8, 9.1, 32.0, 9.1);
        ctx.lineTo(178.3, 9.1);
        ctx.closePath();
        ctx.fillStyle = "rgb(64, 20, 11)";
        ctx.fill();

        // goRecruit///
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.50)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = 0.0;
        ctx.shadowBlur = 10.0;

        // goRecruit////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(172.2, 15.0);
        ctx.bezierCurveTo(183.5, 15.0, 192.8, 20.1, 192.8, 26.3);
        ctx.lineTo(192.8, 101.0);
        ctx.bezierCurveTo(192.8, 107.2, 183.5, 112.2, 172.2, 112.2);
        ctx.lineTo(35.6, 112.2);
        ctx.bezierCurveTo(24.2, 112.2, 15.0, 107.2, 15.0, 101.0);
        ctx.lineTo(15.0, 26.3);
        ctx.bezierCurveTo(15.0, 20.1, 24.2, 15.0, 35.6, 15.0);
        ctx.lineTo(172.2, 15.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(223, 35, 33)";
        ctx.fill();

        // goRecruit////
        ctx.beginPath();
        ctx.moveTo(165.3, 24.8);
        ctx.bezierCurveTo(175.6, 24.8, 183.9, 28.9, 183.9, 34.0);
        ctx.lineTo(183.9, 95.2);
        ctx.bezierCurveTo(183.9, 100.3, 175.6, 104.4, 165.3, 104.4);
        ctx.lineTo(41.9, 104.4);
        ctx.bezierCurveTo(31.6, 104.4, 23.3, 100.3, 23.3, 95.2);
        ctx.lineTo(23.3, 34.0);
        ctx.bezierCurveTo(23.3, 28.9, 31.6, 24.8, 41.9, 24.8);
        ctx.lineTo(165.3, 24.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(243, 119, 38)";
        ctx.fill();

        // goRecruit//Recruit
        ctx.restore();
        ctx.restore();
        ctx.restore();
        ctx.font = "53.2px 'Candara'";
        ctx.save();
        ctx.transform(0.851, 0.000, 0.000, 1.000, 34.2, 76.7);
        ctx.fillStyle = "rgb(255, 217, 0)";
        ctx.fillText("Recruit", 0, 0);
        ctx.restore();
    }

    function btnMsgPath(ctx) {
        // goMsg///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(168.1, 6.9);
        ctx.bezierCurveTo(179.6, 6.9, 189.0, 12.5, 189.0, 19.4);
        ctx.lineTo(189.0, 102.0);
        ctx.bezierCurveTo(189.0, 108.9, 179.6, 114.5, 168.1, 114.5);
        ctx.lineTo(30.1, 114.5);
        ctx.bezierCurveTo(18.6, 114.5, 9.3, 108.9, 9.3, 102.0);
        ctx.lineTo(9.3, 19.4);
        ctx.bezierCurveTo(9.3, 12.5, 18.6, 6.9, 30.1, 6.9);
        ctx.lineTo(168.1, 6.9);
        ctx.closePath();
        ctx.fillStyle = "rgb(203, 181, 50)";
        ctx.fill();

        // goMsg///
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.50)";
        ctx.shadowOffsetX = 0.0;
        ctx.shadowOffsetY = 0.0;
        ctx.shadowBlur = 10.0;

        // goMsg////
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(163.2, 15.0);
        ctx.bezierCurveTo(173.9, 15.0, 182.6, 19.8, 182.6, 25.8);
        ctx.lineTo(182.6, 97.4);
        ctx.bezierCurveTo(182.6, 103.3, 173.9, 108.2, 163.2, 108.2);
        ctx.lineTo(34.4, 108.2);
        ctx.bezierCurveTo(23.7, 108.2, 15.0, 103.3, 15.0, 97.4);
        ctx.lineTo(15.0, 25.8);
        ctx.bezierCurveTo(15.0, 19.8, 23.7, 15.0, 34.4, 15.0);
        ctx.lineTo(163.2, 15.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(250, 238, 73)";
        ctx.fill();

        // goMsg////
        ctx.beginPath();
        ctx.moveTo(156.7, 24.4);
        ctx.bezierCurveTo(166.4, 24.4, 174.3, 28.3, 174.3, 33.2);
        ctx.lineTo(174.3, 91.8);
        ctx.bezierCurveTo(174.3, 96.7, 166.4, 100.7, 156.7, 100.7);
        ctx.lineTo(40.4, 100.7);
        ctx.bezierCurveTo(30.7, 100.7, 22.8, 96.7, 22.8, 91.8);
        ctx.lineTo(22.8, 33.2);
        ctx.bezierCurveTo(22.8, 28.3, 30.7, 24.4, 40.4, 24.4);
        ctx.lineTo(156.7, 24.4);
        ctx.closePath();
        ctx.fillStyle = "rgb(251, 243, 155)";
        ctx.fill();

        // goMsg//Message
        ctx.restore();
        ctx.restore();
        ctx.restore();
        ctx.font = "Bold 45.3px 'Book Antiqua'";
        ctx.save();
        ctx.transform(0.771, 0.000, 0.000, 1.000, 30.1, 73.6);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillText("Message", 0, 0);
        ctx.restore();

    }

    function labRight(ctx) {

        var gradient;

        // labRight/
        ctx.save();

        // labRight//
        ctx.save();

        // labRight///
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(623.7, 0.0);
        ctx.bezierCurveTo(668.9, 0.0, 705.5, 33.9, 705.5, 75.9);
        ctx.lineTo(705.5, 578.5);
        ctx.bezierCurveTo(705.5, 620.5, 668.9, 654.5, 623.7, 654.5);
        ctx.lineTo(81.8, 654.5);
        ctx.bezierCurveTo(36.6, 654.5, 0.0, 620.5, 0.0, 578.5);
        ctx.lineTo(0.0, 75.9);
        ctx.bezierCurveTo(0.0, 33.9, 36.6, 0.0, 81.8, 0.0);
        ctx.lineTo(623.7, 0.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 0, 12)";
        ctx.fill();

        // labRight///
        ctx.beginPath();
        ctx.moveTo(618.8, 7.8);
        ctx.bezierCurveTo(663.3, 7.8, 699.4, 40.9, 699.4, 82.1);
        ctx.lineTo(699.4, 574.3);
        ctx.bezierCurveTo(699.4, 615.3, 663.3, 648.6, 618.8, 648.6);
        ctx.lineTo(85.2, 648.6);
        ctx.bezierCurveTo(40.6, 648.6, 4.6, 615.3, 4.6, 574.3);
        ctx.lineTo(4.6, 82.1);
        ctx.bezierCurveTo(4.6, 40.9, 40.6, 7.8, 85.2, 7.8);
        ctx.lineTo(618.8, 7.8);
        ctx.closePath();
        gradient = ctx.createLinearGradient(4.6, 328.2, 699.4, 328.2);
        gradient.addColorStop(0.00, "rgb(27, 117, 187)");
        gradient.addColorStop(0.09, "rgb(45, 98, 174)");
        gradient.addColorStop(0.22, "rgb(63, 79, 161)");
        gradient.addColorStop(0.87, "rgb(47, 65, 131)");
        gradient.addColorStop(1.00, "rgb(31, 52, 101)");
        ctx.fillStyle = gradient;
        ctx.fill();

        // labRight/
        ctx.restore();
        ctx.restore();
        ctx.beginPath();
        ctx.moveTo(83.2, 564.6);
        ctx.lineTo(83.2, 91.8);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.stroke();

        // labRight/exitBtn/
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(656.4, 65.0);
        ctx.bezierCurveTo(656.4, 71.5, 652.2, 76.8, 647.1, 76.8);
        ctx.lineTo(621.9, 76.8);
        ctx.bezierCurveTo(616.8, 76.8, 612.6, 71.5, 612.6, 65.0);
        ctx.lineTo(612.6, 40.1);
        ctx.bezierCurveTo(612.6, 33.6, 616.8, 28.3, 621.9, 28.3);
        ctx.lineTo(647.1, 28.3);
        ctx.bezierCurveTo(652.2, 28.3, 656.4, 33.6, 656.4, 40.1);
        ctx.lineTo(656.4, 65.0);
        ctx.closePath();
        ctx.stroke();

        // labRight/exitBtn/
        ctx.beginPath();
        ctx.moveTo(620.7, 36.7);
        ctx.lineTo(648.9, 67.3);
        ctx.fillStyle = "rgb(0, 173, 239)";
        ctx.fill();
        ctx.strokeStyle = "rgb(0, 173, 239)";
        ctx.stroke();

        // labRight/exitBtn/
        ctx.beginPath();
        ctx.moveTo(620.7, 67.3);
        ctx.lineTo(648.9, 36.7);
        ctx.fill();
        ctx.stroke();

        // labRight/
        ctx.restore();
        ctx.font = "44.0px '幼圆'";
        ctx.fillText("详", 24.7, 252.6);
        ctx.lineWidth = 2.0;
        ctx.lineJoin = "miter";
        ctx.miterLimit = 0.0;
        ctx.strokeText("详", 24.7, 252.6);
        ctx.fillText("细", 24.7, 305.4);
        ctx.strokeText("细", 24.7, 305.4);
        ctx.fillText("信", 24.7, 358.2);
        ctx.strokeText("信", 24.7, 358.2);
        ctx.fillText("息", 24.7, 411.0);
        ctx.strokeText("息", 24.7, 411.0);
        ctx.restore();
    }

}
//MsgPart
{
    function MsgPanel ()
    {
        var msgPanel=new Panel(16,50,655,890,null);
        msgPanel.clock=new simpleClock(1,1,quartEaseOut,1,0,true,false);
        msgPanel.clock.onEnd=function()
        {
            window.curTask.decreseWait();
        }
        msgPanel.clock.onReverse=function()
        {
            window.curTask.decreseWait();
        }
        msgPanel.transFun=function(ctx)
        {
            var m=this.w/2;
            var n=this.h/2;
            var cos=Math.cos(this.clock.value*Math.PI*4);
            var sin=Math.sin(this.clock.value*Math.PI*4);
            var r=this.clock.value/this.clock.multiplier;
            ctx.transform(cos,-sin,sin,cos,m-cos*m-sin*n+this.x,n-cos*n+sin*m+this.y);
            ctx.transform(r,0,0,r,this.w/2*(1-r),this.h/2*(1-r));
        }
        msgPanel.paintFun=function(ctx)
        {
            ctx.save();
            ctx.fillStyle='rgb(180,180,54)';
            roundRectPath(this.w,this.h,10,ctx);
            ctx.fill();
            ctx.translate(10,10);
            roundRectPath(this.w-20,this.h-20,10,ctx);
            ctx.fillStyle='rgb(247,247,51)';
            ctx.fill();
            ctx.beginPath();
            ctx.translate(820,10);
            ctx.rect(0,0,40,40);
            ctx.moveTo(10,10);
            ctx.lineTo(30,30);
            ctx.moveTo(10,30);
            ctx.lineTo(30,10);
            ctx.closePath();
            ctx.strokeStyle='black';
            ctx.lineWidth=5;
            ctx.stroke();
            ctx.restore();
        }
        msgPanel.clicker.fire = function (ctx, e) {
            this.pathFun(ctx);
            if (ctx.isPointInPath(e.ox, e.oy))
            {
                if(e.cx>this.p.absX+820 && e.cx<this.p.absX+860 && e.cy>this.p.absY+10 && e.cy<this.p.absY+50)
                {
                    var t=window.curTask;
                    t.exit();
                    for(var i= 0,item= t.cmdUIComponents[i];item;item= t.cmdUIComponents[++i])
                        if(item.clock)item.clock.reverse();
                    t.msgPanel.findByID('textPanel').findByID('text').addText('');
                    return true;
                }
                else
                    return  this.onclick(e);
            }
            else
                return false;
        }
        msgPanel.addCtrl(new MsgTextPanel(),'textPanel');
        msgPanel.addCtrl(new MsgAboutPanel(),'aboutPanel');
        var title=new Label(320,15,'网站信息','bold 48px 微软雅黑');

        msgPanel.addCtrl(title,'title');
        return msgPanel;
    }
    function FloatButton(x,y,w,h,txt,font,backColor,isCmdClock,dx,dy)
    {
        var logbtn=new Button(x,y,w,h,txt,font,backColor,isCmdClock);
        logbtn.paintFun=function(ctx)
        {
            ellipsePath(this.w,this.h,ctx);
            ctx.fillStyle='rgb(247,247,51)';
            ctx.strokeStyle='rgb(180,180,51)';
            ctx.lineWidth=5;
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle='black';
            var w=ctx.measureText(this.txt).width;
            ctx.textBaseline='hanging';
            ctx.font=this.font;
            ctx.fillText(this.txt, (this.w - w) / 3, (this.h - this.fh) / 2, this.w);
        }
        logbtn.clock=new simpleClock(1,1,quartEaseOut,1,0,true,false);
        logbtn.update=function(ctx)
        {
            this.clock.update();
            this.animation.update();
        }
        logbtn.transFun=function(ctx)
        {
            ctx.translate(this.animation.x,this.animation.y);
            var r=this.clock.value/this.clock.multiplier;
            ctx.transform(r,0,0,r,this.w/2*(1-r),this.h/2*(1-r));
        }
        logbtn.clicker=new clicker(logbtn);
        logbtn.clicker.pathFun=function(ctx)
        {
            ctx.translate(this.p.animation.x,this.p.animation.y);
            ellipsePath(this.p.w,this.p.h,ctx);
            ctx.translate(-this.p.animation.x,-this.p.animation.y);
        }
        logbtn.animation=new floatAnimation(x,y,Math.random()*10+5,Math.random()*10+5,[],true,x+dx,y+dy,x,y);
        logbtn.clock.p=logbtn;
        logbtn.clock.onEnd=function() {
            this.p.animation.start();
            window.curTask.decreseWait();
        }
        logbtn.clock.onReverse=function(){this.p.animation.stop(); window.curTask.decreseWait();}
        return logbtn;
    }
    function MsgTask()
    {
        var t=new Task('Msg');
        var mp=new MsgPanel();
        t.cmdUIComponents.addCtrl(mp,'msgPanel');
        t.msgPanel=mp;
        var btn=new FloatButton(900+Math.random()*100,10,200,70,'登陆','42px 幼圆','rgb(250,250,51)',false,60+60*Math.random(),50+150*Math.random());
        btn.update=function()
        {
            this.clock.update();
            this.animation.update();
            if(window.channelMng.isLogIn)
             this.txt='注销';
            else
             this.txt='登陆';
        }
        btn.clicker.onclick = function () {
            if (!window.channelMng.isLogIn)
                DisplayLogWindow();
            else
                Sys.Services.AuthenticationService.logout(null, function () { 
                window.channelMng.clearProfile(); });
        }
        t.cmdUIComponents.addCtrl(btn,'logBtn');
        var btn1=new FloatButton(900+Math.random()*100,220,200,70,'主试','42px 幼圆','rgb(250,250,51)',false,60+60*Math.random(),50+150*Math.random());
        btn1.clicker.onclick=function(){
            window.location='Re/RecruitLogIn.aspx';
        }
        t.cmdUIComponents.addCtrl(btn1,'adBtn');
        var btn2=new FloatButton(900+Math.random()*100,440,200,70,'关于','42px 幼圆','rgb(250,250,51)',false,60+60*Math.random(),50+150*Math.random());
        t.cmdUIComponents.addCtrl(btn2,'aboutBtn');
        btn2.clicker.onclick = function () {
            var t=window.curTask.msgPanel.findByID('textPanel');
            var a=window.curTask.msgPanel.findByID('aboutPanel');
            t.visible=!t.visible;
            a.visible=!a.visible;
            if(t.visible)
            {
                this.p.txt='关于';
            }
            else
                this.p.txt='寄语';
        }
        t.resetWait(4);
        t.onbegin.subscribe(function(){window.curTask.msgPanel.findByID('textPanel').findByID('text').setText('s',window.ctx);});
        return t;
    }
    function MsgTextPanel()
    {
       var p=new Panel(20,90,540,850,'rgba(250,250,250,0.7)');
       var t=new Article(0,0,850,540,'25px 微软雅黑',true,'bold 30px 微软雅黑','black','black','rgba(250,250,250,0.7)') ;
        p.addCtrl(t,'text');
        return p;
    }
    function MsgAboutPanel()
    {
        var p=new Panel(20,90,540,850,'rgba(250,250,250,0)');
        p.visible=false;
        var bf='bold 30px 微软雅黑';
        var f='30px 微软雅黑';
        var au=new Label(10,10,'作者:',bf) ;
        p.addCtrl(au,'au');
        p.addCtrl(new Label(20+au.w,10,'柏子蜀黍 (电话:保密, QQ:121047959)',f),'aut');
        var th=new Label(10,45,'网站说明:',bf);
        p.addCtrl(th,'in');
        p.addCtrl(new Label(20+th.w,45,'这是我暑假的成果,前台js后台C#,每次在我计算动画的',f),'int0');
        p.addCtrl(new Label(10,80,'时候,我都坚定地认为--HTML5会取代Flash!今后想做更多的特',f),'int1')
        p.addCtrl(new Label(10,115,'效,暑假还麻烦同学设计了一套新清新的UI,我会尽快呈现出来!',f),'int2');
        th=new Label(10,150,'感谢:',bf);
        p.addCtrl(th,'th');
        p.addCtrl(new Label(20+th.w,150,'十分感谢李林老师对项目的支持,麻烦他很多时间',f),'tht0');
        p.addCtrl(new Label(10,185,'还要感谢帮我做测试的两位学弟和一位学长,bug猛如虎...',f),'tht1');
        p.addCtrl(new Label(10,230,'阅读体验好差!!!还要优化才行!',bf),'nu');
        return p;
    }
}