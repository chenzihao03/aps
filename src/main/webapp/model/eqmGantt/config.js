gantt.config.scale_unit = "month";
gantt.config.date_scale = "%Y,%F";
gantt.config.subscales = [
    {unit: "day", step: 1, date: "%j, 星期%D"}
];
this.statusFlag = "day";

//行高
gantt.config.scale_height = 50;
gantt.config.autofit = false;

//拖出屏幕自动滚动
gantt.config.autoscroll = true;
gantt.config.autoscroll_speed = 100;

//设置工作时间，周六日自动跳过
gantt.config.work_time = false;
gantt.config.correct_work_time = false;

//+号打开数据框
gantt.config.details_on_create = false;

//是否可调整进度
gantt.config.drag_progress = false;

//双击打开数据框
gantt.config.details_on_dblclick = false;

//设置持续时间单位“分钟”，“小时”，“日”，“周”，“月”，“年”
gantt.config.duration_unit = "hour";

//可以通过拖放调整任务大小
gantt.config.drag_resize = true;

//是否选中行
gantt.config.multiselect = false;

//是否只读
gantt.config.readonly = false;

//表格的行高（数据列及甘特图高度）
gantt.config.row_height = 30;

//自动调度
gantt.config.auto_scheduling = true;

//是否显示进度
gantt.config.show_progress = true;

//表格列宽自适应
gantt.config.autofit = true;

//是否可以增加连接线
gantt.config.drag_links = false;

//是否允许拖动
gantt.config.drag_move = true;

//当点击任务时，将任务放在可见的范围。
gantt.config.scroll_on_click = true;

//发生异常时，禁止弹出警告到UI界面
gantt.config.show_errors = false;

//按需渲染
gantt.config.smart_rendering = true;
gantt.config.smart_scales = true;

//触屏模式
//gantt.config.touch = "force";

//启动排序
gantt.config.sort = false;

//启用撤销
gantt.config.undo = true;

//启用键盘导航
gantt.config.keyboard_navigation = true;

//是否打开所有分支
gantt.config.open_tree_initially = false;

//自动调整比例
gantt.config.fit_tasks = true;

//垂直标记
var markerId = gantt.addMarker({
    start_date: new Date(),
    css: "today",
    text: "现在"
});

gantt.getMarker(markerId);

//左边调整颜色任务显示绿色
gantt.templates.grid_row_class = function (start, end, item) {
    return item.$level == 0 ? "gantt_project" : "";
};
//左右颜色对应
gantt.templates.task_row_class = function (start, end, item) {
    return item.$level == 0 ? "gantt_project" : "";
};
//右边调整颜色
gantt.templates.task_class = function (start, end, item) {
    if (item.dataSources == 1) {
        return "conflict";
    } else {
        return item.$level == 0 ? "gantt_project" : "";
    }
};


//放大（全屏）
gantt.attachEvent("onExpand", function () {
    var icon = gantt.toggleIcon;
    if (icon) {
        icon.className = icon.className.replace("gantt-fullscreen", "gantt-fullscreen1");
    }

});

//缩小（全屏）
gantt.attachEvent("onCollapse", function () {
    var icon = gantt.toggleIcon;
    if (icon) {
        icon.className = icon.className.replace("gantt-fullscreen1", "gantt-fullscreen");
    }
});

gantt.templates.scale_cell_class = function (date) {
    if (date.getDay() == 0 || date.getDay() == 6) {
        return "weekend";
    }
};
gantt.templates.task_cell_class = function (item, date) {
    if (date.getDay() == 0 || date.getDay() == 6) {
        return "weekend";
    }
};

//去掉网格
gantt.config.show_task_cells = true;
//任务标识
gantt.templates.task_text = function (start, end, task) {
    if (task.parent == '0') {
        return "";
    } else {
        return task.text;
    }
};

//数据列设置
gantt.config.columns = [
    {name: "orderInfo", tree: true, width: "200"},
    {name: "item", align: "center", width: "200"},
    {name: "quantity", align: "center"},
    {name: "endDate", align: "center"}
];
//设置数据列网格的宽度
gantt.config.grid_width = 800;
//鼠标悬停
gantt.templates.tooltip_text = function (start, end, task) {
    if (task.dataSources == 1) {
        return "<b>使用设备:</b> " + task.text + "<br/><b>开始时间:</b> " + task.startDate +
            "<br/><b>结束时间:</b> " + task.endDate + "<br/><b>锁定状态: 该任务为锁定任务</b> ";
    } else {
        return "<b>使用设备:</b> " + task.text + "<br/><b>开始时间:</b> " + task.startDate +
            "<br/><b>结束时间:</b> " + task.endDate;
    }
};

//子任务
function createBox(sizes, class_name) {
    var box = document.createElement('div');
    box.style.cssText = [
        "height:" + sizes.height + "px",
        "line-height:" + sizes.height + "px",
        "width:" + sizes.width + "px",
        "top:" + sizes.top + 'px',
        "left:" + sizes.left + "px",
        "position:absolute"
    ].join(";");
    box.className = class_name;
    return box;
}

//父任务中展示子任务
gantt.templates.grid_row_class = gantt.templates.task_class = function (start, end, task) {
    var css = [];
    if (gantt.hasChild(task.id)) {
        css.push("task-parent");
    }
    if (!task.$open && gantt.hasChild(task.id)) {
        css.push("task-collapsed");
    }

    return css.join(" ");
};

gantt.addTaskLayer(function show_hidden(task) {
    if (!task.$open && gantt.hasChild(task.id)) {
        var sub_height = gantt.config.row_height - 5,
            el = document.createElement('div'),
            sizes = gantt.getTaskPosition(task);

        var sub_tasks = gantt.getChildren(task.id);

        var child_el;

        for (var i = 0; i < sub_tasks.length; i++) {
            var child = gantt.getTask(sub_tasks[i]);
            var child_sizes = gantt.getTaskPosition(child);

            child_el = createBox({
                height: sub_height,
                top: sizes.top,
                left: child_sizes.left,
                width: child_sizes.width
            }, "child_preview gantt_task_line");
            child_el.innerHTML = child.text;
            el.appendChild(child_el);
        }
        return el;
    }
    return false;
});

gantt.init("gantt_here");
gantt.ajax.post({
    url:"/findOrderGantt",
    data: {
        paramName: "paramValue"
    }
}).then(function(response){
    var res = JSON.parse(response.responseText);
    var tasks = {
        data: res
    };
    gantt.parse(tasks);
});
