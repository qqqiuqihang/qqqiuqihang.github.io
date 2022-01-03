<template>
  <el-form
    :inline="true"
    :model="formInline"
    :size="size"
    class="demo-form-inline"
  >
    <slot name="searchBefore"></slot>
    <!-- 搜索框 -->
    <el-form-item
      :label="item.label"
      v-for="(item, index) in searchList"
      :key="index"
    >
      <!-- 搜索框 -->
      <el-input
        v-model="formInline[item.parameter]"
        placeholder="请输入内容"
        v-if="item.type === 'input'"
      >
        <template #append>
          <el-button @click="$emit('search', formInline)"
            ><span class="iconfont icon-icon-test12"></span
          ></el-button>
        </template>
      </el-input>
      <!-- 下拉 -->
      <el-select
        v-model="formInline.region"
        placeholder="请输入内容"
        v-if="item.type === 'select'"
      >
        <el-option label="测试1" value="shanghai"></el-option>
        <el-option label="测试2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <slot name="searchAfter"></slot>
    <!-- 按钮 -->
    <el-form-item v-for="(item, index) in btnList" :key="index">
      <el-button class="btn" @click="$emit('btnClick', item.method)">
        <span class="iconfont" :class="item.icon"></span>
        <span class="">{{ item.label }}</span>
      </el-button>
    </el-form-item>
    <slot name="btnBefore"></slot>
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
    size: {
      type: String,
      default: "",
    },
  },
  emits: ["search", "btnClick"],
  data() {
    return {
      formInline: {},
    };
  },
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
