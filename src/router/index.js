import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/landing_page.vue";
import seleccion_modelo from "../views/entrega1/seleccion_modelo.vue";
import eda from "../views/entrega2/eda.vue";
import exogenos from "../views/entrega2/exogenos.vue";
import visualizacion from "../views/entrega2/visualizacion.vue";
import limpieza from "../views/entrega2/limpieza.vue";
import imputacion from "../views/entrega2/imputacion.vue";
import migracion_bq from "../views/entrega3/migracion_bq.vue";
import preparacion_modelo from "../views/entrega3/preparacion_modelo.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/Masters-Data-Mining-Project/", component: LandingPage },
  { path: "/entrega1/seleccion_modelo", component: seleccion_modelo },
  { path: "/entrega2/eda", component: eda },
  { path: "/entrega2/exogenos", component: exogenos },
  { path: "/entrega2/visualizacion", component: visualizacion },
  { path: "/entrega2/limpieza", component: limpieza },
  { path: "/entrega2/imputacion", component: imputacion },
  { path: "/entrega3/migracion_bq", component: migracion_bq },
  { path: "/entrega3/preparacion_modelo", component: preparacion_modelo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
