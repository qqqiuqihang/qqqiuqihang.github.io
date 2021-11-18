import request from "@/axios/api";

export default {
  namespaceed: true,
  state() {
    return {
      token: "",
      personalConfig: {
        layout: "vertical",
        routeList: [],
      },
      breadcrumbList: [], // 面包屑导航列表
      defaultActive: "", // 导航栏默认选中项
      tabbarList: [],
    };
  },
  getter: {},
  mutations: {
    // 设置侧边栏菜单
    setRouteList(state, val) {
      state.personalConfig.routeList = val;
    },
    // 侧边栏点击修改面包屑导航
    sidebarSetBreadcrumbList(state, val) {
      // console.log(state, val);
      let route = [...state.personalConfig.routeList];
      let arr = recursiveTraversal(route, val);
      state.breadcrumbList = arr;
      state.defaultActive = val[val.length - 1];

      setSession("breadcrumbList", arr);
    },
    // 其他修改面包屑导航
    otherEditBreadcrumbList(state, currentRoute, nextRoute) {
      console.log(state, currentRoute, nextRoute);
    },
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
      console.log("tabbar qiehuan toggle", val);
      // state.tabbarList = val;
      // setSession("breadcrumbList", val);
    },
    // tabbar 切换
    getTabbarList(state) {
      state.breadcrumbList = getSession("breadcrumbList");
    },
  },
  actions: {
    async getRouteList(context) {
      const { data: res } = await request.routerList({
        method: "get",
        url: "get",
      });
      context.commit("setRouteList", res.list);
    },
  },
};

// 保存本地session
function setSession(str, val) {
  sessionStorage.setItem(str, JSON.stringify(val));
}

// 获取本地session
function getSession(str) {
  return JSON.parse(sessionStorage.getItem(str)) ?? "";
}

// 递归遍历
function recursiveTraversal(arr, target, newArr = []) {
  const index = arr.findIndex((item) => item.path === target[0]);
  newArr.push({ name: arr[index].name, path: arr[index].path });
  if (arr[index] && arr[index].children) {
    recursiveTraversal(arr[index].children, target.slice(1), newArr);
  }
  return newArr;
}
