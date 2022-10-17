<script setup>
import { computed, ref } from "vue";

const count = ref(0);
const increment = ref(1);
const target = ref(0);

function keyboardCounter({ keyCode }) {
  process.env.NODE_ENV === "development" && console.log(keyCode);
  switch (keyCode) {
    case 87: // W
    case 38: // Up arrow
      countUp();
      break;
    case 83: // S
    case 40: // Down arrow
      countDown();
      break;
    case 74: // J
      incrementDown();
      break;
    case 75: // K
      incrementUp();
      break;
    default:
      return;
  }
}

/**
 * Dealing with the increment values
 */

function incrementUp() {
  increment.value++;
}

function incrementDown() {
  increment.value--;
}

function makeIncrementNumber() {
  increment.value = parseFloat(increment.value);
}

function makeCounterNumber() {
  count.value = parseFloat(count.value);
}

function resetCounter() {
  count.value = 0;
}

function resetIncrement() {
  increment.value = 1;
}

function parseFloat(val) {
  let newVal = Number.parseFloat(val);
  if (isNaN(newVal)) {
    newVal = 0;
  }
  return newVal;
}

function countUp() {
  count.value = parseFloat(
    parseFloat(count.value) + parseFloat(increment.value)
  );
}

function countDown() {
  count.value = parseFloat(
    parseFloat(count.value) - parseFloat(increment.value)
  );
}

function makeTargetNumber() {
  target.value = parseFloat(target.value);
}

const targetIncrement = computed(function () {
  const targetFloat = parseFloat(target.value);
  const incrementFloat = parseFloat(increment.value);
  const countFloat = parseFloat(count.value);
  return Math.ceil((targetFloat - countFloat) / incrementFloat);
});

const targetText = computed(function () {
  switch (targetIncrement.value) {
    case 0:
      return `You're there!`;
    case 1:
      return `1 increment`;
    default:
      return `${targetIncrement.value} increments`;
  }
});

document.addEventListener("keydown", keyboardCounter);
</script>
<template>
  <div id="counter-container" class="py-2 row">
    <div class="col-12 col-sm-8 d-flex flex-column mb-3">
      <h3 v-text="`Counter`" />
      <div
        class="btn btn-primary"
        @click="countUp()"
        v-text="`+${increment}`"
      />
      <input
        v-model="count"
        type="text"
        pattern="\d"
        name="counter"
        class="input_classes"
        @change="makeCounterNumber()"
      />
      <div
        class="btn btn-primary"
        @click="countDown()"
        v-text="`-${increment}`"
      />
      <div class="btn btn-danger" @click="resetCounter()" v-text="`RC`" />
    </div>
    <div class="col-12 col-sm-4 d-flex flex-column mb-3">
      <h3>Increment</h3>
      <div class="btn btn-primary" @click="incrementUp()" v-text="`+`" />
      <input
        v-model="increment"
        type="text"
        pattern="\d"
        name="counter"
        class="input_classes"
        @change="makeIncrementNumber()"
      />
      <div class="btn btn-primary" @click="incrementDown()" v-text="`-`" />
      <div class="btn btn-danger" @click="resetIncrement()" v-text="`RI`" />
    </div>
    <div class="col-12 col-sm-6 d-flex flex-column mb-3">
      <h3 v-text="`Target`" />
      <input
        v-model="target"
        type="text"
        pattern="\d"
        name="counter"
        class="input_classes"
        @change="makeTargetNumber()"
      />
    </div>
    <h3
      class="col-12 col-sm-6 d-flex flex-column mb-3 align-items-center justify-content-center"
      v-text="targetText"
    />
  </div>
</template>

<style lang="scss" scoped>
#counter-container > [class^="col"] {
  & > * + * {
    margin-top: 1rem;
  }
}
</style>
