<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: "app",
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
       

        function onComplete(data) {
          // data是具体的定位信息  精准定位
          console.log(data);
          self.$store.dispatch("setLocation", data);
          self.$store.dispatch("setAddress", data.formattedAddress);
        }
      });
    },
    }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #f1f1f1;
}
</style>
