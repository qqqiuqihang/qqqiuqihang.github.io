export default {
  path: "/",
  name: "Home",
  meta: { title: "首页" },
  component: () => import("@/views/Home/Home.vue"),
};
