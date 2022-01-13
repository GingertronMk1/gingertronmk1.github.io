<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemTen",
  props: {},
  data() {
    return {
      input: 2000000,
    };
  },
  methods: {
    result(limit) {
      const ret = [];
      const isPrime = (number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
        return true;
      };

      for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
          ret.push(i);
        }
      }
      return ret.reduce((a, b) => a + b, 0);
    },
  },
};
</script>
