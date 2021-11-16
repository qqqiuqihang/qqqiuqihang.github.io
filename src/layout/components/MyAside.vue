<template>
  <el-scrollbar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      @select="handleSelect"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <!-- @open="handleOpen"
      @close="handleClose" -->
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
import { watchEffect, ref } from "vue";
export default {
  name: "MyAside",
  props: {
    sidebarList: {
      type: Array,
      default: () => [],
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: { MyAsideItem },
  mounted() {},
  setup(props) {
    const handleOpen = (key, keyPath) => {
      console.log("handleOpen", key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log("handleClose", key, keyPath);
    };

    const handleSelect = (key, keyPath) => {
      console.log("handleSelect", key, keyPath);
    };

    const textColor = ref("#5b80b4");
    const activeTextColor = ref("#fff");
    watchEffect(() => {
      activeTextColor.value = props.isCollapse ? "#409EFF" : "#fff";
    });

    return {
      handleOpen,
      handleClose,
      handleSelect,
      textColor,
      activeTextColor,
    };
  },
};
</script>
<style lang="less" scoped>
:deep(.iconfont) {
  margin-right: 5px;
  // color: #fff;
}

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

.el-menu {
  border-right: none;

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
