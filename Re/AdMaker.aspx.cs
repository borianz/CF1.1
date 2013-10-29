using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RecruitDb;
public partial class AdMaker : System.Web.UI.Page
{
    int AderNo;
    protected void Page_Load(object sender, EventArgs e)
    {
        AderNo = Profile.AdvertiserNo;
        if (AderNo == -1)
            Response.Redirect("RecruitLogIn.aspx");
        Calendar.SelectedDate = DateTime.Now;
    }
    private void SelectAll(bool cheek)
    {
        foreach (ListItem li in Mon.Items)
            li.Selected = cheek;
        foreach (ListItem li in Tues.Items)
            li.Selected = cheek;
        foreach (ListItem li in Wed.Items)
            li.Selected = cheek;
        foreach (ListItem li in Thur.Items)
            li.Selected = cheek;
        foreach (ListItem li in Fri.Items)
            li.Selected = cheek;
        foreach (ListItem li in Sat.Items)
            li.Selected = cheek;
        foreach (ListItem li in Sun.Items)
            li.Selected = cheek;
    }
    private void SelectPartial(CheckBoxList box,bool morning, bool afternoon, bool night)
    {
        box.Items[0].Selected = morning;
        box.Items[1].Selected = afternoon;
        box.Items[2].Selected = night;
    }
    private void GroupSelect(bool morning, bool afternoon, bool night)
    {
        SelectPartial(Mon, morning, afternoon, night);
        SelectPartial(Tues, morning, afternoon, night);
        SelectPartial(Wed, morning, afternoon, night);
        SelectPartial(Thur, morning, afternoon, night);
        SelectPartial(Fri, morning, afternoon, night);
        SelectPartial(Sat, morning, afternoon, night);
        SelectPartial(Sun, morning, afternoon, night);
    }
    protected void TimeGroup_SelectedIndexChanged(object sender, EventArgs e)
    {
        var i = TimeGroup.SelectedIndex;
        switch (i)
        {
            case 0:
                SelectAll(true);
                break;
            case 1:
                GroupSelect(true, false, false);
                break;
            case 2:
                GroupSelect(false, true, false);
                break;
            case 3:
                GroupSelect(false, false, true);
                break;
            case 4:
                GroupSelect(false, true, true);
                break;
            case 5:
                GroupSelect(true, false, true);
                break;
            case 6:
                GroupSelect(true, true, false);
                break;
            case 7:
                SelectAll(false);
                break;
            default:
                break;
        }
    }
    private byte[] TimeDetail()
    {
        var boxes = new CheckBoxList[7] { Sun, Mon, Tues, Wed, Thur, Fri, Sat };
        var r = new byte[21];
        for (var i = 0; i < 7; i++)
            for (var j = 0; j < 3; j++)
                r[i * 3 + j] = (byte)(boxes[i].Items[j].Selected ? 1 : 0);
        return r;
    }
    private bool TryGetAd(out Advertisement ad)
    {
        ad = new Advertisement();
        ad.AdvertiserNo = AderNo;
        ad.Enable = true;
        ad.ExpMins = short.Parse(txtMin.Text);
        var selectedDate = Calendar.SelectedDate;
        if (selectedDate == null || (DateTime)selectedDate <= DateTime.Today) return false;
        else ad.SetDate = (DateTime)Calendar.SelectedDate;
        int t; short p;
        if (int.TryParse(txtAdTimeSpan.Text, out t) && t > 0)
            ad.EndDate = ad.SetDate.AddDays(t);
        else return false;
        if (short.TryParse(txtPrice.Text, out p) && p > 0)
            ad.Price = p;
        else return false;
        if (txtDes.Text.Length > 200) return false;
        else ad.Des = txtDes.Text;
        ad.TimeDetail = TimeDetail();
        if (ad.TimeDetail.All(b => b == 0))
            return false;
        if (txtADName.Text.Length > 20) return false;
        else ad.Name = txtADName.Text;
        if (short.TryParse(maleNum.Text, out p))
            ad.MaleRequired = p;
        else return false;
        if (short.TryParse(femaleNum.Text, out p))
            ad.FemaleRequired = p;
        else return false;
        return true;
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        string r="您的信息填写不正确";
        if (Page.IsValid && AderNo!=-1)
        {
            Advertisement ad;
            if (TryGetAd(out ad))
            {
                RecruitClient db = new RecruitClient();
                if (db.AddAdvertisement(ad, out r))
                    Response.Redirect("Ader.aspx");
            }
        }
        lblStatus.Text = r;
    }
}