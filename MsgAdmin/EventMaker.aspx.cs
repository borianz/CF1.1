using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using Msg;
public partial class EventMaker : System.Web.UI.Page
{
    PublicEventClient client;
    string path = "PublicEventImg/";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!User.IsInRole("MsgAdmin"))
        {
            Response.Redirect("~/LogForm.aspx");
            Response.End();
        }
        client = PublicEventClient.Get(User.Identity.Name);
        if (!Page.IsPostBack)
        {
            var r = client.Author.Role;
            if (r == (short)MsgRole.Super)
                foreach (var c in PublicEventServer.Instance.Index)
                    CatSelect.Items.Add(new ListItem(c.name, c.no.ToString()));
            else if (r == (short)MsgRole.LixueAdmin)
            {
                var c = PublicEventServer.Instance.Index.FirstOrDefault(js => js.no == (short)MsgCategoryNo.Lixue);
                CatSelect.Items.Add(new ListItem(c.name, c.no.ToString()));
                CatSelect.Enabled = false;
                CatSelect.SelectedIndex = 0;
            }
            else if (r == (short)MsgRole.Study)
            {
                var c = PublicEventServer.Instance.Index.FirstOrDefault(js => js.no == (short)MsgCategoryNo.Study);
                CatSelect.Items.Add(new ListItem(c.name, c.no.ToString()));
                CatSelect.Enabled = false;
                CatSelect.SelectedIndex = 0;
            }
            ChangeEventSelect();
        } 
       
    }
    protected void ChangeEventSelect()
    {
        EventSelect.Items.Clear();
        int no = short.Parse(CatSelect.SelectedValue);
        var events = client.Author.Role == (short)MsgRole.Super ? client.Events.Where(e => e.CategoryNo == no).Select(e => new { mtitle = e.MTitle, no = e.No }).ToArray() :
client.Events.Where(e => e.CategoryNo == no && e.AuthorNo == client.Author.No).Select(e => new { mtitle = e.MTitle, no = e.No }).ToArray();
        foreach (var e in events)
            EventSelect.Items.Add(new ListItem(e.mtitle, e.no.ToString()));
        if (EventSelect.Items.Count > 0)
        {
            FillForm(client.GetEvent(int.Parse(EventSelect.Items[0].Value)));
            updateBtn.Enabled = true;
            deleteBtn.Enabled = true;
        }
    }
    
    private static ImageCodecInfo GetEncoderInfo(String mimeType)
    {
        int j;
        ImageCodecInfo[] encoders;
        encoders = ImageCodecInfo.GetImageEncoders();
        for (j = 0; j < encoders.Length; ++j)
        {
            if (encoders[j].MimeType == mimeType)
                return encoders[j];
        }
        return null;
    }
    protected string NewImgFileName()
    { 
        var guid = Guid.NewGuid();
        return Server.UrlEncode(guid.ToString() + ".jpg");
    }
    protected void CatSelect_SelectedIndexChanged(object sender, EventArgs e)
    {
        ChangeEventSelect();
    }
    protected PublicEvent NewEvent()
    {
        var pe = new PublicEvent();
        pe.AuthorNo = client.Author.No;
        pe.Text = textInput.Text;
        pe.Title = txtTitle.Text;
        pe.UpdateTime = DateTime.Now;
        pe.MTitle = txtMTitle.Text;
        pe.AuthorName = txtAuthor.Text;
        pe.Enable = !disable.Checked;
        pe.CategoryNo = int.Parse(CatSelect.SelectedValue);
        pe.Priority = short.Parse(PrioritySelect.SelectedValue);
        pe.SetTime = DateTime.Now;
        return pe;
    }
    protected void UpdateEvent(PublicEvent pe)
    {
        pe.AuthorNo = client.Author.No;
        pe.Text = textInput.Text;
        pe.Title = txtTitle.Text;
        pe.UpdateTime = DateTime.Now;
        pe.MTitle = txtMTitle.Text;
        pe.AuthorName = txtAuthor.Text;
        pe.Enable = !disable.Checked;
        pe.CategoryNo = int.Parse(CatSelect.SelectedValue);
        pe.Priority = short.Parse(PrioritySelect.SelectedValue);
    }
    protected void FillForm(PublicEvent pe)
    {
        textInput.Text = pe.Text;
        txtTitle.Text = pe.Title;
        txtMTitle.Text = pe.MTitle;
        txtAuthor.Text = pe.AuthorName;
        disable.Checked = !pe.Enable;
        switch (pe.Priority)
        {
            case 1:
                PrioritySelect.SelectedIndex = 0;
                break;
            case 2:
                PrioritySelect.SelectedIndex = 1;
                break;
            case 0:
                PrioritySelect.SelectedIndex = 2;
                break;

        }
    }
    protected void DeleteImg(string url)
    {
        System.IO.File.Delete(Server.MapPath("~/" + url));
    }
    protected void DeleteImg(string path, string filename)
    {
        File.Delete(Server.MapPath("~/" + Path.Combine(path, filename)));
    }
    protected string SaveImg(string filename, string path, System.Drawing.Image img, long quality = 30)
    {
        var codecInfo = GetEncoderInfo("image/jpeg");
        var encodeParas = new EncoderParameters(2);
        var qp = new EncoderParameter(Encoder.Quality, quality);
        var com = new EncoderParameter(Encoder.Compression, (long)EncoderValue.CompressionRle);
        encodeParas.Param[0] = qp;
        encodeParas.Param[1] = com;
        if (!Directory.Exists(Server.MapPath("~/" + path)))
            Directory.CreateDirectory(Server.MapPath("~/"+path));
        string  url = Path.Combine(path, filename);
        img.Save(Server.MapPath("~/" + url), codecInfo, encodeParas);
        return url;
    }
   
    protected void deleteBtn_Click(object sender, EventArgs e)
    {
        int eno;
        if (!int.TryParse(EventSelect.SelectedValue, out eno))
            lblstatus.Text = "请选择删除的项目";
        else
        {
            var pe = client.GetEvent(eno);
            if (pe != null)
            {
                if (client.Author.Role != (short)MsgRole.Super && client.Author.No != pe.AuthorNo)
                    lblstatus.Text = "亲,只能删除自己的东西哦!";
                else
                {
                    if (pe.ImgUrl != null)
                        DeleteImg(pe.ImgUrl);
                    string r;
                    if (client.DeletePublicEvent(pe.No, out r))
                        ChangeEventSelect();
                    lblstatus.Text = r;
                }
            }
            else
                lblstatus.Text = "未找到此消息_001";
        }
    }
    protected void updateBtn_Click(object sender, EventArgs e)
    {
        var eno = int.Parse(EventSelect.SelectedValue);
        var pe = client.GetEvent(eno);
        if (pe != null)
        {
            if (client.Author.Role != (short)MsgRole.Super && client.Author.No != pe.AuthorNo)
            { lblstatus.Text = "亲,只能修改自己的东西哦!"; return; }
            bool refreshIndex =( pe.MTitle != txtMTitle.Text|| !pe.Enable) ;
            if (imgLoader.HasFile)
                if (pe.ImgUrl != null)
                {
                    DeleteImg(pe.ImgUrl);
                    pe.ImgUrl = SaveImg(NewImgFileName(), path, System.Drawing.Image.FromStream(imgLoader.PostedFile.InputStream, true, true));
                }
                else
                    pe.ImgUrl = SaveImg(NewImgFileName(), path, System.Drawing.Image.FromStream(imgLoader.PostedFile.InputStream, true, true));
            UpdateEvent(pe);
            string r;
            client.UpdatePublicEvent(pe, out r,refreshIndex);
            lblstatus.Text = r;
        }
        else
            lblstatus.Text = "未找到此消息_001";
    }
   
    protected void Button1_Click(object sender, EventArgs e)
    {
        var pe = NewEvent();
        if (client.Events.Any (p=>p.MTitle==pe.MTitle && p.Title==pe.Title && p.AuthorName==p.AuthorName )) 
        {
            lblstatus.Text = "亲,已经发布这个消息了,你应该点击修改";
            return;
        }
        string filename = NewImgFileName();
        if (imgLoader.HasFile)
        {
            System.Drawing.Image img = System.Drawing.Image.FromStream(imgLoader.PostedFile.InputStream, true, true);
            try
            {
                pe.ImgUrl = SaveImg(filename, path, img);
            }
            catch (Exception ex)
            {
                lblstatus.Text = "图片保存失败," + ex.Message;
                DeleteImg(path, filename);
                return;
            }
        }
        else
            pe.ImgUrl = null;
        string s;
        if (!client.AddPublicEvent(pe, out s))
            DeleteImg(path, filename);
        else
            ChangeEventSelect();
        lblstatus.Text = s;
    }
    protected void EventSelect_SelectedIndexChanged(object sender, EventArgs e)
    {
        OnSelectedEvent();
    }
    protected void OnSelectedEvent()
    {
        var pe = client.GetEvent(int.Parse(EventSelect.SelectedValue));
        if (pe != null)
        {
            FillForm(pe);
            deleteBtn.Enabled = true;
            updateBtn.Enabled = true;
        }
    }
}