import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";

// 导入初始化和全局样式
import "./assets/css/global.css";
import "./assets/css/initStyle.css";

const app = createApp(App);

installElementPlus(app);

app.use(store).use(router).mount("#app");
