using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Msg
{
    public enum MsgRole
    {
        Super = -1,
        Normal = 0,
        Study=3,
        LixueAdmin = 5,
    }
    public enum MsgCategoryNo
    {
        Lixue = 5,
        WebInfo = 2,
        Study = 3,
        Article = 4,
        Announcement = 1

    }
    public static partial class PublicEventInfo
    {
        public const string EventNotFound = "似乎你要查看的信息不存在!";
    }
    public class CommentJS
    {
        public int authorNo { get; set; }
        public string authorName { get; set; }
        public int no { get; set; }
        public DateTime setDate { get; set; }
        public int eventNo { get; set; }
        public string color { get; set; }
        public short priority { get; set; }
        public bool deleted { get; set; }
        public string dateString { get { return setDate.ToString(); } }
        public string body { get; set; }
        public Comment ToEntity()
        {
            var c = new Comment()
            {
                AuthorNo = authorNo,
                Body = body,
                Color = color,
                No = no,
                Deleted = deleted,
                EventNo = eventNo,
                Priority = priority,
                SetDate = setDate
            };
            return c;
        }
    }
    public class PublicEventJS
    {
        public string mtitle { get; set; }
        public int no { get; set; }
        public string title { get; set; }
        public string authorName { get; set; }
        public string imgUrl { get; set; }
        public string text { get; set; }
        public bool enable { get; set; }
        public short priority { get; set; }
        public DateTime updateTime { get; set; }
        public string audioUrl { get; set; }
        public int categoryNo { get; set; }
        public int authorNo { get; set; }
        public PublicEvent ToEntity()
        {
            var pe = new PublicEvent()
            {
                AuthorNo = authorNo,
                Enable = enable,
                ImgUrl = imgUrl == string.Empty ? null : imgUrl,
                Text = text,
                MTitle = mtitle,
                No = no,
                Title = title,
                Priority = priority,
                UpdateTime = updateTime,
                AudioUrl = audioUrl,
                AuthorName = authorName,
                CategoryNo = categoryNo
            };
            return pe;
        }
    }
    public class CategoryJS
    {
        public bool enable { get; set; }
        public string name { get; set; }
        public int no { get; set; }
        public short priority { get; set; }
        public List<PublicEventJS> events = new List<PublicEventJS>();
        public Category ToEntity(bool withEvents)
        {
            var cat = new Category() { Enable = enable, Name = name, No = no, Priority = priority };
            if (withEvents)
                foreach (var e in events)
                    cat.PublicEvents.Add(e.ToEntity());
            return cat;
        }

    }
    public class AuthorJS
    {
        public string userName { get; set; }
        public int no { get; set; }
        public string realName { get; set; }
        public string grade { get; set; }
        public short role { get; set; }
        public Author ToEntity()
        {
            var a = new Author() { Grade = grade, No = no, RealName = realName, Role = role, UserName = userName };
            return a;
        }
    }

    public static partial class EntityExtention
    {
        public static PublicEventJS ToEntityJS(this PublicEvent pe)
        {
            var js = new PublicEventJS()
            {
                enable = pe.Enable,
                title = pe.Title,
                no = pe.No,
                authorName = pe.AuthorName,
                mtitle = pe.MTitle,
                text = pe.Text,
                imgUrl = pe.ImgUrl,
                updateTime = pe.UpdateTime,
                priority = pe.Priority
            };
            return js;
        }
        public static CategoryJS ToEntityJS(this Category cat, bool withEvents)
        {
            var js = new CategoryJS() { enable = cat.Enable, name = cat.Name, no = cat.No, priority = cat.Priority };
            if (withEvents)
                foreach (var e in cat.PublicEvents)
                    js.events.Add(e.ToEntityJS());
            return js;
        }
        public static CommentJS ToEntityJS(this Comment com)
        {
            var js = new CommentJS()
            {
                setDate = com.SetDate,
                priority = com.Priority,
                eventNo = com.EventNo,
                deleted = com.Deleted,
                no = com.No,
                color = com.Color,
                body = com.Body,
                authorNo = com.AuthorNo,
                authorName = com.Author.RealName
            };
            return js;
        }
        public static AuthorJS ToEntityJS(this Author au)
        {
            var js = new AuthorJS() { userName = au.UserName, role = au.Role, realName = au.RealName, no = au.No, grade = au.Grade };
            return js;
        }
    }

}