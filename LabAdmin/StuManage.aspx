<%@ Page Title="" Language="C#" MasterPageFile="~/LabAdmin/LabAdminMaster.master" AutoEventWireup="true" CodeFile="StuManage.aspx.cs" Inherits="LabAdmin_StudentData" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>



<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">

        .style1
        {
            width: 100%;
        }
        .style2
        {
            width: 102px;
        }

        .style3
        {
            width: 100px;
        }
        #Text1
        {
            width: 265px;
        }
        #Text2
        {
            width: 220px;
        }

        #Text3
        {
            width: 220px;
        }

        .style4
        {
            width: 97px;
        }

        #addGroupNameInput
        {
            width: 308px;
        }

        .style5
        {
            width: 106px;
        }

        #sUserNameInput
        {
            width: 270px;
        }

        .style6
        {
            width: 99px;
        }

 </style> 
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="leftHolder" Runat="Server">
<asp:ScriptManager ID="ScriptManager1" runat="server">
 <Services>
   <asp:ServiceReference  Path="~/LabAdmin/Lab2AdminService.asmx" InlineScript='false'/>
   </Services>
</asp:ScriptManager>
 <asp:Accordion ID="Accordion1" runat="server">
   <Panes>
       <asp:AccordionPane ID="StudentPanel" runat="server"  ContentCssClass="AC">
        <Header><div class="AH">学生信息</div></Header>
        <Content>
            <input  type="button" value="账号信息" onclick="ConcealDivs([$get('div1'),$get('div5')]);c.classStuSelect.disabled=false;" /><br />
            <input onclick="ConcealDivs([$get('div1'),$get('div3')]);c.classStuSelect.disabled=true;" type="button" value="注册账号" />
            </Content>
          </asp:AccordionPane>
        <asp:AccordionPane ID="GroupPanel" runat="server" ContentCssClass="AC">
        <Header><div class="AH">分组信息</div></Header>
        <Content><input  onclick="ConcealDivs([$get('div1'),$get('div2')]);c.classStuSelect.disabled=false;" 
        type="button" value="班级管理" />
        <br />
            <input onclick="ConcealDivs([$get('div1'),$get('div4')]);c.classStuSelect.disabled=false;" 
            type="button" value="新建小组" />
            <br />
             <input onclick="ConcealDivs([$get('div1'),$get('div6')]);c.classStuSelect.disabled=false;loadGroups();" type="button" value="管理小组" />
        </Content>
        </asp:AccordionPane>
    </Panes>
    </asp:Accordion>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="rightHolder" Runat="Server" >
    <div id="div1">
 <table class="style1">
          <tr>
              <td class="style2">
                  班级</td>
              <td>
                 <select id='ClassesSelect'>
                 <option>加载中</option></select></td>
          </tr>
          <tr>
              <td class="style2">
                  学生</td>
              <td>
                 <select id="ClassStuSelect">
                 <option>加载中</option></select></td>
          </tr>
      </table>
  
  </div>
  <div id='div2' style =" display:none">
      <table class="style1">
          <tr>
              <td class="style3">
                  &nbsp;</td>
              <td>
                  <b>新建班级</b></td>
          </tr>
          <tr>
              <td class="style3">
                  </td>
              <td>
              年级<input id="GradeNametxt" type="text"  /> 班级名称<input id="ClassNametxt" type="text" /><input 
                       type="button" value="确定新建" onclick="addClass();" /></td>
          </tr>
          <tr>
              <td class="style3">
                  &nbsp;</td>
              <td>
                 <b>班级管理</b></td>
          </tr>
          <tr>
              <td class="style3">
                  班级</td>
              <td>
                 <label id="cmNameLabel">请从上方选择</label>
                  <input onclick="deleteClass();" type="button" value="删除班级" /></td>
          </tr>
          <tr>
              <td class="style3">
                  学生</td>
              <td>
                  <label id="cmStuLabel">请从上方选择</label><input  onclick="changeStuClass(null);" type="button" 
                      value="从班级中移除" /></td>
          </tr>
          <tr>
              <td class="style3">
                  &nbsp;</td>
              <td>
                 <b> 未分配班级同学</b></td>
          </tr>
          <tr>
              <td class="style3">
                  &nbsp;</td>
              <td>
                <select id="NoClassStuList"><option>暂无学生</option></select><input onclick="loadNoClassStu();"
                      type="button" value="刷新" /></td>
          </tr>
          <tr>
              <td class="style3">
                  &nbsp;</td>
              <td>
                  <input onclick="changeStuClass(classes[c.classesSelect.selectedIndex]);" type="button" value="添加到班级" /></td>
          </tr>
      </table>
  </div>
  <div id='div3' style =" display:none">

      <table class="style1">
          <tr>
              <td class="style2">
                  &nbsp;</td>
              <td>
                 <b>添加新用户</b></td>
          </tr>
          <tr>
              <td class="style2">
                  学号</td>
              <td>
                  <input id="stuUserNameInput" type="text" /></td>
          </tr>
          <tr>
              <td class="style2">
                  姓名</td>
              <td>
                  <input id="stuNameInput" type="text" /></td>
          </tr>
          <tr>
              <td class="style2">
                  班级</td>
              <td>
                  <input id="stuClassInput" disabled="disabled" type="text" placeholder="请从上方班级选择"/>(请从上方选择班级)</td>
          </tr>
          <tr>
              <td class="style2">
                  权限</td>
              <td>
                  <select disabled="disabled" ><option>普通</option></select></td>
          </tr>
          <tr>
              <td class="style2">
                  <input onclick="addStudent();" type="button" value="确定添加" /></td>
              <td>
                  &nbsp;</td>
          </tr>
          <tr>
              <td class="style2">
                  &nbsp;</td>
              <td>
                  &nbsp;</td>
          </tr>
      </table>

  </div>
  <div id='div4' style="display:none">
  <table class="style1">
          <tr>
              <td class="style4">
                  &nbsp;</td>
              <td>
                 <b>添加新小组</b> </td>
          </tr>
          <tr>
              <td class="style4">
                  小组名称</td>
              <td>
                  <input id="addGroupNameInput" type="text" /></td>
          </tr>
          <tr>
              <td class="style4">
                  限制模式</td>
              <td>
                  <asp:RadioButtonList ID="addGroupType" runat="server" 
                      RepeatDirection="Horizontal" ClientIDMode="Static">
                      <asp:ListItem Value="0">限制下载</asp:ListItem>
                      <asp:ListItem Value="1">限制上传</asp:ListItem>
                      <asp:ListItem Value="2" Selected='True'>同时限制</asp:ListItem>
                  </asp:RadioButtonList>
              </td>
          </tr>
          <tr>
              <td class="style4">
                  &nbsp;</td>
              <td>
                  <input onclick="addStuJS(false);" type="button" value="添加成员" />
                  <input onclick="deleteStulist();" type="button" value="删除所选" />
                  <input  onclick="addStuJS(true);" type="button" value="全班添加" />
                  <input onclick="window.g.stuList.innerHTML='';" type="button" value="重置" />
             </td>
          </tr>
          <tr>
              <td class="style4">
                  成员</td>
              <td>
                  <asp:ListBox ID="GroupStuList" runat="server" ClientIDMode="Static" Rows="6">
                  </asp:ListBox>
              </td>
          </tr>
          <tr>
              <td class="style4">
                  &nbsp;</td>
              <td>
                  请在上方选择学生</td>
          </tr>
          <tr>
              <td class="style4">
                  <input onclick="addGroup();" type="button" value="确定添加" /></td>
              <td>
                  &nbsp;</td>
          </tr>
      </table>
  
  </div>
  <div id='div5' >
  
      <table class="style1">
          <tr>
              <td class="style5">
                  &nbsp;</td>
              <td>
                 <b>学生详情</b></td>
          </tr>
          <tr>
              <td class="style5">
                  学号</td>
              <td>
                  <input id="sUserNameInput" type="text" placeholder="手动输入学号或从上方选择" /><input onclick="loadExpDetail();" type="button" value="加载" /></td>
          </tr>
          <tr>
              <td class="style5">
                  姓名</td>
              <td><label id="sNameLabel"></label></td>
          </tr>
          <tr>
              <td class="style5">班级</td>
              <td ><label id="sClassLabel"></label></td>
          </tr>
          <tr>
              <td class="style5">权限</td>
              <td><select disabled='disabled' id="sRoleSelect"><option>普通</option><option>管理员</option><option>超级管理员</option></select></td>
          </tr>
          <tr>
              <td class="style5">属于小组</td>

              <td><select id="sGroups"><option>暂无数据</option>
                  </select><br />
              <label style="color: #FF0000; background-color: #FFFFFF">下载限制</label>&nbsp;
              <label style="color: #FFFF00; background-color: #FFFFFF">上传限制 </label>&nbsp;
              <label style="color: #008000; background-color: #FFFFFF"> 同时限制</label></td>
          </tr>
          <tr>
              <td class="style5">
                  数据信息</td>
              <td>
                 <table>
                 <tr><td>实验编号</td> <td> 实验名称 </td><td>上传时间</td><td>上传排名</td></tr>
                 <tbody id='sExpValues'>
                  <tr><td>暂无数据</td></tr>
                 </tbody>
                 </table></td>
          </tr>
      </table>
    </div>
  <div id='div6' style="display:none" >
    
        <table class="style1">
            <tr>
                <td class="style6">
                  </td>
                <td>
                    <b>管理小组</b></td>
            </tr>
            <tr>
                <td class="style6">
                    选择小组</td>
                <td>
                <select id="groupsList" onchange='mGroupChanged();'><optgroup id='mgb' label='同时限制'></optgroup>
                <optgroup id='mgs' label='上传限制'></optgroup>
                <optgroup id='mgr' label='下载限制'></optgroup></select></td>
            </tr>
            <tr>
                <td class="style6">
                    限制模式</td>
                <td>
                     <select id='mgtype'><option>下载限制</option><option>上传限制</option><option>同时限制</option></select></td>
            </tr>
            <tr>
                <td class="style6">
                    小组成员</td>
                <td>
                    <asp:ListBox ID="mgStus" runat="server" ClientIDMode="Static" Rows="6">
                    </asp:ListBox>
                    <input  onclick="addmStuList();" type="button" value="添加成员" />
                    <input  onclick="removeStuList();" type="button" value="移除成员" /></td>
            </tr>
            <tr>
                <td class="style6">
                    &nbsp;</td>
                <td>
                    <input  onclick="updateGroup();" type="button" value="保存修改" />
                    <input onclick="deleteGroup();" type="button" value="删除小组" /></td>
            </tr>
            <tr>
                <td class="style6">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
    </div>

  <script type="text/javascript">
      var classes = new Array();
      var noClassStus = new Array();
      Type.registerNamespace('AjaxControlToolkit');
      var c = new Object();
      c.classesSelect = $get('ClassesSelect');
      c.classNameInput = $get('ClassNametxt');
      c.grageNameInput = $get('GradeNametxt');
      c.classStuSelect = $get('ClassStuSelect');
      c.mNameLabel = $get('cmNameLabel');
      c.mStuLabel = $get('cmStuLabel');
      c.noCStuSelect = $get('NoClassStuList');
      function pageLoad() {
          Lab2AdminService.set_defaultFailedCallback(function (e) {
              alert('出错啦,如果再次出错请联系管理员');
          });
          Lab2AdminService.GetClasses(onGetClasses, null, c.classesSelect);
          window.g.stuList.innerHTML = '';
          loadNoClassStu();
      }
      function onClassStuSelectChange() {
          c.mStuLabel.innerHTML = c.classStuSelect[c.classStuSelect.selectedIndex].innerHTML;
      }
      function loadNoClassStu() {
          c.noCStuSelect.innerHTML = '';
          var opt;
          opt = document.createElement('option');
          opt.innerHTML = '加载中';
          c.noCStuSelect.appendChild(opt);
          Lab2AdminService.GetStudentsByClassNo(null, function (e) {
              if (e.ok)
                  onGetNoCStu(e.data);
              else
                  c.noCStuSelect[0].innerHTML = e.msg;
          });
      }
      function selectedStu() {
          return classes[c.classesSelect.selectedIndex].students[c.classStuSelect.selectedIndex];
      }
      function changeStuClass(Class) {
          var stu = Class ? noClassStus[c.noCStuSelect.selectedIndex] : selectedStu();
          if (stu) {
              if (Class)
                  if (confirm('确认添加' + stu.fullName + '到' + Class.fullName + '?'))
                      Lab2AdminService.ChangeStudentClass(stu.no, Class.no, function (e, opt) {
                          if (e.ok) {
                              onGetClasses(e);
                              loadNoClassStu();
                          }
                          alert(e.msg);
                      }, null, c.noCStuSelect[c.noCStuSelect.selectedIndex]);
                  else return;
              else
                  if (confirm('确认将' + stu.fullName + '从班级中移除?'))
                      Lab2AdminService.ChangeStudentClass(stu.no, null, function (e, opt) {
                          if (e.ok) {
                              onGetClasses(e);
                              loadNoClassStu();
                          }
                          alert(e.msg);
                      }, null, c.classStuSelect[c.classStuSelect.selectedIndex]);
                  else return;
          }
      }
      function onGetNoCStu(students) {
          noClassStus = students;
          c.noCStuSelect.innerHTML = '';
          var opt;
          if (noClassStus.length == 0) {
              opt = document.createElement('option');
              opt.innerHTML = '暂无学生';
              c.noCStuSelect.appendChild(opt);
          }
          else
              for (var i = 0; i < students.length; i++) {
                  opt = document.createElement('option');
                  opt.innerHTML = students[i].fullName;
                  opt.value = students[i].no;
                  c.noCStuSelect.appendChild(opt);
              }
      }
      $addHandler(c.classStuSelect, 'change',onClassStuSelectChange);
      function onClassSelectChange() {
          loadClassStu(classes[c.classesSelect.selectedIndex].students);
          c.mNameLabel.innerHTML = c.classesSelect[c.classesSelect.selectedIndex].innerHTML+':'+window.classes[c.classesSelect.selectedIndex].students.length+'人';
      }
      $addHandler(c.classesSelect, 'change',onClassSelectChange);
      function onGetClasses(e, select) {
          if (!select) select = window.c.classesSelect;
              var keys = e.data.Keys;
              var values = e.data.Values;
              select.innerHTML = '';
              classes = new Array();
              var opt, optGroup;
              if (keys.length == 0) {
                  opt = document.createElement('option');
                  opt.innerHTML = '暂无班级';
                  select.appendChild(opt);
              }
              else {
                  for (var i = 0, g = values[i]; g; g = values[++i]) {
                      optGroup = document.createElement('optgroup');
                      optGroup.label = keys[i];
                      for (var j = 0, c = g[j]; c; c = g[++j]) {
                          opt = document.createElement('option');
                          opt.value = c.no;
                          opt.innerHTML = c.fullName;
                          optGroup.appendChild(opt);
                          classes.push(c);
                      }
                      select.appendChild(optGroup);
                  }
                  onClassSelectChange();
                  onClassStuSelectChange();
                  window.stu.classInput.value =window.c.classesSelect[window.c.classesSelect.selectedIndex].innerHTML;
              }
          }

          function loadClassStu(students) {
              window.c.classStuSelect.innerHTML = '';
              var opt;
              if (students.length == 0) {
                  opt = document.createElement('option');
                  opt.innerHTML = '暂无学生';
                  window.c.classStuSelect.appendChild(opt);
              }
              else
                  for (var i = 0, stu = students[i]; stu; stu = students[++i]) {
                      opt = document.createElement('option');
                      opt.value = stu.no;
                      opt.innerHTML = stu.studentName + ' ' + stu.userName;
                      window.c.classStuSelect.appendChild(opt);
                  }
          }   
      function addClass() {
          var grade = c.grageNameInput.value;
          var className = c.classNameInput.value;
          if(!className)
              alert('请输入班级名称');
          else if (grade.match(/\b\d{4}\b/g)) {
              if (confirm('添加' + className + '到' + grade + '级?'))
                  Lab2AdminService.AddClass(grade, className, function (e) {
                      if (e.ok)
                          onGetClasses(e, c.classesSelect);
                      alert(e.msg);
                  });
          }
          else
              alert('年级请输入四位数字,如2011');
      }
      function deleteClass() {
          var no = parseInt(window.c.classesSelect[window.c.classesSelect.selectedIndex].value);
          var name = window.c.classesSelect[window.c.classesSelect.selectedIndex].innerHTML;
          if (no)
              if (confirm('确定删除班级:' + name))
                  Lab2AdminService.DeleteClass(no, function (e) {
                      if (e.ok)
                          onGetClasses(e,window.c.classesSelect);
                      alert(e.msg);
                  });
      }
    </script>
  <script type="text/javascript">
      var stu = new Object();
      stu.nameInput = $get('stuNameInput');
      stu.userInput = $get('stuUserNameInput');
      stu.classInput = $get('stuClassInput');
      $addHandler(c.classesSelect, 'change', function () {
          stu.classInput.value = c.classesSelect[c.classesSelect.selectedIndex].innerHTML;
      });
      
      function addStudent() {
          var name = stu.nameInput.value;
          var user = stu.userInput.value;
          var classNo = parseInt(c.classesSelect[c.classesSelect.selectedIndex].value);
          var context= window.classes[c.classesSelect.selectedIndex];
          if (!name)
              alert('没有填写姓名');
          else if (!user.match(/\b\d{9,20}\b$/g))
              alert('学号填写不正确');
          else if (!context)
              alert('班级未选择?');
          else {
              Lab2AdminService.AddStudent(user, name, classNo, function (e, u) {
                  if (e.ok) {
                      u.students.push(e.data);
                      loadClassStu(u.students);
                  }
                  alert(e.msg);
              }, null, context);
          }
      }
      
  </script>
  <script type="text/javascript">
      var g = new Object();
      g.stuList = $get('GroupStuList');
      g.nameInput = $get('addGroupNameInput');
      function deleteStulist() {
          var i = g.stuList[g.stuList.selectedIndex];
          if (i)
              g.stuList.removeChild(i);
      }
      function addStuJS(full) {
          if (full) {
              var ss = c.classStuSelect.childNodes;
              for (var i = 0; i < ss.length; i++)
                  addgStuList(ss[i].innerHTML, ss[i].value);
          }
          else {
              var opt = c.classStuSelect[c.classStuSelect.selectedIndex];
              addgStuList(opt.innerHTML, opt.value);
          }
      }
      function checkGroupType() {
          if ($get('addGroupType_2').checked)
              return 2;
          else if ($get('addGroupType_1').checked)
              return 1;
          else
              return 0;
      }
      function addgStuList(fullName, no) {
          if (!parseInt(no)) return;
          else
              for (var i = 0, opt = window.g.stuList.childNodes[0]; opt; opt = window.g.stuList.childNodes[++i]) {
                  if (no == opt.value) return;
              }
          opt = document.createElement('option');
          opt.value = no;
          opt.innerHTML = fullName;
          g.stuList.appendChild(opt);
      }
      function addGroup() {
          var name = g.nameInput.value;
          var type = checkGroupType();
          if (name.length < 3)
              alert('亲,取个长一点的名字');
          else if (g.stuList.childNodes.length == 0)
              alert('亲,小组要有成员吧!');
          else {
              var students = new Array();
              for (var i = 0, opt = g.stuList.childNodes[i]; opt; opt = g.stuList.childNodes[++i])
                  students.push(new Lab2.StudentJS({ no: parseInt(opt.value) }));
              var group = new Lab2.GroupJS({ students: students, name: name, type: type });
              Lab2AdminService.AddGroup(group, function (e) {
                  alert(e.msg);
              });
          }

      }
  </script>
  
 <script type="text/javascript">
      var s = new Object();
      s.unInput = $get('sUserNameInput');
      s.nameLabel = $get('sNameLabel');
      s.classLabel = $get('sClassLabel');
      s.groupSelect = $get('sGroups');
      s.expValues = $get('sExpValues');
      $addHandler(c.classStuSelect, 'change', function () {
          s.unInput.value = selectedStu().userName;
      });
      function createOpt(group) {
          var opt = document.createElement('option');
          switch (group.type) {
              case 0:
                  opt.style.color = 'red';
                  break;
              case 1:
                  opt.style.color = 'yellow';
                  break;
              case 2:
                  opt.style.color = 'green';
                  break;
          }
          opt.group = group;
          return opt;
      }
      function loadExpDetail() {
          var un = s.unInput.value;
          if (un.match(/\b\d{9,20|\b$/g)) {
              Lab2AdminService.LoadStuDetail(un, function (e) {
                  if (e.ok) {
                      e = e.data;
                      s.nameLabel.innerHTML = e.stu.studentName;
                      s.classLabel.innerHTML = e.c.fullName;
                      s.expValues.innerHTML = '';
                      if (e.evs[0])
                          for (var i = 0, ev = e.evs[0]; ev; ev = e.evs[++i]) {
                              var tr = document.createElement('tr');
                              for (key in ev) {
                                  var td = document.createElement('td');
                                  td.innerHTML = ev[key];
                                  tr.appendChild(td);
                              }
                              s.expValues.appendChild(tr);
                          }
                      else {
                          var tr = document.createElement('tr');
                          var td = document.createElement('td');
                          td.innerHTML = '未上传数据';
                          tr.appendChild(td);
                          s.expValues.appendChild(tr);
                      }
                      s.groupSelect.innerHTML = '';
                      if (e.groups[0])
                          for (var i = 0, g = e.groups[0]; g; g = e.groups[++i]) {
                              var opt = createOpt(g);
                              opt.innerHTML = g.name;
                              opt.value = g.no;
                              s.groupSelect.appendChild(opt);
                          }
                      else {
                          var opt = document.createElement('option');
                          opt.innerHTML = '暂无分组';
                          s.groupSelect.appendChild(opt);
                      }
                  }
                  else alert(e.msg);
              });
          }
          else alert('学号不正确');

      }
  </script>
<script type="text/javascript">
        var m = new Object();
        m.bGroupsSelect = $get('mgb'); m.sGroupsSelect = $get('mgs'); m.rGroupsSelect = $get('mgr');
        m.gTypeSelect = $get('mgtype'); m.stuList = $get('mgStus');m.groupSelect = $get('groupsList');
        m.bgs = new Array(); m.rgs = new Array(); m.sgs = new Array();
        function updateGroup() {
            var opt = m.groupSelect[m.groupSelect.selectedIndex];
            if (opt) {
                var group = opt.group;
                group.type = m.gTypeSelect.selectedIndex;
                group.students = new Array();
                for (var i = 0, opt = m.stuList[0]; opt; opt = m.stuList[++i])
                    group.students.push(opt.student);
                if (group.students.length == 0)
                    alert("小组里面要有人!");
                else
                    Lab2AdminService.UpdateGroup(group, function (e, u) {
                        if (e.ok) {
                            var opt = m.groupSelect[m.groupSelect.selectedIndex];
                           opt.group = e.data;
                          opt.innerHTML = e.data.name;
                           opt.value = e.data.no;
                        }
                    },null,opt);
                
            }

        }
        function deleteGroup() {
            var opt = m.groupSelect[m.groupSelect.selectedIndex];
            if (opt) {
                Lab2AdminService.DeleteGroup(opt.group.name, function (e, i) {
                    alert(e.msg);
                    if (e.ok)
                        loadGroups();
                    
                }, null, m.groupSelect.selectedIndex);
            }
        }
        function removeStuList() {
            var opt = m.stuList[m.stuList.selectedIndex];
            if (opt) m.stuList.removeChild(opt);
        }
        function addmStuList() {
            var nopt = c.classStuSelect[c.classStuSelect.selectedIndex];
            var stu = selectedStu();
            if (stu) {
                for (var i, opt = m.stuList[0]; opt; opt = m.stuList[++i]) {
                    if (opt.student.no == stu.no) return;
                }
                opt = document.createElement('option');
                opt.innerHTML = stu.fullName;
                opt.value = stu.no;
                opt.student = stu;
                m.stuList.appendChild(opt);
            }

        }
        function mGroupChanged() {
            if (m.groupSelect[0]) {
                var group = m.groupSelect[m.groupSelect.selectedIndex].group;
                m.gTypeSelect.selectedIndex = group.type;
                m.stuList.innerHTML='';
                for (var i = 0, stu = group.students[0]; stu; stu = group.students[++i]) {
                    var opt = document.createElement('option');
                    opt.innerHTML = stu.fullName;
                    opt.value = stu.no;
                    opt.student = stu;
                    m.stuList.appendChild(opt);
                }

            }
        }
        function loadGroups() {
            m.stuList.innerHTML = '';
         Lab2AdminService.GetGroups(0, true, function (e) {
                 m.rGroupsSelect.innerHTML = '';
                 if (e.ok) {
                    m.rgs = new Array();
                    for (var i = 0; i < e.data.length; i++) {
                        var opt = document.createElement('option');
                        opt.style.color = 'Red';
                        opt.value = e.data[i].no;
                        opt.innerHTML = e.data[i].name;
                        opt.from = m.rGroupsSelect;
                        opt.group = e.data[i];
                        m.rgs.push(e.data[i]);
                        m.rGroupsSelect.appendChild(opt);
                    }
                    mGroupChanged()
                }
            });
            Lab2AdminService.GetGroups(1, true, function (e) {
                m.sGroupsSelect.innerHTML = '';
                if (e.ok) {
                    m.sgs = new Array();
                    for (var i = 0; i < e.data.length; i++) {
                        var opt = document.createElement('option');
                        opt.style.color = 'yellow';
                        opt.value = e.data[i].no;
                        opt.innerHTML = e.data[i].name;
                        opt.from = m.sGroupsSelect;
                        opt.group = e.data[i];
                        m.sgs.push(e.data[i]);
                        m.sGroupsSelect.appendChild(opt);
                    }
                    mGroupChanged()
                }
            });
            Lab2AdminService.GetGroups(2, true, function (e) {
                m.bGroupsSelect.innerHTML = '';
                if (e.ok) {
                    m.bgs = new Array();
                    for (var i = 0; i < e.data.length; i++) {
                        var opt = document.createElement('option');
                        opt.style.color = 'Green';
                        opt.value = e.data[i].no;
                        opt.innerHTML = e.data[i].name;
                        opt.from = m.bGroupsSelect;
                        opt.group = e.data[i];
                        m.bgs.push(e.data[i]);
                        m.bGroupsSelect.appendChild(opt);
                    }
                    mGroupChanged()
                }
            });
        }
    </script>
<script type="text/javascript">
    document.body.onload = function () {
        pageLoad();
        
    } 
  </script>
</asp:Content>

