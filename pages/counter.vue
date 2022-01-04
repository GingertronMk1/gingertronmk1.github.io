<template>
  <div class="p-y-2 counter">
    <div class="counter__counter">
      <h3>Counter</h3>
      <div :class="button_classes" @click="countUp()">+{{ increment }}</div>
      <input
        v-model="count"
        type="text"
        pattern="\d"
        name="counter"
        :class="input_classes"
        @change="makeCounterNumber()"
      />
      <div :class="button_classes" @click="countDown()">-{{ increment }}</div>
      <div :class="reset_classes" @click="resetCounter()">RC</div>
    </div>
    <div class="counter__increment">
      <h3>Increment</h3>
      <div :class="button_classes" @click="incrementUp()">+</div>
      <input
        v-model="increment"
        type="text"
        pattern="\d"
        name="counter"
        :class="input_classes"
        @change="makeIncrementNumber()"
      />
      <div :class="button_classes" @click="incrementDown()">-</div>
      <div :class="reset_classes" @click="resetIncrement()">RI</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CounterPage",
  data() {
    return {
      count: 0,
      increment: 1,
      button_classes: ["button", "button--center", "p-y-1", "font-size-10"],
      reset_classes: [
        "button",
        "button--center",
        "p-y-1",
        "m-t-2",
        "font-size-5",
      ],
      input_classes: ["m-y-3", "font-size-5"],
    };
  },
  mounted() {
    document.addEventListener("keydown", this.keyboardCounter);
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
      let newVal = parseFloat(val);
      if (isNaN(newVal)) {
        newVal = 0;
      }
      return newVal;
    },
    countUp() {
      this.count = this.parseFloat(
        this.parseFloat(this.count) + this.parseFloat(this.increment)
      );
    },
    countDown() {
      this.count = this.parseFloat(
        this.parseFloat(this.count) - this.parseFloat(this.increment)
      );
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
      this.count = this.parseFloat(this.count);
    },
    resetCounter() {
      this.count = 0;
    },
    resetIncrement() {
      this.increment = 1;
    },
  },
};
</script>

<style lang="scss">
.counter {
  @include flex(row, space-between);

  &__counter {
    width: 69%;
  }

  &__increment {
    width: 29%;
  }

  &__counter,
  &__increment {
    @include flex(column);
  }

  @include MQ($medium) {
    flex-direction: column;

    &__counter,
    &__increment {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
}
</style>
