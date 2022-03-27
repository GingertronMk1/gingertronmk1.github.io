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
  data() {
    return {
      utilities: [
        {
          name: "Counter",
          to: "counter",
          icon: "fas fa-chart-line",
        },
        {
          name: "The Six Degrees of the NNT",
          to: "sixdegreesnnt",
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
        {
          name: "Spotify",
          to: "spotify",
          icon: "fab fa-spotify",
        },
        {
          name: "Random Bits",
          to: "random",
          icon: "fas fa-random",
        },
        {
          name: "Project Euler",
          to: "projectEuler",
          icon: "fas fa-tasks",
        },
        {
          name: "Redditor of Steel",
          to: "redditorOfSteel",
          icon: "fab fa-reddit",
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
};
</script>

<style lang="scss">
$size: 200px;
$size-smaller: calc(#{$size} * 0.9);

.vue-utility {
  @include grid;

  &__item {
    background: $standard-background;
    text-decoration: none;
    color: $white;
    text-align: center;

    i {
      @include flex(column, center, center);
      min-height: 1px;
      flex: 1;
      font-size: calc(#{$size} / 2);
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
