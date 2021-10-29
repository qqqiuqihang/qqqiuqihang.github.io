import {
  ElButton,
  locale,
  ElMessage,
  ElContainer,
  ElAside,
  ElHeader,
  ElFooter,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
} from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "element-plus/lib/theme-chalk/index.css";

export default (app) => {
  locale(lang);
  app.use(ElButton);
  app.use(ElMessage);
  app.use(ElContainer);
  app.use(ElAside);
  app.use(ElHeader);
  app.use(ElFooter);
  app.use(ElMain);
  app.use(ElMenu);
  app.use(ElSubMenu);
  app.use(ElMenuItemGroup);
};
