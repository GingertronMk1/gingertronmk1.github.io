import { createRouter, createWebHistory } from "vue-router";

const routes = [];

const pages = require.context("../pages", true, /\.vue$/);

pages.keys().forEach((page) => {
  let path = page
    .toLowerCase()
    .replace(/^\.\/(.*)\.vue$/, "/$1")
    .replace(/\/index$/, "");

  routes.push({
    path: path,
    component: pages(page).default,
  });
});

process.env.NODE_ENV !== "production" && console.table(routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
