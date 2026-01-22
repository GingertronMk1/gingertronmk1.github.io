<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ link: string; text: string }[]>([
  {
    link: '/move',
    text: 'Move',
  },
  {
    link: '/counter',
    text: 'Counter',
  },
  // {
  //   link: '/times',
  //   text: 'Times',
  // },
])
</script>
<template>
  <nav class="p-4 bg-orange-600 text-white text-2xl text-semibold w-full flex justify-center">
    <div class="container flex flex-row justify-between">
      <router-link to="/" class="hover:text-gray-300">
        <h1 class="site-nav__header-text">Jack Ellis</h1>
      </router-link>
      <div class="space-x-4">
        <router-link
          v-for="link in links"
          :key="JSON.stringify(link)"
          class="hover:text-gray-300"
          :to="link.link"
        >
          {{ link.text }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
