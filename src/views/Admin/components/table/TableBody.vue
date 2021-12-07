<template>
  <el-table
    :data="tableData"
    row-class-name="rowTableStyle"
    cell-class-name="cellTableStyle"
    header-row-class-name="rowHeaderTableStyle"
    header-cell-class-name="cellHeaderTableStyle"
  >
    <el-table-column type="index" label="序号" />
    <el-table-column
      :prop="item"
      :label="item"
      v-for="(item, index) in tableHeader"
      :key="index"
    />
  </el-table>
</template>

<script>
export default {
  name: "TableBody",
  data() {
    return {
      tableHeader: ["date", "name", "address"],
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
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
