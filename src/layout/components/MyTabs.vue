<template>
  <el-tabs
    v-model="active"
    type="card"
    :closable="tabbarList.length <= 1 ? false : true"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
  >
    <el-tab-pane
      :label="item.name"
      :name="item.path"
      v-for="(item, index) in tabbarList"
      :key="index"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch, ref } from "vue";
import { recursiveTraversalResver } from "@/assets/js/common";

export default {
  name: "MyTabs",
  data() {
    return {};
  },
  setup() {
    const active = ref("");
    const store = useStore();
    // const listLength = ref(0);

    watch(
      [() => store.state.user.tabbarList, () => store.state.user.defaultActive],
      () => {
        active.value = store.state.user.defaultActive;
      }
    );

    return {
      active,
      tabbarList: computed(() => store.state.user.tabbarList),
    };
  },
  components: {},
  created() {
    this.$store.commit("getTabbarList");
  },
  mounted() {},
  methods: {
    // tab 选项卡点击事件
    tabClick(tab) {
      const router = [...this.$store.state.user.personalConfig.routeList];
      const list = recursiveTraversalResver(router, tab.props.name);
      this.$store.commit("setDefaultActive", tab.props.name);
      this.$store.commit("setBreadcrumbList", list);
      this.$router.push({ path: tab.props.name });
    },

    // 移除 tab 选项卡
    tabRemove(targetName) {
      const tabs = [...this.tabbarList];
      let active = this.active;
      if (active === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.path === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) active = nextTab.path;
          }
        });
      }
      const router = [...this.$store.state.user.personalConfig.routeList];
      const list = recursiveTraversalResver(router, active);
      this.$store.commit("setDefaultActive", active);
      this.$store.commit("setBreadcrumbList", list);
      const newList = tabs.filter((tab) => tab.path !== targetName);
      console.log(active, list, newList);
      this.$store.commit("setTabbarListTwo", newList, 1);
      this.$router.push({ path: active });
    },
  },
};
</script>
<style lang="less" scoped></style>
