<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FullVersion.aspx.cs" Inherits="GreenGrass" %>
<!DOCTYPE html>
<html>
<head id="Head1" runat="server">
    <title>实验心理学数据中心</title>
    <meta charset="UTF-8">
    <style type="text/css">
        a
        {
            color:Blue;
        }
    </style>
</head>
<body style="background-color:Black" >
<form id="form1" style="display:none; " runat="server">
<asp:ScriptManager ID="ScriptManager1" runat="server"  AllowCustomErrorsRedirect="false"  CompositeScript-ScriptMode="Release" ScriptMode="Release" EnableHistory="True" RoleService-LoadRoles="True" ViewStateMode="Enabled">
<Services >
<asp:ServiceReference Path="~/LabService.asmx" />
<asp:ServiceReference Path="~/RecruitService.asmx" />
<asp:ServiceReference Path="~/PublicEventService.asmx" />
</Services>
<Scripts>
<asp:ScriptReference Path="~/js/Animation.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/CF2.2.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/Controls2.1.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/GreenGrassUI.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/iFrameWindow.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/IndexDB.js" ScriptMode="Release" />
<asp:ScriptReference Path="~/js/ImgDB.js"  ScriptMode="Release" />
</Scripts>
</asp:ScriptManager>
</form>
<canvas style="position:absolute" id='canvas' width="600" height=600></canvas>
<div style="display:none; padding:20px;" id="iframeDiv">
    <div id='msgDiv' style="display: none">
        <h2 id='msgTitle'></h2>
        <p id='msgContent'>
        </p>
        <input  type="button" id="confirm" value="确定"/>
        <input type="button" id="cancel" onclick="window.currentModalWindow.close()" value="取消"/>
        <input type="button" id="close" onclick="window.currentModalWindow.close()"  value="知道了" />
       </div>
    <div id='logDiv' style="display:none; height:195px;">
        <h2>亲,请登录</h2>
        <table>
            <tr>
                <td style="width: 30%">用户名</td>
                <td style="width: 70%"><input placeholder="最初为11位学号" type="text" id='userName' autocomplete="on"/></td>
            </tr>
            <tr>
                <td style="width: 30%">密码</td>
                <td style="width: 70%"><input id="password" type="password" placeholder="初始密码身份证后6位" autocomplete="off" /></td>
            </tr>
            <tr>
                <td><input id="btnLog" type="button" value="登陆" onclick="window.channelMng.logIn()" /></td>
                <td><input type="button" onclick="window.currentModalWindow.close()"  value="取消" /></td>
            </tr>
        </table>
        <p id='logStatus' style="color:gray;font-weight:lighter;  display:inline">初始密码为身份证后6位</p>
       
    </div>
</div>
<script type="text/javascript">
    window.channelMng.isLogIn = Sys.Services.AuthenticationService.get_isLoggedIn();
    window.backImg = new Image();
    window.backImg.src = 'img/GreenGrass.jpg';
    window.backImg.onload = function () {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        fullScreen(canvas);
        InitBackUI(window.backImg);
        Init();
        GetImgdataIndexedBD(); 
        if (!window.channelMng.isLogIn) DisplayLoadingWindow();
    };
    function fullScreen() {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
           
        }
    }
  </script>
</body>
</html>
