using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Collections.Concurrent;
using RecruitDb;
/// <summary>
///RecruitServer 的摘要说明
/// </summary>
public class RecruitServer
{
    private static RecruitServer ins = new RecruitServer();
    public static RecruitServer Instance { get { return ins; } }
    private ConcurrentDictionary<DateTime, ConcurrentBag<int>[]> AdIndex;
    private RecruitEntities db;
	private  RecruitServer()
	{
        
        db = new RecruitEntities();
        AdIndex = new ConcurrentDictionary<DateTime, ConcurrentBag<int>[]>();
        db.Advertisements.Where(ad => ad.Enable && ad.EndDate >= DateTime.Today).Load();
        for (var i = 0; i < 7; i++)
            CountAdsOnDate(DateTime.Today.AddDays(i));
	}
    private int[][] CountAdsOnDate(DateTime date)
    {
        var adsOnDate = db.Advertisements.Local.Where(ad => ad.Enable && ad.EndDate >= date).ToArray();
        var dayOfWeek = (int)date.DayOfWeek;
        int[][] r = new int[3][];
        List<int> index = new List<int>();
        for (var i = 0; i < 3; i++)
        {
            index.Clear();
            foreach (var ad in adsOnDate)
                if (ad.TimeDetail[3 * dayOfWeek + i] == 1)
                    index.Add(ad.No);
            r[i] = index.ToArray();
        }
        var ques = new ConcurrentBag<int>[3];
        for (var i = 0; i < 3; i++)
        {
            ques[i] = new ConcurrentBag<int>();
            for (var j = 0; j < r[i].Length; j++)
                ques[i].Add(r[i][j]);
        }
        AdIndex.AddOrUpdate(date.Date, ques, (d, oldQues) => ques);
        return r;
    }
    public int[][] GetIndex(DateTime date)
    {
        ConcurrentBag<int>[] que;
        int[][] r = new int[3][];
        if (AdIndex.TryGetValue(date, out que))
            for (int i = 0; i < 3; i++)
                r[i] = que[i].ToArray();
        else
            for (int i = 0; i < 3; i++)
                r[i] = new int[0];
        return r;
    }
    public int[][] AddAdToIndex(Advertisement ad)
    {
        db.Advertisements.Attach(ad);
        var days = (ad.EndDate - ad.SetDate).Days;
        var dic = new Dictionary<DateTime, int[]>();
        DateTime d; int dayOfWeek;
        for (var i = 0; i < days; i++)
        {
            d = ad.SetDate.AddDays(i).Date;
            dayOfWeek = (int)d.DayOfWeek;
            dic[d] = new int[3];
            for (var j = 0; j < 3; j++)
                if (ad.TimeDetail[i % 7 * 3 + j] == 1)
                    dic[d][j] = ad.No;
                else
                    dic[d][j] = -1;
        }
        foreach (var pair in dic)
            AdIndex.AddOrUpdate(pair.Key, date =>
            {
                var ques = new ConcurrentBag<int>[3];
                for (var i = 0; i < 3; i++)
                {
                    ques[i] = new ConcurrentBag<int>();
                    ques[i].Add(pair.Value[i]);
                }
                return ques;
            }, (date2, existQues) =>
            {
                for (var i = 0; i < 3; i++)
                    if (pair.Value[i] != -1)
                        existQues[i].Add(pair.Value[i]);
                return existQues;
            });
        return dic.Values.ToArray();
    }
    public void RemoveAdIndex(int adNo)
    {
        var ad=db.Advertisements.Find(adNo);
        ad.Enable=false;
        DateTime d; var days = (ad.EndDate - ad.SetDate).Days;
        ConcurrentBag<int>[] ques;
        int no = ad.No;
        for (var i = 0; i < days; i++)
        {
            d = ad.SetDate.AddDays(i).Date;
            if (AdIndex.TryGetValue(d, out ques))
                foreach (var que in ques)
                    que.TryTake(out no);
        }

    }
    public int RegisterAdvertiser(Advertiser ader, out string reason)
    {
        lock (db)
        {
            if (db.Advertisers.Any(a => a.UserName == ader.UserName))
            {
                reason = RecruitInfo.AdvertiserExist;
                return -1;
            }
            try
            {
                
                db.Advertisers.Add(ader);
                db.SaveChanges();
                reason = RecruitInfo.AdvertiserRegisterSuccess;
                db.Entry(ader).State =System.Data.EntityState.Detached;
                return ader.No;
            }
            catch (Exception ex)
            {
                reason = ex.Message;
                return -1;
            }
        }
    }
    public int RegisterSubject(Subject sub, out string reason)
    {
        lock (db)
        {
            if (db.Subjects.Any(s => sub.UserName == s.UserName))
            {
                reason = RecruitInfo.SubjectExist;
                return -1;
            }
            try
            {
                db.Subjects.Add(sub);
                db.SaveChanges();
                db.Entry(sub).State = System.Data.EntityState.Detached;
                reason = RecruitInfo.SubjectRegiserSuccess;
                return sub.No;
            }
            catch (Exception ex)
            {
                reason = ex.Message;
                return -1;
            }
        }
    }
    public Advertisement[] SelectAdvertisements(int[] Nos)
    {
        return Nos.Join(db.Advertisements.Local, n => n, ad => ad.No, (n, a) => a).ToArray();
    }
}
public static class RecruitInfo
{
    public const string InsertADSuccess = "招募被试信息发布成功";
    public const string UnknownReason = "未知错误";
    public const string AdvertiserNotExist = "不存在的主试编号";
    public const string AdvertisementNotExist = "这个招募信息不存在...";
    public const string AdvertisementAppliedFull = "对不起,名额已满,暂时不能申请";
    public const string UpdateSuccess = "修改成功";
    public const string UpdateProfileSuccess = "资料修改成功";
    public const string InsertProfileSuccess = "资料添加成功";
    public const string AppliedAd = "亲,你已经申请了,请等待主试联系吧!";
    public const string InsertRecruitmentSuccess = "被试申请已被提交,请等待被试联系";
    public const string RecruitmentNotExist = "这个申请不存在...";
    public const string RecruitApplyOrDenySuccess = "操作成功,请联系被试进一步确认.";
    public const string InvaildOperation = "现在不应该这么做..";
    public const string CancealRecruitSuccess = "取消申请成功...";
    public const string CompeleteRecruitSuccess = "确认成功,感谢你的使用";
    public const string AdvertiserExist = "您已经拥有主试资格了了,不必重复申请";
    public const string AdvertiserRegisterSuccess = "恭喜您,您拥有主试资格了,可以发布招募被试信息了!";
    public const string SubjectRegiserSuccess = "申请成功,您现在可以去找实验信息了.";
    public const string SubjectExist = "您已经可以申请被试了";
    public const string DeleteAdvertisementSuccess = "删除招募信息成功!";
}
public static class RecruitStage
{
    public const byte Applying = 0;
    public const byte Accepted = 1;
    public const byte Success = 3;
    public const byte Denied = 11;
    public const byte Cancealed = 12;
}