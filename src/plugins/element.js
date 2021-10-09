import { ElButton, locale } from "element-plus";
import lang from "element-plus/lib/locale/lang/zh-cn";
// import locale from "element-plus/lib/locale";

console.log(lang, locale);

export default (app) => {
  // locale.use(lang);
  locale(lang);
  app.use(ElButton);
};
