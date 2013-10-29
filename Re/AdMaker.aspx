<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AdMaker.aspx.cs" Inherits="AdMaker" EnableViewState="true"  %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

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
            text-align:left;
            width:70px;
        }
        input
        {
            font-size:larger;
            font-weight:bolder;
           
         }
        .wm
        {
            font-size:smaller;
            font-weight:lighter;
            font-style:italic;
            color:Gray;
        }
      
     
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server"/>
    <div>
    
    </div>
    <table class="style1">
            <tr>
                <td colspan="2" style="text-align:center">
                    被试招募信息发布</td>
            </tr>
            <tr>
                <td class="style2">
                    实验名称</td>
                <td class="style7">
                    <asp:TextBox ID="txtADName" runat="server" Height="23px" Width="399px" 
                        ViewStateMode="Disabled"></asp:TextBox>
                    <asp:TextBoxWatermarkExtender ID="txtADName_TextBoxWatermarkExtender" 
                        runat="server" Enabled="True" TargetControlID="txtADName" 
                        WatermarkCssClass="wm" WatermarkText="实验名称请控制在20字内"/>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="txtADName" ErrorMessage="亲,实验叫什么呢" 
                        EnableViewState="False">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator1_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator1" 
                        ViewStateMode="Disabled"/>
                    <asp:CustomValidator ID="CustomValidator1" runat="server" 
                        ClientValidationFunction="validateName" ControlToValidate="txtADName" 
                        ErrorMessage="亲,名字不要太长或不合规范">*</asp:CustomValidator>
                        <asp:ValidatorCalloutExtender ID="CustomValidator1_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="CustomValidator1"/>

                </td>
            </tr>
                        <script type="text/javascript">
                            function validateName(s, a) {
                                var str = a.Value;
                                if (str.length > 20) {
                                    a.IsValid = false;
                                    s.errormessage = "亲,名字太长了";
                                }
                                else if (str.match(/[^\w\u4E00-\u9FA5]/g)) {
                                    a.IsValid = false;
                                    s.errormessage = "亲,实验名称不要有奇怪的字符";
                                }
                            }</script>
            <tr>
                <td class="style2">
                    所需人数</td>
                <td class="style7"><p style="width: 372px">
                    <asp:TextBox ID="maleNum" runat="server" Width="117px">12</asp:TextBox>
                    男<asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                        ControlToValidate="maleNum" ErrorMessage="如果不需要男生,请填写0">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator2_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" PopupPosition="BottomLeft" 
                        TargetControlID="RequiredFieldValidator2"/>
                         <asp:RangeValidator ID="RangeValidator2" runat="server" 
                        ControlToValidate="maleNum" ErrorMessage="请问你需要几个壮丁?" MaximumValue="254" 
                        MinimumValue="0" Type="Integer">*</asp:RangeValidator>
                    <asp:ValidatorCalloutExtender ID="RangeValidator2_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" PopupPosition="TopLeft" 
                        TargetControlID="RangeValidator2" />
                    &nbsp; 
                    <asp:TextBox ID="femaleNum" runat="server" Width="117px">12</asp:TextBox>
                    女<asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                        ControlToValidate="femaleNum" ErrorMessage="如果不需要女生请填写0">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator3_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator3"/>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" 
                        ControlToValidate="femaleNum" ErrorMessage="亲,你需要多少女生?" 
                        ValidationExpression="^\d{1,3}$">*</asp:RegularExpressionValidator>
                    <asp:ValidatorCalloutExtender ID="RegularExpressionValidator3_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RegularExpressionValidator3" />
                    </p>
                    </td>
            </tr>
             <tr>
              <td colspan="2">
               
    <table>
    <tr>
                <td class="style2">
                    试验时间</td>
                <td class="style3">
                    <asp:RadioButtonList ID="TimeGroup" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal" AutoPostBack="True" 
                        onselectedindexchanged="TimeGroup_SelectedIndexChanged" RepeatColumns="4">
                        <asp:ListItem Selected="True">全选</asp:ListItem>
                        <asp:ListItem>仅上午</asp:ListItem>
                        <asp:ListItem>仅下午</asp:ListItem>
                        <asp:ListItem>仅晚上</asp:ListItem>
                        <asp:ListItem>非上午</asp:ListItem>
                        <asp:ListItem>非下午</asp:ListItem>
                        <asp:ListItem>非晚上</asp:ListItem>
                        <asp:ListItem Value="自定义">自定义</asp:ListItem>
                    </asp:RadioButtonList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期一</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Mon" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期二</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Tues" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期三</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Wed" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期四</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Thur" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期五</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Fri" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期六</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Sat" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td class="style2">
                    星期天</td>
                <td class="style3">
                    <asp:CheckBoxList ID="Sun" runat="server" ClientIDMode="Static" 
                        RepeatDirection="Horizontal">
                        <asp:ListItem Selected="True">上午</asp:ListItem>
                        <asp:ListItem Selected="True">下午</asp:ListItem>
                        <asp:ListItem Selected="True">晚上</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
    </table>
  
                </td>
            </tr>
            <tr>
                <td class="style2">
                    实验简介</td>
                <td class="style7">
                    <asp:TextBox ID="txtDes" runat="server" Height="87px" TextMode="MultiLine" 
                        Width="416px"></asp:TextBox>
                    <asp:TextBoxWatermarkExtender ID="txtDes_TextBoxWatermarkExtender" 
                        runat="server" Enabled="True" TargetControlID="txtDes" WatermarkCssClass="wm" 
                        WatermarkText="说说实验对被试的要求,实验大概流程,可能需要的时间,请限制在200字之内" />
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                        ControlToValidate="txtDes" ErrorMessage="我觉得什么都不写,怎么会有人来呢">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator4_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator4" />
                </td>
            </tr>
                       
            <tr>
                <td class="style2">
                    发布日期</td>
                <td class="style7">
                    <asp:TextBox ID="txtDate" runat="server" Height="24px" Width="150px"></asp:TextBox>
                    <asp:CalendarExtender ID="Calendar" runat="server" 
                        Enabled="True" TargetControlID="txtDate" TodaysDateFormat="MM-d-yyyy" 
                        ClientIDMode="Static"></asp:CalendarExtender>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
                        ControlToValidate="txtDate" ErrorMessage="你的招募信息什么时候开始">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator5_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator5"/> 
                    <asp:CustomValidator ID="CustomValidator2" runat="server" 
                        ClientValidationFunction="validateDate" ErrorMessage="过去了的时间就永远过去了" 
                        ControlToValidate="txtDate">*</asp:CustomValidator>
                        <asp:ValidatorCalloutExtender ID="CustomValidator2_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="CustomValidator2" />
                        <script type="text/javascript">
                            function validateDate(s, e) {
                                var date = Date.parse(e.Value.replace('/', '-'));
                                var now = new Date();
                                now = now.setDate(now.getDate() - 1);
                                e.IsValid = date > now;
                                
                            }
                        </script>
                </td>
            </tr>
             
            <tr>
                <td class="style2">
                    有效天数</td>
                <td class="style7">
                    <asp:TextBox ID="txtAdTimeSpan" runat="server" Height="20px" Width="128px">7</asp:TextBox>
                    <asp:SliderExtender ID="slider" runat="server" Enabled="True" 
                        Maximum="21" Minimum="1" TargetControlID="txtAdTimeSpan" 
                        TooltipText="{0}" BoundControlID="Label1" />
                    <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                </td>
            </tr>
                       
            <tr>
                <td class="style2">
                    被试费</td>
                <td class="style7">
                    <asp:TextBox ID="txtPrice" runat="server" Height="19px" Width="123px">10</asp:TextBox>
                    元/小时<asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" 
                        ControlToValidate="txtPrice" ErrorMessage="我觉得这个信息是最重要的,你觉得呢">*</asp:RequiredFieldValidator>
                    <asp:ValidatorCalloutExtender ID="RequiredFieldValidator6_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RequiredFieldValidator6" />
                    <asp:RangeValidator ID="RangeValidator3" runat="server" 
                        ControlToValidate="txtPrice" ErrorMessage="有钱能使鬼推磨!" MaximumValue="254" 
                        MinimumValue="0" Type="Integer">*</asp:RangeValidator>
                    <asp:ValidatorCalloutExtender ID="RangeValidator3_ValidatorCalloutExtender" 
                        runat="server" Enabled="True" TargetControlID="RangeValidator3" />
                </td>
            </tr>
                       
            <tr>
                <td class="style2">
                    预计时间</td>
                <td class="style7">
                    <asp:TextBox ID="txtMin" runat="server">60</asp:TextBox>
                    <asp:SliderExtender ID="txtMin_SliderExtender" runat="server" Enabled="True" 
                        Maximum="240" Minimum="10" TooltipText="{0}" BoundControlID="Label2" 
                        TargetControlID="txtMin" Steps="47" Length="350">
                    </asp:SliderExtender>
                    <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label>
                    分钟</td>
            </tr>
                       
            <tr>
                <td class="style2">
                    <asp:Button ID="Button1" runat="server" Text="提交" onclick="Button1_Click" />
                    <asp:RoundedCornersExtender ID="Button1_RoundedCornersExtender" runat="server" 
                        BorderColor="BlueViolet" Enabled="True" TargetControlID="Button1" />
                </td>
                <td class="style7">
                    <asp:Label ID="lblStatus" runat="server" Text="请认真填写后提交"></asp:Label>
                </td>
            </tr>
                       
        </table>
    
    </form>
</body>
</html>
