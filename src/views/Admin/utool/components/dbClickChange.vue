<template>
  <div v-show="flag">
    <span v-if="item.tag"></span>
    <span @dblclick="dblclick">{{ item.value }}</span>
  </div>
  <div v-show="!flag">
    <input
      class="input_temporary"
      ref="input"
      type="text"
      v-model="value"
      @blur="blurInput"
    />
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
    index: {
      type: Number,
      default: 0,
    },
  },
  emits: ["change"],
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
      this.value = this.item.value;
      this.flag = false;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    blurInput() {
      this.flag = true;
      this.$emit("change", {
        ...this.item,
        value: this.value,
        index: this.index,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.input_temporary {
  // border: none;
  // outline: none;
  width: 100%;
  min-width: 50px;
}
</style>
