import axios from "axios";

let instance = axios.create({
  baseURL: "", //请求基地址
  timeout: 3000, //请求超时时长
  url: "/url", //请求路径
  method: "get,post,put,patch,delete", //请求方法
  headers: {
    token: "",
  }, //请求头
  params: {}, //请求参数拼接在url上面
  data: {}, //请求参数放请求体里
});

export default instance;
