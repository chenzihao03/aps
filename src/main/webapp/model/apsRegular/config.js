var apsRegularWinConfig = {
    width: 600,
    height: 900,
    title: "排程规则",
    closable: true,
    resizable: true,
    modal: true,
    movable: true,
    header: true,
    viewportOverflow: true
};

var apsRegularToolbarConfig = [{
    "id": "lock",
    "type": "button",
    "value": "确定",
    "circle": true,
    "icon": "mdi mdi-sort-variant-lock"
}, {
    "type": "spacer"
}, {
    "id": "apsSetting",
    "type": "button",
    "value": "关闭",
    "circle": true,
    "icon": "mdi mdi-window-close"
}];
var apsRegularGridConfig = {
    "css": "dhx_widget--bg_gray",
    "columns": [{
        "width": 60,
        "id": "seqNo",
        "header": [{
            "text": "序号"
        }]
    }, {
        "width": 150,
        "id": "regularName",
        "header": [{
            "text": "规则"
        }],
        "editorType": "combobox",
        "options": [
            "订单紧急度",
            "订单优先级",
            "工序优先级",
            "订单最早开工",
            "订单最早完工",
            "工序周期最长",
            "剩余操作数最多",
            "最短交付期"
        ]
    }, {
        "id": "id",
        "header": [{
            "text": "主键Id"
        }],
        "hidden": true
    }, {
        "width": 150,
        "id": "regular",
        "header": [{
            "text": "规则"
        }],
        "hidden": true
    }],
    "editing": true,
    "columnsAutoWidth": true,
    "selection": "row",
    "autoEmptyRow": true
};