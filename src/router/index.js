import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页" },
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/my",
    name: "My",
    meta: { title: "个人主页" },
    component: () => import(/* webpackChunkName: "My" */ "../views/My.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: { title: "后台管理" },
    redirect: "/admin/index",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/layout.vue"),
    children: [
      {
        path: "/admin/index",
        name: "AdminIndex",
        meta: { title: "后台管理——首页" },
        component: () =>
          import(/* webpackChunkName: "admin" */ "../pages/admin/index.vue"),
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
