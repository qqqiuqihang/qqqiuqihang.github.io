<template>
  <div class="iserver-container">
    <div class="map_container">
      <YXMap />
    </div>
  </div>
</template>

<script>
import YXMap from "@/components/Map/YXMap.vue";
export default {
  name: "IserverMap",
  data() {
    return {};
  },
  components: { YXMap },
  created() {},
  mounted() {},
  methods: {},
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
}
</style>
