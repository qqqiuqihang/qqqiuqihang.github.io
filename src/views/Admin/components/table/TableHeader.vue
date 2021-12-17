<template>
  <el-form
    :inline="true"
    :model="formInline"
    :size="'small'"
    class="demo-form-inline"
  >
    <!-- 搜索框 -->
    <el-form-item
      label="测试1"
      v-for="(item, index) in searchList"
      :key="index"
    >
      <!-- 搜索框 -->
      <el-input
        v-model="formInline.user"
        placeholder="请输入内容"
        v-if="item.type === 'input'"
      >
        <template #append>
          <el-button><span class="iconfont icon-icon-test12"></span></el-button>
        </template>
      </el-input>
      <!-- 下拉 -->
      <el-select v-model="formInline.region" placeholder="请输入内容">
        <el-option label="测试1" value="shanghai"></el-option>
        <el-option label="测试2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="测试2">
      <el-select v-model="formInline.region" placeholder="请输入内容">
        <el-option label="测试1" value="shanghai"></el-option>
        <el-option label="测试2" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
    <!-- 按钮 -->
    <el-form-item v-for="(item, index) in btnList" :key="index">
      <el-button class="btn" @click="$emit('btnClick', 'add')">
        <span class="iconfont icon-icon-test30"></span>
        <span class="">添加</span>
      </el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button class="btn" @click="$emit('btnClick', 'reset')">
        <el-button class="btn" @click="btnClick('add')">
        <span class="iconfont icon-icon-test41"></span>
        <span class="">重置</span>
      </el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
export default {
  name: "TableHeader",
  props: {
    searchList: {
      type: Array,
      default: () => [],
    },
    btnList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  emits: ["btnClick"],
  components: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    btnClick(val) {
      this.$emit("btnClick", val);
    },
  },
};
</script>
<style lang="less" scoped>
.btn {
  span {
    vertical-align: middle;
  }
  .iconfont {
    margin-right: 5px;
  }
}
</style>
