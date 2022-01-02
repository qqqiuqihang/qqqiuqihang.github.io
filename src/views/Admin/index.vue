<template>
  <div class="index_container">
    <div class="top_wrap">
      <el-card class="box-card">
        <div class="card_body_wrap">
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="card_body_wrap">
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
          <span>Welcome to the page!!!</span>
        </div>
      </el-card>
    </div>
    <el-card class="box-card" style="margin-top: 20px">
      <div class="card_body_wrap">
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
        <span>Welcome to the page!!!</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AdminIndex",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.index_container {
  overflow: hidden;
  overflow-y: scroll;
  padding: 20px;
  width: 100%;
  height: calc(100% - 1px);
  border-radius: 10px;
  background-color: #efefef;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d0d3d7;
    &:hover {
      background-color: #bdbfc4;
    }
  }
  box-sizing: border-box;
}
.top_wrap {
  position: relative;
  overflow: hidden;
  .el-card {
    width: 49%;

    .card_body_wrap {
      background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        Indigo,
        purple
      );
      background-clip: text;
      color: transparent;
    }
    &:first-child {
      float: left;
    }
    &:last-child {
      float: right;
    }
  }
}
</style>
