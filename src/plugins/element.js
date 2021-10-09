import { ElButton, locale } from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";
import "element-plus/lib/theme-chalk/index.css";

console.log(locale);

export default (app) => {
  locale(lang);
  app.use(ElButton);
};
