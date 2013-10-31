using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections.Concurrent;
namespace Msg
{
    public class PublicEventClient : IDisposable
    {
        public static const short evalPerComment = 3;
        private MsgDbContext db;
        PublicEventServer server = PublicEventServer.Instance;
        public Author Author { get; private set; }
        public string UserName { get; private set; }
        public static int MaxInstance { get; set; }
        static readonly ConcurrentDictionary<string, PublicEventClient> pool = new ConcurrentDictionary<string, PublicEventClient>();
        private PublicEventClient(string userName)
        {
            UserName = userName;
            db = new MsgDbContext();
            if (userName != string.Empty)
                Author = GetAuthor(userName);
        }
        public IEnumerable<Category> Categories { get { return db.Categories; } }
        public IEnumerable<PublicEvent> Events { get { return db.PublicEvents; } }
        public IEnumerable<Comment> Comments { get { return db.Comments; } }
        public Author GetAuthor(int no)
        {
            return db.Authors.Find(no);
        }
        public Author GetAuthor(string userName)
        {
            return db.Authors.FirstOrDefault(a => a.UserName == userName);
        }
        public Author AddAuthor(Author au, out string reason)
        {
            try
            {
                db.Authors.Add(au);
                db.SaveChanges();
                reason = PublicEventInfo.SuccessOperation;
                return au;
            }
            catch (Exception ex)
            {
                db.Entry(au).State = System.Data.EntityState.Detached;
                reason = ex.InnerException.Message;
                return null;
            }

        }
        public Comment AddComment(Comment com, out string reason)
        {
            if (Author == null)
                reason = PublicEventInfo.InvalidAuthor;
            else if (db.Comments.Any(c => c.AuthorNo == Author.No && c.EventNo == com.EventNo))
                reason = PublicEventInfo.CommentExists;
            else
                try
                {
                    com.AuthorNo = Author.No;
                    db.Comments.Add(com);
                    db.SaveChanges();
                    reason = PublicEventInfo.CommentAddSuccess;
                    return com;
                }
                catch (Exception ex)
                {
                    db.Entry(com).State = System.Data.EntityState.Detached;
                    reason = PublicEventInfo.CommentAddFail + "pe_001";
                }
            return null;

        }
        public Comment ChangeCommentState(int comno,bool disable, out string reason)
        {
            var com = db.Comments.Find(comno);
            if (com == null)
                reason = PublicEventInfo.CommentNotExists;
            else
                try
                {
                    com.Deleted = disable;
                    com.SetDate=DateTime.Now;
                    db.SaveChanges();
                    reason = com.Deleted ? PublicEventInfo.CommentDisableSuccess : PublicEventInfo.CommentEnableSuccess;
                    return com;
                }
                catch (Exception ex)
                {
                    db.Entry(com).Reload();
                    reason = PublicEventInfo.FailAndRefresh;
                }
            return null;
        }
        public CommentJS[] GetCommentJs(int evetNo, ushort skip=0,ushort take=30)
        {
            var cs = db.Comments.Include("Author").Where(c => !c.Deleted && c.EventNo == evetNo).
                OrderByDescending(c => c.Priority).ThenBy(c => c.No).Skip(skip).Take (take).
                Select(c => new { realname = c.Author.RealName, c.SetDate, c.Priority, c.No, c.Body, c.Color,ano=c.Author.No  }).ToArray();
            return cs.Select(c => new CommentJS
            {
                authorName = c.realname,
                body = c.Body,
                color = c.Color,
                no = c.No,
                priority = c.Priority,
                setDate = c.SetDate,
                deleted = false,
                authorNo = c.ano
                
            }).ToArray();
        }

        public Evalution ChangeEvaluation(Evalution eva, out string reason)
        {
            var oe = db.Evaluations.Find(eva.No);
            if (oe == null)
            {
                if (db.PublicEvents.Where(e => e.AuthorNo == eva.AuthorNo && e.No == eva.EventNo).Count() >= evalPerComment)
                {
                    reason = string.Format("您只能在同一个文章下进行{0}次点评", evalPerComment);
                    return null;
                }
                else
                {
                    eva.UpdateTime = DateTime.Now;
                    db.Evaluations.Add(eva);
                }
            }
            else
            {
                db.Entry(oe).State = System.Data.EntityState.Detached;
                db.Entry(db.Evaluations.Attach(eva)).State = System.Data.EntityState.Modified;
            }
            try
            {
                db.SaveChanges();
                reason = PublicEventInfo.EvaluateSuccess;
                return eva;
            }
            catch
            {
                db.Entry(eva).State = System.Data.EntityState.Detached;
                reason = PublicEventInfo.EvaluateFail;
            }
            return null;
        }
        public bool UpdateComment(Comment com, out string reason)
        {
            var oldcom=db.Comments.Find (com.No);
            if (oldcom==null)
                reason = PublicEventInfo.CommentNotExists;
            else
            {
                db.Entry(oldcom).State = System.Data.EntityState.Detached;
                db.Comments.Attach(com);
                db.Entry(com).State = System.Data.EntityState.Modified;
                com.SetDate = DateTime.Now;
                try
                {
                    db.SaveChanges();
                    reason = PublicEventInfo.CommentUpdateSuccess;
                    return true;
                }
                catch (Exception ex)
                {
                    db.Entry(com).Reload();
                    reason = PublicEventInfo.CommentUpdateFail;
                }
            }
            return false;
        }
        public PublicEvent GetEvent(int no)
        {
            return db.PublicEvents.Find(no);
        }
        public bool AddPublicEvent(PublicEvent pe, out string reason)
        {
            if (Author.PublicEvents.Where(e => e.Enable).Count() >= Author.EventLimit)
                reason = PublicEventInfo.EventsOutOfRange;
            else
                try
                {
                    db.PublicEvents.Add(pe);
                    db.SaveChanges();
                    server.RefreshCategory(pe.CategoryNo);
                    reason = PublicEventInfo.SuccessOperation;
                    return true;
                }
                catch (Exception ex)
                {
                    db.Entry(pe).State = System.Data.EntityState.Detached;
                    reason = ex.InnerException.Message;
                    return false;
                }
            return false;
        }
        public bool  UpdatePublicEvent(PublicEvent pe,out string reason,bool reloadCategory=false)
        {
            if (reloadCategory && pe.Enable && db.PublicEvents.Where(e => e.AuthorNo == pe.AuthorNo && e.Enable).Count() >= pe.Author.EventLimit)
            {
                reason = PublicEventInfo.EventsOutOfRange;
                return false;
            }
            db.PublicEvents.Attach(pe);
            db.Entry(pe).State = System.Data.EntityState.Modified;
            try
            {
                db.SaveChanges();
                if (reloadCategory) server.RefreshCategory(pe.CategoryNo);
                reason = PublicEventInfo.SuccessOperation;
                return true;
            }
            catch (Exception ex)
            {
                reason = ex.InnerException.Message;
                db.Entry(pe).State = System.Data.EntityState.Detached;
                return false;
            }
        }
        public bool DeletePublicEvent(int peNo, out string reason)
        {
            var pe = db.PublicEvents.Find(peNo);
            if (pe != null)
            {
                db.Entry(pe).State = System.Data.EntityState.Deleted;
                try
                {
                    db.SaveChanges();
                    server.RefreshCategory(pe.CategoryNo);
                    reason = PublicEventInfo.SuccessOperation;
                    return true;
                }
                catch (Exception ex)
                {
                    reason = ex.InnerException.Message;
                }
            }
            else
               reason=PublicEventInfo.EventNotFound;
            return false;
        }
        public static PublicEventClient Get(string userName)
        {
            PublicEventClient client;
            pool.TryRemove(userName, out client);
            return client ?? new PublicEventClient(userName);
        }


        public void Dispose()
        {
            if (UserName != string.Empty && pool.Count < MaxInstance && pool.TryAdd(UserName, this))
                return;
            else
                db.Dispose();
        }
    }
    public static partial class PublicEventInfo
    {
        public const string EvaluateSuccess = "亲,点评成功!";
        public const string EvaluateFail = "亲,点评失败!";
        public const string EventsOutOfRange = "亲,你发布信息的数目有限,请隐藏或者删除一部分信息";
        public const string InvalidAuthor = "亲,您暂时没有评论限权";
        public const string CommentNotExists = "亲,没有找到你的评论";
        public const string CommentEnableSuccess = "亲,评论恢复成功</br>下次请谨慎删除哦!";
        public const string FailAndRefresh = "亲,操作失败了</br>刷新网页试试,如果仍然出错,请联系我们";
        public const string CommentDisableSuccess = "亲,删除评论成功</br>你无法再次评论这个文章了,但可以恢复这条评论";
        public const string CommentDisableFail = "亲,暂时无法删除</br>刷新界面试试";
        public const string CommentAddSuccess = "亲,添加评论成功";
        public const string CommentUpdateSuccess = "亲,更新评论成功";
        public const string CommentUpdateFail = "亲,不好意思,更新失败了";
        public const string CommentAddFail = "亲,评论失败了囧</br>刷新网页试试,如果仍然出错,请联系我们";
        public const string CommentExists = "亲,你已经评论过这个文章了</br>每篇文章只能评论一次,即使删除,也不能再次回复";
    }
}