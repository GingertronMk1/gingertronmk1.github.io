<script setup lang="ts">
useHead({
  title: "Jack Ellis",
});
</script>

<template>
  <ClientOnly>
    <AppNav />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </ClientOnly>
</template>
