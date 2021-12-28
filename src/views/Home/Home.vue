<template>
  <div class="home" ref="home">
    <div class="box_shadow">
      <p v-for="(item, index) in btnToGo" :key="index" @click="togo(item)">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
// import { ref, reactive, toRefs } from "vue";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      btnToGo: [
        {
          title: "个人主页",
          path: "my",
          name: "My",
        },
        {
          title: "文章",
          path: "title",
          name: "Title",
        },
        {
          title: "后台管理",
          path: "mylayout",
          name: "MyLayout",
        },
        {
          title: "数据可视化",
          path: "data",
          name: "Data",
        },
        {
          title: "地图",
          path: "map",
          name: "Map",
        },
      ],
      title:
        " I am loser, but I never lost hope. Therefore, I have been working silently. ",
    };
  },
  create() {},
  mounted() {
    this.showTitleList();
  },
  methods: {
    showTitleList() {
      let p = document.createElement("p");
      p.className = "title";
      this.title.split("").forEach((item, index) => {
        let span = document.createElement("span");
        span.textContent = item;
        span.className = "title_item";
        span.style.animationDelay = `${index * 0.05}s`;
        p.appendChild(span);
      });
      this.$refs.home.appendChild(p);
    },
    // 跳转
    togo(item) {
      if (
        item.path === "my" ||
        item.path === "mylayout" ||
        item.path === "map"
      ) {
        this.$router.push(item.name);
      } else {
        this.$message.info("功能开发中！！！");
      }
    },
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  background: url("~@/assets/images/homeBackGround.jpeg") no-repeat center;
  background-size: cover;
  /deep/ .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    font-size: 2em;
    line-height: 1.8;
    font-weight: 600;
    font-family: Lora, serif;
    white-space: pre;
    .title_item {
      animation: scorllTextShow 0.8s ease-out both;
    }
  }
}

.box_shadow {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  right: 20%;
  width: 100px;
  height: 80%;
  // background-color: #eee;
  background: linear-gradient(
    to right,
    #cd93ff,
    #70e2ff,
    #9fff5b,
    #ffe83f,
    #ffa647,
    #ff75c3
  );
  transform: translateY(-50%) rotateZ(-30deg) skewY(0deg);
  box-shadow: -20px 20px 0 rgb(255, 255, 255, 1);
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 100%;
    // background-color: #eee;
    background: linear-gradient(
      to right,
      #cd93ff,
      #70e2ff,
      #9fff5b,
      #ffe83f,
      #ffa647,
      #ff75c3
    );
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    transform: translateY(10px) skewY(-45deg);
    box-sizing: border-box;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    // background-color: #eee;
    background: linear-gradient(
      to right,
      #cd93ff,
      #70e2ff,
      #9fff5b,
      #ffe83f,
      #ffa647,
      #ff75c3
    );
    border-top: 1px solid #ddd;
    transform: translateX(-10px) skewX(-45deg);
    box-sizing: border-box;
  }
  p {
    position: relative;
    flex: 1;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: #409eff;
      color: white;
      &::before {
        background: none;
        background-color: #409eff;
        color: white;
      }
    }
    &:active {
      background-color: yellowgreen;
      &::before {
        background-color: yellowgreen;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      width: 20px;
      height: 100%;
      // background-color: #eee;
      background: linear-gradient(
        to right,
        #cd93ff,
        #70e2ff,
        #9fff5b,
        #ffe83f,
        #ffa647,
        #ff75c3
      );
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      transform: translateY(10px) skewY(-45deg);
      box-sizing: border-box;
    }
  }
}

@keyframes scorllTextShow {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
