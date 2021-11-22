<template>
  <!-- <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/welcome' }" @click="clickHandler('')">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb> -->
  <div class="my_breadcrumb">
    <div class="my_breadcrumb_item">
      <span
        class="my_breadcrumb_txet is_link"
        @click="clickHandler({ val: '', path: '/welcome' })"
      >
        首页
      </span>
      <!-- <span class="my_breadcrumb_separate">&gt;</span> -->
    </div>
    <MyBreadcrumbItem
      v-if="breadcrumbList && breadcrumbList.length > 1"
      :list="breadcrumbList"
    />
  </div>
</template>

<script>
import MyBreadcrumbItem from "./MyBreadcrumbItem.vue";
export default {
  name: "MyBreadcrumb",
  props: {
    breadcrumbList: {
      type: [Array, String],
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: { MyBreadcrumbItem },
  created() {},

  methods: {
    clickHandler(val) {
      this.$emit("clickHandler", val);
    },
  },
};
</script>

<style lang="less" scoped>
.my_breadcrumb {
  display: flex;
  color: white;
  font-size: 14px;
}

.my_breadcrumb_item {
  .my_breadcrumb_txet {
    font-weight: 100;
    &.is_link {
      font-weight: 700;
      &:hover {
        color: #409eff;
      }
      cursor: pointer;
    }
  }
  .my_breadcrumb_separate {
    margin: 0 8px;
  }
}

.el-breadcrumb {
  margin-right: 10px;
}

// :deep(.el-breadcrumb__item) {
//   .el-breadcrumb__inner {
//     color: white;
//     &:hover {
//       color: #409eff;
//     }
//   }
//   &:last-child {
//     .el-breadcrumb__inner:hover {
//       color: white;
//     }
//   }
// }
</style>
