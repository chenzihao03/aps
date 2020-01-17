var tabberMenuWinConfig = {
    "rows": [{
        "id": "toolbar_container",
        "height": "auto"
    }, {
        "height": "auto",
        "cols": [{
            "id": "tree_container",
            "width": "auto"
        }, {
            "id": "grid_container",
            "width": "auto"
        }]
    }]
};
var tabberMenuToolbarConfig = [{
    "type": "input",
    "id": "gridFitter",
    "value": "",
    "placeholder": "文本输入框",
    "icon": "dxi dxi-magnify"
}, {
    "id": "add",
    "type": "button",
    "value": "新增",
    "circle": true,
    "icon": "mdi mdi-plus"
}, {
    "id": "delete",
    "type": "button",
    "value": "删除",
    "circle": true,
    "icon": "mdi mdi-delete"
}, {
    "id": "save",
    "type": "button",
    "value": "保存",
    "circle": true,
    "icon": "mdi mdi-check"
}, {
    "type": "spacer"
}, {
    "id": "menuSet",
    "type": "button",
    "value": "关闭",
    "circle": true,
    "icon": "mdi mdi-window-close"
}];

var treeConfig = [
    {
        "value": "Books",
        "id": "Books",
        "opened": true,
        "items": [
            {
                "value": "Thrillers",
                "id": "Thrillers",
                "opened": true,
                "items": [
                    {
                        "value": "Bestsellers",
                        "id": "Bestsellers",
                        "opened": true,
                        "items": [
                            {
                                "value": "Lawrence Block",
                                "id": "Lawrence Block"
                            }
                        ]
                    },
                    {
                        "value": "Robert Crais",
                        "id": "Robert Crais"
                    },
                    {
                        "value": "Ian Rankin",
                        "id": "Ian Rankin"
                    },
                    {
                        "value": "James Johns",
                        "id": "James Johns"
                    },
                    {
                        "value": "Nancy Atherton",
                        "id": "Nancy Atherton"
                    }
                ]
            },
            {
                "value": "History",
                "id": "History",
                "items": [
                    {
                        "value": "John Mack Faragher",
                        "id": "John Mack Faragher"
                    },
                    {
                        "value": "Jim Dwyer",
                        "id": "Jim Dwyer"
                    },
                    {
                        "value": "Larry Schweikart",
                        "id": "Larry Schweikart"
                    },
                    {
                        "value": "R. Lee Ermey",
                        "id": "R. Lee Ermey"
                    }
                ]
            },
            {
                "value": "Horror",
                "id": "Horror",
                "items": [
                    {
                        "value": "Stephen King",
                        "id": "Stephen King"
                    },
                    {
                        "value": "Dan Brown",
                        "id": "Dan Brown"
                    },
                    {
                        "value": "Mary Janice Davidson",
                        "id": "Mary Janice Davidson"
                    },
                    {
                        "value": "Katie Macalister",
                        "id": "Katie Macalister"
                    }
                ]
            },
            {
                "value": "Fiction & Fantasy",
                "id": "Fiction & Fantasy",
                "items": [
                    {
                        "value": "Audrey Niffenegger",
                        "id": "Audrey Niffenegger"
                    },
                    {
                        "value": "Philip Roth",
                        "id": "Philip Roth"
                    }
                ]
            },
            {
                "value": "Teens",
                "id": "Teens",
                "items": [
                    {
                        "value": "Joss Whedon",
                        "id": "Joss Whedon"
                    },
                    {
                        "value": "Meg Cabot",
                        "id": "Meg Cabot"
                    },
                    {
                        "value": "Garth Nix",
                        "id": "Garth Nix"
                    },
                    {
                        "value": "Ann Brashares",
                        "id": "Ann Brashares"
                    }
                ]
            }
        ]
    },
    {
        "value": "Magazines",
        "id": "Magazines",
        "open": true,
        "items": [
            {
                "value": "Sport",
                "id": "Sport"
            }
        ]
    }
];

var tabberMenuGridConfig = {
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
