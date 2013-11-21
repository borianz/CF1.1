<%@ WebHandler Language="C#" Class="index" %>

using System;
using System.Web;
using System.Text.RegularExpressions;
public class index : IHttpHandler {
    private void RedirectFullVersion(HttpResponse response)
    {
        response.Redirect("FullVersion.aspx", true);
        response.End();
    }
    private void RedirectBasicVersion(HttpResponse response)
    {
        response.Redirect("MiniVersion.aspx", true);
        response.End();

    }
    private void RedirectMiniVersion(HttpResponse response)
    {
        response.Redirect("MiniVersion.aspx", true);
        response.End();

    }
    public void ProcessRequest (HttpContext context) {
        var user = context.Request.UserAgent; 
        var response = context.Response;
        if (user.Contains("Mozilla/5.0"))
        {
            int version;
            if(user.Contains("MSIE"))
                if (user.Contains("MSIE 9"))
                    RedirectMiniVersion(response);
                else
                    RedirectFullVersion(response);
            var i = user.IndexOf("Firefox/", StringComparison.OrdinalIgnoreCase);
            if (i > 0)
            {
                version = int.Parse(user.Substring(i + 8, 2));
                if (version >= 16)
                    RedirectFullVersion(response);
                else
                    RedirectBasicVersion(response);
            }
            else
            {
                i = user.IndexOf("Chrome/", StringComparison.OrdinalIgnoreCase);
                if (i > 0)
                {
                    version = int.Parse(user.Substring(i + 7, 2));
                    if (version >= 24)
                        RedirectFullVersion(response);
                    else
                        RedirectBasicVersion(response);
                }
            }
            RedirectMiniVersion(response);
        }
        else
        {
            response.Write("<!DOCTYPE html><html><head><title>实验数据中心</title><meta charset='UTF-8'></head><body>");
            response.Write("<p><b>相信我,我的作品一定不负所望--柏子</b></p>");
            response.Write("<p>亲,你需要更换浏览器才能继续浏览</p>");
            response.Write("<p>为了获得更好的体验,推荐使用<a target='_blank'  href='https://www.google.com/intl/zh-CN/chrome/browser/'>chrome</a></p>");
            response.Write("<p>如果你热爱国产浏览器,可以使用<a target='_blank'  href='http://www.maxthon.cn/'>遨游</a></p>");
            response.Write("<p>你还可以使用最新的<a target='_blank'  href='http://ie.microsoft.com/'>IE</a>,<a target='_blank'  href='http://www.mozilla.org/zh-CN/firefox/new/'>Firefox</a>,Safari</p>");
            if (user.Contains("360"))
                response.Write("<p><b>360神马的弱爆了啊,它还是IE6的核心!!!</b></p>");
            response.Write("<p>因为我用的是比较新的技术,需要现代浏览器核心支持,国产浏览器都是ie6的核心,所以不能打开</p>");
            response.Write("</body></html>");

        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}