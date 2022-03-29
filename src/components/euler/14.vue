<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <button @click="input = 10 ** 6">Make input 1 million</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemFourteen",
  props: {},
  data() {
    return {
      input: 10,
    };
  },
  methods: {
    result(limit) {
      const chains = [];
      const ret = {
        value: 0,
        chain: [],
        chainLength: 0,
      };
      for (let i = 1; i < limit; i++) {
        let j = i;
        let chain = [];
        while (j > 1) {
          if (chains[j]) {
            chain = chain.concat(chains[j]);
            j = 1;
          } else {
            if (j % 2 === 0) {
              j = j / 2;
            } else {
              j = 3 * j + 1;
            }
            chain.push(j);
          }
        }
        chains[i] = chain;
        if (chain.length > ret.chainLength) {
          ret.chain = chain;
          ret.value = i;
          ret.chainLength = chain.length;
        }
      }
      return ret;
    },
  },
};
</script>
