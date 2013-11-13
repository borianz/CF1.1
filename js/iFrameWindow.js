/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-6
 * Time: 上午9:57
 * To change this template use File | Settings | File Templates.
 */
function modalWindow(contents) {
    // Create a reference to self
    var that = this;

    // Make the contents object hidden but rendered so I can measure it's size
    contents.style.position = "absolute";
    contents.style.visibility = "hidden";
    contents.style.display = "block";

    // Get the size of the contents div
    this.width = contents.offsetWidth;
    this.height = contents.offsetHeight;

    // First create a semi-transparent input blocker to cover the page
    var iBlockr = document.createElement("div");
    iBlockr.style.position = "absolute";
    iBlockr.style.top = "0px"; iBlockr.style.left = "0px";
    iBlockr.style.backgroundColor = "#000";
    iBlockr.style.zIndex = 1000;
    setOpacity(iBlockr, 0.5); // Make it semi-transparent

    // get the size of the document and window and use it to size the input blocker
    var windowGeometry = getWindowGeometry();
    iBlockr.style.width = windowGeometry.bodyWidth + "px";
    iBlockr.style.height = windowGeometry.bodyHeight + "px";

    // Create the Window shim to block select boxes and make an opaque background for the window itself
    var shim = document.createElement("iframe");
    shim.style.position = "absolute";
    shim.frameBorder = "0";
    shim.style.top = (windowGeometry.scrollY + ((windowGeometry.windowHeight - this.height) / 2)) + "px";
    shim.style.left = (windowGeometry.scrollX + ((windowGeometry.windowWidth - this.width) / 2)) + "px";
    shim.style.width = this.width + "px";
    shim.style.height = this.height + "px";
    shim.style.zIndex = 2000;
    shim.style.backgroundColor = "#FFF";

    // this function will display the window
    this.display = function () {
        // Make this window a singleton and keep a global reference
        window.currentModalWindow = that;
        // Attach the modal input blocker to the document.
        document.body.appendChild(iBlockr);
        // Attach the shim to the document.
        document.body.appendChild(shim);
        // Move the contents into position
        contents.style.position = "absolute";
        contents.style.top = shim.style.top;
        contents.style.left = shim.style.left;
        contents.style.visibility = "visible";
        contents.style.zIndex = 3000;
    }

    // This will eradicate the modal window
    this.close = function () {
        // Get rid of the input blocker and shim
        document.body.removeChild(iBlockr);
        document.body.removeChild(shim);

        // Hide the content window
        contents.style.display = "none";
       // contents.firstChild.style.display='none';
        window.currentModalWindow = null;
    }
}
function DisplayWindow(windowContentsID) {
    var contentsObj = document.getElementById(windowContentsID);
    var mW = new modalWindow(contentsObj);
    mW.display();
}
function getWindowGeometry() {
    var doc = (!document.compatMode || document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
    if (window.innerWidth) {
        // Most Browsers
        var browserWidth = window.innerWidth;
        var browserHeight = window.innerHeight;
    } else {
        // IE
        var browserWidth = doc.clientWidth;
        var browserHeight = doc.clientHeight;
    }
    var bodyWidth = Math.max(doc.scrollWidth, browserWidth);
    var bodyHeight = Math.max(doc.scrollHeight, browserHeight);

    var scrollX = (bodyWidth > browserWidth);
    var scrollY = (bodyHeight > browserHeight);

    return { windowWidth: browserWidth, windowHeight: browserHeight, bodyWidth: bodyWidth, bodyHeight: bodyHeight, scrollX: scrollX, scrollY: scrollY };

}
function setOpacity(elRef, value) {
    // value should be between 0 and 1

    // W3C browsers and IE7+
    elRef.style.opacity = value;
    // Older versions of IE
    elRef.style.filter = 'alpha(opacity=' + Math.round(value * 100) + ')';
}
function DisplayLogWindow()
{
    var iframeDiv = document.getElementById('iframeDiv')
    if(iframeDiv.content)
        iframeDiv.content.style.display='none';
    var content=document.getElementById('logDiv');
    content.style.display='block';
    iframeDiv.content = content;
    var mw=new modalWindow(iframeDiv);
    mw.display();
}
function DisplayLoadingWindow()
{
    if (!window.CanvasRenderingContext2D) {
        var h = '亲,你的浏览器OUT了';
        var p = "你需要更换浏览器才能访问网站,推荐使用<a target='_blank' href='https://www.google.com/intl/zh-CN/chrome/browser/'>chrome</a></br>" +
            '你也可以使用IE9+或者最新版本的FireFox,Safari</br>如果你热爱国产,可以使用<a target="_blank"  href="http://www.maxthon.cn/">遨游</a>';
        DisplayMsgWindow(h,p);
    }
    else if (!window.Worker || !window.indexedDB || !window.localStorage) {
        var h = '亲,你的浏览器Just SO SO';
        var p  = "为了获得更好的体验,推荐使用<a target='_blank'  href='https://www.google.com/intl/zh-CN/chrome/browser/'>chrome</a></br>" +
            '你也可以使用IE10+或者最新版本的FireFox,Safari';
        if (!window.channelMng.isLogIn) {
            p += '</br><b>要登陆吗?</b>';
            DisplayConfirmWindow(h, p, function () { DisplayLogWindow(); });
        }
        else
            DisplayMsgWindow(h, p);
     }
    else {
        var h = '亲,欢迎!';
        var p  = '提示:按<b>F11</b>进入全屏模式后按<b>F5</b>重新刷新界面,体验Web App的魅力!';
        if(!window.channelMng.isLogIn){
            p+='</br></br><b>要登陆吗?</b>';
            DisplayConfirmWindow(h,p,function(){DisplayLogWindow();});
        }
       else if(!window.localStorage.concealLoadingWindow)
            DisplayMsgWindow(h,p);
        window.localStorage.concealLoadingWindow=true;
    }
}
function CloseLoadingWindow() {
    if (window.currentModalWindow)
        window.currentModalWindow.close();
}
function DisplayMsgWindow(title,msg)
{
    var iframeDiv = document.getElementById('iframeDiv')
    if(iframeDiv.content)
        iframeDiv.content.style.display='none';
    var content=document.getElementById('msgDiv');
    content.style.display='block';
    document.getElementById('msgTitle').textContent=title;
    document.getElementById('msgContent').innerHTML=msg;
    document.getElementById('confirm').style.display="none";
    document.getElementById('cancel').style.display="none";
    document.getElementById('close').style.display="inline";
    iframeDiv.content = content;
    var mw=new modalWindow(iframeDiv);
    mw.display();
}
function DisplayConfirmWindow(title,msg,confirmFun,userContext)
{
    var iframeDiv = document.getElementById('iframeDiv')
    if(iframeDiv.content)
        iframeDiv.content.style.display='none';
    var content=document.getElementById('msgDiv');
    content.style.display='block';
    document.getElementById('msgTitle').textContent=title;
    document.getElementById('msgContent').innerHTML=msg;
    var c= document.getElementById('confirm');
    c.style.display = "inline";
    c.userContext=userContext;
    c.onclick =function(){window.currentModalWindow.close();confirmFun(this.userContext);};
    document.getElementById('cancel').style.display="inline";
    document.getElementById('close').style.display="none";
    iframeDiv.content = content;
    var mw=new modalWindow(iframeDiv);
    mw.display();
}
