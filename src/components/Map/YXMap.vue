<template>
  <div class="YXMap-container" ref="mapWrap">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import esriConfig from "@arcgis/core/config.js";
// import Point from "@arcgis/core/geometry/Point";
import Extent from "@arcgis/core/geometry/Extent";
import MapView from "@arcgis/core/views/MapView";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import Map from "@arcgis/core/Map";

export default {
  name: "YXMap",
  data() {
    return {
      map: null,
      mapView: null,
    };
  },
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      esriConfig.fontsUrl = "http://10.12.6.19:8888/4.17/font"; // 公司
      let spatialReference = new SpatialReference({ wkid: 3857 });
      const extent = new Extent({
        xmin: 13130046.971,
        ymin: 3140606.698,
        xmax: 13687735.922,
        ymax: 3659193.418,
        spatialReference: spatialReference,
      });
      const yxLayer_1 = new WMTSLayer({
        id: "yxLayer_1",
        title: "影像地图", // 工具盒子显示的内容
        url: "http://10.12.6.90:8090/iserver/services/map-mbtiles-ArcTiler141427yxkml/wmts100", // gongsi
        listMode: "hide",
        opacity: 1,
      });
      const map = new Map({
        layers: [yxLayer_1],
      });
      const mapView = new MapView({
        container: "viewDiv",
        map: map,
        extent: extent,
        constraints: {
          // minZoom: 18,
          // maxZoom: 8,
          maxScale: 1500,
          minScale: 73957190,
        },
        center: [120.1966, 30.2626],
        zoom: 15,
      });
      // esri移除水印
      mapView.ui.remove(["attribution"]);
      //放大缩小按钮
      mapView.ui.move("zoom", "top-right");
    },
  },
};
</script>
<style lang="less" scoped>
.YXMap-container {
  width: 100%;
  height: 100%;
  background-color: #999;
  #viewDiv {
    width: 100%;
    height: 100%;
  }
}
</style>
