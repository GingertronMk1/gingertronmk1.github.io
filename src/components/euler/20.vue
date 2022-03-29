<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemTwenty",
  props: {},
  data() {
    return {
      input: 10,
    };
  },
  methods: {
    result(input) {
      const factorialise = (num) => {
        const bigNum = BigInt(num);
        const bigOne = BigInt(1);
        if (bigNum < 1) {
          return bigOne;
        } else {
          return BigInt(bigNum * factorialise(bigNum - bigOne));
        }
      };
      const i = factorialise(input).toString().split("");
      let ret = 0;
      i.forEach((x) => {
        ret += parseInt(x);
      });
      return ret;
    },
  },
};
</script>
