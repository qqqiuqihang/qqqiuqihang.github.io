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
    {
      path: "/utool/importexcel",
      name: "ImportExcel",
      meta: { title: "后台管理——导入EXCEL" },
      component: () => import("@/views/Admin/utool/importExcel.vue"),
    },
    {
      path: "/link/link",
      name: "Link",
      meta: { title: "后台管理——链接管理" },
      component: () => import("@/views/Admin/link/link.vue"),
    },
    {
      path: "/manage/person",
      name: "Personal",
      meta: { title: "后台管理——管理" },
      component: () => import("@/views/Admin/manage/person.vue"),
    },
  ],
};
