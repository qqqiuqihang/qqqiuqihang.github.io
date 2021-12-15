const serveConfig = require("./configureWebpack/serve.js");
const buildConfig = require("./configureWebpack/build.js");

module.exports = {
  devServer: {
    open: true,
    port: 3001,
    // proxy: {
    // "/mock": {
    //   target: "",
    //   changeOrigin: true, // 跨域
    //   ws: true,
    // },
    // },
  },
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === "production" ? true : false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "个站";
      return args;
    });
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置
      buildConfig(config);
    } else {
      // 为开发环境修改配置
      serveConfig(config);
    }
  },
};
