<template>
  <el-tabs
    v-model="activeName"
    type="card"
    :closable="number === 1 ? false : true"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
  >
    <el-tab-pane
      :label="item.label"
      :name="item.name"
      v-for="(item, index) in list"
      :key="index"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "MyTabs",
  // model: {
  //   prop: "list",
  //   event: "change",
  // },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeName: "first",
      number: 0,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // tab 选项卡点击事件
    tabClick(tab) {
      // console.log(tab.index, tab.paneName);
      const tabs = this.list;
      this.togoTarget(tabs[tab.index]);
    },

    // 路由跳转
    togoTarget(target) {
      console.log(target);
    },

    // 移除 tab 选项卡
    tabRemove(targetName) {
      const tabs = this.list;
      let activeName = this.activeName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            this.togoTarget(nextTab);
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.activeName = activeName;
      const newList = tabs.filter((tab) => tab.name !== targetName);
      this.$emit("update:list", newList);
    },
  },
  watch: {
    list: {
      handler: function (newVal) {
        console.log(newVal);
        this.number = newVal.length;
      },
    },
  },
};
</script>
<style lang="less" scoped></style>
