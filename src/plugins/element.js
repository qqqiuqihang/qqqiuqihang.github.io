import {
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElFooter,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElLoading,
  ElScrollbar,
} from "element-plus";
import "element-plus/dist/index.css";

const components = [
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElFooter,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElScrollbar,
];

const plugins = [ElLoading];

export default (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};
