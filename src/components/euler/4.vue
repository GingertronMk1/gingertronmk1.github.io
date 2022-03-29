<template>
  <section>
    <h3 v-text="result()" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemFour",
  props: {},
  data() {
    return {
      input: 600851475143,
    };
  },
  methods: {
    result() {
      let ret = 0;
      for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
          const product = i * j;
          const productString = product.toString();
          if (
            productString === productString.split("").reverse().join("") &&
            product > ret
          ) {
            ret = product;
          }
        }
      }
      return ret;
    },
  },
};
</script>
