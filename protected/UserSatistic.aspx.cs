using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Text;
using Msg;
public class UserInfo
{
   public  string UserName { get; set; }
   public  string RealName { get; set; }
   public  DateTime LastLoginDate { get; set; }

}
public partial class protected_UserSatistic : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!User.IsInRole("borian"))
        {
            Response.Redirect("../LogForm.aspx");
            Response.End();

        }
        else
        {
            var client = PublicEventClient.Get("10110320126");
            var users = Membership.GetAllUsers();
            var userlist = new List<UserInfo>();
            var timeline = DateTime.Now.AddDays(-7);
            UserInfo ui; Author stu;
            foreach (MembershipUser user in users)
                if (user.LastActivityDate > timeline)
                {
                    stu = client.GetAuthor(user.UserName);
                    if (stu != null)
                        userlist.Add(new UserInfo()
                        {
                            UserName = user.UserName,
                            RealName = stu.RealName,
                            LastLoginDate = user.LastLoginDate
                        });
                }

            GridView1.DataSource = userlist.OrderByDescending(u => u.LastLoginDate);
            GridView1.DataBind();
        }
    }
}