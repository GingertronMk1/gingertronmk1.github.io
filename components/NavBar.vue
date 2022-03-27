<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
        <i class="fas fa-home" />
      </NuxtLink>
      <ul class="navbar-nav">
        <li
          v-for="(link, index) in links"
          :key="`link${index}`"
          class="nav-item"
        >
          <NuxtLink
            :to="link.to"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
          >
            <i v-if="link.icon !== undefined" :class="link.icon" />
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: "CVs",
          icon: "fas fa-user-tie",
          to: { name: "cvs" },
        },
        {
          name: "Vue Utilities",
          icon: "fas fa-wrench",
          to: { name: "vue_utilities" },
        },
      ],
    };
  },
};
</script>
