<template>
  <div class="my_breadcrumb_item" v-for="(item, index) in list" :key="index">
    <span class="my_breadcrumb_separate">&gt;</span>
    <span class="my_breadcrumb_txet">{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  name: "MyBreadcrumbItem",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.my_breadcrumb_item {
  .my_breadcrumb_txet {
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
</style>
