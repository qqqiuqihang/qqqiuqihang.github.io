<template>
  <div class="my-main-container">
    <div class="workflow_wrap">
      <TableHeader
        :searchList="searchList"
        :btnList="btnList"
        @btnClick="btnClick"
      />
      <TableBody :tableData="tableData" @rowClick="rowClick" />
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
    return {
      btnList: [
        { name: "btnList", icon: "btn", method: "get" },
        { name: "btnList", icon: "btn", method: "get" },
      ],
      searchList: [
        { name: "btnList", icon: "btn", method: "get" },
        { name: "btnList", icon: "btn", method: "get" },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
  components: { TableHeader, TableBody },
  created() {},
  mounted() {},
  methods: {
    rowClick(val) {
      this.$router.push({
        name: "workflowDetail",
        params: {
          data: JSON.stringify(val),
        },
      });
    },
    btnClick(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="less" scoped></style>
