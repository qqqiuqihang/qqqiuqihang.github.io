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
    const sidebars = [
      {
        name: "sidebar1",
        path: "1",
        children: [
          { name: "sidebar1", path: "1-1" },
          { name: "sidebar2", path: "1-2" },
          { name: "sidebar3", path: "1-3" },
          { name: "sidebar5", path: "1-5" },
          { name: "sidebar5", path: "1-5" },
          { name: "sidebar6", path: "1-6" },
        ],
      },
      {
        name: "sidebar2",
        path: "2",
        children: [
          { name: "sidebar1", path: "2-1" },
          { name: "sidebar2", path: "2-2" },
          { name: "sidebar3", path: "2-3" },
          { name: "sidebar5", path: "2-5" },
          { name: "sidebar5", path: "2-5" },
          { name: "sidebar6", path: "2-6" },
        ],
      },
      {
        name: "sidebar3",
        path: "3",
        children: [
          { name: "sidebar1", path: "3-1" },
          { name: "sidebar2", path: "3-2" },
          { name: "sidebar3", path: "3-3" },
          { name: "sidebar5", path: "3-5" },
          { name: "sidebar5", path: "3-5" },
          { name: "sidebar6", path: "3-6" },
        ],
      },
      {
        name: "sidebar4",
        path: "4",
        children: [
          { name: "sidebar1", path: "4-1" },
          { name: "sidebar2", path: "4-2" },
          { name: "sidebar3", path: "4-3" },
          { name: "sidebar5", path: "4-5" },
          { name: "sidebar5", path: "4-5" },
          { name: "sidebar6", path: "4-6" },
        ],
      },
      {
        name: "sidebar5",
        path: "5",
        children: [
          { name: "sidebar1", path: "5-1" },
          { name: "sidebar2", path: "5-2" },
          { name: "sidebar3", path: "5-3" },
          { name: "sidebar5", path: "5-5" },
          { name: "sidebar5", path: "5-5" },
          { name: "sidebar6", path: "5-6" },
        ],
      },
      {
        name: "sideba6r",
        path: "6",
        children: [
          { name: "sidebar1", path: "6-1" },
          { name: "sidebar2", path: "6-2" },
          { name: "sidebar3", path: "6-3" },
          { name: "sidebar5", path: "6-5" },
          { name: "sidebar5", path: "6-5" },
          { name: "sidebar6", path: "6-6" },
        ],
      },
      {
        name: "sidebar7",
        path: "7",
        children: [
          { name: "sidebar1", path: "8-1" },
          { name: "sidebar2", path: "8-2" },
          { name: "sidebar3", path: "8-3" },
          { name: "sidebar5", path: "8-5" },
          { name: "sidebar5", path: "8-5" },
          { name: "sidebar6", path: "8-6" },
        ],
      },
    ];

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
