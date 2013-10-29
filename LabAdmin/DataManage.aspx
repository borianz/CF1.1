<%@ Page Title="" Language="C#" MasterPageFile="~/LabAdmin/LabAdminMaster.master" AutoEventWireup="true" CodeFile="DataManage.aspx.cs" Inherits="LabAdmin_DataManage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
 
<style type="text/css">
        .style1
        {
            width: 100%;
            border-style: solid;
            border-width: 1px;
        }
        .style3
        {
            width: 316px;
        }
        .style4
        {
            width: 100%;
        }
       
        .style6
        {
        width: 321px;
    }
        .style7
        {
            width: 162px;
        }
    .style8
    {
        width: 129px;
    }
    .style9
    {
        width: 100%;
        border: 1px solid #0000FF;
    }
    .style11
    {
        width: 126px;
    }
   
    #txtExpName
    {
        width: 308px;
    }
  
    #txtParaName
    {
        width: 314px;
        margin-left: 0px;
    }
  
    #txtExpParaDes
    {
        width: 439px;
    }
    #txtExpParaDes
    {
        width: 308px;
    }
  
    #txtExpParaDes
    {
        width: 294px;
    }
  
    #txtExpParaDes
    {
        width: 473px;
    }
  
    #txtParaDes
    {
        width: 498px;
    }
  
    .style12
    {
        width: 87px;
    }
  
    .style13
    {
        width: 361px;
    }
    .style14
    {
        width: 119px;
    }
  
    #newExpTypeName
    {
        width: 288px;
    }
    .style15
    {
        width: 123px;
    }
  
    .style16
    {
        width: 121px;
    }
  
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="leftHolder" Runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    <Services>
    <asp:ServiceReference Path="~/LabAdmin/Lab2AdminService.asmx" InlineScript="false"/></Services>
    </asp:ScriptManager>
    <input type="button" value="实验详情" id="leftExpDetailBtn" class="leftBtn" onclick="ConcealDivs([$get('div1'),$get('div2')]);updateExpStart();"/> 
    <input type="button" value="分类管理" id="leftExpTypeBtn" class="leftBtn" onclick="ConcealDivs([$get('div1'),$get('div4')]);onExpTypeBtnClick();"/> 
    <input type="button" value="添加实验" id="leftAddExpBtn" class="leftBtn" onclick="ConcealDivs([$get('div1'),$get('div3')]);onAddExpBtnClick();"/> 
    <input type="button" value="数据管理" id="leftExpValueBtn" class="leftBtn" onclick="ConcealDivs([$get('div1'),$get('div5')]);onExpDataBtnClick();"/> 
    <input type="button" value="分组限制" class="leftBtn" onclick="ConcealDivs([$get('div1'),$get('div6')]);onExpListBtnClick();"/> 
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="rightHolder" Runat="Server">
    <div id="div1" >
    <table class="style1">
        <tr>
            <td class="style11">实验分类:</td>
            <td class="style3">
                <select id='expTypeSelect' onchange="onExpTypeChange()">
                <option>加载中..请稍后</option>
                </select></td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td class="style11">
                此分类实验:</td>
            <td class="style3">
               <select id='expSelect' onchange='onUpdateExpSelected();' >
                </select></td>
            <td>
              &nbsp;</td>
        </tr>
        </table>
       
</div>
<div id='div4' style="display:none">
        <table class="style4">
                <tr>
                    <td class="style15">
                        管理分类</td>
                    <td class="style6">
              <input id="expTypeEnable" type="checkbox" disabled="disabled"/>已启用此分类所有实验</td>
                    <td>
                        <input type="button" id="deleteExpTypeBtn"  value="" onclick="deleteExpType()"/></td>
                </tr>
                <tr>
                    <td class="style15">
                        新建分类</td>
                    <td class="style6">
                        &nbsp;</td>
                    <td>
                        &nbsp;</td>
                </tr>
                <tr>
                    <td class="style15">
                        新建分类名称:</td>
                    <td class="style6">
                        <input id="newExpTypeName" type="text" /></td>
                    <td>
                        <input id="addExpTypeBtn" type="button" value="确定新建" onclick="addExpType()" /></td>
                </tr>
                <tr>
                    <td class="style15">
                        &nbsp;</td>
                    <td class="style6">
                        &nbsp;</td>
                    <td>
                        &nbsp;</td>
                </tr>
            </table>
        </div>
<div id="div2" style="">
    <table class="style4">
        <tr>
            <td class="style14">
                下载模式</td>
            <td>
               <select id="uReadMode">
               <optgroup label="对所有用户">
               <option>上传后开放下载</option>
               <option>无限制开放下载</option>
               <option>禁止任何下载</option>
               </optgroup>
               <optgroup label="仅允许白名单下载">
               <option>白名单上传后开放</option>
               <option>白名单任意下载</option>
               </optgroup>
               <optgroup label="拒绝黑名单下载">
               <option>其他人上传后开放</option>
               <option>其他人任意下载</option>
               </optgroup>
               </select></td>
        </tr>
        <tr>
            <td class="">
                上传模式</td>
            <td>
               <select id="uSubmitMode">
               <option>完全开放</option>
               <option>禁止黑名单上传</option>
               <option>仅允许白名单上传</option>
               <option>完全禁止</option>
               </select></td>
        </tr>
        <tr>
            <td class="style14">
                实验说明</td>
            <td>
               <textarea rows="5" cols="80" id="uDes"></textarea></td>
        </tr>
        <tr>
            <td class="style14">
                白名单</td>
            <td>
                <select id='expWhiteGroupSelect'><optgroup id='wbs' label='同时限制'></optgroup>
                <optgroup id='wss' label='上传限制'></optgroup>
                <optgroup id='wrs' label='下载限制'></optgroup></select></td>
        </tr>
        <tr>
            <td class="style14">
                黑名单</td>
            <td>
               <select id='expBlackGroupSelect'><optgroup id='bbs' label='同时限制'></optgroup>
                <optgroup id='bss' label='上传限制'></optgroup>
                <optgroup id='brs' label='下载限制'></optgroup></select></td>
        </tr>
        <tr>
            <td class="style14">
                实验参数</td>
            <td id="uParams">
                </td>
        </tr>
        <tr>
            <td class="style14">
                <input  onclick="updateExpClick();" type="button" value="保存修改" /></td>
            <td>
                暂时只能修改实验:说明,上传下载模式,黑白名单</td>
        </tr>
    </table>
</div>
<div id="div3" style="display:none">
    <table class="style4" style="display:inline-block">
        <tr>
            <td class="style8">
                实验名称</td>
            <td>
                <input id='txtExpName' type="text" /></td>
        </tr>
        <tr>
            <td class="style8">
                上传模式</td>
            <td>
               <select id='submitModeSelect'>
               <option>完全开放</option>
               <option>禁止黑名单上传</option>
               <option>仅允许白名单上传</option>
               <option>完全禁止</option>
               </select></td>
        </tr>
        <tr>
            <td class="style8">
                下载模式</td>
            <td>
               <select id="readModeSelect">
               <optgroup label="对所有用户">
               <option>上传后开放下载</option>
               <option>无限制开放下载</option>
               <option>禁止任何下载</option>
               </optgroup>
               <optgroup label="仅允许白名单下载">
               <option>白名单上传后开放</option>
               <option>白名单任意下载</option>
               </optgroup>
               <optgroup label="拒绝黑名单下载">
               <option>其他人上传后开放</option>
               <option>其他人任意下载</option>
               </optgroup>
               </select></td>
        </tr>
        <tr>
            <td class="style8">
                实验说明</td>
            <td>
                <textarea  rows="5" cols="80" id='txtExpDes'></textarea></td>
        </tr>
        <tr>
            <td class="style8">
                实验参数</td>
            <td class="style13">
                <select id='expParasSelect' onchange="displayPara(this.selectedIndex);"></select>&nbsp;
                <input  onclick="onAddParaClick();" type="button" value="添加参数" />
                <input  onclick="clearParasDiv()" type="button" value="重新填写" />
                <input  onclick="onDeleteParaClick()" type="button" value="删除参数" /></td>
        </tr>
        <tr>
            <td class="style8">
                添加参数</td>
            <td>
                <div id='addExpParaDiv'>
                    <table class="style9">
                        <tr>
                            <td class="style12">
                                参数名称</td>
                            <td class="style7">
                                <input id="txtParaName" type="text" />
                                
                                </td>
                            <td>
                            参数类型:
                              <select style="width:120px" id='paraTypeSelect'>
                              <option>两位小数</option>
                              <option>整数</option>
                              <option>二分变量</option>
                              <option>日期</option>
                              <option>短文本</option>
                                </select> </td>
                        </tr>
                        <tr>
                            <td class="style12">
                                参数说明</td>
                            <td  colspan="2">
                                <input type="text" id='txtParaDes'/></td>
                        </tr>
                    </table>
                </div>
                </td>
        </tr>
        <tr>
            <td class="style8">
                <input onclick="submitExp()" type="button" value="确认添加" /></td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
</div>
<div id='div5' style=" display:none">
<table class="style4">
        <tr>
            <td class="style16">
                所有实验数据</td>
            <td>
                <input type="button" onclick="LinkBtnClick();" value="获取链接" />
                <a target="_blank" id='dataLink'></a>
            </td>
        </tr>
        <tr>
            <td class="style16">
                上传学生</td>
            <td>
                <select id="expValuesSelect"></select></td>
        </tr>
        <tr>
            <td class="style16">
                &nbsp;</td>
            <td>
                <input id='deleteExpValueBtn' disabled="disabled" onclick="deleteStuExpValue();" type="button" value="删除此学生数据" /></td>
        </tr>
    </table>
</div>
<div id='div6' style="display:none"><table class="style4">
        <tr>
            <td class="style16">
                所有小组</td>
            <td>
                <select id="groupsList"><optgroup id='bgroups' label='同时限制'></optgroup>
                <optgroup id='sgroups' label='上传限制'></optgroup>
                <optgroup id='rgroups' label='下载限制'></optgroup></select><input  onclick='loadGroups();' type="button" 
                    value="重置" /></td>
        </tr>
        <tr>
            <td class="style16">
                &nbsp;</td>
            <td>
                <input  onclick="moveWhite();" style="background-color: #FFFFFF; color: #000000;" 
                    type="button" value="加入白名单" /><input onclick="moveBlack();"
                    style="background-color: #000000; color: #FFFFFF;" type="button" 
                    value="加入黑名单" /></td>
        </tr>
        <tr>
            <td class="style16">
                白名单</td>
            <td>
                <asp:ListBox ID="whiteList" runat="server" ClientIDMode="Static"></asp:ListBox>
                <input  onclick="moveBack(g.whiteList);" type="button" value="移除所选" /></td>
        </tr>
        <tr>
            <td class="style16">
                黑名单</td>
            <td>
                <asp:ListBox ID="blackList" runat="server" BackColor="Black" ForeColor="White" 
                    ClientIDMode="Static">
                </asp:ListBox>
                <input  onclick="moveBack(g.blackList);" type="button" value="移除所选" /></td>
        </tr>
        <tr>
            <td class="style16">
                <input onclick="addStuList();" type="button" value="保存修改" /></td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    </div>
<script type="text/jscript">
        var expIndex;
        var c = new Object();
        c.expTypeSelect = $get('expTypeSelect');
        c.expsSelect = $get('expSelect');
        c.expTypeEnableCheck = $get('expTypeEnable');
        c.expNameInput = $get('txtExpName');
        c.readModeSelect = $get('readModeSelect');
        c.submitModeSelect = $get('submitModeSelect');
        c.expDesText = $get('txtExpDes');
        c.ParasSelect = $get('expParasSelect');
        c.ParaNameInput = $get('txtParaName');
        c.ParaDesInput = $get('txtParaDes');
        c.ParaTypeSelect = $get('paraTypeSelect');
        c.addExpTypeBtn = $get('addExpTypeBtn');
        c.deleteExpTypeBtn = $get('deleteExpTypeBtn');
        c.whiteBoth = $get('wbs');
        c.whiteRead = $get('wrs');
        c.whiteSubmit = $get('wss');
        c.blackBoth = $get('bbs');
        c.blackRead = $get('brs');
        c.blackSubmit = $get('bss');
        function addExpListToList(exp) {
            c.whiteBoth.innerHTML = c.whiteRead.innerHTML = c.whiteSubmit.innerHTML = '';
            c.blackBoth.innerHTML = c.blackRead.innerHTML = c.blackSubmit.innerHTML = '';
            for (var i=0, item = exp.whiteGroups[0]; item; item = exp.whiteGroups[++i]) {
                var opt = document.createElement('option');
                opt.group = item;
                opt.innerHTML = item.name;
                opt.value = item.no;
                switch (item.type) {
                    case 0:
                        c.whiteRead.appendChild(opt);
                        opt.style.color = 'red';
                        break;
                    case 1:
                        c.whiteSubmit.appendChild(opt);
                        opt.style.color = 'yellow';
                        break;
                    case 2:
                        c.whiteBoth.appendChild(opt);
                        opt.style.color = 'blue';
                        break;
                }
            }
            
            for (var i=0, item = exp.blackGroups[0]; item; item = exp.blackGroups[++i]) {
                var opt = document.createElement('option');
                opt.group = item;
                opt.innerHTML = item.name;
                opt.value = item.no;
                switch (item.type) {
                    case 0:
                        c.blackRead.appendChild(opt);
                        opt.style.color = 'red';
                        break;
                    case 1:
                        c.blackSubmit.appendChild(opt);
                        opt.style.color = 'yellow';
                        break;
                    case 2:
                        c.blackBoth.appendChild(opt);
                        opt.style.color = 'blue';
                        break;
                }
            }
        }
        function onExpTypeChange() {
            c.expTypeEnableCheck.checked =window.expIndex.ExpTypes[c.expTypeSelect.selectedIndex].Enable;
            c.deleteExpTypeBtn.value = expIndex.ExpTypes[c.expTypeSelect.selectedIndex].Enable ? '禁用实验分类' : '启用实验分类';
            setExpSelect(expIndex.ExpTypes[c.expTypeSelect.selectedIndex].Exps);
            onUpdateExpSelected();
        }
        function setExpSelect(exps) {
            c.expsSelect.innerHTML = '';
            for (var i = 0; i < exps.length; i++) {
                var node = document.createElement('option');
                node.innerHTML = exps[i].ExpName;
                node.value = exps[i].ExpNo;
                node.exp = exps[i];
                c.expsSelect.appendChild(node);
            }
        }
        function addExpType() {
            var name = $get('newExpTypeName').value;
            if (name != '')
                Lab2AdminService.AddExpType(name, function (e) {
                    if (e.result) {
                        onGetExpIndex(e.data);
                        $get('newExpTypeName').value = '';
                        $get('addExpTypeDiv').style.display = 'none';
                    }
                    alert(e.msg);
                });
            else
                alert('请填写实验分类名称');
        }
        function deleteExpType() {
            var type = expIndex.ExpTypes[c.expTypeSelect.selectedIndex];
            var enabled = type.Enable;
            var str = '确定' + (enabled ? '禁用' : '启用') + '分类:' + type.ExpTypeName + '?';
            if (confirm(str)) {
                Lab2AdminService.EnableOrDisableExpType(type.ExpTypeNo, !enabled, function (e, u) {
                    alert(e.msg);
                    expIndex.ExpTypes[u] = e.data;
                    onExpTypeChange();
                }, null, c.expTypeSelect.selectedIndex);
            }
        }
        function onGetExpIndex(e) {
            window.expIndex = e;
            c.expTypeSelect.innerHTML = '';
            for (var i = 0, item = e.ExpTypes[i]; item; item = e.ExpTypes[++i]) {
                var node = document.createElement('option');
                node.innerHTML = item.ExpTypeName;
                node.value = item.ExpTypeNo;
                c.expTypeSelect.appendChild(node);
            }
            if (c.expTypeSelect[0]) {
                onExpTypeChange();
               
                setExpSelect(window.expIndex.ExpTypes[0].Exps);
            }

        }
        function getExpIndex() {
            Lab2AdminService.GetExpIndex(onGetExpIndex);
        }
        document.body.onload = function () {
            Lab2AdminService.set_defaultFailedCallback(function (e) { alert('出现错误,请重试!'); });
            
            getExpIndex();
        }
</script>
<script type="text/javascript">
 Lab2.ExpJS.prototype = {
        ExpParas: new Array(),
        Des: '',
        ExpNo: -1,
        ExpName: '',
        ReadMode: 0,
        SubmitMode: 0,
        ExpTypeNo: -1
    }
    Lab2.ExpParaJS.prototype = {
        ParaNo: 1,
        ValueType: -1,
        Name: '',
        Des: ''
    }
   

</script>
<script type="text/javascript">
    var neoExp = new Lab2.ExpJS();
    neoExp = {
        ExpParas: new Array(),
        Des: '',
        ExpNo: -1,
        ExpName: '',
        ReadMode: 0,
        SubmitMode: 0,
        ExpTypeNo: -1
    };
   
    function getExpPara() {
        var name = c.ParaNameInput.value;
        var des = c.ParaDesInput.value;
        var valueType = c.ParaTypeSelect.selectedIndex;
        var hasName = neoExp.ExpParas.some(function (ele, i, a) { return ele.Name == name; });
        if (name == '')
            alert('请填写参数名称');
        else if (des == '')
            alert('请填写参数描述');
        else if (hasName)
            alert('请勿添加有相同名字的参数');
        else if (valueType == 2 && des.indexOf(':') == -1)
            alert('二分变量输入不正确,请用 : 隔开');
        else {
            var p = new Lab2.ExpParaJS({ Name: name, Des: des, ValueType: valueType });
            return p;
        }
        return null;
    }
    function onAddParaClick() {
        var ep = getExpPara();
        if (ep) {
            neoExp.ExpParas.push(ep);
            var opt = document.createElement('option');
            opt.innerHTML = ep.Name;
            c.ParasSelect.appendChild(opt);
            c.ParaDesInput.value = '';
            c.ParaNameInput.value = '';
            c.ParaTypeSelect.selectedIndex = 0;
            c.ParasSelect.selectedIndex = c.ParasSelect.length - 1;
        }
    }
    function clearParasDiv() {
        c.ParaDesInput.value = '';
        c.ParaNameInput.value = '';
        c.ParaTypeSelect.selectedIndex = 0;
    }
    function onDeleteParaClick() {
        var index = c.ParasSelect.selectedIndex;
        var p = neoExp.ExpParas[index];
        var opt = c.ParasSelect[index];
        c.ParasSelect.removeChild(opt);
        if (p.Name == opt.innerHTML)
            neoExp.ExpParas.splice(index, 1);
    }
    function displayPara(index) {
        var p = neoExp.ExpParas[index];
        c.ParaDesInput.value = p.Des;
        c.ParaNameInput.value = p.Name;
        c.ParaTypeSelect.selectedIndex = p.ValueType;
    }
    function onAddExpBtnClick() {
        var tno = parseInt(c.expTypeSelect.childNodes[c.expTypeSelect.selectedIndex].value);
         c.expsSelect.disabled = true;
        c.addExpTypeBtn.disabled = true;
        c.deleteExpTypeBtn.disabled = true;
        neoExp = new Lab2.ExpJS({ExpParas:new Array(),TypeNo:tno});
        c.expDesText.innerHTML = '';
        c.expNameInput.value = '';
        c.ParaDesInput.value = '';
        c.ParasSelect.innerHTML = '';
        c.ParaNameInput.value = '';
    }
    function onExpTypeBtnClick() {
        c.deleteExpTypeBtn.value = expIndex.ExpTypes[c.expTypeSelect.selectedIndex].Enable ? '禁用实验分类' : '启用实验分类';
        c.expsSelect.disabled = true;
        c.addExpTypeBtn.disabled = false;
        c.deleteExpTypeBtn.disabled = false;
    }
    function submitExp() {
        var name = c.expNameInput.value;
        var des = c.expDesText.value;
        var readmode = c.readModeSelect.selectedIndex;
        var submitmode = c.submitModeSelect.selectedIndex;
        var noPara = neoExp.ExpParas.length == 0;
        for (var i = 0, node = c.expsSelect.childNodes[i]; node; node = c.expsSelect.childNodes[++i]) {
            if (node.innerHTML == name) {
                var hasName = true; break;
            }
        }
        if (name == '')
            alert('请填写实验名称');
        else if (des == '')
            alert('请填写实验说明');
        else if (noPara)
            alert('至少需要一个实验参数');
        else if (hasName)
            alert('此分类下已有相同名称实验');
        else {
            neoExp.ExpName = name;
            neoExp.Des = des;
            neoExp.ReadMode = readmode;
            neoExp.SubmitMode = submitmode;
            neoExp.ExpTypeNo = parseInt(c.expTypeSelect.childNodes[c.expTypeSelect.selectedIndex].value);
            if (confirm('将:' + name + ',添加到分类:' + c.expTypeSelect.childNodes[c.expTypeSelect.selectedIndex].innerHTML + '?'))
                Lab2AdminService.AddExp(neoExp, function (e) {
                    alert(e.msg);
                    onGetExpIndex(e.data.index);
                });
        }
        return false;
    }
</script>
<script type="text/javascript">
    var updateExp = {
        ExpParas: new Array(),
        Des: '',
        ExpNo: -1,
        ExpName: '',
        ReadMode: 0,
        SubmitMode: 0,
        ExpTypeNo: -1
    };
    var u = new  Object();
    u.sModeSelect = $get('uSubmitMode');
    u.rModeSelect = $get('uReadMode');
    u.desText = $get('uDes');
    u.paramsTd = $get('uParams');
    function updateExpClick() {
        if (confirm('确定更新:' + updateExp.ExpName + '?')) {
            updateExp.ReadMode = u.rModeSelect.selectedIndex;
            updateExp.SubmitMode = u.sModeSelect.selectedIndex;
            updateExp.Des = u.desText.value;
            Lab2AdminService.UpdateExp(updateExp, function (e, ii) {
                expIndex.ExpTypes[ii.ti].Exps[ii.ei] = e.data;
                onUpdateExpSelected();
                alert(e.msg);
            }, null, { ti: c.expTypeSelect.selectedIndex, ei: c.expsSelect.selectedIndex });
        } 
    }
    function updateExpStart() {
        c.expsSelect.disabled = false;
        c.expTypeSelect.disabled = false;
        onUpdateExpSelected();
        c.addExpTypeBtn.disabled = true;
        c.deleteExpTypeBtn.disabled = true;
    }
    function loadExpGroups(expNo, context) {
        Lab2AdminService.GetExpGroupsList(expNo, function (e, u) {
            if (e.ok) {
                u.exp.whiteGroups = e.data.whiteGroups;
                u.exp.blackGroups = e.data.blackGroups;
                addExpListToList(u.exp);
            }
        }, null, context);
    }
    function onUpdateExpSelected() {
        if ($get('div2').style.display != 'none') {
            updateExp = expIndex.ExpTypes[c.expTypeSelect.selectedIndex].Exps[c.expsSelect.selectedIndex];
            u.desText.innerHTML = updateExp.Des;
            u.sModeSelect.selectedIndex = updateExp.SubmitMode;
            u.rModeSelect.selectedIndex = updateExp.ReadMode;
            getParamsSpans(updateExp.ExpParas);
        }
        var select = c.expsSelect;
        var opt = c.expsSelect[c.expsSelect.selectedIndex];
        if (opt && opt.exp)
            if (!opt.exp.whiteGroups)
                loadExpGroups(opt.exp.ExpNo, opt);
            else
                addExpListToList(opt.exp);
    }
    function getParamsSpans(params) {
        var span, vt;
        var param = { Name: '', Des: '', ValueType: 0 };
        u.paramsTd.innerHTML = '';
        for (var i = 0; i < params.length; i++) {
            span = document.createElement('p');
            param = params[i];
            switch (param.ValueType) {
                case 0:
                    vt = '两位小数';
                    break;
                case 1:
                    vt = '整数';
                    break;
                case 2:
                    vt = '二分变量';
                    break;
                case 3:
                    vt = '日期';
                    break;
                case 4:
                    vt = '短文本';
                    break;
            }
            span.innerHTML = '<b>' + param.Name + '</b>(' + vt + '):' + param.Des;
            u.paramsTd.appendChild(span);
        }
    }
</script>
<script type="text/javascript" >
    var v = new Object();
    v.dataLink = $get('dataLink');
    v.stuSelect = $get('expValuesSelect');
    v.deleteBtn = $get('deleteExpValueBtn');
    function onExpDataBtnClick() {
        c.expsSelect.disabled = false;
    }
    function setStuList(dic) {
        var opt; v.stuSelect.innerHTML = '';
        if (!dic[0]) {
            opt = document.createElement('option');
            opt.innerHTML = '暂无上传学生';
            v.stuSelect.appendChild(opt);
            v.deleteBtn.disabled = true;
        }
        else {
            for (var i = 0, item = dic[0]; item; item = dic[++i]) {
                opt = document.createElement('option');
                opt.value = item.Key;
                opt.innerHTML = item.Value;
                v.stuSelect.appendChild(opt);
            }
            v.deleteBtn.disabled = false;
        }
    }
    function LinkBtnClick() {
        var no = parseInt(c.expsSelect[c.expsSelect.selectedIndex].value);
        var name = c.expsSelect[c.expsSelect.selectedIndex].innerHTML;
        Lab2AdminService.ExpValueStudentList(no, function (e, u) {
            v.deleteBtn.disabled = true;
            if (e.ok) {
                v.dataLink.href = 'ExpData.ashx?ExpNo=' + u.ExpNo;
                v.dataLink.innerHTML = u.ExpName;
                setStuList(e.data);
            }
            else {
                v.dataLink.href = '';
                v.dataLink.innerHTML = '';
                alert(e.msg);
            }
        }, null, { ExpNo: no, ExpName: name });
    }
    function deleteStuExpValue() {
        var no = parseInt(v.stuSelect[v.stuSelect.selectedIndex].value);
        var name=v.stuSelect[v.stuSelect.selectedIndex].innerHTML;
        if (no && confirm('你确定删除:' + name + '的数据?'))
            Lab2AdminService.DeleteExpValue(no, function (e) {
                if (e.ok)
                    setStuList(e.data);
                else
                    v.deleteBtn.disabled = true;
                alert(e.msg);
            });
        }
     
</script>
<script type="text/javascript">
    var g = new Object();
    g.whiteList = $get('whiteList');
    g.blackList = $get('blackList');
    g.groupsList = $get('groupsList');
    g.bgroupList = $get('bgroups');
    g.sgroupList = $get('sgroups');
    g.rgroupList = $get('rgroups');
    var groups = { r: new Array(), s: new Array(), b: new Array() };
   
    function onExpListBtnClick() {
        loadGroups();
        c.expsSelect.disabled = false;
    }
    function moveWhite() { moveGroup(g.groupsList, g.whiteList); }
    function moveBlack() {moveGroup(g.groupsList,g.blackList);}
    function moveGroup(sSelect, dSelect) {
        var opt = sSelect[sSelect.selectedIndex];
        if (opt)
            dSelect.appendChild(opt);

    }

    function addStuList() {
        var expNo = c.expsSelect[c.expsSelect.selectedIndex].exp.ExpNo;
        var bNos=new Array();
        for (var i = 0, item = g.blackList[0]; item; item = g.blackList[++i])
            if (item.group) bNos.push(item.group.no);
       var wNos = new Array();
       for (var i = 0, item = g.whiteList[0]; item;item=g.whiteList[++i])
          if(item.group) wNos.push(item.group.no);
       Lab2AdminService.AddExpList(expNo, wNos, bNos, function (e) {
           alert(e.msg);
       });
    }
    function moveBack(source) {
        var opt = source[source.selectedIndex];
        if (opt && opt.from) 
            opt.from.appendChild(opt);
       
    }
    function loadGroups() {
        Lab2AdminService.GetGroups(0, false, function (e) {
            if (e.ok) {
                g.rgroupList.innerHTML = '';
                g.whiteList.innerHTML = '';
                g.blackList.innerHTML = '';
                groups.r = new Array();
                for (var i = 0; i < e.data.length; i++) {
                    var opt = document.createElement('option');
                    opt.style.color = 'Red';
                    opt.value = e.data[i].no;
                    opt.innerHTML = e.data[i].name;
                    opt.from = g.rgroupList;
                    opt.group = e.data[i];
                    groups.r.push(e.data[i]);
                    g.rgroupList.appendChild(opt);
                }
            }
        });
        Lab2AdminService.GetGroups(1, false, function (e) {
            if (e.ok) {
                g.sgroupList.innerHTML = '';
                groups.s = new Array();
                for (var i = 0; i < e.data.length; i++) {
                    var opt = document.createElement('option');
                    opt.style.color = 'yellow';
                    opt.value = e.data[i].no;
                    opt.innerHTML = e.data[i].name;
                    opt.from = g.sgroupList;
                    opt.group = e.data[i];
                    groups.s.push(e.data[i]);
                    g.sgroupList.appendChild(opt);
                }
            }
        });
        Lab2AdminService.GetGroups(2, false, function (e) {
            if (e.ok) {
                g.bgroupList.innerHTML = '';
                groups.b = new Array();
                for (var i = 0; i < e.data.length; i++) {
                    var opt = document.createElement('option');
                    opt.style.color = 'Green';
                    opt.value = e.data[i].no;
                    opt.innerHTML = e.data[i].name;
                    opt.from = g.bgroupList;
                    opt.group = e.data[i];
                    groups.b.push(e.data[i]);
                    g.bgroupList.appendChild(opt);
                }
            }
        });
    }
    
</script>
</asp:Content>


