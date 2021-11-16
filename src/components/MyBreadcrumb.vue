<template>
  <el-breadcrumb>
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

<script>
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
  create() {
    console.log(this.$store.state);
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
