<template>
  <NuxtLink
    v-if="link.to !== undefined"
    :to="link.to"
    class="nav__link"
    :active-class="activeClass(!exact)"
    :exact-active-class="activeClass(exact)"
  >
    <i v-if="link.icon !== undefined" :class="link.icon" />
    {{ link.name }}
  </NuxtLink>
  <div v-else-if="Array.isArray(link.links)" class="nav__link">
    <i v-if="link.icon !== undefined" :class="link.icon" />
    {{ link.name }}
    <div class="nav__submenu">
      <NavItem
        v-for="(sublink, subindex) in link.links"
        :key="`nav_link_${subindex}`"
        :link="sublink"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    activeClass(exact) {
      return exact ? "nav__link--active" : "";
    },
  },
};
</script>
