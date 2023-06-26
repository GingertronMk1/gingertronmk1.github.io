<script setup>
const routes = useRouter()?.options?.routes ?? [];
</script>
<template>
  <header class="header">
    Welcome to our wedding website
  </header>
  <div class="body">
    <pre v-text="routes" />
    <NuxtPage />
  </div>
</template>
