<template>
  <el-container class="layout_container">
    <el-header>
      <MyHeader></MyHeader>
    </el-header>
    <el-container class="main_container">
      <el-aside width="200px">
        <MyAside></MyAside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import MyAside from "@/components/Aside.vue";
export default {
  name: "layout",
  data() {
    return {};
  },

  components: { MyHeader, MyAside },

  created() {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.layout_container {
  height: 100%;
  .el-header {
    height: 100px;
    background-color: #2d5998;
  }
  .el-aside {
    background-color: #2d5998;
  }
  .main_container {
    height: calc(100%-50px);
  }
}
</style>
