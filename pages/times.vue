<script setup lang="ts">

import moment from "moment";
import momentTz from "moment-timezone";

const { tz } = momentTz;

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
  const newTime = tz({
    ...t,
    month: t.month - 1,
    seconds: 0
  }, t.timezone);
  return newTime.clone().tz('Europe/London')
};

const timeZones = moment.tz.names().map((zone: string) => zone.replaceAll('_', ' '));
</script>

<template>

  <span v-text="`Converting from ${moment.tz.guess()}`" />

  <div class="">
    <div v-for="(time, index) in inputTimes" :key="index" class="">
      <label class="" for="hours">
        Hours
        <input type="number" v-model="time.hours" id="hours"/>
      </label>
      <label class="" for="minutes">
        Minutes
        <input type="number" v-model="time.minutes" id="minutes"/>
      </label>
      <label class="" for="year">
        Year
        <input type="number" v-model="time.year" id="year"/>
      </label>
      <label class="" for="month">
        Month
        <input type="number" v-model="time.month" id="month"/>
      </label>
      <label class="" for="day">
        Day
        <input type="number" v-model="time.day" id="day"/>
      </label>
      <label for="timezone" class="">
        Timezone
        <input list="zones" type="text" class="" v-model="time.timezone" />
        <datalist id="zones">
          <option v-for="tz in timeZones" :key="tz" :value="tz" v-text="tz" />
        </datalist>
      </label>
      <div class="">
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

    & > input {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid gray;
    }
  }

  pre {
    min-width: 100%;
    flex: 1;
    margin: 0;
  }
}

</style>