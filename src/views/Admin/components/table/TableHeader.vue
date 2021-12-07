<template>
  <el-form
    :inline="true"
    :model="formInline"
    :size="'small'"
    class="demo-form-inline"
  >
    <el-form-item label="测试1">
      <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="测试2">
      <el-select v-model="formInline.region" placeholder="请输入内容">
        <el-option label="测试1" value="shanghai"></el-option>
        <el-option label="测试2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "TableHeader",
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="less" scoped></style>
