<template>
  <div v-show="flag">
    <span v-if="item.tag"></span>
    <span @dblclick="dblclick">{{ item.value }}</span>
  </div>
  <div v-show="!flag">
    <input ref="input" type="text" v-model="value" @blur="blurInput" />
  </div>
</template>

<script>
export default {
  name: "dbClickChange",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      flag: true,
      value: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    dblclick() {
      // console.log("我被双击了", e.target, item, index);
      // const currentElement = e.srcElement;
      // const parentElement = currentElement.parentNode;
      // const el = document.createElement("input");
      // el.className = "temporaryInput";
      // el.type = "text";
      // el.value = item.value;
      // parentElement.replaceChild(el, currentElement);
      // el.addEventListener("blur", this.blurInput);
      // el.focus();
      this.$nextTick(() => {
        console.log("我被双击了", this.$refs.input);
        this.flag = false;
        // this.$refs.input.focus();
      });
    },

    blurInput() {
      // console.log("失去焦点", e, e.srcElement.value);
      // const parentElement = e.srcElement.parentNode;
      // const el = document.createElement("span");
      // el.innerHTML = e.srcElement.value;
      // parentElement.replaceChild(el, e.srcElement);

      console.log("失去焦点");
      this.flag = true;
    },
  },
};
</script>
<style lang="less" scoped></style>
