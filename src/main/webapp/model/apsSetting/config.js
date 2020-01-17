var apsSetWinConfig = {
    width: 600,
    height: 900,
    title: "排程基础",
    closable: true,
    resizable: true,
    modal: true,
    movable: true,
    header: true,
    viewportOverflow: true
};
var apsSetFormConfig = {
    rows: [{
        cols: [{
            title: "分派方向：",
            padding: "20",
            rows: [{
                type: "radioGroup",
                name: "align",
                options: {
                    height: "60px",
                    align: "left",
                    cols: [{
                        type: "radioButton",
                        label: "正向",
                        gravity: false,
                        labelInline: true,
                        value: "start",
                        width: "400px",
                        height: "40px",
                        checked: true,
                    }, {
                        type: "radioButton",
                        label: "反向",
                        gravity: false,
                        labelInline: true,
                        width: "400px",
                        height: "40px",
                        value: "center",
                    }]
                }
            }]
        }]
    }, {
        title: "参数设置：",
        padding: "20",
        rows: [{
            cols: [{
                type: "checkbox",
                label: "自动排程",
                name: "autoSchedule",
                labelInline: true,
                gravity: false,
                width: "400px",
                height: "40px",
                id: "autoSchedule"
            }, {
                type: "checkbox",
                label: "跳过任务确认",
                name: "skipConfirm",
                labelInline: true,
                gravity: false,
                width: "400px",
                height: "40px",
                id: "skipConfirm"
            }]
        }, {
            type: "combo",
            label: "设备选择",
            id: "eqmMode",
            labelInline: true,
            gravity: true,
            width: "400px",
            placeholder: "选择排程计算设备方式",
            data: [
                {id: "GY", value: "工艺"},
                {id: "ZX", value: "工作中心"}
            ]
        }, {
            type: "combo",
            label: "派工方式",
            id: "dispatchMode",
            labelInline: true,
            gravity: true,
            width: "400px",
            align: "left",
            placeholder: "选择排程订单的派工方式",
            data: [
                {id: "BZ", value: "班组派工"},
                {id: "RY", value: "人员派工"}
            ]
        }, {
            type: "combo",
            label: "订单类型",
            id: "orderType",
            labelInline: true,
            gravity: true,
            width: "400px",
            align: "left",
            placeholder: "选择需要计算的订单类型",
            data: [
                {id: "PRO", value: "加工"},
                {id: "ASS", value: "装配"}
            ]
        }, {
            type: "combo",
            label: "保留次数",
            labelInline: true,
            width: "400px",
            align: "left",
            placeholder: "排程结果保留次数1~10",
            id: "holdTime",
            name: "holdTime",
            data: [
                {id: "1", value: "1"},
                {id: "2", value: "2"},
                {id: "3", value: "3"},
                {id: "4", value: "4"},
                {id: "5", value: "5"},
                {id: "6", value: "6"},
                {id: "7", value: "7"},
                {id: "8", value: "8"},
                {id: "9", value: "9"},
                {id: "10", value: "10"}
            ]
        }, {
            type: "datepicker",
            label: "计算范围",
            labelInline: true,
            width: "400px",
            align: "left",
            placeholder: "计算范围>本时间的任务",
            id: "apsScope",
            name: "apsScope"
        }]
    }, {
        title: "运算时间：",
        padding: "20",
        rows: [{
            type: "radioGroup",
            name: "align",
            id: "scheduleFlag",
            options: {
                height: "60px",
                align: "left",
                css: "overflow: hidden",
                cols: [{
                    type: "radioButton",
                    label: "任务变化",
                    gravity: false,
                    labelInline: true,
                    value: "1",
                    width: "400px",
                    height: "40px",
                    checked: true,
                }, {
                    type: "radioButton",
                    label: "设备，人员变化",
                    gravity: false,
                    labelInline: true,
                    width: "400px",
                    height: "40px",
                    value: "2",
                }, {
                    type: "radioButton",
                    label: "每天运算",
                    gravity: false,
                    labelInline: true,
                    width: "400px",
                    height: "40px",
                    value: "3",
                }]
            }
        }, {
            type: "timepicker",
            label: "时间段1",
            labelInline: true,
            width: "400px",
            height: "40px",
            placeholder: "设置计算的时间段1",
            id: "time1",
            name: "time1"
        }, {
            type: "timepicker",
            label: "时间段2",
            labelInline: true,
            width: "400px",
            height: "40px",
            placeholder: "设置计算的时间段2",
            id: "time2",
            name: "time2"
        }, {
            type: "timepicker",
            label: "时间段3",
            labelInline: true,
            width: "400px",
            height: "40px",
            placeholder: "设置计算的时间段3",
            id: "time3",
            name: "time3"
        }]
    }]
};
