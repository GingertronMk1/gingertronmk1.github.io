<template>
  <nav class="nav">
    <template v-for="(link, index) in links">
      <NavItem :key="`nav_link_${index}`" :link="link" :exact="link.exact" />
    </template>
  </nav>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      links: [
        {
          name: "Home",
          to: { name: "index" },
          icon: "fas fa-home",
          exact: true,
        },
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
  mounted() {},
  methods: {},
};
</script>
