<template>
  <div class="body">
    <NavBar />
    <Nuxt class="body__inner" :class="routePath" />
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  props: {},
  data() {
    return {};
  },
  computed: {
    routePath() {
      const path = this.$route.path.replace("/", "_");
      return path === "_" ? "index" : path;
    },
  },
  mounted() {},
  methods: {},
};
</script>
