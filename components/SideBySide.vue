<script setup>
defineProps({
  rows: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (el) =>
          typeof el === "object" &&
          el !== null &&
          ["content", "image"].every((key) => Object.keys(el).includes(key))
      ),
  },
});
</script>
<template>
  <div class="side-by-side">
    <div v-for="(row, index) in rows" :key="index" class="side-by-side__row">
      <div class="side-by-side__content">
        <div class="side-by-side__content-text" v-text="row.content" />
      </div>
      <img :src="row.image" class="side-by-side__image" />
    </div>
  </div>
</template>
