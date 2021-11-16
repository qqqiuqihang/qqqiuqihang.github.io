import request from "@/axios/api";

export default {
  namespaceed: true,
  state() {
    return {
      token: "",
      personalConfig: {
        layout: "vertical",
        routeList: [
          {
            name: "sidebar5",
            path: "5",
            icon: "test8",
            children: [
              {
                name: "sidebar1",
                path: "5-1",
                icon: "test12",
                children: [
                  { name: "sidebar1", path: "5-1", icon: "test12" },
                  { name: "sidebar2", path: "5-2", icon: "test12" },
                  { name: "sidebar3", path: "5-3", icon: "test12" },
                  { name: "sidebar5", path: "5-5", icon: "test12" },
                  { name: "sidebar5", path: "5-5", icon: "test12" },
                  { name: "sidebar6", path: "5-6", icon: "test12" },
                ],
              },
              { name: "sidebar2", path: "5-2", icon: "test12" },
              { name: "sidebar3", path: "5-3", icon: "test12" },
              { name: "sidebar5", path: "5-5", icon: "test12" },
              { name: "sidebar5", path: "5-5", icon: "test12" },
              { name: "sidebar6", path: "5-6", icon: "test12" },
            ],
          },
        ],
      },
    };
  },
  getter: {},
  mutations: {
    setRouteList(state, val) {
      state.personalConfig.routeList = val;
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
