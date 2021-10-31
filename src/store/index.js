import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./module/user";

export default createStore({
  modules: { user },
  plugins: [
    createPersistedState({
      key: "my-user",
      paths: ["user"],
    }),
  ],
});
