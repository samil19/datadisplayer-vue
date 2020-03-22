import datadisplayervue from "./App.vue";

export default {
 install(Vue, options) {
  Vue.component("datadisplayer-vue", datadisplayervue);
 }
};