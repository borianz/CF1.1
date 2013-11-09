<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AccountRegister.aspx.cs" Inherits="MsgAdmin_AccountRegister" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .style1
        {
            width: 100%;
        }
        .style2
        {
            width: 67px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="style1">
            <tr>
                <td class="style2">
                    学号</td>
                <td>
                    <asp:TextBox ID="txtUserName" runat="server" Width="173px"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="txtUserName" ErrorMessage="学号不能为空">*</asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                        ControlToValidate="txtUserName" ErrorMessage="学号为11位" 
                        ValidationExpression="\d{11}">*</asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    密码</td>
                <td>
                    <asp:TextBox ID="txtPassword" runat="server" Height="19px" Width="172px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    姓名</td>
                <td>
                    <asp:TextBox ID="txtRealName" runat="server" Height="16px" Width="172px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    年级</td>
                <td>
                    <asp:TextBox ID="txtGradeNumber" runat="server" Height="16px"  
                        Width="47px"></asp:TextBox>
                    <asp:DropDownList ID="txtClassSelect" runat="server">
                        <asp:ListItem>师范</asp:ListItem>
                        <asp:ListItem>基础</asp:ListItem>
                        <asp:ListItem>应用</asp:ListItem>
                    </asp:DropDownList>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                        ControlToValidate="txtGradeNumber" ErrorMessage="请输入两位年级" 
                        ValidationExpression="\d{2}">*</asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    &nbsp;</td>
                <td>
                    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    &nbsp;</td>
                <td>
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="账号注册" />
                    <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="发言限权" />
                    <asp:Button ID="Button3" runat="server" onclick="Button3_Click" Text="删除用户" />
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
