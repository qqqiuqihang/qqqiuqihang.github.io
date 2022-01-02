<template>
  <div class="YXMap-container" ref="mapWrap">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
// import esriConfig from "@arcgis/core/config.js";
// import Point from "@arcgis/core/geometry/Point";
// import View from "@arcgis/core/views/View";
import Extent from "@arcgis/core/geometry/Extent";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer";
import Measurement from "@arcgis/core/widgets/Measurement";
// import AreaMeasurement2D from "@arcgis/core/widgets/AreaMeasurement2D";
// import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D";

export default {
  name: "YXMap",
  data() {
    return {
      // map: null,
      // mapView: null,
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
      const tileExtent = new Extent(
        117.98716882336001,
        27.075363594163687,
        123.06802229667498,
        31.229717257426987,
        new SpatialReference({
          wkid: 3857,
        })
      );
      let yxLayer_1 = new WMTSLayer({
        id: "yxLayer_1",
        title: "影像地图", // 工具盒子显示的内容
        url: "http://10.12.6.90:8090/iserver/services/map-mbtiles-ArcTiler141427yxkml/wmts100",
        // identifier: "ArcTiler-141427yx.kml",
        // tileMatrixSet: "Custom_ArcTiler-141427yx.kml",
        fullExtent: tileExtent,
        listMode: "hide",
        opacity: 1,
      });
      let map = new Map({ basemap: "osm", layers: [yxLayer_1] });
      let mapView = new MapView({
        container: "viewDiv",
        map: map,
        letraints: {
          // 只有切片地图设置maxZoom，minZoom有用
          minZoom: 18,
          maxZoom: 8,
        },
        center: [120.1966, 30.2626],
        zoom: 10,
      });
      // esri移除水印
      mapView.ui.remove(["attribution", "zoom"]);

      // 距离面积测量的实例
      let measurement = new Measurement({
        view: mapView,
        activeTool: "distance",
      });
      mapView.ui.add(measurement, "bottom-right");

      mapView.when((target) => {
        // target 实例对象
        // console.log(target);
        measurement.clear();
      });

      this.map = map;
      this.mapView = mapView;
      this.measurement = measurement;
    },
    // 切换测量的类型
    switchTool(type) {
      if (type === "clear") {
        this.measurement.clear();
      } else {
        this.measurement.activeTool = type;
      }
    },
  },
  beforeUnmount() {
    if (this.mapView) {
      this.mapView.container = null;
    }
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
