import Mock from "mockjs";

console.log("I'm Mockjs");

// 使用 Mock
Mock.mock("/mock/api/system/get", {
  list: [
    {
      name: "工具类",
      path: "/utool",
      icon: "gongju1",
      children: [
        {
          name: "EXCEL 导入",
          path: "/utool/importexcel",
          icon: "daochudaoru",
        },
      ],
    },
    {
      name: "链接类",
      path: "/link",
      icon: "lianjie2",
      children: [
        {
          name: "第三方",
          path: "/link/link",
          icon: "lianjie1",
        },
      ],
    },
    {
      name: "管理类",
      path: "/manage",
      icon: "guanli",
      children: [
        {
          name: "人员",
          path: "/manage/person",
          icon: "renyuanxinxi",
        },
      ],
    },
    {
      name: "流程管理",
      path: "/workflow",
      icon: "liuchengmenhu",
      children: [
        {
          name: "流程信息",
          path: "/workflow/index",
          icon: "flow-line",
        },
      ],
    },
  ],
  token: "tryittry",
});
