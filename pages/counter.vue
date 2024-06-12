<script setup lang="ts">
import { computed, ref } from "vue";
const count = ref<number>(0);
const increment = ref<number>(1);
const target = ref<number>(0);

function keyboardCounter({ keyCode }: { keyCode: number }): void {
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
  }
}
/**
 * Dealing with the increment values
 */
function incrementUp(): void {
  increment.value++;
}
function incrementDown(): void {
  increment.value--;
}
function resetCounter(): void {
  count.value = 0;
}
function resetIncrement(): void {
  increment.value = 1;
}
function countUp(): void {
  count.value = count.value + increment.value;
}
function countDown(): void {
  count.value = count.value - increment.value;
}
const targetIncrement = computed<number>(function () {
  const targetFloat = target.value;
  const incrementFloat = increment.value;
  const countFloat = count.value;
  return Math.ceil((targetFloat - countFloat) / incrementFloat);
});

const targetText = computed<string>(function () {
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
  <div class="counter">
    <div class="counter__counter">
      <h3 v-text="`Counter`" />
      <div
        class="counter__button"
        @click="countUp()"
        v-text="`+${increment}`"
      />
      <input
        v-model="count"
        type="text"
        pattern="\d"
        name="counter"
        class="counter__input"
      />
      <div
        class="counter__button"
        @click="countDown()"
        v-text="`-${increment}`"
      />
      <div class="counter__button--danger" @click="resetCounter()" v-text="`RC`" />
    </div>
    <div class="counter__increment">
      <h3>Increment</h3>
      <div class="counter__button" @click="incrementUp()" v-text="`+`" />
      <input
        v-model="increment"
        type="text"
        pattern="\d"
        name="counter"
        class="counter__input"
      />
      <div
        class="counter__button"
        @click="incrementDown()"
        v-text="`-`"
      />
      <div
        class="counter__button--danger"
        @click="resetIncrement()"
        v-text="`RI`"
      />
    </div>
    <div class="counter__target">
      <h3 v-text="`Target`" />
      <input
        v-model="target"
        type="text"
        pattern="\d"
        name="counter"
        class="counter__input"
      />
    </div>
    <h3 class="counter__target-text" v-text="targetText" />
  </div>
</template>
