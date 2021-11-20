<template>
  <div class="header_container">
    <span>我是头部</span>
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item> <Plus />Action 1 </el-dropdown-item>
          <el-dropdown-item
            ><CirclePlusFilled />
            Action 2
          </el-dropdown-item>
          <el-dropdown-item><CirclePlus />Action 3</el-dropdown-item>
          <el-dropdown-item><Check />Action 4</el-dropdown-item>
          <el-dropdown-item><CircleCheck />Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span
      class="logout iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-"
      @click="logout"
    ></span>
  </div>
</template>

<script>
import {
  ArrowDown,
  Plus,
  CircleCheck,
  Check,
  CirclePlus,
  CirclePlusFilled,
} from "@element-plus/icons";
export default {
  name: "MyHeader",
  data() {
    return {};
  },
  components: {
    ArrowDown,
    CircleCheck,
    Check,
    CirclePlus,
    CirclePlusFilled,
    Plus,
  },
  created() {},
  mounted() {},
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>
<style lang="less" scoped>
.header_container {
  flex: 1;
  color: white;
  text-align: right;
}

.logout {
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #5b80b4;
  }
}
</style>
