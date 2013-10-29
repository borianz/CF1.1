using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Objects;
using System.Reflection;
using System.Data.Entity.Infrastructure;
namespace Lab2
{
    public class Lab2DbContext : DbContext
    {
        public DateTime CreateTime { get; private set; }
        public Lab2Entities ObjectContext { get; private set; }
        public Lab2DbContext()
            : base(new Lab2Entities (),true)
        {
            ObjectContext = (Lab2Entities)((IObjectContextAdapter)this).ObjectContext;
            CreateTime = DateTime.Now;
        }
        public Lab2DbContext(Lab2Entities context)
            : base(context, true)
        {
            context.ExpParas.MergeOption = MergeOption.OverwriteChanges;
            context.Exps.MergeOption = MergeOption.OverwriteChanges;
            context.ExpTypes.MergeOption = MergeOption.OverwriteChanges;
            context.ExpValues.MergeOption = MergeOption.OverwriteChanges;
            context.Students.MergeOption = MergeOption.OverwriteChanges;
            context.Groups.MergeOption = MergeOption.OverwriteChanges;
            context.Classes.MergeOption = MergeOption.OverwriteChanges;
            ObjectContext = context;
            CreateTime = DateTime.Now;
        }
        public DbSet<Exp> Exps { get; set; }
        public DbSet<ExpPara> ExpParas { get; set; }
        public DbSet<ExpType> ExpTypes { get; set; }
        public DbSet<ExpValue> ExpValues { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Class> Classes { get; set; }
        public void ClearLocalSets()
        {
            var t = typeof(Lab2DbContext);
            var properties = t.GetProperties();
            var me = t.GetMembers();
            var fs = t.GetFields();
            foreach (var property in properties)
            {
                if (property.CanWrite)
                {
                    var gent = property.PropertyType.GetGenericArguments()[0];
                    var localSet =((dynamic)property.GetValue(this,null)).Local;
                    for (var i = 0; i < localSet.Count; i++)
                        if (localSet[i].GetType() == gent)
                            localSet.RemoveAt(i);
                }

            }


        }
    }
    
}