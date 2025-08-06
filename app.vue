<script setup lang="ts">
useHead({
  title: "Jack Ellis",
});
</script>

<template>
  <ClientOnly>
    <AppNav />
    <main class="container mx-auto mb-auto">
      <NuxtPage />
    </main>
    <AppFooter />
  </ClientOnly>
</template>
