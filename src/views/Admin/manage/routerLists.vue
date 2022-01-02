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
      <el-table
        header-cell-class-name="cellHeaderTableStyle"
        header-row-class-name="rowHeaderTableStyle"
        :data="tableData"
        height="calc(100% - 40px)"
        border
      >
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click.prevent="deleteRow(scope.$index)"
            >
              Remove
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "routerLists",
  data() {
    return {
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
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 200,
      },
    };
  },
  methods: {
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

    .rowHeaderTableStyle,
    .cellHeaderTableStyle {
      background-color: #444;
    }

    .el-table__fixed {
      bottom: 6px !important;
    }
    .el-table__fixed-right {
      right: 6px !important;
    }
    .el-table__fixed-right-patch {
      width: 6px !important;
    }

    .el-table__body-wrapper {
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #0003;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
      }
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
