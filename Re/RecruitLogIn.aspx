<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RecruitLogIn.aspx.cs" Inherits="RecruitLogIn" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>请登录</title>
    <style type="text/css">
        .box
        {
            margin:0 auto;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div style=" margin:100px auto;">
        <asp:Login ID="Login1" runat="server" 
            DestinationPageUrl="Ader.aspx" DisplayRememberMe="False" 
            BackColor="#EFF3FB" BorderColor="#B5C7DE" BorderPadding="4" BorderStyle="Solid" 
            BorderWidth="1px" Font-Names="Verdana" Font-Size="Medium" ForeColor="#333333" 
            Height="221px" Width="409px" CssClass="box" onloggedin="Login1_LoggedIn" 
            ViewStateMode="Disabled">
            <InstructionTextStyle Font-Italic="True" ForeColor="Black" />
            <LoginButtonStyle BackColor="White" BorderColor="#507CD1" BorderStyle="Solid" 
                BorderWidth="1px" Font-Names="Verdana" Font-Size="1.2em" ForeColor="#284E98" />
            <TextBoxStyle Font-Size="1.2em" />
            <TitleTextStyle BackColor="#507CD1" Font-Bold="True" Font-Size="1.5em" 
                ForeColor="White" />
        
        </asp:Login>
    </div>
    </form>
</body>
</html>
