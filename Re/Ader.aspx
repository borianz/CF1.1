<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Ader.aspx.cs" Inherits="protected_Ader" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server" AllowCustomErrorsRedirect="False">
    </asp:ToolkitScriptManager>
    <a href="AdMaker.aspx" target="_self">发布招募信息</a>
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
        AutoGenerateColumns="False" BackColor="White" BorderColor="#DEDFDE" 
        BorderStyle="None" BorderWidth="1px" CellPadding="4" DataKeyNames="No" 
        DataSourceID="MyAdvertisements" ForeColor="Black" GridLines="Vertical" 
        PageSize="5" AllowSorting="True" 
        onselectedindexchanged="GridView1_SelectedIndexChanged">
        <AlternatingRowStyle BackColor="White" />
        <Columns>
            <asp:CommandField ShowSelectButton="True" />
            <asp:BoundField DataField="No" HeaderText="编号" InsertVisible="False" 
                ReadOnly="True" SortExpression="No" />
            <asp:BoundField DataField="Name" HeaderText="实验名称" SortExpression="Name" />
            <asp:BoundField DataField="SetDate" HeaderText="发布日期" 
                SortExpression="SetDate" />
        </Columns>
        <FooterStyle BackColor="#CCCC99" />
        <HeaderStyle BackColor="#6B696B" Font-Bold="True" ForeColor="White" />
        <PagerStyle BackColor="#F7F7DE" ForeColor="Black" HorizontalAlign="Right" />
        <RowStyle BackColor="#F7F7DE" />
        <SelectedRowStyle BackColor="#CE5D5A" Font-Bold="True" ForeColor="White" />
        <SortedAscendingCellStyle BackColor="#FBFBF2" />
        <SortedAscendingHeaderStyle BackColor="#848384" />
        <SortedDescendingCellStyle BackColor="#EAEAD3" />
        <SortedDescendingHeaderStyle BackColor="#575357" />
    </asp:GridView>

    <asp:SqlDataSource ID="MyAdvertisements" runat="server" 
        ConnectionString="<%$ ConnectionStrings:RecruitConnectionString %>" 
        SelectCommand="SELECT [No], [Name], [SetDate] FROM [Advertisement] WHERE ([AdvertiserNo] = @AdvertiserNo) ORDER BY [SetDate] DESC">
        <SelectParameters>
            <asp:Parameter DefaultValue="0" Name="AdvertiserNo" Type="Int32" />
        </SelectParameters>
    </asp:SqlDataSource>
    <asp:Button ID="btnDeleteAd" runat="server" Text="删除信息" onclick="Button1_Click" 
        Visible="False" />
    <br />
    <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" 
        DataSourceID="Recruitments" AllowPaging="True" BackColor="White" 
        BorderColor="#CC9966" BorderStyle="None" BorderWidth="1px" CellPadding="4" 
        onselectedindexchanged="GridView2_SelectedIndexChanged" 
        DataKeyNames="No,Stage">
        <Columns>
            <asp:CommandField ShowSelectButton="True" />
            <asp:BoundField DataField="Name" HeaderText="姓名" 
                SortExpression="Name" />
            <asp:BoundField DataField="QQ" HeaderText="QQ" SortExpression="QQ" />
            <asp:BoundField DataField="Phone" HeaderText="电话" SortExpression="Phone" />
             <asp:TemplateField HeaderText="性别">
           <ItemTemplate >
           <p> <%# GetGender(Eval("Female")) %>
           </p></ItemTemplate></asp:TemplateField>
            <asp:TemplateField HeaderText="申请阶段">
           <ItemTemplate >
           <p>
           <%# StageString(Eval("Stage")) %>
           </p></ItemTemplate></asp:TemplateField>
        </Columns>
        
        <FooterStyle BackColor="#FFFFCC" ForeColor="#330099" />
        <HeaderStyle BackColor="#990000" Font-Bold="True" ForeColor="#FFFFCC" />
        <PagerStyle BackColor="#FFFFCC" ForeColor="#330099" HorizontalAlign="Center" />
        <RowStyle BackColor="White" ForeColor="#330099" />
        <SelectedRowStyle BackColor="#FFCC66" Font-Bold="True" ForeColor="#663399" />
        <SortedAscendingCellStyle BackColor="#FEFCEB" />
        <SortedAscendingHeaderStyle BackColor="#AF0101" />
        <SortedDescendingCellStyle BackColor="#F6F0C0" />
        <SortedDescendingHeaderStyle BackColor="#7E0000" />
        
    </asp:GridView>
    <asp:SqlDataSource ID="Recruitments" runat="server" 
        ConnectionString="<%$ ConnectionStrings:RecruitConnectionString %>" 
         
        SelectCommand="SELECT dbo.Subject.Name, dbo.Subject.QQ, dbo.Subject.Phone, dbo.Subject.Female, dbo.Recruitment.Stage,dbo.Recruitment.No FROM dbo.Subject INNER JOIN dbo.Recruitment ON dbo.Subject.No = dbo.Recruitment.SubjectNo WHERE (dbo.Recruitment.AdvertisementNo = @AdNo)">
        <SelectParameters>
            <asp:ControlParameter ControlID="GridView1" Name="AdNo" 
                PropertyName="SelectedDataKey.Values[&quot;No&quot;]" />
        </SelectParameters>
    </asp:SqlDataSource>
    <br />
    <asp:Panel ID="PanelAorD" runat="server" Visible="false">
<asp:Button ID="btnAccept" runat="server" Text="同意申请" onclick="btnAccept_Click" />
    <asp:Button ID="btnDeny" runat="server" Text="拒绝申请" onclick="btnDeny_Click" />
    </asp:Panel>
 <asp:Panel ID="PanelCorC" runat="server" Visible="false">
  <asp:TextBox ID="txtRealtime" runat="server" ValidationGroup="c"></asp:TextBox>
        <asp:TextBoxWatermarkExtender ID="txtRealtime_TextBoxWatermarkExtender" 
            runat="server" Enabled="True" TargetControlID="txtRealtime" 
            WatermarkText="实验实际时间(分钟)">
        </asp:TextBoxWatermarkExtender>
        <asp:Button ID="btnCompelte" runat="server" Text="完成预约"  
         onclick="btnCompelte_Click" ValidationGroup="c" 
          />
     <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
         ControlToValidate="txtRealtime" ErrorMessage="请输入实际实验时间(分钟)" 
         ValidationGroup="c">*</asp:RequiredFieldValidator>
     <br />
    <asp:Button ID="btnCancel" runat="server" Text="取消预约" onclick="btnCancel_Click" 
         /><asp:CheckBox ID="cbAppend" runat="server" Checked="True" Text="在招募信息中增加1个名额" />
        </asp:Panel>
        
       
    <asp:Label ID="Label1" runat="server"></asp:Label>
    </form>
</body>
</html>
