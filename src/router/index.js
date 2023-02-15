import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/nav",
    name: "Nav",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/nav3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
