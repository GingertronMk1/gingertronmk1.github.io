<template>
  <div class="permissions">
    <div class="permissions__wrapper">
      <div class="permissions__col" v-for="(group, name) in groups" :key="name">
        <h3>{{ name.toUpperCase() }}</h3>
        <label v-for="(val, attr) in group" :key="attr">
          {{ attr }}
          <input type="checkbox" v-model="group[attr]" />
        </label>

      </div>
      <div class="permissions__total">
        {{ group_sums }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      groups: {
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
      },
    };
  },
  computed: {
    group_sums: function() {
      const compGroups = {
        owner: {
          r: this.groups.owner.r ? 1 : 0,
          w: this.groups.owner.w ? 2 : 0,
          x: this.groups.owner.x ? 4 : 0,
        },
        group: {
          r: this.groups.group.r ? 1 : 0,
          w: this.groups.group.w ? 2 : 0,
          x: this.groups.group.x ? 4 : 0,
        },
        allUsers: {
          r: this.groups.allUsers.r ? 1 : 0,
          w: this.groups.allUsers.w ? 2 : 0,
          x: this.groups.allUsers.x ? 4 : 0,
        },
      };

      const sums = {
        owner: Object.keys(compGroups.owner).reduce(
            (sum, key) => sum + parseFloat(compGroups.owner[key] || 0),
            0,
        ),
        group: Object.keys(compGroups.group).reduce(
            (sum, key) => sum + parseFloat(compGroups.group[key] || 0),
            0,
        ),
        allUsers: Object.keys(compGroups.allUsers).reduce(
            (sum, key) => sum + parseFloat(compGroups.allUsers[key] || 0),
            0,
        ),
      };

      return [sums.owner, sums.group, sums.allUsers].join('');
    },
  },
};
</script>
