<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <button @click="input = 500">Make input 500</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemTwelve",
  props: {},
  data() {
    return {
      input: 5,
    };
  },
  methods: {
    result(limit) {
      let divisors = [];
      const triangles = [];

      const triangleNumbers = (number) => {
        const ret = [1];
        while (ret.length < number) {
          ret.push(ret[ret.length - 1] + ret.length + 1);
        }
        return ret;
      };

      const getDivisors = (number) => {
        const ret = [];
        for (let i = 1; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            ret.push(i);
            if (i !== number / i) {
              ret.push(number / i);
            }
          }
        }
        return ret;
      };

      for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
        const ret = triangleNumbers(i)[i - 1];
        triangles.push(ret);
        divisors = getDivisors(ret);
        if (divisors.length > limit) {
          return ret;
        }
      }
      return {
        divisors,
        triangles,
      };
    },
  },
};
</script>
