<script setup>
import { useRouter } from "vue-router";

definePageMeta({
  ignoreInHeader: process.env.NODE_ENV !== "development"
});

const routes = useRouter()?.options?.routes ?? [];
routes.sort(({ path: path1 }, { path: path2 }) => path1.localeCompare(path2));
const allRouteKeys = routes.reduce((accumulator, current) => {
  const currentKeys = Object.keys(current);
  const concatenated = [...accumulator, ...currentKeys];
  const newSet = new Set(concatenated);
  return [...newSet].filter((str) => !["component"].includes(str));
}, []);
</script>
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(key, index) in allRouteKeys" :key="index" v-text="key" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="(route, index) in routes" :key="index">
        <td
          v-for="(key, routeIndex) in allRouteKeys"
          :key="routeIndex"
          v-text="route[key] ?? '---'"
        />
      </tr>
    </tbody>
  </table>
</template>
