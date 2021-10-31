<template>
  <el-container class="layout_container">
    <el-aside :width="asideWidth + 'px'">
      <div class="logo" :style="{ height: headerHeight + 'px' }">logo</div>
      <my-aside :sidebar-list="sidebars" />
    </el-aside>
    <el-container class="main_container">
      <el-header :height="headerHeight + 'px'"> <my-header /> </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { reactive } from "vue";
import { useStore } from "vuex";
import MyHeader from "./components/MyHeader.vue";
import MyAside from "./components/MyAside.vue";
export default {
  name: "MyLayout",
  data() {
    return {
      asideWidth: 200,
      headerHeight: 48,
    };
  },
  components: { MyHeader, MyAside },
  setup() {
    const store = useStore();
    console.log(store.state);
    // console.log(store.state.user.personalConfig.routeList);

    const sidebars = store.state.user?.personalConfig?.routeList ?? [];

    return { sidebars };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.layout_container {
  height: 100%;

  .logo {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-family: Arial;
  }

  .el-header {
    background-color: #1b2a47;
  }
  .el-aside {
    background-color: #1b2a47;
  }
  .main_container {
    height: calc(100%);
  }
}
</style>
