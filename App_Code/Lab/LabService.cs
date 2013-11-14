using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Xml.Linq;
using System.Xml;
using System.Web.Script.Services;
using System.Web.Security;
using Lab2;
/// <summary>
///LabService 的摘要说明
/// </summary>
[WebService(Namespace = "http://www.baishushu.com/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]

[System.Web.Script.Services.ScriptService]
[GenerateScriptType(typeof(ExpTypeJS))]
[GenerateScriptType(typeof(ExpJS))]
[GenerateScriptType(typeof(ExpParaJS))]
[GenerateScriptType(typeof(OperationResult))]
public class LabService : System.Web.Services.WebService {
    Lab2Client client;
    Student stu;
    public LabService () {
        if (User.Identity.IsAuthenticated)
        {
            client = Lab2Client.Get(User.Identity.Name);
            client.TryGetStudent(User.Identity.Name, out stu);
        }
    }
  
    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json,UseHttpGet=true)]
    public ExpIndexJS GetIndex()
    {
        return Lab2Server.Instance.ExpIndex;
    }
    [WebMethod]
    public string[] TryAddParaValueForTest(int expNo,string value)
    {
      
        if (User.Identity.IsAuthenticated)
        {
            return client.AddParaValues(expNo, value, stu.No).Split('\t');
        }
        else return (Lab2Info.NoAuthentication.Split('\t'));
    }
    [WebMethod]
    public string[] GetExpData(int expNo)
    {
        string[] r;
        if (User.Identity.IsAuthenticated)
        {
            if (Lab2Server.Instance.AddRequest(User.Identity.Name, expNo))
                return "亲,成功了\t请<a target='_blank' onclick='window.currentModalWindow.close();' href='protected/LabData.ashx'>点击这里</a>查看".Split('\t');
            else
                return Lab2Info.OnError(520).Split('\t');
        }
        else
        {
            r = Lab2Info.NoAuthentication.Split('\t');
            return new string[] { "0", r[0],r[1] };
        }
    }
    [WebMethod]
    public string[] DeleteParaValue(int expNo)
    {
        if (User.Identity.IsAuthenticated)
        {
            string r;
            client.DeleteExpValue(stu.No, expNo, out r);
            return r.Split('\t');
        }
        else
            return Lab2Info.NoAuthentication.Split('\t');
    }
    [WebMethod]
    public OperationResult UserPVDatails(int expNo)
    {
        var b = false; var r = Lab2Info.NoAuthentication;
        if (User.Identity.IsAuthenticated)
            using (var client = Lab2Client.Get(User.Identity.Name))
            {
                var js=client.GetStuExpJS(expNo);
                if (js == null)
                    return new OperationResult(false ,"亲,暂时你还不能使用这个模块",null);
                else
                    return new OperationResult(true, js);
            }
        else
            return new OperationResult(b, r);
    }
    
}
