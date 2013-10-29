﻿//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace RecruitDb
{
    using System;
    using System.Collections.Generic;
    
    public partial class Advertisement
    {
        public Advertisement()
        {
            this.Enable = true;
            this.Recruitments = new HashSet<Recruitment>();
        }
    
        public int No { get; set; }
        public System.DateTime SetDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public short FemaleRequired { get; set; }
        public short MaleRequired { get; set; }
        public string Name { get; set; }
        public string Des { get; set; }
        public short Price { get; set; }
        public int AdvertiserNo { get; set; }
        public byte[] TimeDetail { get; set; }
        public bool Enable { get; set; }
        public short ExpMins { get; set; }
    
        public virtual Advertiser Advertiser { get; set; }
        public virtual ICollection<Recruitment> Recruitments { get; set; }
    }
   public partial class Advertiser
    {
        public Advertiser()
        {
            this.Advertisements = new HashSet<Advertisement>();
            this.Recruitments = new HashSet<Recruitment>();
        }
        public int No { get; set; }
        public int Cridient { get; set; }
        public int stain { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string QQ { get; set; }
        public string Phone { get; set; }
        public int Rank { get; set; }
        public virtual ICollection<Advertisement> Advertisements { get; set; }
        public virtual ICollection<Recruitment> Recruitments { get; set; }
    } 
    public partial class Recruitment
    {
        public int No { get; set; }
        public int AdvertisementNo { get; set; }
        public int SubjectNo { get; set; }
        public int AdvertiserNo { get; set; }
        public System.DateTime SetDate { get; set; }
        public byte Stage { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<System.DateTime> ExpDate { get; set; }
        public Nullable<int> StainNo { get; set; }
        public Nullable<short> ExpTime { get; set; }
    
        public virtual Advertisement Advertisement { get; set; }
        public virtual Advertiser Advertiser { get; set; }
        public virtual Subject Subject { get; set; }
    } 
    public partial class Subject
    {
        public Subject()
        {
            this.Recruitments = new HashSet<Recruitment>();
        }
    
        public int No { get; set; }
        public int Cridient { get; set; }
        public int stain { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string QQ { get; set; }
        public string Phone { get; set; }
        public bool Female { get; set; }
        public Nullable<System.DateTime> BirthDay { get; set; }
        public int Rank { get; set; }
    
        public virtual ICollection<Recruitment> Recruitments { get; set; }
    }
}
