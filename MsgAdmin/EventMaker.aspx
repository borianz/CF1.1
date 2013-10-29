<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EventMaker.aspx.cs" Inherits="EventMaker" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>公共信息管理系统</title>
    <style type="text/css">
        .style1
        {
            width: 100%;
            margin:0px auto 0px auto;
        }
        .style2
        {
            width: 107px;
        }
        #Button1
        {
            width: 74px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <table class="style1">
            <tr>
                <td class="style2">
                    选择分类</td>
                <td>
                    <asp:DropDownList ID="CatSelect" runat="server" Height="21px" Width="154px" 
                        DataMember="name" onselectedindexchanged="CatSelect_SelectedIndexChanged" 
                        AutoPostBack="True">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    选择文章</td>
                <td>
                    <asp:DropDownList ID="EventSelect" runat="server" Height="16px" Width="317px" 
                        AutoPostBack="True" 
                        onselectedindexchanged="EventSelect_SelectedIndexChanged">
                    </asp:DropDownList>
                    <input onclick="clear()" type="button" value="新建" /></td>
            </tr>
            <tr>
                <td class="style2">
                    标题</td>
                <td>
                    <asp:TextBox ID="txtTitle" runat="server" ClientIDMode="Static" Width="387px" 
                        MaxLength="20" Height="20px"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="txtTitle" ErrorMessage="请输入标题"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    小标题</td>
                <td>
                    <asp:TextBox ID="txtMTitle" runat="server" ClientIDMode="Static" MaxLength="10"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                        ControlToValidate="txtMTitle" ErrorMessage="请输入小标题"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    作者昵称</td>
                <td>
                    <asp:TextBox ID="txtAuthor" runat="server" ClientIDMode="Static" MaxLength="10"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                        ControlToValidate="txtAuthor" ErrorMessage="请输入作者"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    文章内容</td>
                <td>
                    <asp:TextBox ID="textInput" runat="server" ClientIDMode="Static" Columns="120" 
                        Height="366px" Rows="80" TextMode="MultiLine" Width="736px">
</asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    背景图片</td>
                <td>
                    <asp:FileUpload ID="imgLoader" runat="server" ClientIDMode="Static" />
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                        ControlToValidate="textInput" ErrorMessage="请输入文章内容"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    <asp:Button ID="updateBtn" runat="server" Height="23px" Text="保存修改" 
                        Width="85px" Enabled="False" onclick="updateBtn_Click" />
                </td>
                <td>排序:
                    <asp:DropDownList ID="PrioritySelect" runat="server">
                        <asp:ListItem Value="1">普通</asp:ListItem>
                        <asp:ListItem Value="2">重要</asp:ListItem>
                        <asp:ListItem Value="0">不重要</asp:ListItem>
                    </asp:DropDownList>
                    <asp:CheckBox ID="disable" runat="server" Text="暂时隐藏" />
                </td>
            </tr>
            <tr>
                <td class="style2">
                    <asp:Button ID="addBtn" runat="server" Height="25px" Text="确定发布" Width="86px" 
                      onclick="Button1_Click" />
                </td>
                <td>
                    <asp:Label ID="lblstatus" runat="server" Text="填写完成后点击提交"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    <asp:Button ID="deleteBtn" runat="server" ClientIDMode="Static" Height="24px" 
                        Text="删除信息" Width="82px" Enabled="False" CausesValidation="False" onclick="deleteBtn_Click" />
                </td>
                <td>
                    一旦删除不能恢复,请谨慎</td>
            </tr>
            <tr>
                <td class="style2">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
    
    </div>
    </form>
    <script type="text/javascript">
        function clear() {
            document.getElementById('txtAuthor').value = '';
            document.getElementById('textInput').value = '';
            document.getElementById('txtMTitle').value = '';
            document.getElementById('txtTitle').value = '';
        }
    </script>
</body>
</html>
