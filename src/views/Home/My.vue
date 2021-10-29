<template>
  <div class="My_container">
    <div class="my_wrap">
      <!-- 头部 -->
      <div class="header">
        <div class="header_wrap">
          <span>首页</span>
        </div>
      </div>
      <!-- 中间列 -->
      <div class="center" ref="center">fdddddddddd</div>
      <!-- 左侧 -->
      <div class="left" ref="left">left</div>
      <!-- 右侧 -->
      <div class="right" ref="right">rigth</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    this.setLRPosition();
  },
  methods: {
    setLRPosition() {
      let center = this.$refs.center;
      let left = this.$refs.left;
      let right = this.$refs.right;
      let centerWidth = center.offsetWidth;
      let leftWidth = left.offsetWidth;
      let rightWidth = right.offsetWidth;
      left.style.transform = `translateX(-${
        centerWidth / 2 + leftWidth + 20
      }px)`;
      right.style.transform = `translateX(${
        centerWidth / 2 + rightWidth + 20
      }px)`;
    },
  },
};
</script>
<style lang="less" scoped>
.My_container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url(~@/assets/images/homeBackGround.jpeg) no-repeat center;
  background-size: cover;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #909399;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 3px;
  }

  .my_wrap {
    width: 100%;
  }
}

.header {
  height: 50px;
  background-color: pink;
}

.center {
  width: 50%;
  height: 1500px;
  margin: auto;
  background-color: #fff;
}

.left,
.right {
  position: fixed;
  top: 60px;
  height: calc(100% - 60px);
  background-color: #096;
}

.left {
  left: 50%;
  width: 300px;
}
.right {
  right: 50%;
  width: 200px;
}
</style>
