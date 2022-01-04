<template>
  <div class="permissions">
    <div class="permissions__wrapper">
      <div v-for="(group, name) in groups" :key="name" class="permissions__col">
        <h3>{{ name.toUpperCase() }}</h3>
        <label v-for="(val, attr) in group" :key="attr">
          {{ attr.toUpperCase() }}
          <input v-model="group[attr]" type="checkbox" />
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
  name: "PermissionsPage",
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
    group_sums() {
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

      return [sums.owner, sums.group, sums.allUsers].join("");
    },
  },
};
</script>

<style lang="scss">
.permissions {
  width: 100%;
  &__wrapper {
    @include flex(row, space-between);
    flex-wrap: wrap;
  }

  &__col {
    @include flex(column, space-between, stretch);
    flex: 1;
    min-width: 30%;

    @include MQ($medium) {
      min-width: 99%;
    }

    label {
      @include flex(row, space-between);
      width: 5rem;
      margin: 0.5rem auto;
    }

    h2,
    h3 {
      text-align: center;
    }
  }

  &__total {
    min-width: 50%;
    flex: 1;
    text-align: center;
    font-size: 5rem;
  }
}
</style>
