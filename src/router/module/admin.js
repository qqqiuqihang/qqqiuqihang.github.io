export default {
  path: "/mylayout",
  name: "MyLayout",
  meta: { title: "后台管理" },
  component: () => import("@/layout"),
  children: [
    {
      path: "",
      name: "AdminIndex",
      meta: { title: "后台管理——首页" },
      component: () => import("@/views/Admin/index.vue"),
    },
  ],
};
