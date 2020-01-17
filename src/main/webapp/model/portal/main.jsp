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
    <title>APS</title>
</head>
<%@ include file="../../common/head.jspf" %>
<body>
<div id="layout"></div>
<script>
    //布局
    var layout = new dhx.Layout("layout", portalLayout);
    //侧边栏
    var sidebar = new dhx.Sidebar(null, {css: "custom-class"});
    sidebar.data.parse(portal);
    var tabbar = new dhx.Tabbar(null, tabbarConfig);

    layout.cell("sidebar_container").attach(sidebar);
    layout.cell("win_container").attach(tabbar);
</script>
<script type="text/javascript" src="<%=basePath%>model/portal/main.js"></script>
</body>
</html>

