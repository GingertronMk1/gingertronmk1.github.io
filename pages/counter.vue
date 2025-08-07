<script setup lang="ts">
import {computed, ref} from "vue";
import AppButton from '~/components/AppButton.vue';

const initialHash = window.location.hash.slice(1);
const initialHashParams = new URLSearchParams(initialHash);

const count = ref<string>(initialHashParams.get('count') ?? '0');
const increment = ref<string>(initialHashParams.get('increment') ?? '1');
const target = ref<string>(initialHashParams.get('target') ?? '0');

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
  window.location.hash = new URLSearchParams({
    count: count.value,
    target: target.value,
    increment: increment.value,
  }).toString()
  return newTitle;
}

document.addEventListener("keydown", keyboardCounter);

useHead({
  title: updateTitleValue
});
</script>
<template>
  <div class="flex flex-col md:flex-row flex-wrap gap-4 *:flex *:flex-col *:min-w-[33%] *:flex-1 *:gap-y-4 [&_h3]:text-2xl">
    <div>
      <h3>Counter</h3>
      <AppButton
          @click="countUp()"
          v-text="`+${increment}`"
      />
      <AppInput
          v-model="count"
          type="text"
          pattern="\d"
          name="counter"
          class="text-2xl"
      />
      <AppButton
          @click="countDown()"
          v-text="`-${increment}`"
      />
      <AppButton
          class="bg-red-600"
          @click="resetCounter()" v-text="`RC`"/>
    </div>
    <div>
      <h3>Increment</h3>
      <AppButton @click="incrementUp()" v-text="`+`"/>
      <AppInput
          v-model="increment"
          type="text"
          pattern="\d"
          name="counter"
          class="text-2xl"
      />
      <AppButton
          @click="incrementDown()"
          v-text="`-`"
      />
      <AppButton
          class="bg-red-600"
          @click="resetIncrement()"
          v-text="`RI`"
      />
    </div>
    <div class="">
      <h3>Target</h3>
      <AppInput
          v-model="target"
          type="text"
          pattern="\d"
          name="counter"
          class="text-2xl"
      />
    </div>
    <h3 class="my-auto text-4xl text-center" v-text="targetText"/>
  </div>
</template>
