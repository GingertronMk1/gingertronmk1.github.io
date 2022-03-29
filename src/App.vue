<script setup>
const { ref } = require("@vue/reactivity");

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
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-home" />
      </router-link>
      <ul class="navbar-nav">
        <li
          v-for="(link, index) in navLinks"
          :key="`navLink${index}`"
          class="nav-item"
        >
          <router-link :to="link.to" class="nav-link">
            {{ link.text }}
          </router-link>
        </li>
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
