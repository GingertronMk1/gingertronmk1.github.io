<script setup lang="ts">
const links = ref([
  // {
  //     link: "/cv",
  //     text: "CV",
  // },
  {
    link: "/counter",
    text: "Counter"
  },
  {
    link: "/times",
    text: "Times"
  }

]);
</script>
<template>
  <nav class="p-4 bg-orange-600 text-white text-2xl text-semibold">
    <div class="container mx-auto flex flex-row justify-between">
      <NuxtLink to="/" class="hover:text-gray-300">
        <h1 class="site-nav__header-text">
          Jack Ellis
        </h1>
      </NuxtLink>
      <div class="space-x-4">
        <NuxtLink
            class="hover:text-gray-300"
            v-for="link in links"
            :key="JSON.stringify(link)"
            :to="link.link"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
