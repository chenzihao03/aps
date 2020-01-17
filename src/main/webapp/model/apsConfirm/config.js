var apsConfirmWinConfig = {
    width: 500,
    height: 350,
    title: "自动确定",
    closable: true,
    resizable: true,
    modal: true,
    movable: true,
    header: true,
    viewportOverflow: true
};
var apsConfirmFormConfig = {
    rows: [{
        type: "input",
        label: "自动确认",
        labelInline: true,
        help: "任务超过*小时自动确认",
        id: "autoConfirm",
        gravity: false
    }, {
        type: "input",
        label: "自动取消",
        labelInline: true,
        help: "任务超过*小时自动取消",
        id: "autoCancel",
        gravity: false
    }, {
        padding: 20,
        rows: [{
            type: "checkbox",
            label: "可生产确认",
            labelInline: true,
            gravity: false,
            help: "所有任务均确认，则该排程结果自动完成可生产确认",
            id: "produceConfirm"
        }, {
            type: "checkbox",
            label: "自动派工",
            labelInline: true,
            gravity: false,
            help: "可生产确认完成后自动进行派工",
            id: "autoTask"
        }, {
            type: "checkbox",
            label: "自动通知",
            labelInline: true,
            gravity: false,
            help: "任务确认或取消，通知排程管理员",
            id: "noticeManager"
        }]
    }]
};