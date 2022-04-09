<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const routes = useRouter()
  .getRoutes()
  .filter(({ name, path }) => path.length && name !== "404")
  .sort((a, b) => {
    return a.path.localeCompare(b.path);
  });

const computedRoutes = [];

routes.forEach((route, index) => {
  console.group(`Route ${route.name}`);
  const splitText = route.name.split(".");
  let isParent = splitText.length < 2 || splitText.slice(-1)[0] === "Index";

  if (isParent) {
    const text = splitText.slice(0, -1);
    const resultantText = (text.length ? text : splitText).join(" ");
    console.log(resultantText);
    computedRoutes.push({
      ...route,
      text: resultantText.splitWords(),
      childRoutes: [],
    });
  } else {
    const thisName = route.name.split(".").slice(0, -1).join(".");
    const parentRoute = computedRoutes.find(({ name }) => {
      const parentName = name.split(".").slice(0, -1).join(".");
      return parentName === thisName;
    });
    if (parentRoute) {
      parentRoute.childRoutes.push({
        ...route,
        text: splitText.pop().splitWords(),
      });
    }
  }
  console.groupEnd();
});

document.querySelector("title").innerText = "Jack Ellis";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-home" />
      </router-link>
      <ul class="navbar-nav">
        <template
          v-for="(link, index) in computedRoutes"
          :key="`navLink${index}`"
        >
          <li
            v-if="!link.childRoutes || link.childRoutes.length === 0"
            class="nav-item"
          >
            <router-link :to="link" class="nav-link" v-text="link.text" />
          </li>
          <li v-else class="nav-item dropdown">
            <a
              :id="`navbarDropdown${index}`"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              v-text="link.text"
            />
            <ul
              class="dropdown-menu dropdown-menu-end"
              :aria-labelledby="`navbarDropdown${index}`"
            >
              <li>
                <router-link :to="link" class="dropdown-item">
                  Index
                </router-link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li
                v-for="(child, childIndex) in link.childRoutes"
                :key="`child${index}-${childIndex}`"
              >
                <router-link
                  :to="child"
                  class="dropdown-item"
                  v-text="child.text"
                />
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
  <main class="container-fluid">
    <router-view />
  </main>
</template>

<style lang="scss">
@import "@/scss/app.scss";
</style>
