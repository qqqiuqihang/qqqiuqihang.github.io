<template>
  <div class="my-main-container">
    <div class="importWrap">
      <div class="left">
        <el-button type="primary" @click="openTheImport">点击导入</el-button>
        <el-button
          type="primary"
          @click="toExport(tableData, tableHeader)"
          style="margin-left: 10px"
        >
          点击导出
        </el-button>
        <el-upload
          class="upload-demo"
          ref="uploadFile"
          drag
          action="#"
          accept=".xls,.xlsx"
          :auto-upload="false"
          :multiple="false"
          :show-file-list="false"
          :on-change="onFileChangeCopy"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽文件到这里或者<em>点击选择文件</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">.xls,.xlsx文件且大小不超过500kb</div>
          </template>
        </el-upload>
      </div>
      <div class="right">
        <el-table
          class="my_table_wrapper"
          :data="tableData"
          border
          row-class-name="rowTableStyle"
          cell-class-name="cellTableStyle"
          header-row-class-name="rowHeaderTableStyle"
          header-cell-class-name="cellHeaderTableStyle"
          :cell-style="tableCellStyle"
          :header-cell-style="tableHeaderCellStyle"
        >
          <el-table-column type="index" label="序号" />
          <el-table-column
            :prop="item"
            :label="item"
            v-for="(item, index) in tableHeader"
            :key="index"
          />
        </el-table>
      </div>
    </div>
    <!-- 弹出框 -->
    <el-dialog
      v-model="dialogVisible"
      title="上传文件"
      width="570px"
      :before-close="handleClose"
    >
      <div class="uploadFileWrap">
        <el-upload
          class="upload-demo"
          ref="uploadFile"
          drag
          action="#"
          accept=".xls,.xlsx"
          :auto-upload="false"
          :multiple="false"
          :on-change="onFileChange"
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            拖拽文件到这里或者<em>点击选择文件</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">.xls,.xlsx文件且大小不超过500kb</div>
          </template>
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="beTrueImport">确 认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import ExportJsonExcel from "js-export-excel";
import { UploadFilled } from "@element-plus/icons";

export default {
  name: "importExcel",
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
      dialogVisible: false,
    };
  },
  components: { UploadFilled },
  created() {},
  mounted() {},
  methods: {
    beTrueImport(fileNamedData) {
      const _self = this;
      let uploadFile;
      if (fileNamedData) {
        uploadFile = fileNamedData;
      } else {
        uploadFile = this.$refs.uploadFile.uploadFiles[0];
      }
      // 获取上传的文件对象
      // const { raw: files } = uploadFile[0];
      const files = uploadFile.raw;
      // 通过FileReader对象读取文件
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        try {
          const { result } = event.target;
          // 以二进制流方式读取得到整份excel表格对象
          const workbook = XLSX.read(result, { type: "binary" });
          let data = []; // 存储获取到的数据
          // 遍历每张工作表进行读取（这里默认只读取第一张表）
          for (const sheet in workbook.Sheets) {
            if (Object.hasOwnProperty.call(workbook.Sheets, sheet)) {
              // 利用 sheet_to_json 方法将 excel 转成 json 数据
              data = data.concat(
                XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { defval: "" })
              );
              break; // 如果只取第一张表，就取消注释这行
            }
          }
          _self.setTableArray(data);
        } catch (e) {
          // 这里可以抛出文件类型错误不正确的相关提示
          // console.log("文件类型不正确");
          return;
        }
      };
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(files);
    },
    setTableArray(val) {
      this.tableData = [...val];
      this.tableHeader = Object.keys(val[0]);
      this.dialogVisible = false;
    },
    openTheImport() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
    toExport(data, headData) {
      const option = {
        fileName: "excel",
        datas: [
          { sheetData: data, sheetFilter: headData, sheetHeader: headData },
        ],
      };
      const toExcel = new ExportJsonExcel(option); //new
      toExcel.saveExcel(); //保存
    },
    onFileChange(file) {
      this.$refs.uploadFile.uploadFiles = [];
      this.$refs.uploadFile.uploadFiles.push(file);
    },
    onFileChangeCopy(file) {
      this.$refs.uploadFile.uploadFiles = [];
      this.beTrueImport(file);
    },
    // 修改 table cell边框的背景色
    tableCellStyle() {
      // return "border-color: #868686;";
    },
    // 修改 table header cell的背景色
    tableHeaderCellStyle() {
      // return "border-color: #868686; color: #606266;";
    },
  },
};
</script>
<style lang="less" scoped>
@mybordercolor: #333; //定义变量作为样式属性值使用

.my-main-container {
  .importWrap {
    margin: 20px;
    & > div {
      display: inline-block;
    }
    .left {
      width: 25%;
    }
    .right {
      width: 75%;
      padding-left: 20px;
      vertical-align: top;
      box-sizing: border-box;
    }
  }
  :deep(.el-table) {
    margin: 20px 20px 0;
    width: 100%;
    border-color: @mybordercolor;
    &::before,
    &::after {
      background-color: @mybordercolor;
    }

    // .rowTableStyle {
    //   border-color: #096;
    // }
    .cellTableStyle {
      border-color: @mybordercolor;
    }
    // .rowHeaderTableStyle {
    //   border-color: #096;
    // }
    .cellHeaderTableStyle {
      border-color: @mybordercolor;
      background-color: #444;
    }
  }
}
:deep(.upload-demo) {
  margin-top: 20px;
  text-align: left;
  .el-upload-dragger {
    width: 300px;
    height: 150px;
    .el-icon--upload {
      font-size: 50px;
      margin: 30px 0 16px;
      line-height: 45px;
    }
  }
}
</style>
