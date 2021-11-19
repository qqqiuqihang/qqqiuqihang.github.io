<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/welcome' }" @click="clickHandler('')">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <!-- @click="clickHandler(item)" -->
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MyBreadcrumb",
  data() {
    return {};
  },
  created() {
    this.getBreadcrumbList();
  },
  methods: {
    ...mapMutations([
      "setDefaultActive",
      "getBreadcrumbList",
      "setBreadcrumbList",
      "setTabbarListTwo",
    ]),
    clickHandler(val) {
      this.setDefaultActive(val);
      this.setBreadcrumbList(val);
      this.setTabbarListTwo([]);
    },
  },
  computed: mapState({
    breadcrumbList: (state) => state.user.breadcrumbList,
  }),
};
</script>

<style lang="less" scoped>
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
