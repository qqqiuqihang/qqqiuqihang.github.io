<template>
  <div class="my-main-container">workflowDetail</div>
</template>

<script>
export default {
  name: "workflowDetail",
  data() {
    return {
      data: {},
    };
  },
  components: {},
  created() {
    this.data = JSON.parse(this.$route.params?.data ?? "{}");
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
