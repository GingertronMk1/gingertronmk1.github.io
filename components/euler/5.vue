<template>
  <section>
    <h3 v-text="calculating ? 'Calculating...' : resultComputed" />
    <input v-model="input" type="number" />
    <button @click="input = 20">Make value 20</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemFive",
  props: {},
  data() {
    return {
      input: 5,
      calculating: false,
    };
  },
  computed: {
    resultComputed() {
      return this.result(this.input);
    },
  },
  methods: {
    result(limit) {
      this.calculating = true;
      const breakVals = {
        outer: false,
        inner: false,
      };
      let i = 1;
      while (!breakVals.outer) {
        breakVals.inner = false;
        for (let j = limit; j > 0 && !breakVals.inner; j--) {
          if (i % j !== 0) {
            breakVals.inner = true;
          }
        }
        if (breakVals.inner === false) {
          breakVals.outer = true;
        } else {
          i++;
        }
      }
      this.calculating = false;
      return i;
    },
  },
};
</script>
