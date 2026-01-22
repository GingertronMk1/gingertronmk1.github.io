<script setup lang="ts">
import ToastDisplay from '@/components/ToastDisplay.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <ToastDisplay />
    <AppHeader />
    <main class="container py-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
