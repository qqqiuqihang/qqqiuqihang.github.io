const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function (config) {
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
};
