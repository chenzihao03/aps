var apsWinConfig = {
    "rows": [{
        "id": "toolbar_container",
        "height": "auto"
    }, {
        "id": "header_container",
        "gravity": true,
        "height": "auto"
    }, {
        "id": "detail_container",
        "gravity": true,
        "height": "auto"
    }]
};
var apsScheduleGrid = {
    "columns": [{
        "width": 30,
        "id": "rowNum",
        "header": [{
            "text": ""
        }],
        "hidden1": true
    }, {
        "width": 150,
        "id": "logId",
        "header": [{
            "text": "登录用户"
        }]
    }, {
        "width": 150,
        "id": "logName",
        "header": [{
            "text": "用户名称"
        }]
    }, {
        "width": 150,
        "id": "createUser",
        "header": [{
            "text": "创建人"
        }]
    }, {
        "width": 150,
        "id": "createDate",
        "header": [{
            "text": "创建日期"
        }],
        "type": "date",
        "dateFormat": "%Y-%m-%d"
    }, {
        "id": "id",
        "header": [{
            "text": "主键Id"
        }],
        "hidden": true
    }],
    "editing": true,
    "columnsAutoWidth": true,
    "selection": "row",
    "autoEmptyRow": true
};

var apsScheduleHeaderGridConfig = {
    "columns": [{
        "width": 150,
        "id": "projectNo",
        "header": [{
            "text": "项目号"
        }]
    }, {
        "width": 150,
        "id": "orderNo",
        "header": [{
            "text": "订单号"
        }]
    }, {
        "width": 150,
        "id": "itemNo",
        "header": [{
            "text": "物料号"
        }]
    }, {
        "width": 150,
        "id": "itemDesc",
        "header": [{
            "text": "物料说明"
        }]
    }, {
        "width": 150,
        "id": "departmentCode",
        "header": [{
            "text": "部门编码"
        }]
    }, {
        "width": 150,
        "id": "departmentName",
        "header": [{
            "text": "部门名称"
        }]
    }, {
        "width": 200,
        "id": "scheduledStartDate",
        "header": [{
            "text": "开始时间"
        }],
        "type": "date"
    }, {
        "width": 200,
        "id": "scheduledDueDate",
        "header": [{
            "text": "结束时间"
        }],
        "type": "date"
    }, {
        "width": 150,
        "id": "quantityPlanned",
        "header": [{
            "text": "计划数量"
        }],
        "type": "number"
    }, {
        "width": 150,
        "id": "createUser",
        "header": [{
            "text": "创建人"
        }]
    }, {
        "width": 200,
        "id": "createDate",
        "header": [{
            "text": "创建日期"
        }],
        "type": "date"
    }, {
        "id": "id",
        "header": [{
            "text": "主键Id"
        }],
        "hidden": true
    }],
    "editing": true,
    "columnsAutoWidth": true,
    "selection": "row",
    "autoEmptyRow": true
};

var apsScheduleToolbar = [{
    "type": "input",
    "id": "gridFitter",
    "value": "",
    "placeholder": "文本输入框",
    "icon": "dxi dxi-magnify"
}, {
    "id": "lock",
    "type": "button",
    "value": "锁定",
    "circle": true,
    "icon": "mdi mdi-sort-variant-lock"
}, {
    "id": "unLock",
    "type": "button",
    "value": "解锁",
    "circle": true,
    "icon": "mdi mdi-sort-variant-lock-open"
}, {
    "id": "APS",
    "type": "button",
    "value": "作业排程",
    "circle": true,
    "icon": "mdi mdi-square-edit-outline"
}, {
    "id": "issue",
    "type": "button",
    "value": "任务发出",
    "circle": true,
    "icon": "mdi mdi-send"
}, {
    "id": "recovery",
    "type": "button",
    "value": "回收",
    "circle": true,
    "icon": "mdi mdi-trash-can"
}, {
    "id": "findConfirm",
    "type": "button",
    "value": "可生产确认",
    "circle": true,
    "icon": "mdi mdi-send-check"
}, {
    "id": "canle",
    "type": "button",
    "value": "可生产取消",
    "circle": true,
    "icon": "mdi mdi-trash-can"
}, {
    "type": "spacer"
}, {
    "id": "apsSchedule",
    "type": "button",
    "value": "关闭",
    "circle": true,
    "icon": "mdi mdi-window-close"
}];

var apsReportToolbarConfig = [{
    "type": "input",
    "value": "",
    "placeholder": "文本输入框",
    "icon": "dxi dxi-magnify"
}, {
    "id": "lock",
    "type": "button",
    "value": "锁定",
    "circle": true,
    "icon": "mdi mdi-sort-variant-lock"
}, {
    "id": "unLock",
    "type": "button",
    "value": "解锁",
    "circle": true,
    "icon": "mdi mdi-sort-variant-lock-open"
}, {
    "id": "APS",
    "type": "button",
    "value": "作业排程",
    "circle": true,
    "icon": "mdi mdi-square-edit-outline"
}, {
    "id": "issue",
    "type": "button",
    "value": "任务发出",
    "circle": true,
    "icon": "mdi mdi-send"
}, {
    "id": "recovery",
    "type": "button",
    "value": "回收",
    "circle": true,
    "icon": "mdi mdi-trash-can"
}, {
    "id": "findConfirm",
    "type": "button",
    "value": "可生产确认",
    "circle": true,
    "icon": "mdi mdi-send-check"
}, {
    "id": "canle",
    "type": "button",
    "value": "可生产取消",
    "circle": true,
    "icon": "mdi mdi-trash-can"
}, {
    "type": "spacer"
}];
