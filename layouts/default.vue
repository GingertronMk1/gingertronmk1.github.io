<template>
  <div class="body">
    <NavBar />
    <Nuxt class="body__inner" :class="$route.name" />
    <div class="flex-filler"></div>
    <FooterComponent />
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.body {
  @include flex(column, space-between, stretch);

  &__inner {
    margin: $nav-margin auto 0;
    width: 95%;
    max-width: $xlarge;

    // Cheeky special case for the index page
    &.index {
      margin: $nav-margin 0 0;
      width: 100%;
      max-width: unset;
    }
  }

  .flex-filler {
    flex: 1;
    min-height: 1px;
  }
}
</style>
