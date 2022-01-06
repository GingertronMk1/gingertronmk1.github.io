<template>
  <div class="cv-index">
    <NuxtLink
      v-for="(cv, index) in cvs"
      :key="`cv${index}`"
      :to="{ name: 'cvs-slug', params: { slug: cv.slug } }"
      class="cv-index__item"
    >
      <i :class="cv.icon" />
      <span v-text="cv.title" />
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: "CVIndexPage",
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
  @include grid(300px);

  &__item {
    background: $standard-background;
    text-decoration: none;
    color: $white;
    text-align: center;

    i {
      @include flex(column, center, center);
      min-height: 1px;
      flex: 1;
      font-size: 5rem;
    }

    &:hover {
      background: unset;
      background-color: $white;
      border: 2px solid $primary;
      color: $primary;
    }
  }
}
</style>
