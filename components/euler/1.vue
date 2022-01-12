<template>
  <section>
    <input id="numbers" v-model="numbers" type="text" name="numbers" />
    {{ result }}
    <pre v-text="$options.methods.calculateResult" />
  </section>
</template>
<script>
export default {
  name: "ProblemOne",
  props: {},
  data() {
    return {
      numbers: "3, 5",
    };
  },
  computed: {
    result() {
      return this.calculateResult(this.numbers);
    },
  },
  methods: {
    calculateResult(numbers) {
      const numbersArray = numbers.split(/, */).map((n) => parseInt(n));
      const resultsArray = [];

      for (let i = 0; i < 1000; i++) {
        if (numbersArray.some((el) => i % el === 0)) {
          resultsArray.push(i);
        }
      }

      return resultsArray.reduce((a, b) => a + b);
    },
  },
};
</script>
