import Mock from "mockjs";

console.log("I'm Mockjs");

// 使用 Mock
Mock.mock("/mock/api/system/get", {
  list: [
    {
      name: "工具类",
      path: "utool",
      icon: "test8",
      children: [
        {
          name: "EXCEL 导入",
          path: "excleImport",
          icon: "test12",
        },
      ],
    },
    {
      name: "链接类",
      path: "link",
      icon: "test8",
      children: [
        {
          name: "第三方",
          path: "otherLink",
          icon: "test12",
        },
      ],
    },
  ],
});
