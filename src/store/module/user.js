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
    },
    // 其他修改面包屑导航
    otherPushBreadcrumbList(state, currentRoute, nextRoute) {
      console.log(state, currentRoute, nextRoute);
      const len = state.system.breadcrumbList.length;
      if (currentRoute)
        state.system.breadcrumbList[len - 1].path = currentRoute;
      if (nextRoute) state.system.breadcrumbList.push(nextRoute);
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

// 递归遍历
function recursiveTraversal(arr, target, newArr = []) {
  const index = arr.findIndex((item) => item.path === target[0]);
  newArr.push({ name: arr[index].name, path: arr[index].path });
  if (arr[index] && arr[index].children) {
    recursiveTraversal(arr[index].children, target.slice(1), newArr);
  }
  return newArr;
}
