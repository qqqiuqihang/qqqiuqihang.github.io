<template>
  <div class="home" ref="home">
    <div class="box_shadow">dfsss</div>
  </div>
</template>

<script>
// import { ref, reactive, toRefs } from "vue";
export default {
  name: "Home",
  components: {},
  data() {
    return {
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
  position: absolute;
  top: 50%;
  right: 10%;
  width: 100px;
  height: 200px;
  background-color: #fff;
  transform: translateY(-50%) rotateZ(-30deg);
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
