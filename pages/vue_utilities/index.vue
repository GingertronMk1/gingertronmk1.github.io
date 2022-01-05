<template>
  <div class="vue-utility">
    <NuxtLink
      v-for="(utility, index) in comp_utilities"
      :key="`utility-${index}`"
      class="vue-utility__item"
      :to="utility.to"
    >
      <i v-if="utility.icon" :class="utility.icon" />
      <span v-text="utility.name" />
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: "VueUtilitiesIndexPage",
  props: {},
  data() {
    return {
      utilities: [
        {
          name: "Counter",
          to: "counter",
          icon: "fas fa-chart-line",
        },
        {
          name: "NNT Things",
          to: "nntthings",
          icon: "fas fa-theater-masks",
        },
        {
          name: "Permissions",
          to: "permissions",
          icon: "fas fa-user-lock",
        },
        {
          name: "Season Generator",
          to: "seasongen",
          icon: "fas fa-cloud-sun-rain",
        },
        {
          name: "Text Generator",
          to: "textgen",
          icon: "fas fa-comments",
        },
      ],
    };
  },
  computed: {
    comp_utilities() {
      return this.utilities.map((utility) => {
        utility.to = `/vue_utilities/${utility.to}`;
        return utility;
      });
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
$size: 200px;
$size-smaller: calc($size * 0.9);
.vue-utility {
  display: grid;
  grid-template-columns: repeat(auto-fill, $size);
  grid-template-rows: repeat(auto-fill, $size);
  grid-gap: 1ch;
  justify-content: center;

  &__item {
    @include flex(column, space-between, stretch);
    height: $size-smaller;
    width: $size-smaller;
    margin: auto;
    background: $standard-background;
    text-decoration: none;
    color: $white;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem;

    i {
      @include flex(column, center, center);
      min-height: 1px;
      flex: 1;
      font-size: calc($size / 2);
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
