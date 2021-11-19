import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
const dataDtate = createPersistedState({
  key: "my-user",
  paths: ["user"],
  storage: window.localStorage,
});

// 模块
import user from "./module/user";
import system from "./module/system";

export default createStore({
  modules: { user, system },
  plugins: [dataDtate],
});
