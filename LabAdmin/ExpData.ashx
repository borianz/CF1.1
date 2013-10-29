<%@ WebHandler Language="C#" Class="ExpData" %>

using System;
using System.Web;
using Lab2;
using System.Linq;
using System.Text;
public class ExpData : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        int expno = int.Parse(context.Request.QueryString["ExpNo"]);
        var response = context.Response;
        using (var client = Lab2Client.Get(context.User.Identity.Name))
        {
            var exp = client.GetExpDetail(expno);
            if (exp != null)
            {
                response.Write("<!DOCTYPE html><html><title>" + exp.Name + "</title><meta charset='UTF-8\'><style type=\"text/css\">td{border-style:groove;border-width:2px}</style></head><body>");
                response.Write(GetTable(exp));
                response.Write(GetExpDetails(exp));
                response.Write("<p>请将数据复制粘贴到Excel或其他软件中进行处理</p>");
                response.Write("</body></html>");
            }
        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }
    public static string GetExpDetails(Exp exp)
    {
        var sb = new StringBuilder();
        sb.Append("<p>");
        sb.AppendFormat("实验类型:{0}<br/>", exp.ExpType.Name);
        sb.AppendFormat("实验编号:{0}<br/>", exp.No);
        sb.AppendFormat("实验说明:{0}<br/>", exp.Des);
        sb.Append("</p>");
        return sb.ToString();

    }
    public static string GetTable(Exp exp)
    {
        var sb = new System.Text.StringBuilder();
        sb.AppendFormat("<h2>{0}</h2>", exp.Name);
        sb.Append("<table style=\"border-style:dotted;\"><thead><tr><td>学生</td><td>上传时间</td>");
        var paras = exp.ExpParas.OrderBy(pt => pt.No).ToArray();
        foreach (var pt in paras)
            sb.AppendFormat("<td>{0}</td>", pt.Name);
        sb.Append("</tr></thead>");
        var pvs = exp.ExpValues.OrderBy(v => v.UpdateDate).Select(pv => new
        {
            UserName = pv.Student.UserName  +' '+ pv.Student.StudentName,
            UpdateTime=pv.UpdateDate,
            Values = pv.Value.Split('\r').OrderBy(value => value.Substring(0, value.IndexOf('\t')))
            .Select(str => str.Substring(str.IndexOf('\t') + 1)).ToArray()
        }).ToArray();
        sb.Append("<tbody>");
        foreach (var pv in pvs)
        {
            if (pv.Values.Count() != paras.Count()) throw new ArgumentException("RefreshExpData_LabDB,某行数据不全");
            sb.AppendFormat("<tr><td>{0}</td><td>{1}</td>", pv.UserName,pv.UpdateTime);
            foreach (var value in pv.Values)
                sb.AppendFormat("<td>{0}</td>", value);
            sb.Append("</tr>");
        }
        sb.Append("</tbody></table>");
        return sb.ToString();
    }

}