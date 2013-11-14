using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Concurrent;
using System.Text;
namespace Lab2
{
    public class Lab2Client : IDisposable
    {
        public string UserName { get;private  set; }
        public Student Student { get; private set; }
        public static int MaxInstance { get; set; }
        static readonly ConcurrentDictionary<string, Lab2Client> pool = new ConcurrentDictionary<string, Lab2Client>();
        private Lab2DbContext db;
        public static Lab2Client Get(string userName)
        {
            Lab2Client client;
            pool.TryRemove(userName, out client);
            return client ?? new Lab2Client(userName);
        }
        private Lab2Client(string userName)
            : this()
        {
            Student = db.Students.SingleOrDefault(s => s.UserName == userName);
            if (Student != null)
                UserName = userName;
        }
        private Lab2Client()
        {
            db = new Lab2DbContext();
            
        }
        public void Dispose()
        {
            if (UserName !=string.Empty && UserName !=null  && pool.Count < MaxInstance)
                pool.TryAdd(UserName, this);
            else
                db.Dispose();
        }
        public void Dispose(bool addToPool)
        {
            if (UserName!=null && UserName!=string.Empty && addToPool)
                pool.TryAdd(UserName, this);
            else
            {
                Lab2Client client;
                pool.TryRemove(UserName, out client);
                db.Dispose();
            }
        }
        public bool TryGetStudent(string userName,out Student stu)
        {
           stu=db.Students.SingleOrDefault(s => s.UserName == userName);
            if (stu != null)
           {
               UserName = userName;
               Student = stu;
           }
           return stu != null;
        }
        public string AddParaValues(int expNo, string value, int studentNo)
        {
            ExpValue item = new ExpValue();
            var exp = db.Exps.Include("WhiteGroups").Include("BlackGroups").FirstOrDefault(e => e.No == expNo);
            var js = new StuExpJS();
            CheckCanSubmit(js, exp);
            if (!js.canSubmit) return js.submitInfo;
            var pts = db.ExpParas.Where(pt => pt.ExpNo == expNo).ToArray();
            if (pts.Count() == 0) return Lab2Info.ExpNotExists;
            var pvs = value.Split(new char[] { '\r' }, StringSplitOptions.RemoveEmptyEntries).Select(pair =>
            {
                var pairs = pair.Split('\t');
                return new KeyValuePair<int, string>(int.Parse(pairs[0]), pairs[1]);
            }).OrderBy(p => p.Key).ToArray();
            var paraNoPairs = pts.Join(pvs, pt => pt.No, pv => pv.Key, (a, b) => new { T = a.ValueType, V = b.Value, No = b.Key }).OrderBy(a => a.No).ToArray();
            if (pts.Count() != paraNoPairs.Count()) return Lab2Info.ParaValueMising;
            string vStr = "";
            foreach (var p in paraNoPairs)
            {
                switch (p.T)
                {
                    case 0:
                        float f;
                        if (float.TryParse(p.V, out f)) vStr += string.Format("{0}\t{1}\r", p.No, f.ToString("F"));
                        else return Lab2Info.ParaValueInvalid;
                        break;
                    case 1:
                        int i;
                        if (int.TryParse(p.V, out i)) vStr += string.Format("{0}\t{1}\r", p.No, i);
                        else return Lab2Info.ParaValueInvalid;
                        break;
                    case 3:
                        DateTime d;
                        if (DateTime.TryParse(p.V, out d)) vStr += string.Format("{0}\t{1}\r", p.No, d);
                        else return Lab2Info.ParaValueInvalid;
                        break;
                    case 2:
                        var str = pts.Where(pt => p.No == pt.No).First().Description;
                        if (str.StartsWith(p.V + ':') || str.EndsWith(':' + p.V))
                            vStr += string.Format("{0}\t{1}\r", p.No, p.V);
                        else return Lab2Info.ParaValueInvalid;
                        break;
                    case 4:
                        vStr += string.Format("{0}\t{1}\r", p.No, p.V);
                        break;
                    default:
                        return Lab2Info.UnKnownError + "labDB_01";
                }

            }
            if (vStr.Last() == '\r')
                vStr = vStr.Substring(0, vStr.Length - 1);
            try
            {
                var c = db.ExpValues.Where(ev => ev.ExpNo == expNo && ev.StudentNo == studentNo).Count();
                item = new ExpValue { ExpNo = expNo, UpdateDate = DateTime.Now, StudentNo =studentNo, Value = vStr,Seq=c+1 };
                db.ExpValues.Add(item);
                db.SaveChanges(); 
                //修改同学的exp,1-10名5分,10-20名2分,20+,1分
                //找到对应编号的同学,增加同学的exp
                string o;
                Lab2Server.Instance.DataTables.TryRemove(expNo, out o);
                return Lab2Info.ParaValueSumbmit;
            }
            catch 
            {
                return Lab2Info.OnError(1314);
            }
           

        }
        public bool DeleteExpValue(int evNo, out string reason,out Exp exp)
        {
            var pv = db.ExpValues.FirstOrDefault(v => v.No == evNo);
            exp = null;
            if (pv == null)
                reason = Lab2Info.ParaValueNotExists;
            else
                try
                {
                    db.ExpValues.Remove(pv);
                    db.SaveChanges();
                    string o;
                    Lab2Server.Instance.DataTables.TryRemove(pv.ExpNo, out o);
                    reason = Lab2Info.ParaValueDelete;
                    exp = pv.Exp;
                    return true;
                }
                catch (Exception ex)
                {
                    reason = ex.InnerException.Message;
                }
            return false;
        }
        public bool DeleteExpValue(int stuNo, int expNo, out string reason)
        {
            var ev = db.ExpValues.FirstOrDefault(e => e.StudentNo == stuNo && e.ExpNo == expNo);
            if (ev == null)
                reason = Lab2Info.OnError(9982);
            else
            {
                db.Entry(ev).State = System.Data.EntityState.Deleted;
                try
                { 
                   //如果删除成功,学生的exp减去相应的值
                   // db.Students.FirstOrDefault (s=>s.No==stuNo).Exp -=
                    db.SaveChanges();
                  
                    reason = Lab2Info.ExpValueDeleteSuccess;
                    return true;
                }
                catch
                {
                    reason = Lab2Info.ExpValueDeleteFail;
                }
            } 
            return false;
        }
        public string[] UserExpDetail(int studentNo, int expNo)
        {
            var exp = db.Exps.Find(expNo);
            if (exp == null) return new string[] { Lab2Info.ExpNotExists };
            else
            {
                var pv = exp.ExpValues.FirstOrDefault(v => v.StudentNo == studentNo);
                if (pv == null)
                    return new string[] { exp.Des, "亲,你还没有上传这个实验的数据" };
                else
                    return new string[] { exp.Des, string.Format("亲,在{0}上传了数据,排名:{1}", pv.UpdateDate.ToShortDateString(), pv.Seq) };
            }
        }
        public bool TryGetStudentlist(int expno, out string reason, out KeyValuePair<int, string>[] list)
        {
            var exp = db.Exps.Find(expno);
            list = null;
            if (exp == null)
                reason = Lab2Info.ExpNotExists;
            else
            {
                db.Configuration.ProxyCreationEnabled = false;
                list = db.ExpValues.Include("Student").Where(ev => ev.ExpNo == expno).Select(ev => new { ev.No, ev.Student.StudentName }).ToArray().Select(p => new KeyValuePair<int, string>(p.No, p.StudentName)).ToArray();
                reason = string.Format(Lab2Info.ExpValueStudentListResult, list.Length);
                db.Configuration.ProxyCreationEnabled = true;
                return true;

            }
            return false;
        }
        public Exp GetExpDetail(int expNo)
        {
            var exp = db.Exps.Include("ExpValues").Include("ExpParas").FirstOrDefault(e => e.No == expNo);
            if (exp != null)
                db.Students.Where(s => s.ExpValues.Any(ev => ev.ExpNo == expNo)).ToArray();
            return exp;
        }
        public StuExpJS GetStuExpJS(int expNo)
        {
            StuExpJS state = new StuExpJS();
            if (Student == null)
                return null;
            else
            {
                var exp = db.Exps.Find(expNo);
                var ev = db.ExpValues.FirstOrDefault(expv => expv.ExpNo == expNo && expv.StudentNo == Student.No);
                if (ev == null)
                    state.seqInfo = "您还没有上传数据,暂无排名信息";
                else
                    state.seqInfo = string.Format("您在{0}上传了数据,排名{1}", ev.UpdateDate, ev.Seq);
                CheckCanRead(state, exp, ev);
                if (ev != null)
                {
                    state.canSubmit = false;
                    state.hasSubmit = true;
                    state.submitInfo = "您已上传数据,如有必要,可删除后重传";
                }
                else
                    CheckCanSubmit(state, exp);
            }
            return state;

        }
        private void CheckCanRead(StuExpJS state, Exp exp, ExpValue ev)
        {
            var rm = (ExpReadMode)exp.ReadMode;
            switch (rm)
            {
                case ExpReadMode.accessible:
                    state.canRead = true;
                    state.readInfo = "此实验数据公开下载";
                    break;
                case ExpReadMode.forbidden:
                    state.canRead = false;
                    state.readInfo = "暂不开放此实验数据";
                    break;
                case ExpReadMode.uploadOnly:
                    if (ev == null)
                    {
                        state.readInfo = "下载他人数据前请先上传自己的数据";
                        state.canRead = false;
                    }
                    else
                    {
                        state.canRead = true;
                        state.readInfo = "现在可以下载数据了";
                    }
                    break;
                case ExpReadMode.whiteForbidden:
                    if (exp.WhiteGroups.Where (g=>g.Type!=(short)GroupType.LabSubmitMode).Intersect(Student.Groups).Any())
                    {
                        state.canRead = true;
                        state.readInfo = "此实验数据对您开放下载";
                    }
                    else
                    {
                        state.readInfo = "此实验数据只对部分人开放下载";
                        state.canRead = false;
                    }
                    break;
                case ExpReadMode.whiteUploadOnly:
                    if (exp.WhiteGroups.Where(g => g.Type != (short)GroupType.LabSubmitMode).Intersect(Student.Groups).Any())
                    {
                        if (ev != null)
                        {
                            state.canRead = true;
                            state.readInfo = "此实验数据对您开放下载";
                        }
                        else
                        {
                            state.canRead = false;
                            state.readInfo = "在下载他人数据前,请先上传自己的数据";
                        }
                    }
                    else
                    {
                        state.readInfo = "此实验数据只对部分人开放下载";
                        state.canRead = false;
                    }
                    break;
                case ExpReadMode.blackAccessible:
                    if (exp.BlackGroups.Where(g => g.Type != (short)GroupType.LabSubmitMode).Intersect(Student.Groups).Any())
                    {
                        state.canRead = false;
                        state.readInfo = "您暂时不能下载此实验数据";
                    }
                    else
                    {
                        state.readInfo = "您现在可以下载实验数据";
                        state.canRead = true;
                    }
                    break;
                case ExpReadMode.blackUploadOnly:
                    if (exp.BlackGroups.Where(g => g.Type != (short)GroupType.LabSubmitMode).Intersect(Student.Groups).Any())
                    {
                        state.canRead = false;
                        state.readInfo = "您暂时不能下载此实验数据";
                    }
                    else
                    {
                        if (ev != null)
                        {
                            state.readInfo = "您现在可以下载实验数据";
                            state.canRead = true;
                        }
                        else
                        {
                            state.canRead = false;
                            state.readInfo = "在下载他人数据前,请先上传自己的数据";
                        }
                    }
                    break;
            }
        }
        private void CheckCanSubmit(StuExpJS state, Exp exp)
        {
            var sm = (ExpSubmitMode)exp.SubmitMode;
            switch (sm)
            {
                case ExpSubmitMode.accessible:
                    state.canSubmit = true;
                    state.submitInfo = "您可以上传您的实验数据";
                    break;
                case ExpSubmitMode.forbidden:
                    state.canSubmit = false;
                    state.submitInfo = "暂不开放此实验数据上传";
                    break;
                case ExpSubmitMode.blackDeny:
                    if (exp.BlackGroups.Where(g => g.Type != (short)GroupType.LabReadMode).Intersect(Student.Groups).Any())
                    {
                        state.canRead = false;
                        state.readInfo = "您暂时不能上传此实验数据";
                    }
                    else
                    {
                        state.readInfo = "您现在可以上传实验数据";
                        state.canRead = true;
                    }
                    break;
                case ExpSubmitMode.whiteOnly:
                    if (exp.WhiteGroups.Where(g => g.Type != (short)GroupType.LabReadMode).Intersect(Student.Groups).Any())
                    {
                        state.canRead = true;
                        state.readInfo = "此实验数据对您开放上传";
                    }
                    else
                    {
                        state.readInfo = "此实验数据只对部分人开放上传";
                        state.canRead = false;
                    }
                    break;
            }
        }

        public Student AddStudent(StudentJS stuJS, out string reason)
        {
            if (db.Students.Any((s => s.UserName == stuJS.userName)))
                reason = Lab2Info.StuExists;
            else
            {
                var stu = stuJS.ToEntity(false);
                try
                {
                    db.Students.Add(stu);
                    db.SaveChanges();
               
                    reason = Lab2Info.StuAddSuccess;
                    return stu;
                }
                catch (Exception ex)
                {
                    reason = ex.InnerException.Message;
                    db.Entry(stu).State = System.Data.EntityState.Detached;
                }
            }
            return null;
        }
        public Class AddClass(string grade,string name, out string reason)
        {
            if (db.Classes.Any(c => c.Grade == grade && c.Name == name))
                reason = Lab2Info.ClassExists;
            else
            {
                var c = new Class() { Grade = grade, Name = name };
                db.Classes.Add(c);
                try
                {
                    db.SaveChanges();
                    reason = Lab2Info.ClassAddSuccess;
                    return c;
                }
                catch (Exception ex)
                {
                    reason = ex.InnerException.Message;
                    db.Entry(c).State = System.Data.EntityState.Detached;
                }
            }
            return null;

        }
        private string ModifyGroupCommandText(string gName, short gType, int[] sNOs,bool delete=false,bool insert=true)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("declare @GNO int;Begin Tran ");
            if (delete)
                sb.AppendFormat("delete from [Group] Where [GroupName]='{0}';", gName);
            if (insert)
            {
                sb.AppendFormat("insert into [Group]([GroupName],[type]) Values ('{0}',{1});", gName, gType);
                sb.Append("select @GNO=@@Identity;");
                foreach (var sno in sNOs)
                    sb.AppendFormat("INSERT INTO [GroupRelation]([GroupNo],[StudentNo])VALUES(@GNO,{0});", sno);
            }
            sb.Append("if @@error<>0 rollback tran else commit tran");
            return sb.ToString();

        }
        public bool ModifyGroup(GroupJS js,bool delete,bool insert, out string reason)
        {
            if (insert && !delete  && db.Groups.Any(g => g.GroupName == js.name))
                reason = Lab2Info.GroupExists;
            else if(delete && !db.Groups.Any(g => g.GroupName == js.name))
                reason =Lab2Info.GroupNotExists;
            else
            {
                try
                {
                    var i = db.Database.ExecuteSqlCommand(ModifyGroupCommandText(js.name, js.type, js.students.Select(s => (int)s.no).ToArray(),delete,insert), new object[] { });

                    reason = "操作成功";
                    return true;
                }
                catch (Exception ex)
                {
                    reason = ex.Message;
                }
            }
            return false;
        }
        private string InsertExpListCommandText(int expNo, int[] blackNos, int[] whiteNos)
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendFormat("Begin Tran Delete from [WhiteGroup] Where [ExpNo]={0};", expNo);
            sb.AppendFormat("Delete from [BlackGroup] Where [ExpNo]={0};", expNo);
            foreach (var bno in blackNos)
                sb.AppendFormat("INSERT INTO [BlackGroup]([ExpNo],[GroupNo]) VALUES ({0},{1});", expNo, bno);
            foreach (var wno in whiteNos)
                sb.AppendFormat("INSERT INTO [WhiteGroup]([ExpNo],[GroupNo]) VALUES ({0},{1});", expNo, wno);
            sb.Append("if @@error<>0 rollback tran else commit tran");
            return sb.ToString();
        }
        public bool  ModifyExpGroupList(int expNo, int[] blackNos, int[] whiteNos, out string reason)
        {
            if (db.Exps.Any(e => e.No == expNo))
            {
                try
                {
                    var i = db.Database.ExecuteSqlCommand(InsertExpListCommandText(expNo, blackNos, whiteNos), new object[] { });
                    reason = Lab2Info.ModifyExpGroupListSuccess;
                    return true;
                }
                catch (Exception ex)
                {
                    reason = ex.Message;
                }
            }
            else
                reason = Lab2Info.ExpNotExists;
            return false;

        }

        public bool DeleteClass(int no, out string reason)
        {
            if (db.Classes.Any(c => c.No == no))
            {
                var c = new Class() { No = no };
                db.Classes.Attach(c);
                db.Entry(c).State = System.Data.EntityState.Deleted;
                try
                {
                    db.SaveChanges();
                    reason = Lab2Info.ClassDeleteSuccess;
                    return true;
                }
                catch (Exception ex)
                {
                    db.Entry(c).State = System.Data.EntityState.Detached;
                    reason = ex.InnerException.Message;
                }
            }
            else
                reason = Lab2Info.ClassNotExists;
            return false;
        }
        public bool DeleteGroup(int no, out string reason)
        {
            if (db.Groups.Any(c => c.No == no))
            {
                var c = new Group() { No = no };
                db.Groups.Attach(c);
                db.Entry(c).State = System.Data.EntityState.Deleted;
                try
                {
                    db.SaveChanges();
                    reason = Lab2Info.GroupDeleteSuccess;
                    return true;
                }
                catch (Exception ex)
                {
                    db.Entry(c).State = System.Data.EntityState.Detached;
                    reason = ex.InnerException.Message;
                }
            }
            else
                reason = Lab2Info.GroupNotExists;
            return false;
        }
        public bool DeleteStudent(int no, out string reason)
        {
            if (db.Students.Any(c => c.No == no))
            {
                var c = new Student() { No = no };
                db.Students.Attach(c);
                db.Entry(c).State = System.Data.EntityState.Deleted;
                try
                {
                    db.SaveChanges();
                    reason = Lab2Info.StudentDeleteSuccess;
                    return true;
                }
                catch (Exception ex)
                {
                    db.Entry(c).State = System.Data.EntityState.Detached;
                    reason = ex.InnerException.Message;
                }
            }
            else
                reason = Lab2Info.StudentNotExists;
            return false;
        }


        public Dictionary<string, List<ClassJS>> ClassesJSGrouped()
        {
            Dictionary<string, List<ClassJS>> dic = new Dictionary<string, List<ClassJS>>();
            foreach (var grade in db.Classes.GroupBy(c => c.Grade))
            {
                dic.Add(grade.Key, new List<ClassJS>());
                foreach (var c in grade)
                    dic[grade.Key].Add(c.ToEntityJS(true));
               
            }
            return dic;
        }
        public Group[] GetGroups(bool withStu, short? type = null)
        {
            if (!withStu)
                return type == null ? db.Groups.ToArray() : db.Groups.Where(g => g.Type == (short)type).ToArray();
            else
                return type == null ? db.Groups.Include("Students").ToArray() : db.Groups.Include("Students").Where(g => g.Type == (short)type).ToArray();
        }
        public Group GetGroup(int no)
        {
            return db.Groups.Include("Students").SingleOrDefault(g => g.No == no) ;
        }
        public Group[] GetExpGroupList(int expNo, bool isBlack, short? gt, out string reason)
        {
            Group[] result = null; reason = "";
            var exp = db.Exps.Find(expNo);
            if (exp == null)
                reason = Lab2Info.ExpNotExists;
            else if (isBlack)
            {
                if (gt != null)
                    result = exp.BlackGroups.Where(g => g.Type == (short)gt).ToArray();
                else
                    result = exp.BlackGroups.ToArray();
            }
            else
            {
                if (gt != null)
                    result = exp.WhiteGroups.Where(g => g.Type == (short)gt).ToArray();
                else
                    result = exp.WhiteGroups.ToArray();
            }
            return result;
        }
        public Student[] GetStudents(Func<Student,bool> filter)
        {
            return db.Students.Where(filter).ToArray();
        }
        
        /// <summary>
        /// 现在只能修改ClassNo,StudentName
        /// </summary>
        /// <param name="uStu"></param>
        /// <param name="reason"></param>
        /// <returns></returns>
        public Student UpdateStudent(int no,Action <Student> update, out string reason)
        {
            var oStu = db.Students.Find(no);
            if (oStu == null)
                reason = Lab2Info.StudentNotExists;
            else
            {
                update(oStu);
                try
                {
                    db.SaveChanges();
                    reason = Lab2Info.UpdateSuccess;
                    return oStu;
                }
                catch (Exception ex)
                {
                    reason = ex.InnerException.Message;
                    db.Entry(oStu).Reload();
                }
            }
            return null;
        }
    }
    public static partial class Lab2Info
    {
        public const string ExpTypeDeleteSuccess = "亲,删除实验分类成功";
        public const string ExpTypeDisableSuccess = "亲,禁用实验分类成功";
        public const string ExpTypeAddSuccess = "亲,添加新的实验分类成功";
        public const string ExpValueStudentListResult = "一共{0}人上传数据";
        public const string StuExists = "已被注册的学号";
        public const string StuAddSuccess = "学生注册成功";
        public const string ClassExists = "此班级已存在";
        public const string ClassAddSuccess="添加班级成功";
        public const string GroupExists = "存在这个名字的小组";
        public const string GroupAddSuccess = "添加小组成功";
        public const string ClassNotExists = "不存在这个班级";
        public const string GroupNotExists = "不存在这个小组";
        public const string StudentNotExists = "不存在这个学生";
        public const string ClassDeleteSuccess="删除班级成功";
        public const string StudentDeleteSuccess="删学生级成功";
        public const string GroupDeleteSuccess="删除小组成功";
        public const string UpdateSuccess = "更新成功";
        public const string UpdateFail = "更新失败";
        public const string ModifyExpGroupListSuccess = "权限更改成功";
        public const string ExpValueDeleteSuccess = "亲,成功了\t你可以重新上传了";
        public const string ExpValueDeleteFail = "亲,删除失败\t刷新一下?还是不行就联系管理员吧!";
    }
   
}
