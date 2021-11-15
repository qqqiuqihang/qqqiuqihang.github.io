import Mock from "mockjs";

// 使用 Mock
Mock.mock("/api/admin/users", "post", () => {
  return {
    name: "admin",
    age: "18",
    adress: "fdsmnfkdnkfnkdnskfn",
  };
});
