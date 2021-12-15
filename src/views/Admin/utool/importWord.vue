<template>
  <div class="my-main-container">
    <el-form size="mini" inline>
      <el-form-item label="尺寸：">
        <el-radio-group v-model="size">
          <el-radio label="">Default</el-radio>
          <el-radio label="medium">Medium</el-radio>
          <el-radio label="small">Small</el-radio>
          <el-radio label="mini">Mini</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="每行数量：">
        <el-input-number
          v-model="num"
          :min="1"
          :max="10"
          @change="handleChange"
        />
      </el-form-item>
      <el-form-item label="排列方向：">
        <el-radio-group v-model="direction">
          <el-radio label="horizontal">Horizontal</el-radio>
          <el-radio label="vertical">Vertical </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="createWord">点击导出</el-button>
      </el-form-item>
    </el-form>

    <el-descriptions
      title="用户信息"
      :size="size"
      :column="num"
      border
      :direction="direction"
    >
      <el-descriptions-item v-for="(item, index) in formLists" :key="index">
        <template #label>
          <!-- <el-icon><user /></el-icon> -->
          {{ item.label }}
        </template>
        <DbClickChange :item="item" :index="index" @change="itemChange" />
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import DbClickChange from "./components/dbClickChange";
import Docxtemplater from "docxtemplater"; //word文档生成
import PizZip from "pizzip";
import { saveAs } from "file-saver";
import PizZipUtils from "pizzip/utils/index.js";

export default {
  name: "importWord",
  data() {
    return {
      size: "",
      num: 4,
      direction: "horizontal",
      formLists: [
        { value: "kooriookami", label: "用户名：", tag: "" },
        { value: "18100000000", label: "电话：", tag: "" },
        { value: "杭州", label: "所在地：", tag: "" },
        { value: "男", label: "性别：", tag: "" },
        { value: "挺多", label: "爱好：", tag: "" },
        { value: "喜欢建造、收集类型", label: "喜欢的游戏：", tag: "" },
        { value: "页面制作", label: "工作：", tag: "" },
        { value: "想想", label: "想去的地方：", tag: "" },
        { value: "一夜暴富", label: "梦想：", tag: "" },
        { value: "超能力算吗", label: "目标：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "籍贯：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
      ],
    };
  },
  components: { DbClickChange },
  created() {},
  mounted() {},
  methods: {
    itemChange(item) {
      // console.log(item);
      this.formLists[item.index].value = item.value;
    },
    handleChange(value) {
      console.log(value);
    },
    // 生成文档
    createWord() {
      let obj = {};
      // this.formLists.forEach((item, index) => {
      //   obj["label" + index] = item.label;
      //   obj["value" + index] = item.value;
      // });
      // 遍历数据 固定15条 ，模板只有15条
      for (let i = 0; i < 16; i++) {
        obj["label" + i] = this.formLists[i]?.label ?? "";
        obj["value" + i] = this.formLists[i]?.value ?? "";
      }
      try {
        PizZipUtils.getBinaryContent(
          "templater/input.docx",
          (error, content) => {
            if (error) {
              throw error;
            }
            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
              paragraphLoop: true,
              linebreaks: true,
            });
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render(obj);
            const out = doc.getZip().generate({
              type: "blob",
              mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            // Output the document using Data-URI
            saveAs(out, "output.docx");
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
