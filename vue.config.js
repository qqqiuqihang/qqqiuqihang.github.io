module.exports = {
  devServer: {
    open: true,
    port: 3001,
  },
  lintOnSave: false,
  productionSourceMap: process.env.NODE_ENV === "production" ? true : false,
};
