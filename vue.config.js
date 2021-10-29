const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  devServer: {
    open: true,
    port: 3001,
  },
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === "production" ? true : false,
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },
  chainWebpack: (config) => {
    config.plugin("Components").tap((args) => {
      return [
        /* 传递给 html-webpack-plugin's 构造函数的新参数 */
      ];
    });
    config.plugin("ElementPlusResolver").tap((args) => {
      return [
        /* 传递给 html-webpack-plugin's 构造函数的新参数 */
      ];
    });
  },
};
