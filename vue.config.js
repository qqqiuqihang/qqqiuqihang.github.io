// const Components = require("unplugin-vue-components/webpack");
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  devServer: {
    open: true,
    port: 3001,
  },
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === "production" ? true : false,
  configureWebpack: {
    // plugins: [
    //   Components({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    // ],
  },
};
