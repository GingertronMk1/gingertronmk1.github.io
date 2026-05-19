<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const links = ref<{ link: RouteLocationResolved; text: string }[]>([
  {
    link: router.resolve({ name: "counter" }),
    text: "Counter",
  },
  {
    link: router.resolve({name: 'rfl-translator'}),
    text: "RFL Translator",
  },
  {
    link: router.resolve({name: 'move'}),
    text: "Move",
  }
]);
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
          class="hover:text-gray-300 p-2"
          :to="link.link.href"
        >
          <span v-text="link.text"/>
        </router-link>
      </div>
    </div>
  </nav>
</template>
