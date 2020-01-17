var apsSendWinConfig = {
    width: 400,
    height: 200,
    title: "自动发出",
    closable: true,
    resizable: true,
    modal: true,
    movable: true,
    header: true,
    viewportOverflow: true
};
var apsSendFormConfig = {
    rows: [{
        type: "input",
        label: "任务数",
        labelInline: true,
        help: "设备允许保留*任务数",
        id: "eqmTaskNum",
        gravity: false
    }, {
        type: "input",
        label: "小时",
        labelInline: true,
        help: "设备允许保留*小时任务",
        id: "eqmTaskHour",
        gravity: false
    }]
};