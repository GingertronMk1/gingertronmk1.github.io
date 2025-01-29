<script setup lang="ts">

import {computed} from "vue";
import moment from "moment-timezone";

const inputStrings = ref<string>('');

const convertedTimes = computed<moment.Moment[]>(function() {
  const individualTimes: string[] = inputStrings.value.split('\n');
  return individualTimes.map(function (individualTime: string) {
    const [time, timeZone] = individualTime
        .split('|')
        .map((timePart: string) => timePart.trim());
    const newTime = moment.tz(time, timeZone);
    const newTimeHere = newTime.clone().tz('Europe/London')
    return newTimeHere;
  })
});
</script>

<template>

  <textarea name="times" id="times" cols="30" rows="10" v-model="inputStrings" />

  <ul>
    <li v-for="(time, index) in convertedTimes" :key="index" v-text="time.toLocaleString()" />
  </ul>

</template>

<style scoped>

</style>