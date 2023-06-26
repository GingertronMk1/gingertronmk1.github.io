<script setup>
import {useRouter} from 'vue-router';
import {computed} from 'vue';
const router = useRouter();
const routes = router?.options?.routes ?? [];

routes.sort(({ path: path1 }, { path: path2 }) => path1.localeCompare(path2));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const computedRoutes = computed(function () {
  const ret = {};
  routes.forEach((val) => {
    const splitName = val?.path?.split("/")?.filter((val) => val !== "") ?? [];
    const firstPart = [...splitName].shift();
    if (splitName.length === 1) {
      ret[firstPart] = val;
    } else if (splitName.length === 2) {
      const nonLetterOrNumber = "[^a-zA-Z0-9]*";
      const regex = new RegExp(
        `${nonLetterOrNumber}${firstPart}${nonLetterOrNumber}`
      );
      const newVal = {
        ...val,
        name: val.name
          .replace(regex, "")
          .split("-")
          .map(capitalizeFirstLetter)
          .join(" "),
      };
      if (ret[firstPart] !== undefined) {
        ret[firstPart].push(newVal);
      } else {
        ret[firstPart] = [newVal];
      }

    }
  });
  return ret;
});
</script>
<template>
  <header class="header">
    Jack Ellis
    <div class="header__links">
      <div
        v-for="(route, key) in computedRoutes"
        :key="key"
        class="header__link header__links"
      >
        <template v-if="Array.isArray(route)">
          <div
            v-for="(subRoute, subKey) in route"
            :key="subKey"
            class="header__link"
          >
            <NuxtLink :to="subRoute.path">{{ subRoute.name }}</NuxtLink>
          </div>
        </template>
        <div v-else class="header__link">
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </header>
  <div class="body">
    <NuxtPage />
  </div>
</template>
