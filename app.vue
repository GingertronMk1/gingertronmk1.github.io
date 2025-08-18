<script setup lang="ts">
useHead({
  title: "Jack Ellis",
});
</script>

<template>
  <ClientOnly>
    <AppNav />
    <ContainerComponent class="mb-auto py-4">
      <NuxtPage />
    </ContainerComponent>
    <AppFooter />
  </ClientOnly>
</template>
