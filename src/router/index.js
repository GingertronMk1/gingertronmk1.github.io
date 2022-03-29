import { createRouter, createWebHistory } from "vue-router";

const routes = [];

const pages = require.context("../pages", true, /\.vue$/);

pages.keys().forEach((page) => {
  const path = page.replace(/^\.\/(.*)\.vue$/, "/$1").replace(/\/index$/i, "");
  const name = page.replace(/^\.\/(.*)\.vue$/, "$1").replace(/\//g, ".");

  routes.push({
    component: pages(page).default,
    path,
    name,
  });
});

process.env.NODE_ENV !== "production" && console.table(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
