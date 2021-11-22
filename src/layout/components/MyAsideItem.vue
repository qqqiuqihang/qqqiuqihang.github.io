<template>
  <el-sub-menu
    popper-class="sidebar-popup"
    :index="list.path"
    v-if="isHaveChildren(list)"
  >
    <template #title>
      <i class="iconfont" :class="`icon-icon-${list.icon}`"></i>
      <span>{{ list.name }}</span>
    </template>
    <MyAsideItem
      :list="item"
      v-for="(item, index) in list.children"
      :key="index"
    />
  </el-sub-menu>
  <el-menu-item
    :index="list.path"
    :route="list.route"
    v-else
    @click="togoTarget($event, list)"
  >
    <!--  -->
    <i class="iconfont" :class="`icon-icon-${list.icon}`"></i>
    <span>{{ list.name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "MyAsideItem",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 点击事件
    togoTarget(e, val) {
      this.$store.commit("setTabbarList", val);
    },
    // 是否有子节点
    isHaveChildren(val) {
      if (val && val.children && val.children.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
