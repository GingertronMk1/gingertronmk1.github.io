import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [];

const pages = require.context("../pages", true, /\.vue$/);

pages.keys().forEach((page) => {
  routes.push({
    path: page.replace(/^\.\/(.*)\.vue$/, "/$1").toLowerCase(),
    component: pages(page).default,
  });
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
