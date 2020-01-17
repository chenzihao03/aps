var index = 1, timeFlag = null;

function getPathRoot() {
    var pathName = window.location.pathname.substring(1);
    var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
    var path_root = window.location.protocol + '//' + window.location.host + '/' + webName + '/';
    return path_root;
}

var contextMenu = new dhx.ContextMenu(null, {css: "dhx_widget--bg_gray"});
var contextmenu_data = [
    {
        "id": "edit",
        "icon": "mdi mdi-pencil",
        "value": "修改"
    },
    {
        "id": "delete",
        "icon": "mdi mdi-delete",
        "value": "刪除"
    }
];
contextMenu.data.parse(contextmenu_data);
//主页
var homeGrid = new dhx.Grid(null, homeGridConfig);
homeGrid.data.load(getPathRoot() + "findApsResultTime");
var homeResult = new dhx.Grid(null, homeResultConfig);
homeResult.data.load(getPathRoot() + "findApsResult");
var homeToolbar = new dhx.Toolbar(null, {css: "dhx_widget--bg_gray"});
homeToolbar.data.parse(homeToolbarConfig);
var homeWin = new dhx.Layout(null, homeWinConfig);
homeWin.cell("toolbar_container").attach(homeToolbar);
homeWin.cell("grid_container").attach(homeGrid);
homeWin.cell("result_container").attach(homeResult);
tabbar.getCell("home").attach(homeWin);
homeGrid.events.on("CellClick", function (row, column, e) {
    //点击主表刷信息表记录
    homeResult.data.load(getPathRoot() + "findApsResult?timeFlag=" + row.timeFlag + "");
    timeFlag = row.timeFlag;
});

homeGrid.events.on("CellRightClick", function (row, column, e) {
    homeGrid.selection.setCell(row.id);
    e.preventDefault();
    contextMenu.showAt(e);
});


//作业排程
var apsScheduleHeaderGrid = new dhx.Grid(null, apsScheduleHeaderGridConfig);
apsScheduleHeaderGrid.data.load(getPathRoot() + "findApsHeader");
var apsScheduleHeaderGrid1 = new dhx.Grid(null, apsScheduleHeaderGridConfig);
apsScheduleHeaderGrid1.data.load(getPathRoot() + "findApsHeader");
var apsToolbar = new dhx.Toolbar(null, {css: "dhx_widget--bg_gray"});
apsToolbar.data.parse(apsScheduleToolbar);
var apsWin = new dhx.Layout(null, apsWinConfig);
apsWin.cell("toolbar_container").attach(apsToolbar);
apsWin.cell("header_container").attach(apsScheduleHeaderGrid);
apsWin.cell("detail_container").attach(apsScheduleHeaderGrid1);

//菜单设定
var tabberMenuWin = new dhx.Layout(null, tabberMenuWinConfig);
var tabberMenuToolbar = new dhx.Toolbar(null, {css: "dhx_widget--bg_gray"});
tabberMenuToolbar.data.parse(tabberMenuToolbarConfig);
var tabberMenuGrid = new dhx.Grid(null, tabberMenuGridConfig);
var MenuTree = new dhx.Tree(null, {css: "dhx_widget--bg_gray","height":"100%"});
MenuTree.data.parse(treeConfig);
tabberMenuWin.getCell("toolbar_container").attach(tabberMenuToolbar);
tabberMenuWin.getCell("tree_container").attach(MenuTree);
tabberMenuWin.getCell("grid_container").attach(tabberMenuGrid);
MenuTree.events.on("itemdblclick", function (id) {
    MenuTree.editItem(id);
});
//展开关闭侧边栏
sidebar.events.on("click", function (id, e) {
    if (id === "toggle") {
        var toggleItem = sidebar.data.getItem("toggle");
        sidebar.toggle();
        if (sidebar.config.collapsed) {
            toggleItem.icon = "mdi mdi-menu";
        } else {
            toggleItem.icon = "mdi mdi-backburger";
        }
    } else if (id == "apsSchedule") {
        tabbar.addCell({
            id: "apsSchedule",
            tab: "作业排程",
            css: "panel flex"
        }, index++);
        tabbar.setActive("apsSchedule");
        tabbar.getCell("apsSchedule").attach(apsWin);
        sidebar.disable([id, "currentButton", "edit"]);
    } else if (id == "apsReport") {
        tabbar.addCell({
            id: "apsReport",
            tab: "排程结果查询",
            css: "panel flex"
        }, index++);
        tabbar.setActive("apsReport");
        tabbar.getCell("apsReport").attach(win);
        sidebar.disable([id, "currentButton", "edit"]);
    } else if (id == "myAccount") {
        var accountWin = new dhx.Window(accountWinConfig);
        var form = new dhx.Form(null, accountFormConfig);
        accountWin.attach(form);
        accountWin.show();
    } else if (id == "apsSetting") {//排程基础设置
        var apsSetWin = new dhx.Window(apsSetWinConfig);
        var apsSetForm = new dhx.Form(null, apsSetFormConfig);
        apsSetWin.header.data.add({icon: "mdi mdi-check", id: "save"}, 2);
        apsSetWin.attach(apsSetForm);
        apsSetWin.show();
    } else if (id == "apsRegular") {//排程规则
        var apsRegular = new dhx.Window(apsRegularWinConfig);
        var apsRegularToolbar = new dhx.Toolbar(null, apsRegularToolbarConfig);
        var apsRegularGrid = new dhx.Grid(null, apsRegularGridConfig);
        apsRegularGrid.data.load(getPathRoot() + "findRegular");
        apsRegular.attach(apsRegularToolbar);
        apsRegular.attach(apsRegularGrid);
        apsRegular.show();
        apsRegular.header.data.add({icon: "mdi mdi-playlist-remove", id: "delete"}, 2);
        apsRegular.header.data.add({icon: "mdi mdi-check", id: "save"}, 2);
        apsRegularGrid.events.on("AfterEditEnd", function (value, row, column) {
            if (value == "订单紧急度") {
                row.regular = 1;
            } else if (value == "订单优先级") {
                row.regular = 2;
            } else if (value == "工序优先级") {
                row.regular = 3;
            } else if (value == "订单最早开工") {
                row.regular = 5;
            } else if (value == "订单最早完工") {
                row.regular = 6;
            } else if (value == "工序周期最长") {
                row.regular = 7;
            } else if (value == "剩余操作数最多") {
                row.regular = 8;
            } else if (value == "最短交付期") {
                row.regular = 10;
            }
        });
        apsRegular.header.events.on("click", function (id) {
            if (id === "delete") {
                var cell = apsRegularGrid.selection.getCell();
                apsRegularGrid.data.remove(cell.row.id);
            }
        });
    } else if (id == "apsSend") {//排程任务自动发出设定
        var apsSendWin = new dhx.Window(apsSendWinConfig);
        var apsSendForm = new dhx.Form(null, apsSendFormConfig);
        apsSendWin.header.data.add({icon: "mdi mdi-check", id: "save"}, 2);
        apsSendWin.attach(apsSendForm);
        apsSendWin.show();
    } else if (id == "apsConfirm") {//排程任务自动确认设定
        var apsConfirmWin = new dhx.Window(apsConfirmWinConfig);
        var apsConfirmForm = new dhx.Form(null, apsConfirmFormConfig);
        apsConfirmWin.header.data.add({icon: "mdi mdi-check", id: "save"}, 2);
        apsConfirmWin.attach(apsConfirmForm);
        apsConfirmWin.show();
    } else if (id == "menuSet") {//菜单设定
        tabbar.addCell({
            id: "menuSet",
            tab: "菜单设定",
            css: "panel flex"
        }, index++);
        tabbar.setActive("menuSet");
        tabbar.getCell("menuSet").attach(tabberMenuWin);
        sidebar.disable([id, "currentButton", "edit"]);
    }
});

apsToolbar.events.on("Click", function (id, e) {
    if (id == "apsSchedule") {
        tabbar.removeCell(id);
        sidebar.enable([id, "currentButton", "edit"]);
    }
});

tabbar.events.on("Change", function (activeId, prevId) {
    if (activeId == "home") {
    }
});

tabbar.events.on("Close", function (activeId, prevId) {
    sidebar.enable([activeId, "currentButton", "edit"]);
});

homeToolbar.events.on("Click", function (id, e) {
    if (id == "orderGantt") {
        window.open(getPathRoot() + "orderGantt");
    } else if (id == "eqmGantt") {
        window.open(getPathRoot() + "eqmGantt");
    }
});

tabberMenuToolbar.events.on("Click", function (id, e) {
    if (id == "menuSet") {
        tabbar.removeCell(id);
        sidebar.enable([id, "currentButton", "edit"]);
    }
});
