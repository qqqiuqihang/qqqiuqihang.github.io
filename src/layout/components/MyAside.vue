<template>
  <el-scrollbar>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      text-color="#5b80b4"
      active-text-color="#fff"
    >
      <el-sub-menu
        :index="fristItem.path"
        v-for="(fristItem, index) in sidebarList"
        :key="index"
      >
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ fristItem.name }}</span>
        </template>
        <el-menu-item
          :index="seconed.path"
          v-for="(seconed, index) in fristItem.children"
          :key="index"
        >
          <i class="el-icon-location"></i>
          <span>{{ seconed.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "MyAside",
  props: {
    sidebarList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  setup(props, context) {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return { handleOpen, handleClose };
  },
};
</script>
<style lang="less" scoped>
.el-scrollbar {
  height: calc(100% - 50px);
}

/deep/ .el-menu,
/deep/.el-sub-menu__title {
  background-color: transparent;
}

/deep/.el-sub-menu__title:hover {
  background-color: #fff !important;
}

.el-menu /deep/.el-menu-item {
  outline: 0;
  background-color: #263d6b !important;

  &:hover {
    background-color: #fff !important;
  }
}

// 选中
/deep/.is-active {
  background: #f00 !important;
}
</style>
