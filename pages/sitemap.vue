<template>
  <div class="sitemap">
    <table>
      <thead>
        <tr>
          <th>Path</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(route, index) in routes" :key="`route-${index}`">
          <td v-text="route.path" />
          <td v-text="route.name" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "SitemapPage",
  head() {
    return {
      title: "Sitemap",
    };
  },
  computed: {
    routes() {
      const ret = this.$router.options.routes;
      return ret.sort((a, b) => {
        if (a.path < b.path) {
          return -1;
        } else if (a.path > b.path) {
          return 1;
        }
        return 0;
      });
    },
  },
  mounted() {
    window.router = this.$router;
  },
};
</script>

<style lang="scss">
.sitemap table {
  margin: 0 auto;
  border-spacing: 0;

  th,
  td {
    padding: 0.5rem;
  }

  th {
    border-bottom: 2px solid $grey-3;
  }

  tr:nth-child(2n) {
    background-color: $grey-0;
  }
}
</style>
