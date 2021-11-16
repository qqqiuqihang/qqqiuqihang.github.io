import request from "./index";
import Qs from "qs";

const obj = {
  mockTest: "/mock",
};

export default {
  // 获取侧边导航栏
  async routerList(options, data, responseType) {
    return request(
      {
        method: options.method,
        url: `${obj.mockTest}/api/system/${options.url}`,
      },
      options.method.toLowerCase() === "get" ? data : Qs.stringify(data),
      responseType
    );
  },
};
