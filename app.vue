<script setup>
const router = useRouter();
const routes = router?.options?.routes ?? [];

routes.sort(({path: path1}, {path: path2}) => path1.localeCompare(path2));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
        const nonLetterOrNumber = "[^a-zA-Z0-9]*";
        const regex = new RegExp(`${nonLetterOrNumber}${firstPart}${nonLetterOrNumber}`);
        const newVal = {
          ...val,
          name: val
            .name
            .replace(regex, '')
            .split('-')
            .map(capitalizeFirstLetter)
            .join(' ')
        }
        if (ret[firstPart] !== undefined) {
          ret[firstPart].push(newVal);
        } else {
          ret[firstPart] = [newVal]
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
    <div class="header__links">
    <div class="header__link header__links" v-for="(route, key) in computedRoutes" :key="key">
      <template v-if="Array.isArray(route)">
        <div class="header__link" v-for="(subRoute, subKey) in route" :key="subKey">
          <NuxtLink :to="subRoute.path">{{ subRoute.name }}</NuxtLink>
        </div>
      </template>
      <div class="header__link" v-else>
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </div>
    </div>
    </div>
  </header>
  <div class="body">
    <NuxtPage />
  </div>
</template>
