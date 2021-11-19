<template>
  <div class="importExcel_container">
    <div>
      <span>I'm import EXCEL</span>
    </div>
    <div>
      <el-button @click="toExport">点击导出</el-button>
    </div>
  </div>
</template>

<script>
import ExportJsonExcel from "js-export-excel";

export default {
  name: "importExcel",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    toExport() {
      let sheetData = [
        [
          "张三333",
          "开发部",
          "234561003",
          "3636363636",
          100,
          50,
          50,
          50,
          50,
          50,
          50,
          50,
          50,
          50,
          50,
          50,
          5,
          50,
          50,
          50,
          50,
          50,
          "2022-01",
        ],
        [
          "张三333",
          "开发部",
          "234561003",
          "3636363636",
          100,
          51,
          51,
          51,
          51,
          51,
          51,
          51,
          51,
          51,
          51,
          51,
          6,
          51,
          51,
          51,
          51,
          51,
          "2022-02",
        ],
        [
          "张三333",
          "开发部",
          "234561003",
          "3636363636",
          100,
          52,
          52,
          52,
          52,
          52,
          52,
          52,
          52,
          52,
          52,
          52,
          7,
          52,
          52,
          52,
          52,
          52,
          "2022-03",
        ],
        [
          "张三333",
          "开发部",
          "234561003",
          "3636363636",
          100,
          53,
          53,
          53,
          53,
          53,
          53,
          53,
          53,
          53,
          53,
          53,
          8,
          53,
          53,
          53,
          53,
          53,
          "2022-04",
        ],
        [
          "张三333",
          "开发部",
          "234561003",
          "3636363636",
          100,
          54,
          54,
          54,
          54,
          54,
          54,
          54,
          54,
          54,
          54,
          54,
          9,
          54,
          54,
          54,
          54,
          54,
          "2022-05",
        ],
        [
          "",
          "",
          "",
          "",
          500,
          260,
          260,
          260,
          260,
          260,
          260,
          260,
          260,
          260,
          260,
          260,
          35,
          260,
          260,
          260,
          260,
          260,
          "5",
        ],
      ];
      sheetData[sheetData.length - 1][0] = "总计";
      const option = {
        fileName: "excel",
        datas: [{ sheetData: sheetData }],
      };

      console.log(option);

      const toExcel = new ExportJsonExcel(option); //new
      toExcel.saveExcel(); //保存
    },
  },
};
</script>
<style lang="less" scoped></style>
