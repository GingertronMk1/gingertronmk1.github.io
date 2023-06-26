<template>
  <div>
    <template v-for="(problem, index) in components" :key="`EulerHR${index}`">
      <hr v-if="index > 1" />
      <h3 v-text="problem.name.replace(/([A-Z])/g, ' $1').trim()" />
      <component :is="problem" />
    </template>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Project Euler",
    };
  },
  computed: {
    components() {
      const components = require.context(
        "@/components/euler",
        false,
        /\d+.vue$/
      );
      const ret = {};
      components.keys().forEach((component) => {
        const componentConfig = components(component);
        ret[component.replace(/\.\/(\d+).vue$/, "$1")] =
          componentConfig.default || componentConfig;
      });
      return ret;
    },
  },
};
</script>
