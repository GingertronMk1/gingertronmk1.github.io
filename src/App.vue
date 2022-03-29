<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const routes = useRouter()
  .getRoutes()
  .filter(({ path }) => path.length)
  .sort((a, b) => {
    return a.path.localeCompare(b.path);
  });

const computedRoutes = [];

routes.forEach((route) => {
  const splitPath = route.path.split("/").filter((p) => p.length);
  const parent = computedRoutes.find((r) => r.path === `/${splitPath[0]}`);
  if (parent) {
    if (!parent.childRoutes) {
      parent.childRoutes = [];
    }
    parent.childRoutes.push(route);
  } else {
    computedRoutes.push(route);
  }
});

console.table(computedRoutes);

const navLinks = ref([
  {
    text: "Home",
    to: "/",
  },
  {
    text: "RoS",
    to: "/vue_utilities/redditorOfSteel",
  },
]);

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
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
            <router-link :to="link" class="nav-link">{{
              capitaliseFirstLetter(link.name)
            }}</router-link>
          </li>
          <li v-else class="nav-item dropdown">
            <a
              :id="`navbarDropdown${index}`"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              v-text="
                link.name
                  .split('.')
                  .slice(0, -1)
                  .map(capitaliseFirstLetter)
                  .join(' ')
              "
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
                <router-link :to="child" class="dropdown-item">{{
                  capitaliseFirstLetter(child.name.split(".").pop())
                }}</router-link>
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
