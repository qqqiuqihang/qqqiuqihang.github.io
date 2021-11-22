<template>
  <div class="header_container">
    <div class="header-item avatar">
      <el-avatar
        :size="36"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      >
        user
      </el-avatar>
    </div>
    <div class="header-item">
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><plus /></el-icon>Action 1
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><circlePlusFilled /></el-icon>
              Action 2
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><circlePlus /></el-icon>Action 3
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><check /></el-icon>Action 4
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><circleCheck /></el-icon>Action 5
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="header-item">
      <span
        class="logout iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-"
        @click="logout"
      ></span>
    </div>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;

  color: white;

  .header-item {
    margin-right: 20px;
    line-height: 48px;
    &:last-child {
      margin: 0;
    }
  }
}

.avatar {
  width: 48px;
  height: 48px;
  .el-avatar {
    vertical-align: middle;
    cursor: pointer;
  }
}

.logout {
  // margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #5b80b4;
  }
}
</style>
