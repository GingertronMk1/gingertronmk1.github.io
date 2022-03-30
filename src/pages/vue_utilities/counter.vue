<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = ref(1);

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

document.addEventListener("keydown", keyboardCounter);
</script>
<template>
  <div id="counter-container" class="py-2 row">
    <div class="col-12 col-md-8 d-flex flex-column">
      <h3>Counter</h3>
      <div class="btn btn-primary" @click="countUp()">+{{ increment }}</div>
      <input
        v-model="count"
        type="text"
        pattern="\d"
        name="counter"
        class="input_classes"
        @change="makeCounterNumber()"
      />
      <div class="btn btn-primary" @click="countDown()">-{{ increment }}</div>
      <div class="btn btn-danger" @click="resetCounter()">RC</div>
    </div>
    <div class="col-12 col-md-4 d-flex flex-column">
      <h3>Increment</h3>
      <div class="btn btn-primary" @click="incrementUp()">+</div>
      <input
        v-model="increment"
        type="text"
        pattern="\d"
        name="counter"
        class="input_classes"
        @change="makeIncrementNumber()"
      />
      <div class="btn btn-primary" @click="incrementDown()">-</div>
      <div class="btn btn-danger" @click="resetIncrement()">RI</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#counter-container > [class^="col"] {
  & > * + * {
    margin-top: 1rem;
  }
}
</style>
