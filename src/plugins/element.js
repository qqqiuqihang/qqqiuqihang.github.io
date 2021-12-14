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
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElMessage,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElUpload,
  ElTable,
  ElTableColumn,
  ElDialog,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElSelect,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElRadio,
  ElRadioGroup,
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
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElUpload,
  ElTable,
  ElTableColumn,
  ElDialog,
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElOption,
  ElSelect,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElRadio,
  ElRadioGroup,
];

const plugins = [ElLoading];

export default (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });

  app.config.globalProperties.$message = ElMessage;
};
