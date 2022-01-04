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
          links: [
            {
              name: "Counter",
              to: "/counter",
            },
            {
              name: "NNT Things",
              to: "/nntthings",
            },
            {
              name: "Permissions",
              to: "/permissions",
            },
            {
              name: "Generators",
              links: [
                {
                  name: "Season Generator",
                  to: "/seasongen",
                },
                {
                  name: "Text Generator",
                  to: "/textgen",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
