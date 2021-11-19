// import request from "@/axios/api";
import { setSession, getSession, recursiveTraversal } from "@/assets/js/common";

export default {
  namespaceed: true,
  state() {
    return {
      breadcrumbList: [], // 面包屑导航列表
      defaultActive: "", // 导航栏默认选中项
      tabbarList: [],
    };
  },
  getter: {},
  mutations: {
    // 侧边栏点击修改面包屑导航
    sidebarSetBreadcrumbList(state, val) {
      const defaultActive = val.val;
      let arr = recursiveTraversal(val.routerList, val.val);
      state.breadcrumbList = arr;
      state.defaultActive = defaultActive[defaultActive.length - 1];
      setSession("breadcrumbList", arr);
    },
    // 其他修改面包屑导航
    // otherEditBreadcrumbList(state, currentRoute, nextRoute) {
    //   // console.log(state, currentRoute, nextRoute);
    // },
    // 侧边栏默认选中
    setDefaultActive(state, val) {
      state.defaultActive = val;
      setSession("defaultActive", val);
    },
    // 侧边栏默认选中
    getDefaultActive(state) {
      state.defaultActive = getSession("defaultActive");
    },
    // 面包屑导航
    setBreadcrumbList(state, val) {
      state.breadcrumbList = val;
      setSession("breadcrumbList", val);
    },
    // 面包屑导航
    getBreadcrumbList(state) {
      state.breadcrumbList = getSession("breadcrumbList");
    },
    // tabbar 切换
    setTabbarList(state, val) {
      const index = state.tabbarList.findIndex((tab) => tab.path === val.path);
      if (index !== -1) state.tabbarList.splice(index, 1);
      state.tabbarList.push(val);

      setSession("tabbarList", state.tabbarList);
    },
    // tabbar 切换
    setTabbarListTwo(state, val) {
      state.tabbarList = val;
      setSession("tabbarList", state.tabbarList);
    },
    // tabbar 切换
    getTabbarList(state) {
      state.tabbarList = getSession("tabbarList") || [];
    },
  },
  actions: {
    setDemo({ rootState, commit }, val) {
      const routerList = rootState.user.routeList;
      commit("sidebarSetBreadcrumbList", { val, routerList });
    },
  },
};
