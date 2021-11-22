<template>
  <el-scrollbar>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="uniqueOpened"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      @select="handleSelect"
      :router="isRouter"
    >
      <MyAsideItem
        :list="item"
        v-for="(item, index) in sidebarList"
        :key="index"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MyAsideItem from "./MyAsideItem.vue";
export default {
  name: "MyAside",
  props: {
    sidebarList: {
      type: Array,
      default: () => [],
    },
    defaultActive: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "#5b80b4",
    },
    activeTextColor: {
      type: String,
      default: "#ffffff",
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
    uniqueOpened: {
      type: Boolean,
      default: true,
    },
    isRouter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  components: { MyAsideItem },
  mounted() {},
  setup(props, { emit }) {
    const handleSelect = (key, keyPath) => {
      emit("handleSelect", { key, keyPath });
    };

    return { handleSelect };
  },
};
</script>

<style lang="less" scoped>
.el-scrollbar {
  height: calc(100% - 50px);
}

:deep(.el-menu),
:deep(.el-sub-menu__title) {
  background-color: transparent;
}

:deep(.el-sub-menu__title:hover) {
  background-color: #2a395b !important;
}

:deep(.el-menu) {
  border-right: none;

  .iconfont {
    margin-right: 5px;
    // color: #fff;
  }

  :deep(.el-menu-item) {
    outline: 0;
    // background-color: #263d6b !important;

    &:hover {
      background-color: #2a395b !important;
    }
  }
}

// 选中
:deep(.is-active) {
  color: #fff;
}
</style>
