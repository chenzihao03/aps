var portalLayout = {
    "cols": [{
        "id": "sidebar_container"
    }, {
        "id": "win_container",
        "gravity": true,
        "width": "auto"
    }]
};

var portal = [{
    "id": "toggle",
    "css": "toggle-button",
    "icon": "mdi mdi-backburger"
}, {
    "type": "customHTML",
    "id": "userInfo",
    "css": "user-info_item",
    "html": "<div class='user-info_container'><img class='user-info_avatar' src='common/img/logo.jpg'/><div class='user-info_title'></div><div class='user-info_contact'></div></div>"
}, {
    "id": "aps",
    "type": "button",
    "value": "作业排程",
    "icon": "mdi mdi-view-dashboard",
    "twoState": true,
    "active": false,
    "items": [{
        "id": "apsSchedule",
        "value": "作业排程",
        "icon": "mdi mdi-settings-transfer-outline"
    }]
}, {
    "id": "apsTask1",
    "value": "任务指派",
    "icon": "mdi mdi-truck-fast-outline",
    "twoState": true,
    "active": false,
    "items": [{
        "id": "apsTask",
        "value": "排程任务指派",
        "icon": "mdi mdi-truck-delivery-outline",
        "items": null
    }]
}, {
    "id": "reports",
    "type": "button",
    "value": "查询报表",
    "icon": "mdi mdi-poll-box-outline",
    "twoState": true,
    "active": false,
    "items": [{
        "id": "apsReport",
        "value": "排程结果查询",
        "icon": "mdi mdi-google-analytics"
    }]
}, {
    "id": "apsSet",
    "value": "排程设置",
    "icon": "mdi mdi-tune",
    "twoState": true,
    "active": false,
    "items": [{
        "id": "apsSetting",
        "value": "基础设定",
        "icon": "mdi mdi-file-settings-variant-outline"
    }, {
        "id": "apsRegular",
        "value": "规则设定",
        "icon": "mdi mdi-format-list-numbered-rtl"
    }, {
        "id": "apsSend",
        "value": "自动发出设定",
        "icon": "mdi mdi-cube-send"
    }, {
        "id": "apsConfirm",
        "value": "自动确认设定",
        "icon": "mdi mdi-clipboard-check-outline"
    }]
}, {
    "type": "spacer"
}, {
    "id": "notification",
    "value": "提醒",
    "icon": "mdi mdi-bell",
    "countColor": "primary",
    "css": "mdi-bell1",
    "twoState": true,
    "active": false
}, {
    "id": "settings",
    "value": "设置",
    "icon": "mdi mdi-settings",
    "twoState": true,
    "active": false,
    "items": [{
        "id": "general",
        "value": "其他",
        "icon": "mdi mdi-tune",
        "items": [{
            "id": "menuSet",
            "value": "菜单设定",
            "icon": "mdi mdi-format-list-checks"
        }, {
            "id": "regular123",
            "value": "排程规则",
            "icon": "mdi mdi-tune"
        }]
    }, {
        "id": "myAccount",
        "value": "我的账户",
        "icon": "mdi mdi-account-settings"
    }]
}
];

var tabbarConfig = {
    "mode": "top",
    "css": "dhx_widget--bg_gray",
    "views": [{
        "id": "home",
        "tab": "主页",
        "css": "panel flex",
        "html": "<div id='home'></div>"
    }]
};
var accountWinConfig = {
    width: 440,
    height: 450,
    title: "我的账户",
    closable: true,
    resizable: true,
    modal: true,
    movable: true,
    viewportOverflow: true
};

var accountFormConfig = {
    cellCss: "",
    rows: [{
        type: "input",
        gravity: false,
        label: "姓名",
        placeholder: "陈梓豪",
        name: "name"
    }, {
        type: "input",
        gravity: false,
        label: "电子邮件",
        placeholder: "chenzihao03@gmail.com",
        name: "email"
    }, {
        type: "input",
        gravity: false,
        inputType: "Password",
        label: "密码",
        placeholder: "********",
        name: "password"
    }, {
        type: "input",
        gravity: false,
        inputType: "Password1",
        label: "确认密码",
        placeholder: "********",
        name: "password"
    }, {
        "type": "spacer"
    }, {
        type: "button",
        gravity: false,
        value: "确认",
        size: "medium",
        view: "flat",
        submit: true,
        color: "primary"
    }]
};
var homeWinConfig = {
    "rows": [{
        "id": "toolbar_container",
        "height": "auto"
    }, {
        "id": "grid_container",
        "gravity": true,
        "height": "auto"
    }, {
        "id": "result_container",
        "height": "70%",
        "gravity": true
    }]
};

var homeToolbarConfig = [{
    "type": "input",
    "value": "",
    "id": "gridFitter",
    "placeholder": "文本输入框",
    "icon": "dxi dxi-magnify"
}, {
    "id": "APS",
    "type": "button",
    "value": "作业排程",
    "circle": true,
    "icon": "mdi mdi-square-edit-outline"
}, {
    "id": "orderGantt",
    "type": "button",
    "value": "订单甘特图",
    "circle": true,
    "icon": "mdi mdi-square-edit-outline"
}, {
    "id": "eqmGantt",
    "type": "button",
    "value": "设备甘特图",
    "circle": true,
    "icon": "mdi mdi-square-edit-outline"
}];

var homeGridConfig = {
    "columns": [{
        "width": 150,
        "id": "timeFlag",
        "header": [{
            "text": "次数"
        }]
    }, {
        "width": 300,
        "id": "regular",
        "header": [{
            "text": "规则"
        }]
    }, {
        "width": 150,
        "id": "orderCycle",
        "header": [{
            "text": "订单总周期"
        }]
    }, {
        "width": 150,
        "id": "orderDelay",
        "header": [{
            "text": "订单拖期数"
        }]
    }, {
        "width": 200,
        "id": "createDate",
        "header": [{
            "text": "排程时间",
            "css": "text-align:center"
        }],
        "type": "date"
    }, {
        "id": "id",
        "header": [{
            "text": "主键Id"
        }],
        "hidden": true
    }],
    "columnsAutoWidth": true,
    "selection": "row"
};

var homeResultConfig = {
    "columns": [{
        "width": 150,
        "id": "orderUrgency",
        "header": [{
            "text": "订单紧急度"
        }]
    }, {
        "width": 150,
        "id": "sequencePriority",
        "header": [{
            "text": "工序优先级"
        }]
    }, {
        "width": 150,
        "id": "orderNo",
        "header": [{
            "text": "订单号"
        }]
    }, {
        "width": 150,
        "id": "orderPriority",
        "header": [{
            "text": "订单优先级"
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
        "id": "sequenceNo",
        "header": [{
            "text": "工序序号"
        }]
    }, {
        "width": 150,
        "id": "keyFlag",
        "editing": true,
        "header": [{
            "text": "关键工序"
        }],
        "type": "boolean"
    }, {
        "width": 150,
        "id": "planType",
        "header": [{
            "text": "订单类型"
        }]
    }, {
        "width": 150,
        "id": "quantityPlanned",
        "header": [{
            "text": "要求完成数量"
        }]
    }, {
        "width": 150,
        "id": "setUpTime",
        "header": [{
            "text": "准备时间(小时)"
        }]
    }, {
        "width": 150,
        "id": "runtime",
        "header": [{
            "text": "加工时间(小时)"
        }]
    }, {
        "width": 150,
        "id": "processTime",
        "header": [{
            "text": "生产加工工时(小时)"
        }]
    }, {
        "width": 150,
        "id": "otherTime",
        "header": [{
            "text": "其他工时(小时)"
        }]
    }, {
        "width": 150,
        "id": "zupiFlag",
        "header": [{
            "text": "组批标识"
        }]
    }, {
        "width": 200,
        "id": "adviseStartDate",
        "header": [{
            "text": "最早开工时间"
        }],
        "type": "date"
    }, {
        "width": 200,
        "id": "operationDueDate",
        "header": [{
            "text": "要求完成时间"
        }],
        "type": "date"
    }, {
        "width": 150,
        "id": "eqmName",
        "header": [{
            "text": "任务安排的设备"
        }]
    }, {
        "width": 150,
        "id": "teamCode",
        "header": [{
            "text": "任务安排的班组"
        }]
    }, {
        "width": 150,
        "id": "teamName",
        "header": [{
            "text": "任务安排的班组"
        }]
    }, {
        "width": 200,
        "id": "startDate",
        "header": [{
            "text": "任务派工开始时间"
        }],
        "type": "date"
    }, {
        "width": 200,
        "id": "endDate",
        "header": [{
            "text": "任务安排完成时间"
        }],
        "type": "date"
    }, {
        "width": 150,
        "id": "statusCode",
        "header": [{
            "text": "工序状态"
        }]
    }, {
        "width": 150,
        "id": "lockFlag",
        "editing": true,
        "header": [{
            "text": "锁定标识"
        }],
        "type": "boolean"
    }, {
        "id": "id",
        "header": [{
            "text": "主键Id"
        }],
        "hidden": true
    }],
    "columnsAutoWidth": true,
    "selection": "row"
};
