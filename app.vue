<script setup lang="ts">
useHead({
  title: "Jack Ellis",
});
</script>

<template>
  <ClientOnly>
    <AppNav />
    <main class="container mx-auto mb-auto py-4 w-[95%]">
      <NuxtPage />
    </main>
    <AppFooter />
  </ClientOnly>
</template>
