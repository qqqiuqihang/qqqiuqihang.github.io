<template>
  <el-breadcrumb separator-class="el-icon-arrowRight">
    <el-breadcrumb-item
      :to="{ path: item.path }"
      :replace="item.replace ? true : false"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons";
</script>

<script>
// import { ArrowRight } from "@element-plus/icons";
export default {
  name: "MyBreadcrumb",
  props: {
    list: {
      type: Array,
      default: () => [{ path: "/", name: "MyBreadcrumb" }],
    },
  },
  data() {
    return {};
  },
  //   components: { ArrowRight },
  methods: {},
};
</script>

<style lang="less" scoped></style>
