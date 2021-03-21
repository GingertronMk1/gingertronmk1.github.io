<template>
  <div class="p-y-2 counter">
    <div class="counter__counter">
      <h3>Counter</h3>
      <div :class="button_classes" v-on:click="countUp()">+{{ increment }}</div>
      <input
        type="text"
        pattern="\d"
        name="counter"
        v-model="count"
        class="m-y-3 font-size-5"
        v-on:change="makeCounterNumber()"
      />
      <div :class="button_classes" v-on:click="countDown()">-{{ increment }}</div>
    </div>
    <div class="counter__increment">
      <h3>Increment</h3>
      <div :class="button_classes" v-on:click="incrementUp()">+</div>
      <input
        type="text"
        pattern="\d"
        name="counter"
        v-model="increment"
        class="m-y-3 font-size-5"
        v-on:change="makeIncrementNumber()"
      />
      <div :class="button_classes" v-on:click="incrementDown()">-</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      increment: 1,
      button_classes: [
        "button",
        "button--center",
        "p-y-1",
        "font-size-10"
      ],
    };
  },
  methods: {
    keyboardCounter(e) {
      switch (e.keyCode) {
        case 75:
        case 87:
        case 38:
          this.countUp();
          break;
        case 74:
        case 83:
        case 40:
          this.countDown();
          break;
      }
    },
    parseFloat(val) {
      let new_val = parseFloat(val);
      if(isNaN(new_val)) {
        new_val = 0;
      }
      return new_val;
    },
    countUp() {
      this.count = this.parseFloat(this.parseFloat(this.count) + this.parseFloat(this.increment));
    },
    countDown() {
      this.count = this.parseFloat(this.parseFloat(this.count) - this.parseFloat(this.increment));
    },
    incrementUp() {
      this.increment++;
    },
    incrementDown() {
      this.increment--;
    },
    makeIncrementNumber() {
      this.increment = this.parseFloat(this.increment);
    },
    makeCounterNumber() {
      this.counter = this.parseFloat(this.counter);
    },
  },
  mounted() {
    document.addEventListener("keydown", this.keyboardCounter);
  },
};
</script>
