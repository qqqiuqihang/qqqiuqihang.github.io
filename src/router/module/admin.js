export default {
  path: "/mylayout",
  name: "MyLayout",
  meta: { title: "后台管理" },
  redirect: { path: "/welcome" },
  component: () => import("@/layout"),
  children: [
    {
      path: "/welcome",
      name: "AdminIndex",
      meta: { title: "后台管理——首页" },
      component: () => import("@/views/Admin/index.vue"),
    },
  ],
};
