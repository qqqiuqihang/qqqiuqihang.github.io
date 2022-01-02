import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import axios from "./axios/api.js";

// 模拟数据
// import "./mock";

// 导入初始化和全局样式  arcgis css
import "./assets/css/global.css";
import "./assets/css/initStyle.css";
import "@arcgis/core/assets/esri/themes/dark/main.css";

// 本地化部署 arcgis
// import esriConfig from "@arcgis/core/config.js";
// esriConfig.assetsPath = "./assets";

// 引入字体图标
import "./assets/iconfont/iconfont.css";

const app = createApp(App);

installElementPlus(app);

app.config.globalProperties.$axios = axios;
app.use(store).use(router).mount("#app");
