const Mock = require("mockjs");

export default {
  'GET /api/admin/user/list': Mock.mock({
    'total|1-100': 10,
    'dataSource|1-100': [
      {
        cname: "@cname",
        email: "@email",
        phone: "@guid",
        role: "@character",
      },
    ]
  }),

  'GET /api/admin/userGroup/list': Mock.mock({
    'total|1-100': 10,
    'dataSource|1-100': [
      {
        cname: "@cname",
        desc: "@character",
        ctime: "@datetime('yyyy-MM-dd HH:mm:ss')",
        'count|1-100': 1,
        powerGroup: "@string(7, 10)",
        "id|1-10000": 1, 
      },
    ]
  }),

  'GET /api/admin/userGroup/list/filters': Mock.mock({
    'powerGroup': [
      { value: "1", text: "团队权限组A" },
      { value: "2", text: "团队权限组B" },
      { value: "3", text: "团队权限组C" },
    ]
  }),

  'PUT /api/admin/user/add/member': Mock.mock({
    "form": {
      "userGroup": {
        "value": [
          { "value": 1, "label": "团队负责人" },
          { "value": 2, "label": "团队管理员" },
          { "value": 3, "label": "团队普通成员" },
        ],
      }
    },
    "row": {
      "userGroup": 1
    }
  }),

  'POST /api/admin/user/add/member': Mock.mock({
    "data": {}
  }),

  'POST /api/admin/userGroup/add/member': Mock.mock({
    "data": {}
  })
}