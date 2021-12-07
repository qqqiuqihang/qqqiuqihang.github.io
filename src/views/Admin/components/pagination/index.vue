<template>
  <el-pagination
    v-model:currentPage="currentPage4"
    :small="false"
    :background="false"
    :hide-on-single-page="false"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    :total="400"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    popper-class="popperPagination"
  >
  </el-pagination>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Pagination",
  data() {
    return {};
  },
  setup() {
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`);
    };

    return {
      currentPage4: ref(4),
      handleSizeChange,
      handleCurrentChange,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
