<template>
  <div class="my-main-container">
    <div class="person-container">
      <el-scrollbar>
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
      <span>I'm routerLists</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "routerLists",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
