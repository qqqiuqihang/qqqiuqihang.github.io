import request from "@/axios/api";

export default {
  namespaceed: true,
  state() {
    return {
      token: "",
      personalConfig: {
        layout: "vertical",
        backgroundColor: "",
        textColor: "#5b80b4",
        activeTextColor: "#409eff",
      },
      routeList: [],
    };
  },
  getter: {},
  mutations: {
    // 设置侧边栏菜单
    setRouteList(state, val) {
      state.routeList = val.list;
      state.token = val.token;
    },
    // 设置导航栏的文字颜色
    setStateValue(state, val) {
      state.personalConfig[val.key] = val.value;
    },
  },
  actions: {
    async getRouteList(context) {
      const { data: res } = await request
        .routerList({
          method: "get",
          url: "get",
        })
        .catch((e) => e);
      context.commit("setRouteList", res);
    },
  },
};
