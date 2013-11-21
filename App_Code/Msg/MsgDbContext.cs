using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Objects;
using System.Reflection;
using System.Data.Entity.Infrastructure;

namespace Msg
{
    public partial class MsgDBEntities : ObjectContext
    {
        partial void OnContextCreated()
        {
            Authors.MergeOption = MergeOption.OverwriteChanges;
            PublicEvents.MergeOption = MergeOption.OverwriteChanges;
            Categories.MergeOption = MergeOption.OverwriteChanges;
            Comments.MergeOption = MergeOption.OverwriteChanges;
            PublicEvents.MergeOption = MergeOption.OverwriteChanges;
            Evalutions.MergeOption = MergeOption.OverwriteChanges;
        }
    }
    public class MsgDbContext : DbContext
    {
        public MsgDBEntities  ObjectContext { get; private set; }
        public MsgDbContext()
            : base(new MsgDBEntities(), true)
        {
           ObjectContext=(MsgDBEntities)((IObjectContextAdapter)this).ObjectContext;
           ObjectContext.Authors.MergeOption = MergeOption.OverwriteChanges;
           ObjectContext.Categories.MergeOption = MergeOption.OverwriteChanges;
           ObjectContext.Comments.MergeOption = MergeOption.OverwriteChanges;
           ObjectContext.PublicEvents.MergeOption = MergeOption.OverwriteChanges;
           ObjectContext.Evalutions.MergeOption = MergeOption.OverwriteChanges;
        }
        public DbSet<PublicEvent> PublicEvents { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Evalution> Evaluations { get; set; }
        public DbSet<Behavior> Behaviors { get; set; }
    }
}