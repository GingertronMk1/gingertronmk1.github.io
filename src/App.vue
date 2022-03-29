<template>
  <nav class="navbar navbar-dark bg-primary">
    <router-link to="/">Home</router-link>
    <i class="fas fa-chevron-down" />
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/scss/app.scss";
</style>
