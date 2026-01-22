<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>
<template>
  <div class="p-4 bg-orange-600 rounded-xl text-white text-2xl font-bold cursor-pointer">
    <template v-if="text">
      {{ text }}
    </template>
    <slot v-else />
  </div>
</template>
