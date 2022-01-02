const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
      config.mode = "production";
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          parallel: 2,
          uglifyOptions: {
            compress: {
              drop_console: true, //console
              drop_debugger: true,
              pure_funcs: ["console.log"], //移除console
            },
          },
        }),
      ];
    } else {
      // 为开发环境修改配置
      config.mode = "development";
    }
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
  },
};
