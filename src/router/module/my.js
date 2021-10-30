export default {
  path: "/my",
  name: "My",
  meta: { title: "个人主页" },
  component: () => import("@/views/Home/My.vue"),
};
