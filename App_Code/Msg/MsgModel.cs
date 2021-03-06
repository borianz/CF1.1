﻿//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class Author
    {
        public Author()
        {
            this.Enable = true;
            this.PublicEvents = new HashSet<PublicEvent>();
            this.Evalutions = new HashSet<Evalution>();
            this.Comments = new HashSet<Comment>();
            this.Behaviors = new HashSet<Behavior>();
        }
    
        public string UserName { get; set; }
        public int No { get; set; }
        public string RealName { get; set; }
        public string Grade { get; set; }
        public short Role { get; set; }
        public short EventLimit { get; set; }
        public bool Enable { get; set; }
    
        public virtual ICollection<PublicEvent> PublicEvents { get; set; }
        public virtual ICollection<Evalution> Evalutions { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Behavior> Behaviors { get; set; }
    }
}
namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class Behavior
    {
        public Behavior()
        {
            this.Type = 0;
        }
    
        public int No { get; set; }
        public Nullable<int> EventNo { get; set; }
        public Nullable<int> UserNo { get; set; }
        public short Click { get; set; }
        public System.DateTime UpdateTime { get; set; }
        public byte Type { get; set; }
    
        public virtual Author Author { get; set; }
        public virtual PublicEvent PublicEvent { get; set; }
    }
}
namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class Category
    {
        public Category()
        {
            this.Enable = true;
            this.PublicEvents = new HashSet<PublicEvent>();
        }
    
        public int No { get; set; }
        public string Name { get; set; }
        public bool Enable { get; set; }
        public short Priority { get; set; }
    
        public virtual ICollection<PublicEvent> PublicEvents { get; set; }
    }
}
namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comment
    {
        public Comment()
        {
            this.Evalutions = new HashSet<Evalution>();
        }
    
        public int AuthorNo { get; set; }
        public int No { get; set; }
        public System.DateTime SetDate { get; set; }
        public Nullable<int> EventNo { get; set; }
        public string Color { get; set; }
        public short Priority { get; set; }
        public bool Deleted { get; set; }
        public string Body { get; set; }
        public bool Anonymous { get; set; }
        public short Good { get; set; }
        public short Best { get; set; }
        public Nullable<int> Score { get; set; }
    
        public virtual Author Author { get; set; }
        public virtual PublicEvent PublicEvent { get; set; }
        public virtual ICollection<Evalution> Evalutions { get; set; }
    }
}
namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class Evalution
    {
        public int No { get; set; }
        public int AuthorNo { get; set; }
        public int CommentNo { get; set; }
        public System.DateTime UpdateTime { get; set; }
        public byte Type { get; set; }
        public int EventNo { get; set; }
    
        public virtual Author Author { get; set; }
        public virtual PublicEvent PublicEvent { get; set; }
        public virtual Comment Comment { get; set; }
    }
}
namespace Msg
{
    using System;
    using System.Collections.Generic;
    
    public partial class PublicEvent
    {
        public PublicEvent()
        {
            this.CanComment = true;
            this.Evalutions = new HashSet<Evalution>();
            this.Comments = new HashSet<Comment>();
            this.Behaviors = new HashSet<Behavior>();
        }
    
        public string Title { get; set; }
        public System.DateTime UpdateTime { get; set; }
        public string ImgUrl { get; set; }
        public bool Enable { get; set; }
        public string Text { get; set; }
        public int No { get; set; }
        public short Priority { get; set; }
        public string MTitle { get; set; }
        public int CategoryNo { get; set; }
        public string AudioUrl { get; set; }
        public int AuthorNo { get; set; }
        public string AuthorName { get; set; }
        public System.DateTime SetTime { get; set; }
        public bool CanComment { get; set; }
    
        public virtual Author Author { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Evalution> Evalutions { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Behavior> Behaviors { get; set; }
    }
}
