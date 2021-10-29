import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页" },
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/my",
    name: "My",
    meta: { title: "个人主页" },
    component: () => import("../views/Home/My.vue"),
  },
  {
    path: "/mylayout",
    name: "MyLayout",
    meta: { title: "后台管理" },
    component: () => import("../views/Home/MyLayout.vue"),
    children: [
      {
        path: "",
        name: "AdminIndex",
        meta: { title: "后台管理——首页" },
        component: () => import("../views/Admin/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta && to.meta.title) document.title = to.meta.title;
  next();
});

export default router;
