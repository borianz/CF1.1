<%@ WebHandler Language="C#" Class="LabData" %>

using System;
using System.Web;
using System.Linq;
using Lab2;
public class LabData : IHttpHandler {
   
    public void ProcessRequest(HttpContext context)
    {
        var request = context.Request;
        var response = context.Response;
        int expNo;
        if (Lab2Server.Instance.TakeRequest(context.User.Identity.Name, out expNo))
        {
            string table;
            if (!Lab2Server.Instance.DataTables.TryGetValue(expNo, out table))
                using (var client = Lab2Client.Get(context.User.Identity.Name))
                {
                    var exp = client.GetExpDetail(expNo);
                    if (exp != null)
                    {
                        table = GetTable(exp);
                        Lab2Server.Instance.DataTables.AddOrUpdate(expNo, table, (eno, t) => table);
                        response.Write("<!DOCTYPE html><head><html><title>" + Lab2Server.Instance.GetLocalExp(expNo).Name + "</title><meta charset='UTF-8\'><style type=\"text/css\">td{border-style:groove;border-width:2px}</style></head><body>");
                        response.Write(table);
                        response.Write("<p>请将数据复制粘贴到Excel或其他软件中进行处理</p>");
                        response.Write("</body></html>");
                    }
                    else
                    {
                        response.Write("<!DOCTYPE html><html><head><title>错误请求</title><meta charset='UTF-8'></head><body>");
                        response.Write("<p>亲,这个实验突然人间蒸发了</p>");
                        response.Write("</body></html>");
                    }
                }
            else
            {
                response.Write("<!DOCTYPE html><head><html><title>" + Lab2Server.Instance.GetLocalExp(expNo).Name + "</title><meta charset='UTF-8\'><style type=\"text/css\">td{border-style:groove;border-width:2px}</style></head><body>");
                response.Write(table);
                response.Write("<p>请将数据复制粘贴到Excel或其他软件中进行处理</p>");
                response.Write("</body></html>");

            }
        }
        else
        {
            response.Write("<!DOCTYPE html><html><head><title>" + "过期的请求" + "</title><meta charset='UTF-8'></head><body>");
            response.Write("<h2>请求已过期</h2><p>为了保证数据的安全性,请重新回到那个漂亮的网页,申请获得数据</p>");
            response.Write("<p>每次申请获得数据成功后,后只能查看一次,请按规则操作</p>");
            response.Write("</body></html>");
        }
        response.End();
        
    }
    public bool IsReusable {
        get {
            return false;
        }
    }
    public string  GetTable(Exp exp)
    {
        var sb = new System.Text.StringBuilder();
        sb.AppendFormat("<h2>{0}</h2>", exp.Name);
        sb.Append("<table style=\"border-style:dotted;\"><thead><tr><td>学生编号</td>");
        var paras = exp.ExpParas.OrderBy(pt => pt.No).ToArray();
        foreach (var pt in paras)
            sb.AppendFormat("<td>{0}</td>", pt.Name);
        sb.Append("</tr></thead>");
        var pvs = exp.ExpValues.OrderBy(p => p.UpdateDate).Select(pv => new
        {
            UserName = pv.StudentNo,
            Values = pv.Value.Split('\r').OrderBy(value => value.Substring(0, value.IndexOf('\t')))
            .Select(str => str.Substring(str.IndexOf('\t') + 1)).ToArray()
        }).ToArray();
        sb.Append("<tbody>");
        foreach (var pv in pvs)
        {
            if (pv.Values.Count() != paras.Count()) throw new ArgumentException("RefreshExpData_LabDB,某行数据不全");
            sb.AppendFormat("<tr><td>{0}</td>", pv.UserName);
            foreach (var value in pv.Values)
                sb.AppendFormat("<td>{0}</td>", value);
            sb.Append("</tr>");
        }
        sb.Append("</tbody></table>");
        return sb.ToString();
    }

}