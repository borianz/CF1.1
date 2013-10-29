<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LogForm.aspx.cs" Inherits="LogForm" %>

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
        }
        .style3
        {
            width: 116px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <table class="style1">
            <tr>
                <td class="style3">
                    &nbsp;</td>
                <td>
                    管理员界面登陆</td>
            </tr>
            <tr>
                <td class="style3">
                    用户名</td>
                <td>
                    <asp:TextBox ID="txtUserName" runat="server" Height="30px" Width="214px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style3">
                    密码</td>
                <td>
                    <asp:TextBox ID="txtPassWord" runat="server" Height="31px" TextMode="Password" 
                        Width="216px"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style3">
                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="实验数据管理" />
                </td>
                <td>
                    <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="公共信息管理" />
                </td>
            </tr>
            <tr>
                <td class="style2" colspan="2">
                    <asp:Label ID="Label1" runat="server"></asp:Label>
                </td>
            </tr>
        </table>
    
    </div>
    </form>
</body>
</html>
