<script setup>
const router = useRouter();
const routes = router.getRoutes();
</script>
<template>
  <table class="">
    <tr v-for="route in routes" :key="JSON.stringify(route)" class="">
      <td v-text="route.name" />
      <td v-text="route.path" />
      <td><NuxtLink :to="route.name">Go</NuxtLink></td>
    </tr>
  </table>
</template>
