using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;
using Lab2;
using System.Web.Script.Services;
using System.Web.Security;
/// <summary>
///Lab2AdminService 的摘要说明
/// </summary>
[WebService(Namespace = "http://www.baishushu.com/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[GenerateScriptType (typeof (ExpTypeJS))]
[GenerateScriptType(typeof(ExpJS))]
[GenerateScriptType (typeof (ExpParaJS))]
[GenerateScriptType (typeof (OperationResult))]
[GenerateScriptType(typeof(StudentJS))]
[GenerateScriptType(typeof(GroupJS ))]
[GenerateScriptType(typeof(ClassJS ))]
[System.Web.Script.Services.ScriptService]
public class Lab2AdminService : System.Web.Services.WebService {

    Lab2Client client;
    public Lab2AdminService()
    {
        if (!User.IsInRole("LabAdmin"))
            throw new Exception("无权访问");
        client = Lab2Client.Get(User.Identity.Name);
    }

    [WebMethod]
    public ExpIndexJS GetExpIndex()
    {
        return Lab2Server.Instance.GetFullLoacalIndex();
    }
    [WebMethod]
    public OperationResult AddExpType(string typeName )
    {
        string r;
        var b= Lab2Server.Instance.TryAddExpType(typeName,  out r);
        return new OperationResult(b,r,Lab2Server.Instance.GetFullLoacalIndex());
    }
    [WebMethod]
    public OperationResult EnableOrDisableExpType(int no,bool enable)
    {
        string r;
        var b = Lab2Server.Instance.TryEnableOrDisableExpType(no, enable, out r);
        return new OperationResult(b, r, Lab2Server.Instance.GetExpType(no).ToEntityJS());
    }
    [WebMethod]
    public OperationResult AddExp(ExpJS expJS)
    {
        string r;
        var b = Lab2Server.Instance.TryAddExp(expJS, User.Identity.Name, out r);
        return new OperationResult(b, r, new {exp=expJS,index=Lab2Server.Instance.GetFullLoacalIndex()});
    }
    [WebMethod]
    public OperationResult UpdateExp(ExpJS expJS)
    {
        string r;
        var b=Lab2Server.Instance.TryUpdateExp (expJS,out r,out expJS);
        return new OperationResult(b, r, expJS);
    }
    [WebMethod]
    public OperationResult ChangeStudentClass(int stuNo, int? classNo)
    {
        string r;
        var data = client.UpdateStudent(stuNo, s => s.ClassNo = classNo, out r);
        if (data != null)
        {
            var dic = client.ClassesJSGrouped();
            return new OperationResult(true, new { dic.Keys, dic.Values });
        }
        else
            return new OperationResult(false, r, null);
    }
    [WebMethod]
    public OperationResult ExpValueStudentList(int expno)
    {
        string r; bool b; KeyValuePair<int,string>[] dic;
        using (var client = Lab2Client.Get(User.Identity.Name))
            b = client.TryGetStudentlist(expno, out r, out dic);
        return new OperationResult(b, r, dic);
    }
    [WebMethod]
    public OperationResult DeleteExpValue(int expValueNo)
    {
        string r; Exp exp;
        if (client.DeleteExpValue(expValueNo, out r, out exp))
        {
            KeyValuePair<int, string>[] dic;
            return new OperationResult(client.TryGetStudentlist(exp.No, out r, out dic), r, dic);
        }
        return new OperationResult(false, r);
    }
    [WebMethod]
    public OperationResult DeleteClass(int classNo)
    {
        string r;
        if (client.DeleteClass(classNo, out r))
        {
            var dic = client.ClassesJSGrouped();
            return new OperationResult(true, new { dic.Keys, dic.Values });
        }
        else
            return new OperationResult(false, r, null);
    }
    [WebMethod]
    public OperationResult GetClasses()
    {
        var dic = client.ClassesJSGrouped();
        return new OperationResult(true, new { dic.Keys, dic.Values });
    }
    [WebMethod]
    public OperationResult AddClass(string gradeName, string className)
    {
      
            string r;
            var Class = client.AddClass(gradeName, className, out r);
            if (Class != null)
            {
                var dic = client.ClassesJSGrouped();
                return new OperationResult(true, new { dic.Keys, dic.Values });
            }
            else
                return new OperationResult(false, r, null);
      
    }
    [WebMethod]
    public OperationResult AddStudent(string userName, string stuName, int classNo)
    {
        string r = "未被登记的学号";
        if (Membership.GetUser(userName) != null)
        {
            var js = new StudentJS() { classNo = classNo, exp = 0, role = (short)LabRole.stu, studentName = stuName, userName = userName };
            var s = client.AddStudent(js, out r);
            if (s != null)
                return new OperationResult(true, s.ToEntityJS());
            else
                return new OperationResult(false, r, null);
        }
        else return new OperationResult(false, r, null);
    }
    [WebMethod]
    public OperationResult AddGroup(GroupJS js)
    {
        if (js.students.Count == 0)
            return new OperationResult(false, "小组没有成员", null);
        else
        {
            string r;
            if (client.ModifyGroup(js, false, true, out r))
                return new OperationResult(false, r, null);
            else
                return new OperationResult(true, client.GetGroup((int)js.no).ToEntityJS(true));
        }
    }
    [WebMethod]
    public OperationResult GetGroups(short? type, bool withStu)
    {
        var data = client.GetGroups(withStu, type);
        if (data.Length == 0)
            return new OperationResult(false, "暂无小组", null);
        else
            return new OperationResult(true, data.Select(g => g.ToEntityJS(withStu)).ToArray());
    }
    [WebMethod]
    public OperationResult GetGroup(int no)
    {
        var data = client.GetGroup(no);
        if (data == null)
            return new OperationResult(false, "未找到小组", null);
        else
            return new OperationResult(true, data.ToEntityJS(true));
    }
    [WebMethod]
    public OperationResult GetStudentsByClassNo(int? classNo)
    {
        var data = client.GetStudents(s => s.ClassNo == classNo);
        if (data.Length == 0)
            return new OperationResult(false, "暂无学生", null);
        else
            return new OperationResult(true, data.Select(s => s.ToEntityJS()).ToArray());
    }
    [WebMethod]
    public OperationResult AddExpList(int expNo, int[] whiteNos, int[] blackNos)
    {
        string r;
        return new OperationResult(client.ModifyExpGroupList(expNo, blackNos, whiteNos, out r), r, null);
    }
    [WebMethod]
    public OperationResult GetExpGroupsList(int expNo)
    {
        string r;
        var blackGroups = client.GetExpGroupList(expNo, true, null, out r).
            Select(g => new GroupJS() { name = g.GroupName, type = g.Type, no = g.No });
        var whiteGroups = client.GetExpGroupList(expNo, false, null, out r).
           Select(g => new GroupJS() { name = g.GroupName, type = g.Type, no = g.No });
        return new OperationResult(true, new { whiteGroups, blackGroups });
    }
    [WebMethod]
    public OperationResult LoadStuDetail(string userName)
    {
        Student stu;
        if (!client.TryGetStudent(userName, out stu))
            return new OperationResult(false, Lab2Info.StudentNotExists, null);
        else
        {
            var expValues = stu.ExpValues.Select(ev => new { no = ev.No, expName = ev.Exp.Name, date = ev.UpdateDate, seq = ev.Seq }).ToArray();
            var groups = stu.Groups.Select(g => new { name = g.GroupName, type = g.Type, no = g.No });
            var c = stu.Class.ToEntityJS(false);
            return new OperationResult(true, new { stu = stu.ToEntityJS(), evs = expValues, groups, c });
        }
    }
    [WebMethod]
    public OperationResult DeleteGroup(string gName)
    {
        string r;
        return new OperationResult(client.ModifyGroup(new GroupJS() { name = gName }, true, false, out r), r, null);
    }
   
    [WebMethod]
    public OperationResult UpdateGroup(GroupJS js)
    {
        if (js.students.Count == 0)
            return new OperationResult(false, "小组没有成员", null);
        else
        {
            string r;
            if (client.ModifyGroup(js, true, true, out r))
                return new OperationResult(false, r, null);
            else
                return new OperationResult(true, client.GetGroup((int)js.no).ToEntityJS(true));
        }
    }
}
public class OperationResult
{
    public bool ok { get; set; }
    public string msg { get; set; }
    public object data { get; set; }
    public OperationResult(bool success, string message, object data)
    {
        this.msg = message;
        this.data = data;
        this.ok = success;
    }
    public OperationResult() { }

    public OperationResult(bool success, object data)
    {
        ok = success;
        if (ok)
            msg = "成功!";
        else
            msg = "失败";
        this.data = data;
    }
}