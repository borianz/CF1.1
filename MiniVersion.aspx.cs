using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class GreenGrass : System.Web.UI.Page
{
    public override void ProcessRequest(HttpContext context)
    {
        base.ProcessRequest(context);
       // context.Request.Headers["cache-control"] = "public";
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.CacheControl = "public";
        Request.Headers["cache-control"] = "public";
    }
}