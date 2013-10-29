<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SubjectMaker.aspx.cs" Inherits="ProfileMaker" EnableViewState="false" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="asp" %>

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
            width: 82px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
    </asp:ToolkitScriptManager>
    <div>
    <table class="style1" style="margin:100px auto;">
            <tr>
                <td class="style2">
                    被试资料</td>
                <td>
                    个人资料填写</td>
            </tr>
            <tr>
                <td class="style2">
                    账号</td>
                <td>
                    <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
                        ControlToValidate="txtUsername" ErrorMessage="请输入用户名">*</asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    密码</td>
                <td>
                    <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
                   
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" 
                        ControlToValidate="txtPassword" ErrorMessage="请输入密码">*</asp:RequiredFieldValidator>
                   
                </td>
            </tr>
            <tr>
                <td class="style2">
                    姓名</td>
                <td>
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ErrorMessage="亲,告诉我你叫啥" ControlToValidate="txtName">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator1_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator1">
                    </asp:ValidatorCalloutExtender>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    电子邮箱</td>
                <td>
                    <asp:TextBox ID="txtMail" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                        ErrorMessage="邮箱还未填写" ControlToValidate="txtMail">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator2_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator2">
                    </asp:ValidatorCalloutExtender>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    QQ</td>
                <td>
                    <asp:TextBox ID="txtQQ" runat="server"></asp:TextBox>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                        ErrorMessage="QQ是一种便捷的联系方式" ControlToValidate="txtQQ" 
                        ValidationExpression="^\d{6,}$">*</asp:RegularExpressionValidator>
                    <asp:ValidatorCalloutExtender ID="RegularExpressionValidator1_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RegularExpressionValidator1">
                    </asp:ValidatorCalloutExtender>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    手机号码</td>
                <td>
                    <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                        ErrorMessage="手机号码不是11位数字吗?" ControlToValidate="txtPhone" 
                        ValidationExpression="^\d{11}$">*</asp:RegularExpressionValidator>
                    <asp:ValidatorCalloutExtender ID="RegularExpressionValidator2_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RegularExpressionValidator2">
                    </asp:ValidatorCalloutExtender>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                        ErrorMessage="亲,给我你的手机号码,保证不会骚扰你" ControlToValidate="txtPhone">*</asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    性别</td>
                <td>
                    <asp:RadioButtonList ID="RadioButtonList1" runat="server" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem>男</asp:ListItem>
                        <asp:ListItem Selected="True">女</asp:ListItem>
                    </asp:RadioButtonList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    生日</td>
                <td>
                    <asp:TextBox ID="txtbirth" runat="server"></asp:TextBox>
                    <asp:CalendarExtender ID="Calendar" runat="server" 
                        Enabled="True" TargetControlID="txtbirth" SelectedDate="1993-12-31">
                    </asp:CalendarExtender>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                        ControlToValidate="txtbirth" ErrorMessage="实验对年龄可能有要求">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator4_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator4">
                    </asp:ValidatorCalloutExtender>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style2">
                    <asp:Button ID="Button1" runat="server" Height="25px" Text="提交" Width="67px" 
                        onclick="Button1_Click" />
                    <asp:RoundedCornersExtender ID="Button1_RoundedCornersExtender" runat="server" 
                        Enabled="True" TargetControlID="Button1">
                    </asp:RoundedCornersExtender>
                </td>
                <td>
                    <asp:Label ID="Label1" runat="server" Text="请认真填写"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    <asp:HyperLink ID="HyperLink1" runat="server" Target="_self">回到主页</asp:HyperLink>
                </td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
    
    </div>
    <br />
   
    </form>
</body>
</html>
