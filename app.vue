<script setup>
const router = useRouter();
const routes = router?.options?.routes ?? [];

routes.sort(({path: path1}, {path: path2}) => path1.localeCompare(path2));

const computedRoutes = computed(function() {
  const ret = {};
  routes.forEach((val) => {
    const splitName = val?.path?.split('/')?.filter((val) => val !== '') ?? [];
    const firstPart = [...splitName].shift();
    switch (splitName.length) {
      case 1:
        ret[firstPart] = val;
        break;
      case 2: 
        console.log(typeof ret[firstPart]);
        if (ret[firstPart] !== undefined) {
          ret[firstPart].push(val);
        } else {
          ret[firstPart] = [val]
        }
        break;
    }
  })
  return ret;
})
</script>
<template>
  <header class="header">
    Welcome to our wedding website
    <ul>
    <li v-for="(route, key) in computedRoutes" :key="key">
      <ul v-if="Array.isArray(route)">
        <li v-for="(subRoute, subKey) in route" :key="subKey">
          <NuxtLink :to="subRoute.path">{{ subRoute.name }}</NuxtLink>
        </li>
      </ul>
      <li v-else>
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </li>
    </li>
    </ul>
  </header>
  <div class="body">
    <pre v-text="computedRoutes" />
    <NuxtPage />
  </div>
</template>
