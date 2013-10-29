using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class protected_Ader : System.Web.UI.Page
{
    protected string GetGender(object g)
    {
        if ((bool )g) return "女";
        else return "男";
    }
    protected string StageString(object   stage)
    {
        int s=int.Parse (stage.ToString());
        switch (s)
        {
            case RecruitStage.Applying:
                return "未处理";
            case RecruitStage.Accepted:
                return "已接受";
            default:
                return "";
        }

    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!User.IsInRole("Advertiser"))
            Response.Redirect("RecruitLogIn.aspx");
        MyAdvertisements.SelectParameters["AdvertiserNo"].DefaultValue = Profile.AdvertiserNo.ToString ();
        GridView1.DataBind();
        PanelAorD.Visible = false;
        PanelCorC.Visible = false;
        btnDeleteAd.Visible = false;
    }

    protected void GridView2_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (GridView2.SelectedIndex == -1)
        {
            PanelAorD.Visible = false;
            PanelCorC.Visible = false;
        }
        var stage = (byte)GridView2.SelectedDataKey.Values["Stage"];
        var no = (int)GridView2.SelectedDataKey.Values["No"];
        if (stage == RecruitStage.Applying)
        {
            
            PanelAorD.Visible = true;
            PanelCorC.Visible = false;
        }
        else if (stage == RecruitStage.Accepted)
        {
            PanelAorD.Visible = false;
            PanelCorC.Visible = true;

        }

    }
    protected void btnAccept_Click(object sender, EventArgs e)
    {
        AcceptOrDeny(true);

    }
    void AcceptOrDeny(bool accept)
    {
        using (var client = new RecruitClient())
        {
            string r;
            client.AcceptOrDenyRecruitment((int)GridView2.SelectedDataKey.Values["No"], accept, out r);
            Label1.Text = r;
            btnAccept.Visible = false;
            btnDeny.Visible = false;
            Response.Write("<script>setTimeout(function () { window.location = 'Ader.aspx'; }, 2000);</script>");
        }
       
    }
    protected void btnDeny_Click(object sender, EventArgs e)
    {
        AcceptOrDeny(false );
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        using (var c = new RecruitClient())
        {
            string r;
            c.DeleteAdvertisement((int)GridView1.SelectedDataKey.Value, out r);
            Label1.Text = r;
            Response.Write("<script>setTimeout(function () { window.location = 'Ader.aspx'; }, 2000);</script>");

        }
    }
    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        btnDeleteAd.Visible = (GridView1.SelectedIndex != -1);
    }
    protected void btnCompelte_Click(object sender, EventArgs e)
    {
        short rt;
        if (short.TryParse(txtRealtime.Text, out rt) && rt > 0)
        {
            using (var client = new RecruitClient())
            {
                string r;
                client.CompeleteRecruitment((int)GridView2.SelectedDataKey.Values["No"], rt, out r);
                Label1.Text = r;
            }

        }
        else
            Label1.Text = "输入的实际试验时间错误";
    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        using (var client = new RecruitClient())
        {
            string r;
            client.CancelRecruitment ((int)GridView2.SelectedDataKey.Values["No"], cbAppend.Checked , out r);
            Label1.Text = r;
        }
    }
}