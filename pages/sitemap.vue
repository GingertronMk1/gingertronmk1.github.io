<script setup>
const router = useRouter()
const routes = router.getRoutes()
</script>

<template>
  <table class="sitemap">
    <tr
      v-for="route in routes"
      :key="JSON.stringify(route)"
      class="sitemap__row"
    >
      <td v-text="route.name" />
      <td v-text="route.path" />
      <td><NuxtLink :to="route.name">Go</NuxtLink></td>
    </tr>
  </table>
</template>
