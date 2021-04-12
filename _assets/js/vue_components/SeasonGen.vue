<template>
  <div class="season-gen__wrapper">
    <div class="season-gen__inputs">

      <div
        v-for="(show_slots, index) in shows_slots"
        v-bind:key="index"
        class="p-y-1"
      >
        <input v-model="show_slots.show" />
        <input v-model="show_slots.slots" />
      </div>

      <div class="p-y-1">
        <button v-on:click="new_show()">Add new</button>
      </div>
    </div>

    <table v-if="permutations.length" class="season-gen__table">
      <tr>
        <th v-for="n in num_slots" v-bind:key="n">
          Slot {{ n }}
        </th>
      </tr>
      <tr v-for="(perm, index) in permutations" v-bind:key="index">
        <td v-for="(show, index) in perm" v-bind:key="index" v-text="show"></td>
      </tr>
    </table>
    <h2 v-else>No valid seasons exist</h2>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      shows_slots: [
        {
          show: 'Show 1',
          slots: '1',
        },
        {
          show: 'Show 2',
          slots: '2',
        },
        {
          show: 'Show 3',
          slots: '3,4',
        },
        {
          show: 'Show 4',
          slots: '4,3',
        },
        {
          show: 'Show 5',
          slots: '5',
        },
      ],
    };
  },
  methods: {
    recurse_generate(object, keys, index) {
      if (index + 1 < keys.length) {
        const after = this.recurse_generate(object, keys, index + 1);
        const oki = object[keys[index]];
        const n = [];

        for (const _perm in after) {
          if (after[_perm]) {
            const perm = after[_perm]; // One option for after this slot
            for (const _slot in oki) {
              if (oki[_slot] && perm.slice(0)) {
                const slot = oki[_slot]; // The current show for this slot
                const perm2 = perm.slice(0);
                if (perm2.indexOf(slot) === -1) {
                  perm2.unshift(slot);
                  n.unshift(perm2);
                }
              }
            }
          }
        }
        return n;
      } else {
        return object[keys[index]].map((x) => [x]);
      }
    },
    new_show() {
      const l = this.shows_slots.length + 1;
      this.shows_slots.push({
        show: 'Show ' + l,
        slots: l.toString(),
      });
    },
  },
  computed: {
    array_shows_slots: function() {
      const ass = [];
      this.shows_slots.forEach(({show: show, slots: slots}) => {
        ass.push({
          show: show,
          slots: slots.split(/ *, */),
        });
      });
      return ass;
    },
    num_slots: function() {
      let endSlot = 0;
      this.array_shows_slots.forEach(function({slots: slots}) {
        slots.forEach((slot) => endSlot = slot > endSlot ? slot : endSlot);
      });
      return parseInt(endSlot);
    },
    permutations: function() {
      const preferences = [];

      this.array_shows_slots.forEach(({show: show, slots: slots}) => {
        if (slots != '' && show != '') {
          slots.forEach((slot) => {
            if (slot !== '') {
              if (!preferences[slot]) {
                preferences[slot] = [show];
              } else {
                preferences[slot].push(show);
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
