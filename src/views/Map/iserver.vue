<template>
  <div class="iserver-container">
    <div class="map_container">
      <YXMap ref="YXMap" />
    </div>
    <div class="search-left">
      <div class="search_wrap">
        <el-input
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="select"
              placeholder="Select"
              style="width: 110px"
            >
              <el-option label="重点单位" value="1"></el-option>
              <el-option label="兴趣点" value="2"></el-option>
            </el-select>
          </template>
          <template #append>
            <el-button @click="searchInput">
              <span class="iconfont icon-icon-test12"></span>
            </el-button>
          </template>
        </el-input>
      </div>
    </div>
    <div class="search-right">
      <div class="btn-item" @click="toggleMeasure('distance')">
        <span
          class="iconfont icon-celiang2"
          :class="{ active: active === 'distance' }"
          title="测量距离"
        ></span>
      </div>
      <div class="btn-item" @click="toggleMeasure('area')">
        <span
          class="iconfont icon-shitucemianji"
          :class="{ active: active === 'area' }"
          title="测量面积"
        ></span>
      </div>
      <div class="btn-item" @click="toggleMeasure('clear')">
        <span class="iconfont icon-icon-test1" title="退出测量"></span>
      </div>
    </div>
  </div>
</template>

<script>
import YXMap from "@/components/Map/YXMap.vue";
import QueryTask from "@arcgis/core/tasks/QueryTask";
import Query from "@arcgis/core/tasks/support/Query";
import WFSLayer from "@arcgis/core/layers/WFSLayer";
export default {
  name: "IserverMap",
  data() {
    return {
      active: "",
      toolListsMap: [
        { type: "distance", icon: "icon-celiang2", title: "测量距离" },
        { type: "area", icon: "icon-shitucemianji", title: "测量面积" },
        { type: "clear", icon: "icon-icon-test1", title: "退出测量" },
      ],
      select: "1",
      input3: "",
    };
  },
  components: { YXMap },
  created() {},
  mounted() {},
  methods: {
    searchInput() {
      const map = this.$refs.YXMap.map;
      const mapView = this.$refs.YXMap.mapView;

      let queryTask = new QueryTask({
        url: "http://10.12.6.90:8090/iserver/services/data-ZJ/wfs200/utf-8",
      });
      let query = new Query();
      query.returnGeometry = true;
      query.outFields = ["*"];
      query.where = "POP &gt; 1000000"; // Return all cities with a population greater than 1 million

      // When resolved, returns features and graphics that satisfy the query.
      queryTask
        .execute(query)
        .then(function (results) {
          console.log(results.features);
        })
        .catch((e) => {
          console.log(e);
        });

      // When resolved, returns a count of the features that satisfy the query.
      queryTask
        .executeForCount(query)
        .then(function (results) {
          console.log(results);
        })
        .catch((e) => {
          console.log(e);
        });
      const layer = new WFSLayer({
        url: "http://10.12.6.90:8090/iserver/services/data-ZJ/wfs200/utf-8?REQUEST=GetFeature&TypeName=World:Lakes&outputFormat=application/json",
      });
      map.add(layer);
    },
    toggleMeasure(type) {
      this.active = type;
      this.$refs.YXMap.switchTool(type);
    },
  },
};
</script>

<style lang="less" scoped>
.iserver-container {
  width: 100%;
  height: 100%;
  .map_container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .search-left {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .search-right {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    background-color: #fff;
    display: flex;
    .btn-item {
      border: 1px solid #000;
      border-collapse: collapse;
      span {
        display: inline-block;
        width: 35px;
        height: 35px;
        font-size: 35px;
      }
      .active {
        background-color: #409eff;
      }
    }
  }
}
</style>
