<template>
  <div>
    <template v-for="(problem, index) in problems">
      <hr v-if="index > 0" :key="`EulerHR${index}`" />
      <component :is="`EulerProblem${problem}`" :key="`Euler${index}`" />
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
};
</script>

<style lang="scss">
pre {
  max-width: 100%;
  overflow-x: scroll;
}
</style>
