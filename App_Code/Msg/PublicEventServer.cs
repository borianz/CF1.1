using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Msg;
using System.IO;
/// <summary>
///PublicEventServer 的摘要说明
/// </summary>
namespace Msg
{
    public class PublicEventServer
    {
        private static PublicEventServer instance = new PublicEventServer();
        MsgDbContext  db;
        public static PublicEventServer Instance { get { return instance; } }
        private  Dictionary<int, CategoryJS> catDic=new Dictionary<int,CategoryJS> ();
        public CategoryJS[] Index { get { return catDic.Values.ToArray (); } }
        private PublicEventServer()
        {
            db = new MsgDbContext();
            RefreshIndex();
        }
        private void ReorderDic()
        {
            catDic.OrderByDescending(pair => pair.Value.priority);
        }
        public void RefreshIndex()
        {
            lock (db)
            {
                var dic = new Dictionary<int, CategoryJS>();
                foreach (var cat in db.Categories.Where (c=>c.Enable).ToArray())
                {
                    var cjs = cat.ToEntityJS(false);
                    foreach (var e in cat.PublicEvents.Where (pe=>pe.Enable).OrderByDescending (pe=>pe.Priority ).
                        ThenByDescending (pe=>pe.UpdateTime ).
                        ThenByDescending (pe=>pe.No ).Select(pe => new { no = pe.No, mtitle = pe.MTitle,update=pe.UpdateTime  }))
                        cjs.events.Add(new PublicEventJS { no = e.no, mtitle = e.mtitle,updateTime=e.update  });
                    dic.Add (cjs.no,cjs);
                }
                dic.OrderByDescending(pair => pair.Value.priority);
                catDic = dic;
            }
           
        }
        public void RefreshCategory(int catNo)
        {
            lock (db)
            {
                var cat = db.Categories.FirstOrDefault(c => c.No == catNo && c.Enable);
                if (cat != null)
                {
                    var cjs = cat.ToEntityJS(false);
                    foreach (var e in db.PublicEvents.Where (pe=>pe.CategoryNo==catNo&& pe.Enable).
                        OrderByDescending (pe=>pe.Priority ).ThenByDescending (pe=>pe.UpdateTime ).
                        ThenByDescending (pe=>pe.No ).Select(pe => new { no = pe.No, mtitle = pe.MTitle }))
                        cjs.events.Add(new PublicEventJS { no = e.no, mtitle = e.mtitle });
                    if (catDic.ContainsKey(catNo))
                        catDic[catNo] = cjs;
                    else
                    {
                        catDic.Add(catNo, cjs);
                        ReorderDic();
                    }
                }
            }
        }
        public Category AddCategory(Category cat,out string reason)
        {
            lock (db)
                try
                {
                    db.Categories.Add(cat);
                    db.SaveChanges();
                    reason = PublicEventInfo.SuccessOperation;
                    RefreshCategory(cat.No);
                    return cat;
                }
                catch (Exception ex)
                {
                    db.Entry(cat).State = System.Data.EntityState.Detached;
                    reason = ex.InnerException.Message;
                    return null;
                }
        }
    }
   
    public static partial class PublicEventInfo
    {
        public const string AddSuccess = "发布信息成功";
        public const string EventExists = "存在同名信息,请更换大标题或小标题";
        public const string FailOperation = "操作失败";
        public const string SuccessOperation = "操作成功";
    }
    
}