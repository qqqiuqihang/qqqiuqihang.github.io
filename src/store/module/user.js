import request from "@/axios/api";

export default {
  namespaceed: true,
  state() {
    return {
      token: "",
      personalConfig: {
        layout: "vertical",
        backgroundColor: "",
        textColor: "",
      },
      routeList: [],
    };
  },
  getter: {},
  mutations: {
    // 设置侧边栏菜单
    setRouteList(state, val) {
      console.log(state);
      state.routeList = val.list;
      state.token = val.token;
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
