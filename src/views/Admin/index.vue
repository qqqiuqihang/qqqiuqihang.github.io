<template>
  <MyBreadcrumb :list="breadcrumbList" />
  <div class="index-container">首页</div>
</template>

<script>
import MyBreadcrumb from "@/layout/components/MyBreadcrumb.vue";
export default {
  name: "AdminIndex",
  data() {
    return {
      breadcrumbList: [
        { path: "/welcome", name: "homepage" },
        { path: "/welcome", name: "homepage" },
        { path: "/welcome", name: "homepage" },
      ],
    };
  },
  components: { MyBreadcrumb },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
