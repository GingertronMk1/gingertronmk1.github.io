<script setup lang="ts">
import Toast from '@/components/Toast.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <Toast />
    <AppHeader />
    <main class="container py-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
