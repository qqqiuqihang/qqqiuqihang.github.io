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
        <DbClickChange :item="item" />
        <!-- <span v-if="item.tag"></span>
        <span @dblclick="dblclick($event, item, index)">{{ item.value }}</span> -->
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import DbClickChange from "./components/dbClickChange";
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
        { value: "江苏省xx市xx区xxxx", label: "备注：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
        { value: "河南省xx市xx区xxxx", label: "地址：", tag: "" },
      ],
    };
  },
  components: { DbClickChange },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="less" scoped></style>
