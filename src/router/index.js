import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/landing_page.vue";
import seleccion_modelo from "../views/entrega1/seleccion_modelo.vue";
import eda from "../views/entrega2/eda.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/Master-s-Data-Mining-Proyect/", component: LandingPage },
  { path: "/entrega1/seleccion_modelo", component: seleccion_modelo },
  { path: "/entrega2/eda", component: eda },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
