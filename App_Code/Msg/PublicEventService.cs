using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using Msg;
/// <summary>
///PublicEventService 的摘要说明
/// </summary>
[WebService(Namespace = "http://baishushu.com/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[GenerateScriptType (typeof (PublicEventJS))]
[GenerateScriptType (typeof (CommentJS))]
[GenerateScriptType (typeof (EvaluationJS))]
[System.Web.Script.Services.ScriptService]
public class PublicEventService : System.Web.Services.WebService {

   
    public PublicEventService () {
     
    }
    [WebMethod]
    public CategoryJS[] GetIndex()
    {
        return PublicEventServer.Instance.Index;
        
    }
    [WebMethod]
    public OperationResult GetEvent(int eveNo)
    {
        return UsingClient(client =>
        {
           var  pe = client.GetEvent(eveNo);
           if (pe == null)
               return new OperationResult(false, PublicEventInfo.EventNotFound,null);
           else
               return new OperationResult(true, pe.ToEntityJS());
        });
       
    }
    [WebMethod]
    public OperationResult GetComments(int eveNo, ushort skip)
    {
        return UsingClient(client =>
        {
            var jses = client.GetCommentJs(eveNo, skip, 999);
            var  my =client.Author==null? null:jses.FirstOrDefault(c => c.authorNo == client.Author.No);
            return new OperationResult(true, new{comments=jses,mycomment=my});
        });
    }
    [WebMethod]
    public OperationResult AddComment(CommentJS js)
    {
        return UsingClient(client =>
            {
                js.setDate = DateTime.Now;
                string r;
                if (client.Author == null)
                    return new OperationResult(false, "亲,你还没有评论限权", null);
                js.authorNo = client.Author.No;
                var addCom = js.ToEntity();
                if (client.Comments.Any(c =>c.EventNo==js.eventNo && c.AuthorNo==client.Author.No))
                    return new OperationResult(false, PublicEventInfo.CommentExists, null);
                else
                    if (client.AddComment(addCom, out r) == null)
                        return new OperationResult(false, r, null);
                    else
                        return new OperationResult(true, r, addCom.ToEntityJS());
            });
    }
    [WebMethod]
    public OperationResult UpdateComment(CommentJS js)
    {
        return UsingClient(client =>
        {
            js.setDate = DateTime.Now;
            string r;
            if (client.Author == null)
                return new OperationResult(false, "亲,你还没有评论限权", null);
            js.authorNo = client.Author.No;
            var addCom = js.ToEntity();
            if (client.Comments.Any(c => c.No == js.no))
            {
                var neoComment = client.UpdateComment(js.no, comment => { comment.Body = js.body; comment.Anonymous = js.anonymouse; }, out r);
                return new OperationResult(neoComment != null, r, neoComment.ToEntityJS());
            }
            else
                return new OperationResult(false, PublicEventInfo.CommentNotExists, null);
        });

    }
    [WebMethod]
    public OperationResult DeleteComment(int comNo)
    {
        return UsingClient(client =>
        {
            string r;
            return new OperationResult(client.ChangeCommentState(comNo, true, out r) != null, r, null);
        });

    }
    [WebMethod]
    public OperationResult AddEval(int commentNo,bool best)
    {
        return UsingClient(client =>
        {
            if (client.Author == null)
                return new OperationResult(false, "亲,还没登陆啊!", null);
            string r;
            var comment = client.Comments.FirstOrDefault(c => c.No == commentNo);
            if (comment == null) return new OperationResult(false, "你要支持的答案不见了?", null);
            else if (comment.AuthorNo == client.Author.No)
                return new OperationResult(false, "谦虚使人进步,请不要给自己点评", null);
            else
            {
                var eva = client.AddEvaluation(new Evalution()
                {
                    Type = best ? ((byte)EvalType.best) : ((byte)EvalType.good),
                    CommentNo = commentNo,
                    AuthorNo = client.Author.No,
                    EventNo=(int)comment.EventNo 
                }, out r);
                if (eva != null)
                    return new OperationResult(true, r, new {evalType=eva.Type, gcount = eva.Comment.Good, bcount= eva.Comment.Best });
                else
                    return new OperationResult(false, r, null);

            }
        });
    }
    [WebMethod]
    public OperationResult DeleteEval(int commentNo)
    {
        return UsingClient(client =>
            {
                string r;
                if (client.Author == null)
                    return new OperationResult(false, "亲,还没登陆啊!", null);
                else
                {
                    var eva = client.Evaluations.FirstOrDefault(e => e.CommentNo == commentNo && e.AuthorNo == client.Author.No);
                    if (eva == null)
                        return new OperationResult(false, "亲,你只能取消你自己的点评", null);
                    else
                    {
                        var com = eva.Comment;
                        if (client.DeleteEvaluation(eva.No, out r))
                            return new OperationResult(true, r, new { good = com.Good,best = com.Best });
                        else
                            return new OperationResult(false, r, null);
                    }
                }
            });
    }
    [WebMethod]
    public OperationResult GetEvals(int eventNo)
    {
      return   UsingClient(client =>
        {
            if (client.Author == null)
                return new OperationResult(false, "", null);
            else
            {
                var evals = client.Evaluations.Where(e => e.EventNo == eventNo && e.AuthorNo == client.Author.No);
                return new OperationResult(true, evals.OrderByDescending(e => e.Type).Select(e => e.ToEntityJS()));
            }
        });



    }
    [WebMethod]
    public OperationResult SubmitBehaviors(BehaviorJS[] behaviors)
    {
      return  UsingClient(client =>
        {
            if (client.Author != null)
                foreach (var b in behaviors)
                    b.userNo = client.Author.No;
            else
                foreach (var b in behaviors)
                    b.userNo = null;
            return new OperationResult(client.AddBehaviors(behaviors.Select (js=>js.ToEntity ()).ToArray ()), null);
        });


    }
    private OperationResult UsingClient(Func<PublicEventClient, OperationResult> func)
    {
        using (var client = PublicEventClient.Get(User.Identity.Name))
            return func(client);
    }
    
}


