<template>
  <div class="season-gen__wrapper">
    <div class="season-gen__inputs">

      <fieldset
        v-for="(show_slots, index) in shows_slots"
        v-bind:key="index"
        class="p-y-1"
      >
        <input v-model="show_slots.show" :name="'show' + index" />
        <input v-model="show_slots.slots" :name="'slots' + index" />
      </fieldset>

      <button v-on:click="new_show()" class="button">Add new</button>
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
          slots: '1,5',
        },
        {
          show: 'Show 2',
          slots: '2,4',
        },
        {
          show: 'Show 3',
          slots: '3',
        },
        {
          show: 'Show 4',
          slots: '4,2',
        },
        {
          show: 'Show 5',
          slots: '5,1',
        },
      ],
    };
  },
  methods: {
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
      const ass = []; // haha, ass
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
    preferences: function() {
      const preferences = [];
      this.array_shows_slots
          .filter(({show: show, slots: slots}) => slots !== [] && show !== '')
          .forEach(({show: show, slots: slots}) => {
            slots
                .filter((slot) => slot !== '')
                .forEach((slot) => {
                  if (!preferences[slot]) {
                    preferences[slot] = [show];
                  } else {
                    preferences[slot].push(show);
                  }
                });
          });
      return preferences;
    },
    permutations: function() {
      const preferences = this.preferences;
      let options = (preferences[1]).map((p) => [p]);
      for (let x = 1; x < this.num_slots; x++) {
        const shows = preferences[x+1];
        // This will ultimately replace options
        const _options = [];
        // Ensure that some shows exist with this preference
        if (Array.isArray(shows)) {
          shows.forEach((show) => {
            options
                .filter((option) => option.indexOf(show) < 0)
                .forEach((option) => {
                  // Duplicate options for each new show in a given slot
                  const _option = Array.from(option);
                  _option.push(show);
                  _options.push(_option);
                });
          });
        } else {
          return [];
        }
        options = Array.from(_options);
      }

      return options;
    },
  },
};
</script>
