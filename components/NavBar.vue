<template>
  <nav class="nav">
    <template v-for="(link, index) in links">
      <NavItem :key="`nav_link_${index}`" :link="link" />
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
          to: "/",
          icon: "fas fa-home",
        },
        {
          name: "CVs",
          icon: "fas fa-user-tie",
          links: [
            {
              name: "Developer",
              to: "/cv/dev",
              icon: "fas fa-laptop-code",
            },
            {
              name: "Theatre Person",
              to: "/cv/theatre",
              icon: "fas fa-theater-masks",
            },
          ],
        },
        {
          name: "Vue Utilities",
          icon: "fas fa-wrench",
          to: "/vue_utilities",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
