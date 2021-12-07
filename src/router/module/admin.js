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
      path: "/utool/importword",
      name: "importWord",
      meta: { title: "后台管理——导入WORD" },
      component: () => import("@/views/Admin/utool/importWord.vue"),
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
      meta: { title: "后台管理——人员管理" },
      component: () => import("@/views/Admin/manage/person.vue"),
    },
    {
      path: "/workflow/index",
      name: "WorkFlow",
      meta: { title: "后台管理——流程管理" },
      component: () => import("@/views/Admin/workflow/index.vue"),
    },
  ],
};
