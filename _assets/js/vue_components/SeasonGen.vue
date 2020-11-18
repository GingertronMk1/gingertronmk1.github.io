<template>
  <div>
    <div
      v-for="show_slots in shows_slots"
      v-bind:key="show_slots"
      class="p-y-1"
    >
      <input v-model="show_slots.show" />
      <input v-model="show_slots.slots" />
    </div>

    <div class="p-y-1">
      <button v-on:click="shows_slots.push({ id: shows_slots.length })">
        Add new
      </button>
    </div>

    <span v-if="permutations.length">
      <ol v-for="permutation in permutations" v-bind:key="permutation">
        <li v-for="show in permutation" v-bind:key="show" v-text="show"></li>
      </ol>
    </span>
    <h2 v-else>No valid seasons exist</h2>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      shows_slots: [
        {
          id: 0,
          show: "Show 1",
          slots: "1,2",
        },
        {
          id: 1,
          show: "Show 2",
          slots: "3",
        },
        {
          id: 2,
          show: "Show 3",
          slots: "4,5",
        },
        {
          id: 3,
          show: "Show 4",
          slots: "1,3,5",
        },
        {
          id: 4,
          show: "Show 5",
          slots: "2,4",
        },
      ],
    };
  },
  methods: {
    recurse_generate(object, keys, index) {
      //console.log("index:", index, "keys:", keys);
      if (index + 1 < keys.length) {
        const after = this.recurse_generate(object, keys, index + 1);
        const oki = object[keys[index]];
        let n = [];

        for (let _perm in after) {
          let perm = after[_perm]; // One option for after this slot
          for (let _slot in oki) {
            try {
              let slot = oki[_slot]; // The current show for this slot
              let perm2 = perm.slice(0);
              // console.log(perm2, slot);
              if (perm2.indexOf(slot) == -1) {
                perm2.push(slot);
                n.push(perm2);
              }
            } catch (e) {
              console.error(e);
            }
          }
        }
        return n;
      } else {
        return object[keys[index]].map((x) => [x]);
      }
    },
  },
  computed: {
    permutations: function() {
      let preferences = [];

      this.shows_slots.forEach((show_slots) => {
        const showname = show_slots.show;
        const slots = show_slots.slots.split(",");
        if (slots != "" && showname != "") {
          slots.forEach((slot) => {
            slot = slot.trim();
            if (slot !== "") {
              if (!preferences[slot]) {
                preferences[slot] = [showname];
              } else {
                preferences[slot].push(showname);
              }
            }
          });
        }
      });

      return this.recurse_generate(preferences, Object.keys(preferences), 0);
    },
  },
};
</script>
