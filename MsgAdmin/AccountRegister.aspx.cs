using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using Msg;
public partial class MsgAdmin_AccountRegister : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!User.IsInRole("MsgAccountAdmin"))
        {
            Response.Redirect("~/LogForm.aspx");
            Response.End();
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        var user = Membership.GetUser(txtUserName.Text);
        if (user == null)
            if (Membership.CreateUser(txtUserName.Text, txtPassword.Text) != null)
                Label1.Text = "创建用户成功";
            else
                Label1.Text = "创建失败";
        else
            Label1.Text = "已经存在的用户";
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        var client = Msg.PublicEventClient.Get(User.Identity.Name);
        string r;
        if (!Page.IsValid)
            Label1.Text = "输入不正确";
        else if (txtRealName.Text == "")
            Label1.Text = "请输入学生姓名";
        else
        {
            client.AddAuthor(new Author() { Enable = true, EventLimit = 0, Grade = txtGradeNumber.Text + txtClassSelect.SelectedValue, RealName = txtRealName.Text, UserName = txtUserName.Text, Role = 0 }, out r);
            Label1.Text = r;
        }
    }
    protected void Button3_Click(object sender, EventArgs e)
    {
         var user = Membership.GetUser(txtUserName.Text);
         if (user != null)
             if (Membership.DeleteUser(txtUserName.Text))
                 Label1.Text = "删除成功";
             else
                 Label1.Text = "删除失败";
         else
             Label1.Text = "不存在的用户";
    }
}