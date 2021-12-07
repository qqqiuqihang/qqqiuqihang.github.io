<template>
  <div class="my-main-container">
    <div class="workflow_wrap">
      <TableHeader />
      <TableBody />
      <div class="header"></div>
      <div class="contant"></div>
    </div>
  </div>
</template>

<script>
import TableHeader from "../components/table/TableHeader.vue";
import TableBody from "../components/table/TableBody.vue";
export default {
  name: "workflow",
  data() {
    return {};
  },
  components: { TableHeader, TableBody },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
