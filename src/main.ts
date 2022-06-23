import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import VueRounter from "vue-router";
import router from "./router/index";

Vue.config.productionTip = false;

Vue.use(VueRounter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
