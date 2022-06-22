import VueRouter from "vue-router";
import Simple from "../pages/Simple.vue";
import Crud from "../pages/Crud.vue";

const routes = [
  { path: "/", component: Simple },
  { path: "/crud", component: Crud },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
