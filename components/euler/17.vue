<template>
  <section>
    <h3 v-text="result(input)" />
    <input v-model="input" type="number" />
    <button @click="input = 1000">Make input 1000</button>
    <pre v-text="$options.methods.result" />
  </section>
</template>
<script>
export default {
  name: "ProblemSeventeen",
  props: {},
  data() {
    return {
      input: 15,
    };
  },
  methods: {
    result(limit) {
      const humanise = (num) => {
        const ones = [
          "",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ];
        const tens = [
          "",
          "",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety",
        ];

        const numString = num.toString();

        if (num < 0) {
          return `minus ${humanise(Math.abs(num))}`;
        } else if (num === 0) {
          return "zero";
        } else if (num < 20) {
          // One to nineteen
          return ones[num];
        } else if (numString.length === 2) {
          // Twenty to ninety-nine
          return `${tens[numString[0]]} ${ones[numString[1]]}`;
        } else if (numString.length === 3) {
          // Hundreds
          const onesHundred = `${ones[numString[0]]} hundred`;
          if (numString[1] === "0" && numString[2] === "0") {
            return onesHundred;
          } else {
            return `${onesHundred} and ${humanise(
              +(numString[1] + numString[2])
            )}`;
          }
        } else if (numString.length === 4) {
          // Thousands
          const end = +(numString[1] + numString[2] + numString[3]);
          const onesNumstring0 = `${ones[numString[0]]} thousand`;
          if (end === 0) {
            return onesNumstring0;
          } else if (end < 100) {
            return `${onesNumstring0} and ${humanise(end)}`;
          } else {
            return `${onesNumstring0} ${humanise(end)}`;
          }
        }
      };
      let ret = 0;
      for (let i = 1; i <= limit; i++) {
        const num = humanise(i);
        ret += num
          .split(" ")
          .map((x) => x.split("").length)
          .reduce((a, b) => a + b, 0);
      }
      return ret;
    },
  },
};
</script>
