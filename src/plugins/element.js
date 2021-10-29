// import {
//   ElButton,
//   locale,
//   ElMessage,
//   ElContainer,
//   ElAside,
//   ElHeader,
//   ElFooter,
//   ElMain,
//   ElMenu,
//   ElMenuItem,
//   ElMenuItemGroup,
//   ElSubmenu,
// } from "element-plus";
import ElementPlus from "element-plus";
// import lang from "element-plus/lib/locale/lang/zh-cn";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// import "element-plus/lib/theme-chalk/index.css";
import "element-plus/dist/index.css";

export default (app) => {
  app.use(ElementPlus, { locale: zhCn });
  // locale(zhCn);
  // app.use(locale, { locale: zhCn });
  // app.use(ElButton);
  // app.use(ElMessage);
  // app.use(ElContainer);
  // app.use(ElAside);
  // app.use(ElHeader);
  // app.use(ElFooter);
  // app.use(ElMain);
  // app.use(ElMenu);
  // app.use(ElMenuItem);
  // app.use(ElMenuItemGroup);
  // app.use(ElSubmenu);
};
