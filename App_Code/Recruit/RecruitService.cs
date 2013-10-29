using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using RecruitDb;
using System.Web.Security;
/// <summary>
///RecruitService 的摘要说明
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]

[System.Web.Script.Services.GenerateScriptType(typeof(Ad))]
[System.Web.Script.Services.GenerateScriptType(typeof(MyRecruit))]
[System.Web.Script.Services.GenerateScriptType(typeof(DataIndex))]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
//若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消对下行的注释。 
[System.Web.Script.Services.ScriptService]
public class RecruitService : System.Web.Services.WebService
{
    RecruitClient db;
    public RecruitService()
    {
    }
    [WebMethod]
    public DataIndex[] GetAdIndexFromToday(int num)
    {
        DataIndex[] r = new DataIndex[num];
        int[][] Nos; DateTime d;
        for (var i = 0; i < num; i++)
        {
            d = DateTime.Now.AddDays(i).Date;
            Nos = RecruitServer.Instance.GetIndex(d);
            r[i] = new DataIndex() { date = d, m = Nos[0], a = Nos[1], n = Nos[2] };
        }
        return r;
    }
    [WebMethod]
    public Ad[] SelectAdsByNo(int[] Nos)
    {
        
        var ads = RecruitServer.Instance.SelectAdvertisements(Nos);
        var r = new Ad[ads.Length];
        for (int i = 0; i < r.Length; i++)
            r[i] = new Ad(ads[i]);
        return r;

    }
    [WebMethod]
    public string[] ApplyAD(int ADNO,int SubNo)
    {
        string r;db = new RecruitClient();
        var s = db.InsertRecruitment(SubNo, ADNO, out r) ? "1" : "0";
        return new string[2] { s, r };
    }
    [WebMethod]
    public MyRecruit[] GetMyRecruit(int subNo)
    {
        using (var client = new RecruitClient())
            return client.GetSubRecruitments(subNo);
    }
    [WebMethod]
    public int[] GetReProfile(string userName,string password)
    {
        int[] r = new int[2]{-1,-1};
        if (User.Identity.IsAuthenticated)
        {
            ProfileCommon p = new ProfileCommon();
            var np = p.GetProfile(User.Identity.Name);
            r[0] = np.SubjectNo;
            r[1] = np.AdvertiserNo;

        }
        else if (Membership.ValidateUser(userName, password))
        {
            ProfileCommon p = new ProfileCommon();
            var np = p.GetProfile(userName);
            r[0] = np.SubjectNo;
            r[1] = np.AdvertiserNo;
        }
        return r;

    }
}
public class DataIndex
{
    public DateTime date { get; set; }
    public int[] a { get; set; }
    public int[] m { get; set; }
    public int[] n { get; set; }
}
public class Ad
{

    public Ad()
    {

    }
    public Ad(Advertisement ad)
    {
        var adtype = ad.GetType();
        var pros = this.GetType().GetFields ();
        foreach (var pro in pros)
            pro.SetValue(this, adtype.GetProperty(pro.Name).GetValue(ad, null));
    }
    public global::System.Int32 No;
    public global::System.DateTime SetDate;
    public global::System.DateTime EndDate;
    public global::System.Int16 FemaleRequired;
    public global::System.Int16 MaleRequired;
    public global::System.String Name;
    public global::System.String Des;
    public global::System.Int16 Price;
    public global::System.Int32 AdvertiserNo;
    //public global::System.Byte[] TimeDetail;
    public global::System.Boolean Enable;
    public global::System.Int16 ExpMins;
}
public class MyRecruit
{
    public MyRecruit() { }
    public string Name { get; set; }
    public string AderName { get; set; }
    public string SetDate { get; set; }
    public string AderPhone { get; set; }
   
}