<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/welcome' }"> 首页 </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyBreadcrumb",
  data() {
    return {};
  },
  created() {
    // console.log(this.$store.state);
  },
  methods: {},
  computed: mapState({
    breadcrumbList: (state) => state.user.breadcrumbList,
  }),
};
</script>

<style lang="less" scoped></style>
