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
};
