<script setup lang="ts">
withDefaults(
  defineProps<{
    type: "number" | "text" | "textarea" | "checkbox" | "radio";
  }>(),
  {
    type: "text",
  },
);

const model = defineModel<string | number | boolean>();
</script>

<template>
  <textarea
    v-if="type === 'textarea'"
    v-model="model"
    class="p-4 border-2 border-gray-300 rounded-md"
  />
  <input
    v-else
    :type="type"
    v-model="model"
    class="p-4 border-2 border-gray-300 rounded-md"
  />
</template>
