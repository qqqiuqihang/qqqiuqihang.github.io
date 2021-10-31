export default {
  namespaceed: true,
  state() {
    return {
      token: "",
      personalConfig: {
        layout: "vertical",
        routeList: [
          {
            name: "sidebar1",
            path: "1",
            children: [
              { name: "sidebar1", path: "1-1" },
              { name: "sidebar2", path: "1-2" },
              { name: "sidebar3", path: "1-3" },
              { name: "sidebar5", path: "1-5" },
              { name: "sidebar5", path: "1-5" },
              { name: "sidebar6", path: "1-6" },
            ],
          },
          {
            name: "sidebar2",
            path: "2",
            children: [
              { name: "sidebar1", path: "2-1" },
              { name: "sidebar2", path: "2-2" },
              { name: "sidebar3", path: "2-3" },
              { name: "sidebar5", path: "2-5" },
              { name: "sidebar5", path: "2-5" },
              { name: "sidebar6", path: "2-6" },
            ],
          },
          {
            name: "sidebar3",
            path: "3",
            children: [
              { name: "sidebar1", path: "3-1" },
              { name: "sidebar2", path: "3-2" },
              { name: "sidebar3", path: "3-3" },
              { name: "sidebar5", path: "3-5" },
              { name: "sidebar5", path: "3-5" },
              { name: "sidebar6", path: "3-6" },
            ],
          },
          {
            name: "sidebar4",
            path: "4",
            children: [
              { name: "sidebar1", path: "4-1" },
              { name: "sidebar2", path: "4-2" },
              { name: "sidebar3", path: "4-3" },
              { name: "sidebar5", path: "4-5" },
              { name: "sidebar5", path: "4-5" },
              { name: "sidebar6", path: "4-6" },
            ],
          },
          {
            name: "sidebar5",
            path: "5",
            children: [
              { name: "sidebar1", path: "5-1" },
              { name: "sidebar2", path: "5-2" },
              { name: "sidebar3", path: "5-3" },
              { name: "sidebar5", path: "5-5" },
              { name: "sidebar5", path: "5-5" },
              { name: "sidebar6", path: "5-6" },
            ],
          },
          {
            name: "sideba6r",
            path: "6",
            children: [
              { name: "sidebar1", path: "6-1" },
              { name: "sidebar2", path: "6-2" },
              { name: "sidebar3", path: "6-3" },
              { name: "sidebar5", path: "6-5" },
              { name: "sidebar5", path: "6-5" },
              { name: "sidebar6", path: "6-6" },
            ],
          },
          {
            name: "sidebar7",
            path: "7",
            children: [
              { name: "sidebar1", path: "8-1" },
              { name: "sidebar2", path: "8-2" },
              { name: "sidebar3", path: "8-3" },
              { name: "sidebar5", path: "8-5" },
              { name: "sidebar5", path: "8-5" },
              { name: "sidebar6", path: "8-6" },
            ],
          },
        ],
      },
    };
  },
  getter: {},
  mutations: {},
  actions: {},
};
