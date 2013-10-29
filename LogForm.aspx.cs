using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
public partial class LogForm : System.Web.UI.Page
{
    string NotInRole = "您无权进入此页面";
    string Invalid = "用户名或者密码不正确";
    protected void Page_Load(object sender, EventArgs e)
    {
        
        
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (Membership.ValidateUser(txtUserName.Text, txtPassWord.Text))
        {
            FormsAuthentication.SetAuthCookie(txtUserName.Text, true);
            if (Roles.IsUserInRole(txtUserName.Text, "LabAdmin"))
                Response.Redirect("LabAdmin/DataManage.aspx");
            else
                Label1.Text = NotInRole;
        }
        else
            Label1.Text = Invalid;
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        if (Membership.ValidateUser(txtUserName.Text, txtPassWord.Text))
        {
            FormsAuthentication.SetAuthCookie(txtUserName.Text, true);
            if (Roles.IsUserInRole(txtUserName.Text, "MsgAdmin"))
                Response.Redirect("MsgAdmin/EventMaker.aspx");
            else
                Label1.Text = NotInRole;
        }
        else
            Label1.Text = Invalid;
    }
}