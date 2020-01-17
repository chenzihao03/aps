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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>404</title>
    <meta name="renderer" content="webkit">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "微软雅黑";
        }

        body, html {
            width: 100%;
            height: 100%;
        }

        img {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .container {
            max-width: 90%;
            margin: 0 auto;
            padding: 80px 0px;
        }

        .bg {
            display: block;
            max-width: 100%;
            margin: 0px auto;
        }

        .btn {
            width: 400px;
            margin: 0 auto;
            max-width: 100%;
            margin-top: 40px;
        }

        .btn a {
            float: left;
            text-decoration: none;
            width: 46.5%;
            border: 1px solid #5298ff;
            background: #5298ff;
            color: #FFF;
            display: block;
            height: 46px;
            line-height: 44px;
            text-align: center;
            font-size: 16px;
            border-radius: 3px;
            overflow: hidden;
        }

        .btn .goindex {
            margin-right: 7%;
        }

        .btn .lx {
            border: 1px solid #d8d8d8;
            background: #ffffff;
            color: #8c8c8c;
        }

        @media screen and (max-width: 500px) {
            .btn {
                width: 85%;
            }

            .btn a {
                width: 100%;
                font-size: 15px;
                height: 42px;
                line-height: 42px;
            }

            .btn .goindex {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <img src="<%=basePath%>common/img/404.jpg" class="bg">
    <div class="btn">
        <a href="<%=basePath%>" class="goindex">回到首页</a>
        <div style="clear: both;"></div>
    </div>
</div>

</body>
</html>