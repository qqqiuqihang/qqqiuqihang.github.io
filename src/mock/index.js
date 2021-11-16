import Mock from "mockjs";

console.log("I'm Mockjs");

// 使用 Mock
Mock.mock("/mock/api/system/get", {
  list: [
    {
      name: "sidebar5",
      path: "5",
      icon: "test8",
      children: [
        {
          name: "sidebar1",
          path: "5-1",
          icon: "test12",
          children: [
            { name: "sidebar1", path: "5-1", icon: "test12" },
            { name: "sidebar2", path: "5-2", icon: "test12" },
            { name: "sidebar3", path: "5-3", icon: "test12" },
            { name: "sidebar5", path: "5-5", icon: "test12" },
            { name: "sidebar5", path: "5-5", icon: "test12" },
            { name: "sidebar6", path: "5-6", icon: "test12" },
          ],
        },
        { name: "sidebar2", path: "5-2", icon: "test12" },
        { name: "sidebar3", path: "5-3", icon: "test12" },
        { name: "sidebar5", path: "5-5", icon: "test12" },
        { name: "sidebar5", path: "5-5", icon: "test12" },
        { name: "sidebar6", path: "5-6", icon: "test12" },
      ],
    },
  ],
});
