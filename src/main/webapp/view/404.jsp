<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>时光博客 404 页面不存在</title>
    <link rel="shortcut icon" href="<%=request.getContextPath() %>/resources/img/favicon.ico" />
    <style type="text/css">
        *{margin: 0px auto;padding: 0px;}
        html, body {margin: 0px auto;padding: 0px;height: 100%;font-size: 12px;overflow: hidden;font-family: "微软雅黑","宋体";_font-family: "宋体","微软雅黑";background: #FFFFFF;}
        ul, li {margin: 0;padding: 0;}
        a {text-decoration: none;}
            a:hover {text-decoration: none;}
        img {border: 0px;}
        body{background-color:#DAECEE;}
	    #error{left:50%;margin-left:-303px;margin-top:-303px;position:absolute;top:50%;}
	    .viito_top{width:100%;min-width:980px;height:56px;background:#18587e;position:fixed;top:0;z-index:999;}
	    .viito_top .viito_title{width:980px;height:56px;margin:auto;}
	    .viito_top .welcome{width:200px;height:56px;line-height:56px;float:left;}
	    .viito_top .return{width:260px;height:56px;line-height:56px;float:right;}
	    .viito_top .return ul{width:260px;height:56px;}
	    .viito_top .return ul li{width:80px;height:56px;float:left;text-align:center;list-style:none;}
	    .viito_top .return ul li a{color:#a3bccb;}
	    .viito_top .welcome span{display:block;font-size:12px;color:#a3bccb;line-height:56px;padding-left:20px;}
	    .footer{width:100%;height:56px;background:#4d95c0;line-height:56px;position:fixed;bottom:0;}
	    .footer .footer1{width:980px;height:56px;margin:auto;}
	    .footer .footer1 ul{width:980px;height:56px;}
	    .footer .footer1 ul li{list-style:none;float:left;padding-left:20px;font-size:12px;color:#1f3c4d;}
	    .footer .footer1 ul li a{color:#1f3c4d;}
    </style>
</head>
<body>
    <div class="viito_top">
        <div class="viito_title">
            <div class="welcome"><span>时光博客 404 页面不存在</span></div>
            <div class="return">
                <ul>
                    <li><a href="">网站首页</a></li>
                    <li><a href="">帮助中心</a></li>
                    <li><a href="">新浪微博</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div id="error">
        <a href="/">
            <img src="<%=request.getContextPath() %>/resources/img/404.png" alt="404 page not found" id="error404-image">
        </a>
    </div>
    <div class="footer">
        <div class="footer1">
            <ul>
                <li><a href="">关于我们</a></li>
                <li><a href="">加盟条件</a></li>
                <li><a href="">官方微博</a></li>
                <li><a href="">客户服务</a></li>
                <li><a href="">商务合作</a></li>
                <li><a href="">隐私政策</a></li>
                <li>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;时光博客 版权所有 Copyright@jove 2013  蜀ICP备XXXXXXX号-1</li>
            </ul>
        </div>
    </div>
</body>
</html>