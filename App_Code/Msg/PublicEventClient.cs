using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections.Concurrent;
namespace Msg
{
    public class PublicEventClient : IDisposable
    {
        
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
        public IEnumerable<Evalution> Evaluations { get { return db.Evaluations; } }
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
                    var e=db.PublicEvents.Find (com.EventNo);
                    e.UpdateTime = DateTime.Now;
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
        public IEnumerable<CommentJS> GetCommentJs(int evetNo, ushort skip=0,ushort take=30)
        {
            var cs = db.Comments.Include("Author").Where(c => !c.Deleted && c.EventNo == evetNo).
                OrderByDescending(c => c.Score).ThenBy(c => c.No).Skip(skip).Take (take).
                Select(c => new {c.Good, c.Best,c.Anonymous, realname = c.Author.RealName, c.SetDate, c.Priority, c.No, c.Body, c.Color,ano=c.Author.No  }).ToArray();
            var coms = cs.Select(c => new CommentJS
            {
                authorName = c.realname,
                body = c.Body,
                color = c.Color,
                no = c.No,
                priority = c.Priority,
                setDate = c.SetDate,
                deleted = false,
                authorNo = c.ano,
                good = c.Good,
                best = c.Best,
                anonymouse=c.Anonymous
            }).ToDictionary(js => js.no);
            if(Author!=null ){
                var evals = db.Evaluations.Where(e => e.AuthorNo == Author.No && e.EventNo == evetNo).Select (e=>new { e.CommentNo,e.Type});
                foreach (var eva in evals)
                    coms[eva.CommentNo].authorEval = eva.Type;
            }
            return coms.Values;
        }
        public Evalution AddEvaluation(Evalution eva, out string reason)
        {
            if (eva.Type == (byte)EvalType.best && db.Evaluations.Any(e => e.EventNo == eva.EventNo && e.Type == (byte)EvalType.best && e.AuthorNo == eva.AuthorNo))
                reason = PublicEventInfo.EvaBestExceed;
            else if (db.Evaluations.Any(e => e.AuthorNo == eva.AuthorNo && e.CommentNo == eva.CommentNo && e.EventNo == eva.EventNo))
                reason = PublicEventInfo.EvaExists;
            else
            {
                var com = db.Comments.Find(eva.CommentNo);
                try
                {
                    eva.UpdateTime = DateTime.Now;
                    if (eva.Type == (byte)EvalType.good)
                        com.Good += 1;
                    else if (eva.Type == (byte)EvalType.best)
                        com.Best += 1;
                    db.Evaluations.Add(eva);
                    db.SaveChanges();
                    reason = PublicEventInfo.EvaluateSuccess;
                    return eva;
                }
                catch
                {
                    db.Entry(eva).State = System.Data.EntityState.Detached;
                    db.Entry(com).State = System.Data.EntityState.Detached;
                    reason = PublicEventInfo.EvaluateFail;
                }
            }
            return null;
        }
        public bool DeleteEvaluation(int no, out string reason)
        {
            var eva=db.Evaluations.Include ("Comment").FirstOrDefault (e=>e.No==no);
            if(eva==null)
                reason = PublicEventInfo.EvaNotExists;
            else
            {
                var com = eva.Comment;
                if (eva.Type == (byte)EvalType.good)
                    com.Good -= 1;
                else if (eva.Type == (byte)EvalType.best)
                    com.Best -= 1;
                db.Evaluations.Remove(eva);
                try
                {
                    db.SaveChanges();
                    reason = PublicEventInfo.EvaDeleteSuccess;
                    return true;
                }
                catch
                {
                    db.Entry(com).State = System.Data.EntityState.Detached;
                    if (db.Evaluations.Local.Contains(eva))
                        db.Entry(eva).State = System.Data.EntityState.Detached;
                    reason = PublicEventInfo.EvaDeleteFail;
                }
            }
            return false;

        }
    
        public Comment UpdateComment(int no,Action<Comment> update, out string reason)
        {
            var oldcom=db.Comments.Find (no);
            if (oldcom==null)
                reason = PublicEventInfo.CommentNotExists;
            else
            {
                update(oldcom);
                oldcom.SetDate = DateTime.Now;
                try
                {
                    db.SaveChanges();
                    reason = PublicEventInfo.CommentUpdateSuccess;
                    return oldcom;
                }
                catch (Exception ex)
                {
                    db.Entry(oldcom).Reload();
                    reason = PublicEventInfo.CommentUpdateFail;
                }
            }
            return null;
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
        public bool UpdatePublicEvent(PublicEvent pe,out string reason,bool reloadCategory=false)
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
        public const string EvaBestExceed = "亲,每个问题只能选一个最佳答案";
        public const string EvaDeleteSuccess="亲,取消点评成功";
        public const string EvaDeleteFail = "亲,取消点评失败";
        public const string EvaNotExists = "亲,你要删除的评论不存在";
        public const string EvaExists = "亲,你已经点评过了,如果想修改,请先删掉以前的点评";
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