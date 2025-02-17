<script setup lang="ts">

import {computed} from "vue";
import moment from "moment";
import momentTz from "moment-timezone";

interface Time {
  hours: number;
  minutes: number;
  day: number;
  month: number;
  year: number;
  timezone: string;
}

const inputTimes = ref<Array<Time>>([]);

const addTime = function () {
  const now = moment();
  inputTimes.value.push({
    hours: now.hour(),
    minutes: now.minute(),
    day: now.date(),
    month: now.month() + 1,
    year: now.year(),
    timezone: now.zoneName(),
  });
}

const removeTime = function (t: Time) {
  inputTimes.value = inputTimes.value.filter((_t: Time) => _t !== t);
}

addTime();

const convertTime = function (t: Time) {
  const newTime = momentTz.tz({
    ...t,
    month: t.month - 1,
    seconds: 0
  }, t.timezone);
  return newTime.clone().tz('Europe/London')
};
</script>

<template>

  <div class="times">
    <div v-for="(time, index) in inputTimes" :key="index" class="times__input-time">
      <label class="times__input-time-part" for="hours">
        Hours
        <input type="number" v-model="time.hours" id="hours"/>
      </label>
      <label class="times__input-time-part" for="minutes">
        Minutes
        <input type="number" v-model="time.minutes" id="minutes"/>
      </label>
      <label class="times__input-time-part" for="year">
        Year
        <input type="number" v-model="time.year" id="year"/>
      </label>
      <label class="times__input-time-part" for="month">
        Month
        <input type="number" v-model="time.month" id="month"/>
      </label>
      <label class="times__input-time-part" for="day">
        Day
        <input type="number" v-model="time.day" id="day"/>
      </label>
      <label for="timezone" class="times__input-time-part times__input-time-part--timezone">
        Timezone
        <input type="text" v-model="time.timezone" id="timezone"/>
      </label>
      <div class="times__time-display">
        <span v-text="convertTime(time)"/>
        <button @click="removeTime(time)">Remove</button>
      </div>
    </div>
  </div>

  <button @click="addTime">Add Time</button>

</template>

<style lang="scss" scoped>
.times {
  display: flex;
  flex-direction: column;

  &__time-display {
    display: flex;
    min-width: 100%;
    flex: 1;
    margin-top: 0.5rem;

    & > button {
      margin-inline-start: auto;
    }
  }

  &__input-time {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;

    & + & {
      border-top: 2px solid black;
    }
  }

  &__input-time-part {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 1%;

    & + &:not(&--timezone) {
      margin-inline-start: 0.25rem;
    }

    &--timezone {
      min-width: 100%;
    }
  }

  pre {
    min-width: 100%;
    flex: 1;
    margin: 0;
  }
}

</style>