using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using RecruitDb;
using System.Data.SqlClient;
/// <summary>
///RecruitClient 的摘要说明
/// </summary>
public class RecruitClient:IDisposable 
{
    private RecruitEntities db;
    public RecruitClient()
    {
        db = new RecruitEntities();
    }
    public bool AddAdvertisement(Advertisement ad, out string reason)
    {
        try
        {
            db.Advertisements.Add(ad);
            db.SaveChanges();
            reason = RecruitInfo.InsertADSuccess;
            RecruitServer.Instance.AddAdToIndex(ad);
        }
        catch (Exception ex)
        {
            reason = ex.Message;
            return false;
        }
        return true;
    }
    public bool UpdateAdvertisement(int adno, Action<Advertisement> updateAction, out string reason)
    {
        var ad = db.Advertisements.Find(adno);
        if (ad == null)
        {
            reason = RecruitInfo.AdvertisementNotExist;
            return false;
        }
        else
        {
            try
            {
                updateAction(ad);
                db.SaveChanges();
                reason = RecruitInfo.UpdateSuccess;
                return true;

            }
            catch (Exception ex)
            {
                reason = ex.Message;
                return false;
            }
        }
    }
    public bool DisableAdvertisement(int adNo, bool disable, out string reason)
    {
        var ad = db.Advertisements.Find(adNo);
        if (ad == null)
        {
            reason = RecruitInfo.AdvertisementNotExist;
            return false;
        }
        else
        {
            try
            {
                ad.Enable = false;
                reason = RecruitInfo.UpdateSuccess;
                RecruitServer.Instance.RemoveAdIndex(ad.No);
                return true;
            }
            catch (Exception ex)
            {
                reason = ex.Message;
                return false;

            }
        }
    }
    public bool DeleteAdvertisement(int adNo,out string reason)
    {
        Advertisement ad = new Advertisement() { No = adNo };
        db.Advertisements.Attach(ad);
        db.Entry(ad).State = System.Data.EntityState.Deleted;
        try
        {
            db.SaveChanges();
            reason = RecruitInfo.DeleteAdvertisementSuccess;
            return true;
        }
        catch (Exception ex)
        {
            reason = ex.InnerException.Message;
            return false;
        }
    }
    public bool InsertRecruitment(int userNo, int adNo, out string reason)
    {
        var ad = db.Advertisements.Find(adNo);
        if (ad == null)
        {
            reason = RecruitInfo.AdvertisementNotExist;
            return false;
        }
        if (ad.Recruitments.Any(r => r.SubjectNo == userNo))
        {
            reason = RecruitInfo.AppliedAd;
            return false;
        }
        var sub = db.Subjects.Find(userNo);
        var ader=db.Advertisers.Find (ad.AdvertiserNo );
        bool female = sub.Female;
        if ((female && ad.FemaleRequired == 0) || (!female && ad.MaleRequired == 0))
        {
            reason = RecruitInfo.AdvertisementAppliedFull;
            return false;
        }
        else
        {
            var re = db.Recruitments.Create();
            try
            {
                re.SubjectNo = sub.No;
                re.AdvertisementNo = adNo;
                re.AdvertiserNo = ad.AdvertiserNo;
                re.SetDate = DateTime.Now;
                re.Stage = RecruitStage.Applying;
                db.Recruitments.Add(re);
                db.SaveChanges();
                reason = RecruitInfo.InsertRecruitmentSuccess;
                return true;
            }
            catch (Exception ex)
            {
                reason ="联系柏蜀黍:\r"+ex.InnerException.Message;
                return false;
            }
        }
    }
    public bool AcceptOrDenyRecruitment(int RecruitNo, bool accept, out string reason)
    {
        var recruit = db.Recruitments.Include(r => r.Subject).Include(r => r.Advertisement).FirstOrDefault(r => r.No == RecruitNo);
        if (recruit == null)
        {
            reason = RecruitInfo.RecruitmentNotExist;
            return false;
        }
        else if (recruit.Stage == RecruitStage.Applying)
        {
            try
            {
                if (accept)
                {
                    recruit.Stage = RecruitStage.Accepted;
                    recruit.SetDate = DateTime.Now;
                    if (recruit.Subject.Female)
                        recruit.Advertisement.FemaleRequired--;
                    else
                        recruit.Advertisement.MaleRequired--;
                }
                else
                    db.Recruitments.Remove(recruit);
                db.SaveChanges();
                reason = RecruitInfo.RecruitApplyOrDenySuccess;
                return true;
            }
            catch (Exception ex)
            {
                reason = ex.InnerException.Message;
                return false;
            }
        }
        else
            reason = RecruitInfo.InvaildOperation;
        return false;
    }
    public bool CancelRecruitment(int reNo,bool append,out string reason)
    {
      var re = db.Recruitments.Include(r=>r.Subject).Include (r=>r.Advertisement ).Include(r=>r.Advertiser).
          FirstOrDefault(r => r.No == reNo && r.Stage == RecruitStage.Accepted );
      if (re == null)
      {
          reason = RecruitInfo.RecruitmentNotExist;
          return false;
      }
    
      re.Stage = RecruitStage.Cancealed;
      re.Subject.stain += 1;
      re.Advertiser.stain += 1;
      re.EndDate = DateTime.Now;
      if (append)
      {
          if (re.Subject.Female)
              re.Advertisement.FemaleRequired++;
          else
              re.Advertisement.MaleRequired++;
      }
      try
      {
          db.SaveChanges();
          reason = RecruitInfo.CancealRecruitSuccess;
          return true;
      }
      catch (Exception ex)
      {
          db.Entry(re).State = System.Data.EntityState.Detached;
          reason = ex.InnerException.Message;
          return false;
      }
    }
    public bool CompeleteRecruitment(int reNo,short expMins, out string reason)
    {
        var re = db.Recruitments.Include(r => r.Subject).Include(r => r.Advertiser).
            FirstOrDefault(r => r.No == reNo&& r.Stage ==RecruitStage.Accepted);
        if (re == null)
        {
            reason = RecruitInfo.RecruitmentNotExist;
            return false;
        }
        re.Stage = RecruitStage.Success;
        re.Subject.Cridient++;
        re.Advertiser.Cridient++;
        re.EndDate = DateTime.Now;
        re.ExpTime = expMins;
        try
        {
            db.SaveChanges();
            reason = RecruitInfo.CompeleteRecruitSuccess;
            return true;
        }
        catch (Exception ex)
        {
            db.Entry(re).State = System.Data.EntityState.Detached;
            reason = ex.InnerException.Message;
            return false;
        }

    }
    public MyRecruit[] GetSubRecruitments(int SubjectsNo)
    {
        return db.Recruitments.Include(r => r.Advertiser).Include(r => r.Advertisement).Where(r => r.SubjectNo == SubjectsNo && r.Stage == RecruitStage.Accepted)
            .OrderByDescending(r => r.SetDate).ToArray().Select(r => new MyRecruit()
        {
            Name = r.Advertisement.Name,
            AderName = r.Advertiser.Name,
            AderPhone = r.Advertiser.Phone,
            SetDate = r.SetDate.ToShortDateString()
        }).ToArray();
    }
    void IDisposable.Dispose()
    {
        db.Dispose();
    }
}