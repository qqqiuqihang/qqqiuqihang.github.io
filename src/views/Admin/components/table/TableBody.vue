<template>
  <div class="my_table_wrap">
    <el-table
      ref="myTables"
      row-class-name="rowTableStyle"
      cell-class-name="cellTableStyle"
      header-row-class-name="rowHeaderTableStyle"
      header-cell-class-name="cellHeaderTableStyle"
      height="100%"
      :data="tableData"
      :border="border"
      :stripe="stripe"
      :empty-text="emptyText"
      @row-click="
        (row, column, event) => $emit('rowClick', { row, column, event })
      "
    >
      <slot name="before"></slot>
      <!-- 表格的每一列 -->
      <el-table-column
        :type="item.type"
        :prop="item.prop"
        :label="item.label"
        :fixed="item.fixed"
        :width="item.width"
        v-for="(item, index) in tableHeader"
        :key="index"
      />
      <slot name="after"></slot>
      <!-- 表格的最后操作列 -->
      <el-table-column
        label="操作"
        :fixed="operationsFixed"
        :width="operationswidth"
        v-if="tableOperations.length > 0"
      >
        <template #default>
          <el-button
            type="text"
            :size="item.size || 'small'"
            @click.prevent="$emit('btnClick', item.method)"
            v-for="(item, index) in tableOperations"
            :key="index"
          >
            <span class="iconfont" :class="item.icon" v-if="item.icon"></span>
            <span class="">{{ item.label }}</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableBody",
  props: {
    tableHeader: {
      type: Array,
      required: true,
    },
    tableOperations: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    operationsFixed: {
      type: [Boolean, String],
      default: false,
    },
    operationswidth: {
      type: String,
      default: "",
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: "暂无数据",
    },
  },
  emits: ["rowClick", "btnClick"],
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$refs.myTables.doLayout();
    });
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.my_table_wrap {
  width: 100%;
  height: 100%;

  // :deep(.rowTableStyle) {
  //   cursor: pointer;
  // }
  :deep(.rowHeaderTableStyle),
  :deep(.cellHeaderTableStyle) {
    background-color: #444;
  }

  // 当没有滚动条的时候
  :deep(.el-table__body-wrapper.is-scrolling-none) ~ {
    .el-table__fixed-right {
      right: 0px !important;
    }
  }

  // 当有滚动条的时候 默认偏移距离
  :deep(.el-table--scrollable-y) {
    .el-table__fixed-right,
    // .el-table__fixed,
    .el-table__fixed-right-patch {
      right: 6px !important;
    }
    .el-table__fixed-right-patch {
      background-color: #444;
    }
  }

  :deep(.el-table__body-wrapper) {
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #0003;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
}
</style>
