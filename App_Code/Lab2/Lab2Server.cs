using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Concurrent;
using System.Data.Entity.Infrastructure;
using System.Data.Objects;
namespace Lab2
{
    /// <summary>
    ///Lab2Server 的摘要说明
    /// </summary>
    public class Lab2Server
    {
        private static Lab2Server ins = new Lab2Server();
        public static Lab2Server Instance { get { return ins; } }
        private Lab2DbContext db;
        private ExpIndexJS localIndex;
        private ConcurrentDictionary<string, int> userRequestDic = new ConcurrentDictionary<string, int>();
        private ConcurrentDictionary<int, string> dataTables = new ConcurrentDictionary<int, string>();
        public ConcurrentDictionary<int, string> DataTables { get { return dataTables; } }
        public ExpIndexJS ExpIndex { get { return localIndex; } }

        private Lab2Server()
        {
            db = new Lab2DbContext(new Lab2Entities());
            RefreshExpIndex();
        }
        public ExpType GetExpType(int expTypeNo)
        {
            try
            {
                return db.ExpTypes.Local.SingleOrDefault(e => e.No == expTypeNo);
            }
            catch
            {
                lock (db)
                {
                    foreach (var et in db.ExpTypes.Local.Where(e => e.No == expTypeNo))
                        db.Entry(et).State = System.Data.EntityState.Detached;
                    return db.ExpTypes.Include("Exps").FirstOrDefault(t => t.No == expTypeNo);
                }
            }

        }
        public ExpType[] GetExpTypes()
        {
            return db.ExpTypes.Local.ToArray();
        }
        public Exp GetLocalExp(int expNo)
        {
            try
            {
                return db.Exps.Local.SingleOrDefault(e => e.No == expNo);
            }
            catch
            {
                lock (db)
                {
                    foreach (var exp in db.Exps.Local.Where(e => e.No == expNo))
                        db.Entry(exp).State = System.Data.EntityState.Detached;
                    return db.Exps.Find(expNo);
                }
            }
        }
        public Exp[] GetLocalExps(int expTypeNo)
        {
            return db.Exps.Local.Where(exp => exp.TypeNo == expTypeNo).ToArray();
        }
        public ExpIndexJS GetFullLoacalIndex()
        {
            var index = new ExpIndexJS() { ModifyTime = DateTime.Now };
            var types = db.ExpTypes.Local;
            foreach (var et in types)
                index.ExpTypes.Add(et.ToEntityJS ());
            return index;
        }

        public void RefreshExpIndex()
        {
            var localIndex = new ExpIndexJS();
            lock (db)
            {
                var types = db.ExpTypes.Include("Exps").ToArray();
                foreach (var et in types.Where(t => t.Enable && t.Exps.Count > 0))
                {
                    var ret = new ExpTypeJS() { ExpTypeName = et.Name, ExpTypeNo = et.No };
                    foreach (var exp in et.Exps)
                    {
                        var rexp = new ExpJS()
                        {
                            CanRead = (exp.ReadMode != (short)ExpReadMode.forbidden),
                            CanSubmit = (exp.SubmitMode != (short)ExpSubmitMode.forbidden),
                            ExpNo = exp.No,
                            ExpName = exp.Name,
                            Des =exp.Des, 
                            ExpTypeNo =exp.TypeNo 
                        };
                        if (rexp.CanRead || rexp.CanSubmit)
                        {
                            foreach (var ep in exp.ExpParas)
                                rexp.ExpParas.Add(new ExpParaJS() { Name = ep.Name, ParaNo = ep.No, ValueType = ep.ValueType, Des = ep.Description });
                            ret.Exps.Add(rexp);
                        }
                    }
                    localIndex.ExpTypes.Add(ret);
                }
            }
            this.localIndex = localIndex;
        }
        public bool AddRequest(string userName, int expNo)
        {
           return expNo==userRequestDic.AddOrUpdate(userName, expNo, (name, no) => expNo);
        }
        public bool TakeRequest(string UserName, out int expNo)
        {
            return userRequestDic.TryRemove(UserName, out expNo);
        }

        public bool TryAddExpType(string typename, out string reason)
        {
            lock (db)
            {
                ExpType et = new ExpType() { Name = typename, Enable = true };
                if (db.ExpTypes.Local.Any(t => t.Name == typename))
                    reason = Lab2Info.ExpTypeNameExists;
                else
                    try
                    {
                        db.ExpTypes.Add(et);
                        db.SaveChanges();
                        lock (localIndex)
                            localIndex.ExpTypes.Add(et.ToEntityJS());
                        reason = Lab2Info.ExpTypeAddSuccess;
                        return true;
                    }
                    catch (Exception ex)
                    {
                        reason = ex.InnerException.Message;
                        db.Entry(et).State = System.Data.EntityState.Detached;
                    }
            }
            return false;
        }
        public bool TryEnableOrDisableExpType(int tno,bool enable,out string reason)
        {
            lock (db)
            {
                var et = db.ExpTypes.Find(tno);
                if (et == null)
                    reason = Lab2Info.ExpTypeNotExists;
                else
                {
                    try
                    {
                        et.Enable = enable;
                        db.SaveChanges();
                        reason =enable ?Lab2Info.ExpTypeEnableSuccess: Lab2Info.ExpTypeDisableSuccess;
                        RefreshExpIndex();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        reason = ex.InnerException.Message;
                        db.Entry(et).Reload();
                    }
                   
                }
            }
            return false;
        }
        
        public bool TryAddExp(ExpJS expJs, string userName, out string reason)
        {
            lock (db)
            {
                var exp = expJs.ToEntity(false);
                var et = db.ExpTypes.Local.FirstOrDefault(t => t.No == expJs.ExpTypeNo);
                if (et == null)
                    reason = Lab2Info.ExpTypeNotExists;
                else
                    if (et.Exps.Any(e => e.Name == exp.Name))
                        reason = Lab2Info.SameNameExpExists;
                    else
                        try
                        {
                            et.Exps.Add(exp);
                            db.SaveChanges();
                            reason = Lab2Info.ExpAddSuccess;
                            var nexpJS=exp.ToEntityJS();
                            if (nexpJS.CanRead || nexpJS.CanSubmit)
                                try
                                {
                                    var etjs =localIndex.ExpTypes[localIndex.ExpTypes.IndexOf(localIndex.ExpTypes.Single(t => t.ExpTypeNo == nexpJS.ExpTypeNo))];
                                    lock (localIndex)
                                    etjs.Exps.Add(nexpJS);
                                }
                                catch
                                {
                                    RefreshExpIndex();
                                }
                            return true;
                        }
                        catch (Exception ex)
                        {
                            reason = ex.InnerException.Message;
                            if (db.Exps.Contains(exp))
                                db.Entry(exp).State = System.Data.EntityState.Detached;
                        }
            }
            return false;
        }
        public bool TryUpdateExp(ExpJS expjs, out string reason,out ExpJS updateResult)
        {
            lock (db)
            {
                var oldExp = db.Exps.Find(expjs.ExpNo);
                if (oldExp == null)
                    reason = Lab2Info.ExpNotExists;
                else
                {
                    oldExp.ReadMode = (short)expjs.ReadMode;
                    oldExp.SubmitMode = (short)expjs.SubmitMode;
                    oldExp.Des = expjs.Des;
                    try
                    {
                        db.SaveChanges();
                        reason = Lab2Info.ExpAddSuccess;
                        var nexpJS = oldExp.ToEntityJS();
                        RefreshExpIndex();
                        updateResult = nexpJS;
                        return true;
                    }
                    catch (Exception ex)
                    {
                        db.Entry(oldExp).Reload();
                        reason = ex.InnerException.Message;
                    }
                }
            }
            updateResult= null;
            return false;
        }
    }
    public static partial class Lab2Info
    {
        public const string ExpTypeNameExists = "不能添加相同名称的实验分类";
        public const string ExpTypeEnableSuccess = "亲,此分类下的所有实验启用成功";

    }
}