<template>
  <div>
    <section class="nonograms">
      <label for="nonograms" class="nonograms__label">
        <h1>Nonograms</h1>
        <input
          id="nonograms"
          v-model="nonograms"
          name="nonograms"
          type="text"
        />
        <span
          :style="`color: ${nonogramRow.length > 15 ? 'red' : 'black'}`"
          v-text="nonogramRow.length"
        />
      </label>
      <div class="nonograms__display">
        <div
          v-for="(colour, n) in nonogramRow"
          :key="`nonogram${n}`"
          :style="`background-color: ${colour}`"
          class="nonograms__cell"
          v-text="`\&nbsp;`"
        />
      </div>
    </section>
    <div class="container row">
      <div v-for="i in 24" :key="`grey${i}`" class="col-1" :class="`grey-${i}`">
        &nbsp;
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RandomPage",
  props: {},
  data() {
    return {
      nonograms: "",
    };
  },
  computed: {
    nonogramRow() {
      const block = "#000000";
      const gap = "#ffffff";
      const colours = [];
      this.nonograms
        .split(" ")
        .filter((n) => n)
        .forEach((element, index) => {
          const value = parseInt(element);
          if (!isNaN(value)) {
            if (index > 0) {
              colours.push(gap);
            }
            for (let i = 0; i < value; i++) {
              colours.push(block);
            }
          }
        });
      return colours;
    },
  },
};
</script>

<style lang="scss">
.nonograms {
  &__label {
    @include flex(column, flex-start, flex-start);
    margin-bottom: 1rem;
  }

  &__display {
    @include grid(1fr, 0.3rem, 0.9);
    grid-template-columns: repeat(14, 1rem) repeat(auto-fill, 1rem);
    grid-auto-rows: 1rem;
    justify-content: initial;
    width: 100%;
  }

  &__cell {
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0);
    border: 1px solid black;

    &:nth-child(5n) {
      border-right-color: red;
      border-right-width: 0.1rem;
      border-right-style: dotted;
    }
  }
}

@for $i from 1 through 24 {
  .grey-#{$i} {
    color: grey($i);
    background-color: grey($i);
  }
}
</style>
