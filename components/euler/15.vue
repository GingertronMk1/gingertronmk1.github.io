<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input.x" type="number" />
    <input v-model="input.y" type="number" />
    <button @click="input = { x: 20, y: 20 }">Make input 20 by 20</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemFifteen",
  props: {},
  data() {
    return {
      input: {
        x: 2,
        y: 2,
      },
    };
  },
  methods: {
    result({ x, y }) {
      const numberOfRoutes = [];

      const calcNumberOfRoutes = (x, y) => {
        if (x === 0 || y === 0) {
          return 1;
        }
        if (!(numberOfRoutes[x] && numberOfRoutes[x][y])) {
          if (!numberOfRoutes[x]) {
            numberOfRoutes[x] = [];
          }
          numberOfRoutes[x][y] =
            calcNumberOfRoutes(x - 1, y) + calcNumberOfRoutes(x, y - 1);
        }
        return numberOfRoutes[x][y];
      };

      return calcNumberOfRoutes(x, y);
    },
  },
};
</script>
