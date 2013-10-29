<%@ Application Language="C#" %>

<script runat="server">
 
    void Application_Start(object sender, EventArgs e) 
    {
        Lab2.Lab2Client.MaxInstance = 20;
        Msg.PublicEventClient.MaxInstance = 20;
        var i =Lab2.Lab2Server.Instance.ExpIndex;
        var mi = Msg.PublicEventServer.Instance;
       
    }

    void Application_End(object sender, EventArgs e) 
    {
        //在应用程序关闭时运行的代码

    }
       
    void Application_Error(object sender, EventArgs e) 
    { 
        //在出现未处理的错误时运行的代码

    }
   
    void Session_Start(object sender, EventArgs e) 
    {
        //在新会话启动时运行的代码
       
    }

    void Session_End(object sender, EventArgs e) 
    {
        if (Session["client"] != null)
            ((Lab2.Lab2Client)Session["client"]).Dispose();

    }
         
</script>
