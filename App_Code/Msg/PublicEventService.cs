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
            var jses = client.GetCommentJs(eveNo, skip,999);
            CommentJS my=null;
            if(client.Author!=null )
                my=jses.FirstOrDefault (js=>js.authorNo==client.Author.No);
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
                if (client.Comments.Any(c => c.No == js.no))
                    if (client.UpdateComment(addCom, out r))
                        return new OperationResult(true, r, new { comments = client.GetCommentJs(js.eventNo, 0, 999), mycomment = addCom.ToEntityJS() });
                    else
                        return new OperationResult(false, r, null);
                else
                    if (client.AddComment(addCom, out r) == null)
                        return new OperationResult(false, r, null);
                    else
                        return new OperationResult(true, r, new { comments = client.GetCommentJs(js.eventNo, 0, 999), mycomment = addCom.ToEntityJS() });
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

    private OperationResult UsingClient(Func<PublicEventClient, OperationResult> func)
    {
        using (var client = PublicEventClient.Get(User.Identity.Name))
            return func(client);
    }
    
}


