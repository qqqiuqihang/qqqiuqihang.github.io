import axios from "./index";
import Qs from "qs";

let obj = {
  mockTest: "/mock",
};
console.log(obj);

export default {
  async routerList(options, data, config) {
    return await axios[options.type](
      options.url,
      Qs.stringify(data),
      config
    ).catch((e) => e);
  },
};
