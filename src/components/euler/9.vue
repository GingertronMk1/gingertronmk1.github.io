<template>
  <section>
    <h3 v-text="`${computedResult.run} gives ${computedResult.value}`" />
    <input v-model="limit" type="number" />
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemNine",
  props: {},
  data() {
    return {
      limit: 1000,
    };
  },
  computed: {
    computedResult() {
      return this.result(this.limit);
    },
  },
  methods: {
    result(limit) {
      for (let i = 1; i < limit; i++) {
        for (let j = i; j < limit; j++) {
          for (let k = j; k < limit; k++) {
            if (i + j + k === limit) {
              if (i * i + j * j === k * k) {
                return {
                  run: `${i} ${j} ${k}`,
                  value: i * j * k,
                };
              }
            }
          }
        }
      }
    },
  },
};
</script>
