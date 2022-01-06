<template>
  <div class="cv-index">
    <NuxtLink
      v-for="(cv, index) in cvs"
      :key="`cv${index}`"
      :to="{ name: 'cvs-slug', params: { slug: cv.slug } }"
      v-text="cv.title"
    />
  </div>
</template>
<script>
export default {
  name: "CVIndexPage",
  props: {},
  async asyncData({ $content, params }) {
    const cvs = await $content("cvs")
      .where({ show: { $ne: false } })
      .fetch();
    return {
      cvs,
    };
  },
  computed: {
    fetchedCVs() {
      return Array.isArray(this.cvs) ? this.cvs : [];
    },
  },
};
</script>

<style lang="scss">
.cv-index {
  @include grid;
}
</style>
