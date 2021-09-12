<!--Lazy Load for Google AdSense Ad units-->
<!--Replace this -->
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>



<!--Method 1. onload event -->
<!--replace by this -->

<!--noptimize-->
<script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
<!--/noptimize-->


<!--Method 2. onscroll event-->
<!--replace by this -->

<script type='text/javascript'>
//<![CDATA[
var la=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===la||0!=document.body.scrollTop&&!1===la)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),la=!0)},!0);
//]]>
</script>