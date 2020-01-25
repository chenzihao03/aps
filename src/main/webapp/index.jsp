<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="common/css/index.css">
</head>
<body>
<div class="htmleaf-container">
    <div class="wrapper">
        <div class="container">
            <div class="timg">
                <h1 class="h1">欢迎</h1>
                </br>
                <div class="times"></div>
            </div>

            <form class="form">
                <input type="text" placeholder="用户名">
                <input type="password" placeholder="密码">
                <button type="submit" id="login-button">登录</button>
            </form>
        </div>

        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>

<script src="common/codebase/jquery-2.1.1.min.js" type="text/javascript"></script>
<script>
    $('#login-button').click(function (event) {
        event.preventDefault();
        $('form').fadeOut(1);
        $('.wrapper').addClass('form-success');
        $('.timg').addClass('form-success');
        $('.times').addClass('form-success');
        setTimeout("portal()", 2000);
    });

    function portal() {
        window.open("<%=basePath%>portal", "_self");
    }


    $(function () {
        setInterval("getTime();", 1000); //每隔一秒运行一次
    })

    $(window).load(getTime());

    //取得系统当前时间
    function getTime() {
        var myDate = new Date();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
        $(".times").html(hours + ":" + minutes); //将值赋给div
    }
</script>
</body>
</html>
