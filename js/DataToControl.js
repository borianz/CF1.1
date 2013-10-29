function LabSindexPanel(ets) {
    var panel = new Panel(280, 127, 455, 216, 'rgba(0,0,0,0)');
    for (var i = 0; i < ets.length; i++) {
        var drop = new Drop(10, 12 + i * 70, 190, ets[i].ExpTypeName, '40px "幼圆"', 'rgba(172,223,235,0.5)', 'black', 'rgba(172,223,235,0.3)', true);
        var exps = ets[i].Exps;
        var h=5;
        for (var j = 0; j < exps.length; j++) {
            if (!exps[j].CanSubmit) continue;
            var btn = new Button(2, h, 180, 45, exps[j].ExpName, '28px "幼圆"', 'rgb(146,190,230)', true, null, null, true);
            h += 47;
            drop.addCtrl(btn, exps[j].ExpNo);
            btn.exp = exps[j];
            btn.clicker.onclick = function () {
                var panel = new LabSubmitPanel(this.p.exp);
                panel.clock = curTask.cmdUIComponents.findByID('right').clock;
                curTask.cmdUIComponents.removeCtrl('submitPanel');
                curTask.cmdUIComponents.removeCtrl('readPanel');
                curTask.cmdUIComponents.addCtrl(panel, 'submitPanel');
            } 
        }
        if (drop.controls.length > 0)
            panel.addCtrl(drop, ets[i].ExpTypeNo);
    }
    return panel;
}
function LabRindexPanel(ets) {
    var panel = new Panel(280, 127, 455, 216, 'rgba(0,0,0,0)');
    for (var i = 0; i < ets.length; i++) {
        var drop = new Drop(10, 12 + i * 70, 190, ets[i].ExpTypeName, '40px "幼圆"', 'rgba(172,223,235,0.5)', 'rgb(150,237,222)', 'rgba(172,223,235,0.3)', true);
        var exps = ets[i].Exps;
        var h=5;
        for (var j = 0; j < exps.length; j++) {
            if (exps[j].CanRead == false) continue;
            var btn = new Button(2, h, 180, 45, exps[j].ExpName, '28px "幼圆"', 'rgb(146,190,230)', true, 'black', 'rgb(150,237,222)', true);
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
    return panel;
}


function SubmitPanelToValue() {
    var sp = curTask.cmdUIComponents.findByID('submitPanel');
    var str = '';
    for (var i = 0; i < sp.controls.length; i++)
        if (sp.controls[i].vtxt)
            str += sp.controls[i].paraType.ParaNo + '\t' + sp.controls[i].vtxt + '\r';
    window.channelMng.beginChannel(true, 'labChannel');
    LabService.TryAddParaValueForTest(sp.exp.ExpNo, str,function (b) {
    DisplayMsgWindow(b[0], b[1]);
    window.channelMng.endChannel();
} , function (e) {
    DisplayMsgWindow(e[0], e[1]);
    window.channelMng.endChannel();
});
}
function LabReadPanel(exp, expDes, userInfo) {
    var panel = new Panel(640, 128, 419, 496, 'rgba(250,250,250,0.5)');
    panel.transFun = function (ctx) {
        ctx.translate(this.x, this.y + this.clock.value);
    }
    var title = new Label(0, 1, exp.ExpName, 'bold 30px "幼圆"', 'black', 'rgba(0,0,0,0)');
    title.x = (panel.w - title.w) / 2;
    panel.addCtrl(title, 'title');
    var des=new Article (2,35,470,75,' 25px "幼圆"',false,' 25px "幼圆"','black','black','rgba(0,0,0,0)')  ;
    des.addText(expDes);
    panel.addCtrl(des, 'content');
    if (userInfo) {
        var ul = new Label(0, 120, userInfo, ' 25px "幼圆"', 'white', 'rgba(0,0,0,0)');
        panel.addCtrl(ul, 'userInfo');
        if (!userInfo.match(/没有/)) {
            var btnd = new Button(150, 350, 150, 50, '删除数据', ' 25px "幼圆"', 'rgba(0,174,239,0.7)', true, 'darkblue', 'white', true);
            btnd.expNo = exp.ExpNo;
            btnd.clicker.onclick = function () {
                onTryDeletePV(this.p.expNo);
            }
            panel.addCtrl(btnd, 'deleteBtn');
        }
    }
    var btn = new Button(320, 350, 150, 50, '获取数据', ' 25px "幼圆"', 'rgba(0,174,239,0.7)', true, 'darkblue', 'white', true);
    btn.exp = exp;
    btn.clicker.onclick = function () {
        onTryReadData(this.p.exp.ExpNo)
    };
    panel.addCtrl(btn, "btn");
    return panel;
}
function LabSubmitPanel(exp) {
    var panel = new Panel(640, 128, 439, 520, 'rgba(250,250,250,0.5)');
    panel.exp = exp;
    var font = '25px "幼圆"';
    panel.transFun = function (ctx) {
        ctx.translate(this.x, this.y + this.clock.value);
    }
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
             var s = new Switch(7, 0, 100, 40, 10, txts[0], txts[1], '20px "幼圆"', 'black', 'whitesmoke', 'steelblue', 'black');
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
           var txt = new TextBox(7,0, 200, font, 'rgb(41,159,218)', 'white', para.ValueType, 'gray', para.Des);
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
    }
    panel.vnum = 0;
    return panel;
}

function onTryReadData(expNo) {
    window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
    if (!window.channelMng.isLogIn)
        DisplayLogWindow();
    else {
        window.channelMng.beginChannel(true, 'readData');
        LabService.GetExpData(expNo,function (e) {
    if (e[0] == '1')
        DisplayMsgWindow(e[1], e[2]);
    else {
        DisplayMsgWindow(e[1], e[2]);
     }
    window.channelMng.endChannel();
} , onfail);
    }
}

function onTryDeletePV(expNo) {
 if (!window.channelMng.isLogIn)
        DisplayLogWindow();
    else {
        window.channelMng.beginChannel(true, 'readData');
        LabService.DeleteParaValue(expNo,function (e) {
    DisplayMsgWindow(e[0], e[1]);
    curTask.cmdUIComponents.removeCtrl('readPanel');
    window.channelMng.endChannel();
} , onfail);
    }
}
function getExpDetail(exp) {
    window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
    if (window.channelMng.isLogIn) {
        window.channelMng.beginChannel(true, 'expDetail');
        LabService.UserPVDatails(exp.ExpNo,function (data, exp) {
    var panel = new LabReadPanel(exp, data[0], data[1]);
    panel.clock = curTask.cmdUIComponents.findByID('right').clock;
    curTask.cmdUIComponents.removeCtrl('submitPanel');
    curTask.cmdUIComponents.removeCtrl('readPanel');
    curTask.cmdUIComponents.addCtrl(panel, 'readPanel');
    window.channelMng.endChannel();
} , onfail, exp);
    }
    else
        DisplayLogWindow();
}




