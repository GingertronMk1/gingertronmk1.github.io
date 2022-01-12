<template>
  <div>
    <template v-for="(problem, index) in components">
      <hr v-if="index > 0" :key="`EulerHR${index}`" />
      <h3
        :key="index"
        v-text="problem.name.replace(/([A-Z])/g, ' $1').trim()"
      />
      <component :is="problem" :key="`Euler${index}`" />
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      problems: ["One", "Two", "Three"],
    };
  },
  head() {
    return {
      title: "Project Euler",
    };
  },
  computed: {
    components() {
      const components = require.context(
        "~/components/euler",
        false,
        /\d+.vue$/
      );
      const ret = {};
      components.keys().forEach((component) => {
        const componentConfig = components(component);
        ret[component] = componentConfig.default || componentConfig;
      });
      return ret;
    },
  },
};
</script>

<style lang="scss">
pre {
  max-width: 100%;
  overflow-x: scroll;
}
</style>
