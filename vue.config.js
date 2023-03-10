// const path = require("path");
let node_env = process.env.NODE_ENV;
// let baseUrl = process.env.VUE_AJAX_API;

module.exports = {
  publicPath: "./",
  outputDir: node_env == "development" ? "dist" : "test",
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: (config) => {
    config.entry = "./src/main.js";
    if (node_env == "production") {
      config.mode = "production";
      config.output.filename = "./js/[name].[chunkhash:8].js";
      config.output.chunkFilename = "./js/[name].[chunkhash:8].js";
    } else {
      config.mode = "development";
    }
  },
  // 添加颜色主体
  // configureWebpack:config=>{
  //   config.plugins.push(createThemeColorReplacerPlugin())
  // },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': '#F5222D',
  //         'link-color': '#F5222D',
  //         'border-radius-base': '2px'
  //       },
  //       // DO NOT REMOVE THIS LINE
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  devServer: {
    host: node_env == "development" ? "192.168.211.21" : "",
    port: 8080,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    hot: true, // 保存实时刷新
    open: true,
  },
  // 第三方插件
  pluginOptions: {},
};
