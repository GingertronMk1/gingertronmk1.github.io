<template>
  <section>
    <input id="problem2limit" v-model="input" type="number" min="0" />
    <pre v-text="result(input)" />
    <pre v-text="$options.methods.calculatePrimeFactors" />
    <pre v-text="$options.methods.calculateFactors" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemThree",
  props: {},
  data() {
    return {
      input: 600851475143,
    };
  },
  methods: {
    calculateFactors(number) {
      const ret = [];
      for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
          ret.push(i);
        }
      }
      return ret;
    },
    calculatePrimeFactors(number) {
      return this.calculateFactors(number).filter((el) => {
        return this.calculateFactors(el).length < 1;
      });
    },
    result(number) {
      return Math.max(...this.calculatePrimeFactors(number));
    },
  },
};
</script>
