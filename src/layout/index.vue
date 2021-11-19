<template>
  <el-container class="layout_container">
    <!-- 左边侧边栏 -->
    <el-aside :width="asideWidth + 'px'">
      <!-- 底部首页logo -->
      <div class="logo" :style="{ height: headerHeight + 'px' }">logo</div>
      <!-- 侧边导航组件 -->
      <my-aside :isCollapse="isAsideCollapse" :sidebar-list="sidebars" />
    </el-aside>
    <!-- 右侧 -->
    <el-container class="main_container">
      <!-- 头部 -->
      <el-header :height="headerHeight + 'px'">
        <!-- 左侧侧边栏收缩按钮 -->
        <el-icon
          class="isCollapseIcon"
          v-if="isAsideCollapse"
          @click="toggleSideCollapse(false)"
        >
          <Expand />
        </el-icon>
        <el-icon
          class="isCollapseIcon"
          v-else
          @click="toggleSideCollapse(true)"
        >
          <Fold />
        </el-icon>
        <!-- 面包屑导航 -->
        <MyBreadcrumb />
        <!-- 头部组件 -->
        <my-header />
      </el-header>
      <!-- 主体内容区 -->
      <el-main>
        <!-- tab 动态切换组件 -->
        <my-tabs v-show="tabbarList && tabbarList.length > 0" />
        <!-- 二级路由页面 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Expand, Fold } from "@element-plus/icons";
import MyBreadcrumb from "./components/MyBreadcrumb.vue";
import MyHeader from "./components/MyHeader.vue";
import MyAside from "./components/MyAside.vue";
import MyTabs from "./components/MyTabs.vue";
export default {
  name: "MyLayout",
  data() {
    return {
      asideWidth: 200,
      headerHeight: 48,
      isAsideCollapse: false,
    };
  },
  components: { MyHeader, MyAside, MyTabs, MyBreadcrumb, Expand, Fold },
  setup() {
    const store = useStore();

    store.dispatch("getRouteList");

    const sidebars = store.state.user?.personalConfig?.routeList ?? [];

    return {
      sidebars,
      tabbarList: computed(() => store.state.user.tabbarList),
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 切换侧边栏状态
    toggleSideCollapse(val) {
      this.isAsideCollapse = val;
      this.asideWidth = val ? 64 : 200;
    },
  },
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
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: #1b2a47;
  }

  .isCollapseIcon {
    color: #fff;
    font-size: 30px;
    transform: translateX(-18px);
    cursor: pointer;
  }

  .el-aside {
    background-color: #1b2a47;
    transition: all 0.5s;
  }

  .main_container {
    height: calc(100%);
  }
}
</style>
