<template>
  <el-container class="layout_container">
    <!-- 左边侧边栏 -->
    <el-aside :width="asideWidth + 'px'">
      <!-- 底部首页logo -->
      <div class="logo" :style="{ height: headerHeight + 'px' }">
        <span
          @click="clickHandler({ path: '/welcome', val: '' })"
          style="cursor: pointer"
        >
          logo
        </span>
      </div>
      <!-- 侧边导航组件 -->
      <my-aside
        :isCollapse="isAsideCollapse"
        :sidebar-list="sidebars"
        :defaultActive="defaultActive"
        :textColor="textColor"
        :activeTextColor="activeTextColor"
        @handleSelect="handleSelect"
      />
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
        <MyBreadcrumb
          :breadcrumbList="breadcrumbList"
          @clickHandler="clickHandler"
        />
        <!-- 头部组件 -->
        <my-header @logout="logout" />
      </el-header>
      <!-- 主体内容区 -->
      <el-main>
        <!-- tab 动态切换组件 -->
        <my-tabs v-show="tabbarList && tabbarList.length > 0" />
        <!-- 二级路由页面 -->
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore, mapMutations } from "vuex";
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

    onMounted(() => {
      store.commit("getDefaultActive");
      store.commit("getBreadcrumbList");
    });

    return {
      sidebars: computed(() => store.state.user?.routeList ?? []),
      tabbarList: computed(() => store.state.system.tabbarList),
      defaultActive: computed(() => store.state.system.defaultActive),
      textColor: computed(() => store.state.user.personalConfig.textColor),
      activeTextColor: computed(
        () => store.state.user.personalConfig.activeTextColor
      ),
      breadcrumbList: computed(() => store.state.system.breadcrumbList),
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 切换侧边栏状态
    toggleSideCollapse(val) {
      this.isAsideCollapse = val;
      this.asideWidth = val ? 64 : 200;
      const value = val ? "#409eff" : "#fff";
      this.$store.commit("setStateValue", {
        key: "activeTextColor",
        value: value,
      });
    },
    // 侧边栏导航选中
    handleSelect(val) {
      this.$store.dispatch("setDemo", val.keyPath);
      this.$store.commit("setDefaultActive", val.key);
    },
    // 面包屑导航
    clickHandler(val) {
      this.setDefaultActive(val.val);
      this.setBreadcrumbList(val.val);
      this.setTabbarListTwo([]);
      this.$router.push(val.path);
    },
    // 退出
    logout() {
      console.log("哈哈，再见啦");
      this.$message.success("哈哈，再见啦！！！");
    },
    ...mapMutations([
      "setDefaultActive",
      "setBreadcrumbList",
      "setTabbarListTwo",
    ]),
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
    font-size: 26px;
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
  :deep(.el-main) {
    background-color: #ededed;
    padding: 0;
    .el-tabs__header {
      background-color: #fff;
    }
    .my-main-container {
      overflow: hidden;
      overflow-y: scroll;
      margin: 0 20px 20px;
      padding: 20px;
      width: calc(100% - 40px);
      height: calc(100% - 56px - 20px);
      border-radius: 10px;
      background-color: #fff;
      box-sizing: border-box;

      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #d0d3d7;
        &:hover {
          background-color: #bdbfc4;
        }
      }
    }
  }
}
</style>
