<template>
  <div class="my-fixed-container">
    <el-scrollbar class="left">
      <div class="el-scrollbar-container">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </el-scrollbar>
    <div class="right">
      <div class="search_wrap">
        <MyTableHeader
          :searchList="searchListSystem"
          :btnList="btnListSystem"
          size="mini"
          @search="searchEvent"
          @btnClick="btnClick"
        />
      </div>
      <div class="table_wrap">
        <MyTableBody
          :border="true"
          :tableData="tableData"
          :tableHeader="tableFied"
          :tableOperations="tableOperations"
          operationsFixed="right"
          operationswidth="120"
          @btnClick="btnClick"
        />
      </div>
      <MyPagination :total="400" @pageChange="pageChange" />
    </div>
  </div>
</template>

<script>
import MyTableHeader from "@/views/Admin/components/table/TableHeader.vue";
import MyTableBody from "@/views/Admin/components/table/TableBody.vue";
import MyPagination from "@/views/Admin/components/pagination/index.vue";

import mixin from "@/mixin/basemixin";

export default {
  name: "routerLists",
  mixins: [mixin],
  data() {
    return {
      searchListSystem: [
        { type: "input", label: "名称", parameter: "name" },
        { type: "input", label: "编码", parameter: "code" },
      ],
      btnListSystem: [
        { type: "", label: "新增", icon: "icon-icon-test30", method: "add" },
        { type: "", label: "重置", icon: "icon-icon-test41", method: "rest" },
        {
          type: "",
          label: "切换至路由",
          icon: "icon-icon-test41",
          method: "toggleType",
        },
      ],
      tableFied: [
        { type: "selection", label: "", width: "40px", fixed: true },
        { type: "index", label: "序号", width: "60px", fixed: true },
        { label: "Date", prop: "date", width: "150" },
        { label: "Name", prop: "name", width: "120" },
        { label: "State", prop: "state", width: "120" },
        { label: "City", prop: "city", width: "120" },
        { label: "Address", prop: "address", width: "600" },
        { label: "Zip", prop: "zip", width: "120" },
      ],
      tableOperations: [
        { label: "删除", method: "deleteRow", icon: "" },
        { label: "删除", method: "deleteRow", icon: "" },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-08",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-06",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-07",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "No. 189, Grove St, Los Angeles",
          zip: "CA 90036",
        },
      ],
      formInline: {
        user: "",
        region: "",
      },
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 200,
      },
    };
  },
  components: { MyTableHeader, MyTableBody, MyPagination },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`current page: ${val}`);
    },
    handleCurrentChange(val) {
      console.log(`${val} items per page`);
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.my-fixed-container {
  margin: 20px;
  padding: 20px;
  width: calc(100% - 40px);
  height: calc(100% - 41px - 40px);
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;

  .left,
  .right {
    float: left;
    height: 100%;
    min-height: 200px;
    box-sizing: border-box;
  }
  .left {
    position: relative;
    width: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
    .el-scrollbar-container {
      margin: 20px;
    }
  }
  :deep(.right) {
    width: calc(100% - 200px);
    padding: 0 20px;

    .search_wrap {
      height: 56px;
      overflow: hidden;
    }

    .table_wrap {
      height: calc(100% - 56px - 40px);
    }

    .el-pagination {
      justify-content: center;
      margin-top: 6px;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
