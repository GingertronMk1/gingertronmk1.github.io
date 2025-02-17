<script setup lang="ts">
import { computed, ref } from "vue";

useHead({
  title: 'Counter'
});
const count = ref<string>('0');
const increment = ref<string>('1');
const target = ref<string>('0');

function keyboardCounter({ keyCode }: { keyCode: number }): void {
  process.env.NODE_ENV === "development" && console.log(keyCode);
  switch (keyCode) {
    case 38: // Up arrow
    case 75: // K
    case 83: // S
      countUp();
      break;
    case 40: // Down arrow
    case 74: // J
    case 87: // W
      countDown();
      break;
    case 37: // Right arrow
    case 65: // A
    case 72: // H
      incrementDown();
      break;
    case 39: // Left arrow
    case 68: // D
    case 76: // L
      incrementUp();
      break;
    default:
  }
}
/**
 * Dealing with the increment values
 */
function incrementUp(): string {
  increment.value = (parseInt(increment.value) + 1).toString();
  return increment.value;
}

function incrementDown(): string {
  increment.value = (parseInt(increment.value) - 1).toString();
  return increment.value;
}

function resetCounter(): string {
  count.value = '0';
  return count.value;
}

function resetIncrement(): string {
  increment.value = '1';
  return increment.value;
}

function countUp(): string {
  count.value = (parseInt(count.value) + parseInt(increment.value)).toString();
  return count.value;
}

function countDown(): string {
  count.value = (parseInt(count.value) - parseInt(increment.value)).toString();
  return count.value;
}
const targetIncrement = computed<number>(function () {
  const targetFloat = parseInt(target.value);
  const incrementFloat = parseInt(increment.value);
  const countFloat = parseInt(count.value);
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
      <div class="counter__button counter__button--danger" @click="resetCounter()" v-text="`RC`" />
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
        class="counter__button counter__button--danger"
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
