﻿//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Data.EntityClient;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using System.Linq;
using System.Runtime.Serialization;
using System.Xml.Serialization;



namespace Msg
{
    #region 上下文
    
    /// <summary>
    /// 没有元数据文档可用。
    /// </summary>
    public partial class MsgDBEntities : ObjectContext
    {
        #region 构造函数
    
        /// <summary>
        /// 请使用应用程序配置文件的“MsgDBEntities”部分中的连接字符串初始化新 MsgDBEntities 对象。
        /// </summary>
        public MsgDBEntities() : base("name=MsgDBEntities", "MsgDBEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        /// <summary>
        /// 初始化新的 MsgDBEntities 对象。
        /// </summary>
        public MsgDBEntities(string connectionString) : base(connectionString, "MsgDBEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        /// <summary>
        /// 初始化新的 MsgDBEntities 对象。
        /// </summary>
        public MsgDBEntities(EntityConnection connection) : base(connection, "MsgDBEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        #endregion
    
        #region 分部方法
    
        partial void OnContextCreated();
    
        #endregion
    
        #region ObjectSet 属性
    
        /// <summary>
        /// 没有元数据文档可用。
        /// </summary>
        public ObjectSet<PublicEvent> PublicEvents
        {
            get
            {
                if ((_PublicEvents == null))
                {
                    _PublicEvents = base.CreateObjectSet<PublicEvent>("PublicEvents");
                }
                return _PublicEvents;
            }
        }
        private ObjectSet<PublicEvent> _PublicEvents;
    
        /// <summary>
        /// 没有元数据文档可用。
        /// </summary>
        public ObjectSet<Author> Authors
        {
            get
            {
                if ((_Authors == null))
                {
                    _Authors = base.CreateObjectSet<Author>("Authors");
                }
                return _Authors;
            }
        }
        private ObjectSet<Author> _Authors;
    
        /// <summary>
        /// 没有元数据文档可用。
        /// </summary>
        public ObjectSet<Category> Categories
        {
            get
            {
                if ((_Categories == null))
                {
                    _Categories = base.CreateObjectSet<Category>("Categories");
                }
                return _Categories;
            }
        }
        private ObjectSet<Category> _Categories;
    
        /// <summary>
        /// 没有元数据文档可用。
        /// </summary>
        public ObjectSet<Comment> Comments
        {
            get
            {
                if ((_Comments == null))
                {
                    _Comments = base.CreateObjectSet<Comment>("Comments");
                }
                return _Comments;
            }
        }
        private ObjectSet<Comment> _Comments;

        #endregion

       

    }

    #endregion



    
}