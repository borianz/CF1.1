using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Lab2
{
    public static partial class Lab2Info
    {
        public const string ExpHasData = "删除失败,这个实验已有数据上传";
        public const string ExpAddSuccess = "亲,添加实验成功";
        public const string ExpDeleteSuccess = "亲,删除实验成功";
        public const string ExpTypeNotExists = "亲,这个实验没有相应的实验类型";
        public const string SameNameExpExists = "亲,此类型已存在同名实验";
        public const string ParaValueMising = "亲,失败了\t你的数据不完整";
        public const string ParaValueInvalid = "亲,失败了\t请按要求填写你的数据";
        public const string UnKnownError = "亲,失败了\t暂时没有发现错误原因:";
        public const string ParaValueSumbmit = "亲,成功了\t嗯,可以去下载别人的数据了";
        public const string NoAuthentication = "亲,请登录\t请登录后再继续操作...";
        public const string ParaValueExists = "亲,你上传过了\t如果想修改的话,请到获取数据区域,删除后重新上传";
        public const string ParaValueNotExists = "亲,失败了\t这个实验貌似没有你的数据...";
        public const string ParaValueDelete = "亲,删除了\t现在你可以重新上传这个实验的数据!";
        public const string DataInprivate = "亲,不好意思\t这个数据现在还未开放下载";
        public const string DataPreRequired = "亲,就差你哦\t这个数据必须你先上传了,才能下载其他人的.";
        public const string DataAllowed = "亲,成功了\t请<a href=\"protected\\LabData.ashx\" onclick=\"window.currentModalWindow.close()\" target=\" blank\">点击这里</a>查看吧!";
        public const string ExpNotExists = "亲,失败了\t处于某种原因,没有找到这个实验..";
        public static string OnError(int num) { return "亲,出错了\t请刷新网页或请联系管理员<br/>错误编号" + num.ToString(); }
    }
    public enum ExpReadMode
    {
        uploadOnly=0,
        accessible=1,
        forbidden=2,  
        whiteUploadOnly=3,
        whiteForbidden=4,
        blackUploadOnly=5,
        blackAccessible=6
    }
    public enum ExpSubmitMode
    {
        accessible = 0,
        blackDeny = 1,
        whiteOnly = 2, 
        forbidden = 3
    }
    public enum LabRole
    {
        stu = 0, assist, admin
    }
    public enum ExpParamType
    {
        Single=0,
        Int=1,
        Bool=2,
        Date=3,
        Txt=4
    }
    public enum GroupType
    {
        LabReadMode=0,
        LabSubmitMode=1,
        LabReadSubmit=2

    }
    [Serializable]
    public class ExpParaJS
    {
        public int? ParaNo { get; set; }
        public Int16 ValueType { get; set; }
        public string Name { get; set; }
        public string Des { get; set; }
        public ExpPara ToEntity(bool withNo)
        {
            var ep = new ExpPara() { ValueType= this.ValueType, Name = this.Name, Description = this.Des };
            if (withNo)
                ep.No =(int)this.ParaNo;
            return ep;
        }
        
    }
    public static partial class EntityExtention
    {
        public static ExpParaJS ToEntityJS(this ExpPara ep)
        {
            if (ep == null) return null;
            return new ExpParaJS() { Des = ep.Description, ParaNo = ep.No, Name = ep.Name, ValueType = ep.ValueType };
        }
        public static ExpJS ToEntityJS(this Exp exp)
        {
            if (exp == null) return null;
            var rexp = new ExpJS()
            {
                CanRead = (exp.ReadMode != (short)ExpReadMode.forbidden),
                CanSubmit = (exp.SubmitMode != (short)ExpSubmitMode.forbidden),
                ExpNo = exp.No,
                ExpName = exp.Name,
                SubmitMode = exp.SubmitMode,
                ReadMode = exp.ReadMode,
                Des = exp.Des,
                ExpTypeNo = exp.TypeNo
            };
            foreach (var ep in exp.ExpParas)
                rexp.ExpParas.Add(ep.ToEntityJS());
            return rexp;
        }
        public static ExpTypeJS ToEntityJS(this ExpType et)
        {
            if (et == null) return null;
            var ret = new ExpTypeJS() { ExpTypeName = et.Name, ExpTypeNo = et.No, Enable = et.Enable };
            foreach (var exp in et.Exps)
                ret.Exps.Add(exp.ToEntityJS());
            return ret;
        }
        public static StudentJS ToEntityJS(this Student stu)
        {
            if (stu== null) return null;
            var js = new StudentJS() { classNo =stu.ClassNo , no = stu.No, role = stu.Role, studentName = stu.StudentName, userName = stu.UserName };
            return js;
        }
        public static GroupJS ToEntityJS(this Group g, bool withStu)
        {
            if (g == null) return null;
            var js = new GroupJS() { name = g.GroupName, no = g.No, type = g.Type };
            if (withStu)
                foreach (var stu in g.Students)
                    js.students.Add(stu.ToEntityJS());
            return js;
        }
        public static ClassJS ToEntityJS(this Class c, bool withStu)
        {
            if (c == null) return null;
            var js = new ClassJS() { grade =c.Grade, name = c.Name, no = c.No };
            if (withStu)
                foreach (var stu in c.Students)
                    js.students.Add(stu.ToEntityJS());
            return js;
        }
    }
    [Serializable]
    public class ExpJS
    {
        public int? ExpNo { get; set; }
        public string ExpName { get; set; }
        public List<ExpParaJS> ExpParas = new List<ExpParaJS>();
        public bool CanSubmit { get; set; }
        public bool CanRead { get; set; }
        public short  ReadMode { get; set; }
        public short  SubmitMode { get; set; }
        public string Des { get; set; }
        public int ExpTypeNo { get; set; }
        public Exp ToEntity(bool withNo)
        {
            var exp = new Exp();
            exp.Des = this.Des;
            exp.Name = this.ExpName;
            exp.ReadMode =(short) this.ReadMode;
            exp.SubmitMode =(short) this.SubmitMode;
            exp.TypeNo = this.ExpTypeNo;
            if (withNo)
                exp.No =(int)this.ExpNo;
            foreach (var p in this.ExpParas)
                exp.ExpParas.Add(p.ToEntity(withNo));
            return exp;
        }
        
    }
    [Serializable]
    public class ExpTypeJS
    {
        public int? ExpTypeNo { get; set; }
        public string ExpTypeName { get; set; }
        public bool Enable { get; set; }
        public List<ExpJS> Exps = new List<ExpJS>();
        public ExpType ToEntity(bool withNo)
        {
            var et = new ExpType() { Enable = this.Enable, Name = this.ExpTypeName };
            if(withNo )
                et.No=(int)this.ExpTypeNo;
            foreach (var e in this.Exps)
                et.Exps.Add (e.ToEntity (withNo));
            return et;
        }
    }
    [Serializable]
    public class ExpIndexJS
    {
        public DateTime ModifyTime { get; set; }
        public List<ExpTypeJS> ExpTypes = new List<ExpTypeJS>();
        public ExpIndexJS()
        {
            this.ModifyTime = DateTime.Now;
        }
    }
    [Serializable]
    public class StuExpJS
    {
        public string readInfo { get; set; }
        public string submitInfo { get; set; }
        public bool canRead { get; set; }
        public bool canSubmit { get; set; }
        public string seqInfo { get; set; }
        public bool hasSubmit { get; set; }
    }
    [Serializable]
    public class StudentJS
    {
        public string userName { get; set; }
        public string studentName { get; set; }
        public short role { get; set; }
        public int? classNo { get; set; }
        public int? no { get; set; }
        public int exp { get; set; }
        public string fullName { get { return studentName + ' ' + userName; } }
        public Student ToEntity(bool withNo)
        {
            var stu = new Student() {  Exp = exp, ClassNo=classNo,Role = role, StudentName = studentName, UserName = userName };
            if (withNo)
                stu.No =(int)no;
            return stu;

        }
    }
    [Serializable]
    public class GroupJS
    {
        public string name { get; set; }
        public int? no { get; set; }
        public List<StudentJS> students = new List<StudentJS>();
        public short type { get; set; }
        public Group ToEntity(bool withNo,bool withStu)
        {
            var g = new Group() { GroupName = name, Type = type };
            if (withNo)
                g.No =(int) no;
            if(withStu)
            foreach (var stu in students)
                g.Students.Add(stu.ToEntity(true));
            return g;
        }
    }
    [Serializable]
    public class ClassJS
    {
        public string name { get; set; }
        public string grade { get; set; }
        public string fullName { get { return grade + "级" + name; } }
        public int? no { get; set; }
        public List<StudentJS> students = new List<StudentJS>();
        public Class ToEntity(bool withNo)
        {
            var cla = new Class() { Grade = grade.ToString(), Name = name };
            if (withNo)
                cla.No =(int) no;
            foreach (var stu in students)
                cla.Students.Add(stu.ToEntity(true ));
            return cla;

        }

    }
}