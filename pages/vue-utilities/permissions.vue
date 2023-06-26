<script setup>
import { computed, ref } from "vue";

const groups = ref({
  owner: {
    r: false,
    w: false,
    x: false,
  },
  group: {
    r: false,
    w: false,
    x: false,
  },
  allUsers: {
    r: false,
    w: false,
    x: false,
  },
});

const groupSums = computed(() => {
  const compGroups = {
    owner: {
      r: groups.value.owner.r ? 1 : 0,
      w: groups.value.owner.w ? 2 : 0,
      x: groups.value.owner.x ? 4 : 0,
    },
    group: {
      r: groups.value.group.r ? 1 : 0,
      w: groups.value.group.w ? 2 : 0,
      x: groups.value.group.x ? 4 : 0,
    },
    allUsers: {
      r: groups.value.allUsers.r ? 1 : 0,
      w: groups.value.allUsers.w ? 2 : 0,
      x: groups.value.allUsers.x ? 4 : 0,
    },
  };

  const sums = {
    owner: Object.keys(compGroups.owner).reduce(
      (sum, key) => sum + parseFloat(compGroups.owner[key] || 0),
      0
    ),
    group: Object.keys(compGroups.group).reduce(
      (sum, key) => sum + parseFloat(compGroups.group[key] || 0),
      0
    ),
    allUsers: Object.keys(compGroups.allUsers).reduce(
      (sum, key) => sum + parseFloat(compGroups.allUsers[key] || 0),
      0
    ),
  };

  return Object.values(sums).join("");
});
</script>
<template>
  <div class="row pt-3">
    <div
      v-for="(group, name) in groups"
      :key="name"
      class="col-4 d-flex flex-column align-items-stretch"
    >
      <h3 v-text="name.toUpperCase()" />
      <label
        v-for="(val, attr) in group"
        :key="attr"
        :for="name + attr"
        :class="{
          'btn text-center mt-3': true,
          'btn-primary': val,
          'btn-outline-primary': !val,
        }"
      >
        {{ attr.toUpperCase() }}
        <input
          :id="name + attr"
          v-model="group[attr]"
          type="checkbox"
          :name="name + attr"
          class="d-none"
        />
      </label>
    </div>
    <div class="col-12 text-center display-1" v-text="groupSums" />
  </div>
</template>
