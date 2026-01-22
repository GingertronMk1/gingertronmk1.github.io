<script setup lang="ts">
import { useToastStore } from '@/stores/toastStore.ts'
import { computed } from 'vue'

const store = useToastStore()

const messages = computed(() => store.messages)
</script>

<template>
  <div class="flex flex-col absolute p-4 w-full items-stretch space-y-2">
    <div
      v-for="toast in messages"
      :key="toast.id"
      :data-toast-id="toast.id"
      class="flex flex-row justify-between items-center p-4 bg-gray-400 rounded-lg">
      <span v-text="toast.message" />
        <i class="fa-solid fa-x cursor-pointer"
           @click="store.deleteToast(toast.id)"
        />
    </div>
  </div>
</template>

<style scoped></style>
