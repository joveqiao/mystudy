//验证码更换函数，登录页有使用
function changeVerifyCode(){
        var imgSrc = $("#verifyCodeImg"); 
        var src = imgSrc.attr("src"); 
        imgSrc.attr("src", chgUrl(src));
}

//时间戳     
//为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳     
function chgUrl(url) { 
    var timestamp = (new Date()).valueOf(); 
    url = url.substring(0, 17); 
    if ((url.indexOf("&") >= 0)) { 
        url = url + "×tamp=" + timestamp; 
    } else { 
        url = url + "?timestamp=" + timestamp; 
    } 
    return url; 
} 

//为每个input 添加转换特效(必须放入input为默认class，提供.inputfocus )
//$(function(){
//	$("input").focus(function(){
//		$(this).removeClass("input");
//	    $(this).addClass("inputfocus");
//	}).blur(function(){
//	    $(this).removeClass("inputfocus");
//	    $(this).addClass("input");
//	});
//});