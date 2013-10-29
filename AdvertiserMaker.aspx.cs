using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RecruitDb;
using System.Web.Security;
public partial class ProfileMaker : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (User.Identity.IsAuthenticated)
        {
            if (Roles.IsUserInRole("Subject"))
                Response.Redirect("Default.aspx");
            txtUsername.Text = User.Identity.Name;
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (Page.IsValid && Membership.ValidateUser(txtUsername.Text , txtPassword.Text))
        {
            var ader = new Advertiser()
            {
                UserName = txtUsername.Text,
                Email = txtMail.Text,
                Phone = txtPhone.Text,
                QQ = txtQQ.Text,
                Name = txtName.Text,
            };
            string r;
            var no = RecruitServer.Instance.RegisterAdvertiser(ader, out r);
            if (no != -1)
            {
                var p = Profile.GetProfile(txtUsername.Text);
                p.AdvertiserNo = no;
                p.Save();
                Roles.AddUserToRole(txtUsername.Text, "Advertiser");
            }
            Label1.Text = r;
            if (!User.Identity.IsAuthenticated)
                FormsAuthentication.SetAuthCookie(txtUsername.Text, true);
            Response.Write("<script>setTimeout(function () { window.location = 'Default.aspx'; }, 2000);</script>");
        }
        else
            Label1.Text = "账号或密码错误";
    }
    
}