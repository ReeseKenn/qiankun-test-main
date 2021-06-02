import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "vue app1",
    entry: "//localhost:8081",
    container: "#vue1",
    activeRule: "/vue1",
  },
  {
    name: "vue app2",
    entry: "//localhost:9528",
    container: "#vue2",
    activeRule: "/vue2",
  },
]);

start();

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
