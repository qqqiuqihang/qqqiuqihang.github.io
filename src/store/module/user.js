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
      routeList: [
        {
          name: "工具类",
          path: "/utool",
          icon: "gongju1",
          children: [
            {
              name: "EXCEL 导入",
              path: "/utool/importexcel",
              icon: "daochudaoru",
            },
            {
              name: "Word 导出",
              path: "/utool/importword",
              icon: "icon-test18",
            },
          ],
        },
        {
          name: "链接类",
          path: "/link",
          icon: "lianjie2",
          children: [
            {
              name: "第三方",
              path: "/link/link",
              icon: "lianjie1",
            },
          ],
        },
        {
          name: "管理类",
          path: "/manage",
          icon: "guanli",
          children: [
            {
              name: "人员",
              path: "/manage/person",
              icon: "renyuanxinxi",
            },
          ],
        },
        {
          name: "流程管理",
          path: "/workflow",
          icon: "liuchengmenhu",
          children: [
            {
              name: "流程信息",
              path: "/workflow/index",
              icon: "flow-line",
            },
          ],
        },
      ],
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
