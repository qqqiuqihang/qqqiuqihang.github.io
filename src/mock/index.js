import Mock from "mockjs";

console.log("I'm Mockjs");

// 使用 Mock
Mock.mock("/mock/api/system/get", {
  list: [
    {
      name: "工具类",
      path: "5",
      icon: "test8",
      children: [
        {
          name: "EXCEL 导入",
          path: "5-1",
          icon: "test12",
        },
      ],
    },
  ],
});
