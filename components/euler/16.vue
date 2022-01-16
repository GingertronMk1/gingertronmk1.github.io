<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <button @click="input = 1000">Make input 1000</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemSixteen",
  props: {},
  data() {
    return {
      input: 15,
    };
  },
  methods: {
    result(power) {
      const v = BigInt(Math.pow(2, power));
      return v
        .toString()
        .split("")
        .map((n) => parseInt(n))
        .reduce((a, b) => a + b, 0);
    },
  },
};
</script>
