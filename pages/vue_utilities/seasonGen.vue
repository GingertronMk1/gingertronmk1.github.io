<template>
  <div class="season-gen__wrapper">
    <div class="season-gen__inputs">
      <fieldset
        v-for="(show_slots, index) in showsSlots"
        :key="index"
        class="p-y-1"
      >
        <input v-model="show_slots.show" :name="'show' + index" />
        <input v-model="show_slots.slots" :name="'slots' + index" />
        <span class="season-gen__remove-show" @click="removeShow(index)">
          &times;
        </span>
      </fieldset>

      <button class="button" @click="newShow()">Add new</button>
    </div>

    <table v-if="permutations.length" class="season-gen__table">
      <tr>
        <th v-for="n in numSlots" :key="n" v-text="`Slot ${n}`" />
      </tr>
      <tr v-for="(perm, perm_index) in permutations" :key="perm_index">
        <td
          v-for="(show, show_index) in perm"
          :key="show_index"
          v-text="show"
        />
      </tr>
    </table>
    <h2 v-else>No valid seasons exist</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showsSlots: [
        {
          show: "Show 1",
          slots: "1,2",
        },
        {
          show: "Show 2",
          slots: "2,1",
        },
        {
          show: "Show 3",
          slots: "3,4,5",
        },
        {
          show: "Show 4",
          slots: "4,5,3",
        },
        {
          show: "Show 5",
          slots: "5,3,4",
        },
      ],
      log: false,
    };
  },
  computed: {
    arrayShowsSlots() {
      return this.showsSlots.map(({ show, slots }) => {
        return {
          show,
          slots: slots.split(/ *, */),
        };
      });
    },
    numSlots() {
      return this.arrayShowsSlots
        .map(({ slots }) => slots)
        .flat()
        .map((slot) => parseInt(slot))
        .reduce((acc, slot) => (isNaN(slot) ? acc : Math.max(acc, slot)), 0);
    },
    preferences() {
      if (this.arrayShowsSlots.length) {
        const preferences = [];
        this.arrayShowsSlots
          .filter(({ show, slots }) => slots !== [] && show !== "")
          .forEach(({ show, slots }) => {
            slots
              .filter((slot) => slot !== "")
              .forEach((slot) => {
                if (!preferences[slot]) {
                  preferences[slot] = [show];
                } else {
                  preferences[slot].push(show);
                }
              });
          });
        return preferences;
      }
      return [];
    },
    permutations() {
      const preferences = this.preferences;
      if (preferences.length) {
        let options = preferences[1].map((p) => [p]);
        // Start from index 1 - we've done the index 0 work in the line above
        for (let x = 1; x < this.numSlots; x++) {
          const shows = preferences[x + 1];
          // This will ultimately replace options
          const _options = [];
          // Ensure that some shows exist with this preference
          if (Array.isArray(shows)) {
            shows.forEach((show) => {
              options
                .filter((option) => !option.includes(show))
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
      }
      return [];
    },
  },
  watch: {
    showsSlots: {
      handler() {
        if (this.log && process.env.NODE_ENV !== "production") {
          [
            "numSlots",
            "arrayShowsSlots",
            "preferences",
            "permutations",
          ].forEach((attr) => {
            console.log(attr);
            console.table(this[attr]);
          });
        }
      },
      deep: true,
    },
  },
  mounted() {
    if (this.log && process.env.NODE_ENV !== "production") {
      console.log(this.numSlots);
      console.log(
        this.arrayShowsSlots
          .map(({ slots }) => slots)
          .flat()
          .map((x) => parseInt(x))
      );
    }
  },
  methods: {
    newShow() {
      const l = this.showsSlots.length + 1;
      this.showsSlots.push({
        show: "Show " + l,
        slots: l.toString(),
      });
    },
    removeShow(index) {
      this.showsSlots.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.season-gen {
  width: 100%;
  display: flex;
  flex-direction: row;

  &__inputs {
    @include flex($align: center);
    margin-top: 1rem;

    fieldset {
      @include flex(row, space-between, center);
      width: 100%;
      border: none;
      input {
        width: 100%;
        flex: 1;
        border: 2px solid black;
        border-radius: 0.5rem;
        padding: 0.25rem;

        &[name*="show"] {
          max-width: 39%;
        }
        &[name*="slots"] {
          max-width: 59%;
          margin-left: 0.5rem;
        }
      }
    }

    .button {
      margin-top: 1rem;
    }
  }

  &__wrapper {
    @include flex($align: center);
  }

  &__table {
    margin-top: 1rem;

    tr:nth-child(2n + 1) {
      background-color: #cccccc;
    }

    th {
      background-color: $grey-0;
      color: $white;
    }

    tr > * {
      padding: 0.5rem;
    }
  }

  &__remove-show {
    margin-left: 0.5rem;
    cursor: pointer;
    color: $primary;
    font-weight: 700;
    font-size: 2rem;
    @include flex($justify: center);
  }
}
</style>
