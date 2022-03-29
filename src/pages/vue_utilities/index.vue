<script setup>
import { ref } from "vue";

const utilities = [
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
];

const compUtilities = ref(
  utilities.map((utility) => {
    utility.to = `/vue_utilities/${utility.to}`;
    return utility;
  })
);
</script>
<template>
  <div class="vue-utility">
    <router-link
      v-for="(utility, index) in compUtilities"
      :key="`utility-${index}`"
      class="btn btn-primary text-white"
      :to="utility.to"
    >
      <i v-if="utility.icon" :class="[utility.icon, 'display-1']" />
      <span v-text="utility.name" />
    </router-link>
  </div>
</template>

<style lang="scss">
.vue-utility {
  @include grid;
}
</style>
