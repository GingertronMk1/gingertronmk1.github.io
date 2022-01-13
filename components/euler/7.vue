<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemSeven",
  props: {},
  data() {
    return {
      input: 10001,
    };
  },
  methods: {
    result(limit) {
      let ret = 0;
      let retCount = 0;
      const isPrime = (number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
        return true;
      };

      for (let i = 2; retCount < limit; i++) {
        if (isPrime(i)) {
          ret = i;
          retCount++;
        }
      }
      return ret;
    },
  },
};
</script>
