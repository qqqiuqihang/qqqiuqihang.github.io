<template>
  <el-pagination
    v-model:currentPage="page.currentPage"
    v-model:page-size="page.pageSize"
    :page-sizes="pageSizes"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSizes: {
      type: Array,
      default: () => [1, 3, 5, 7, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500],
    },
  },
  emits: ["pageChange"],
  data() {
    return {
      pagess: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },
  setup(props, { emit }) {
    const page = reactive({
      currentPage: 1,
      pageSize: 10,
    });

    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
      emit("pageChange", page);
    };
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`);
      emit("pageChange", page);
    };

    return { page, handleSizeChange, handleCurrentChange };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped></style>
