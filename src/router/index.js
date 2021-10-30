import { createRouter, createWebHashHistory } from "vue-router";
import homeRouter from "./module/home";
import myRouter from "./module/my";
import adminRouter from "./module/admin";

const routes = [
  homeRouter,
  myRouter,
  adminRouter,
  {
    path: "/:pathMatch(.*)",
    name: "404",
    meta: { title: "404" },
    component: () => import("../views/Home/My.vue"),
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
