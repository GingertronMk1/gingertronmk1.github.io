<template>
  <section>
    <h3>Problem 2</h3>
    <input id="problem2limit" v-model="limit" type="number" min="0" />
    <pre v-text="$options.methods.calculateEvenFibs" />
  </section>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      limit: 4000000,
    };
  },
  computed: {
    result() {
      return this.calculateEvenFibs(this.limit).reduce((a, b) => a + b);
    },
  },
  methods: {
    calculateEvenFibs(limit) {
      let a = 1;
      let b = 2;
      let ret = 0;
      while (a < limit) {
        const c = a + b;
        if (a % 2 === 0) {
          ret += a;
        }
        a = b;
        b = c;
      }
      return {
        ret,
        a,
        b,
      };
    },
  },
};
</script>
