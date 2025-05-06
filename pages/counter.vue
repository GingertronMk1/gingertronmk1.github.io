<script setup lang="ts">
import { computed, ref } from "vue";

const count = ref<string>('0');
const increment = ref<string>('1');
const target = ref<string>('0');

function keyboardCounter(e: KeyboardEvent): void {
  process.env.NODE_ENV === "development" && console.log(e);
  switch (e.code) {
    case 'ArrowUp': // Up arrow
    case 'KeyK': // K
    case 'KeyS': // S
        e.preventDefault();
        countUp();
        break;
    case 'ArrowDown': // Down arrow
    case 'KeyJ': // J
    case 'KeyW': // W
      e.preventDefault();
      countDown();
      break;
    case 'ArrowLeft': // Right arrow
    case 'KeyA': // A
    case 'KeyH': // H
      e.preventDefault();
      incrementDown();
      break;
    case 'ArrowRight': // Left arrow
    case 'KeyD': // D
    case 'KeyL': // L
      e.preventDefault();
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
  updateTitleValue();
  switch (targetIncrement.value) {
    case 0:
      return `You're there!`;
    case 1:
      return `1 increment`;
    default:
      return `${targetIncrement.value} increments`;
  }
});

function updateTitleValue(): string {
  const newTitle = `Counter | ${count.value}/${target.value}`;
  document.title = newTitle;
  return newTitle;
}
document.addEventListener("keydown", keyboardCounter);

useHead({
  title: updateTitleValue
});
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
