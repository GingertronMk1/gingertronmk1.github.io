<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemSix",
  props: {},
  data() {
    return {
      input: 10,
    };
  },
  methods: {
    result(limit) {
      let sumSquares = 0;
      let squaredSum = 0;

      for (let i = 0; i <= limit; i++) {
        sumSquares += i * i;
        squaredSum += i;
      }
      squaredSum = squaredSum * squaredSum;

      return Math.abs(squaredSum - sumSquares);
    },
  },
};
</script>
