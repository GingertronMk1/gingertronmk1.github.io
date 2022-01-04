<template>
  <NuxtLink
    v-if="link.to !== undefined"
    :to="link.to"
    class="nav__link"
    active-class="nav__link--active"
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
  },
  data() {
    return {
      nav_classes: ["flex-1", "inline-block", "py-1", "px-3", "bg-white"],
      active_classes: [
        "border",
        "border-primary-orange",
        "rounded",
        "bg-primary-orange",
        "text-white",
      ],
      nav_sub_classes_concat: [
        "hidden",
        "group-hover:flex",
        "flex-col",
        "absolute",
        "inset-x-0",
        "top-full",
        "border",
        "border-primary-orange",
        "rounded",
      ],
    };
  },
  computed: {
    nav_sub_classes() {
      return this.nav_classes.concat(this.nav_sub_classes_concat);
    },
  },
  mounted() {},
  methods: {},
};
</script>
