import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";
// const dataDtate = createPersistedState({
//   key: "my-user",
//   paths: ["user"],
//   storage: window.localStorage,
// });

// 模块
import user from "./module/user";

export default createStore({
  state: {
    hehe: "111111111111111111111111111",
  },
  modules: { user },
  plugins: [createPersistedState()],
});
