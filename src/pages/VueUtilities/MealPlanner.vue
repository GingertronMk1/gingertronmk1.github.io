<script setup>
import { computed, ref } from "vue";

const currentTime = ref(Date());

const timings = ref([]);

setInterval(() => {
  currentTime.value = Date();
}, 1000);

function printFile({ target, dataTransfer }) {
  let files = target.files || dataTransfer.files;
  if (!files.length) {
    return;
  }
  let file = files[0];
  const reader = new FileReader();
  reader.onload = function ({ target: { result } }) {
    timings.value = result.split("\n").map((str) => {
      const [step, time] = str.split(",");
      return {
        step,
        time: new Date(`1970-01-01T${time}Z`),
        done: false,
      };
    });
  };
  reader.readAsText(file);
}
</script>
<template>
  <div id="planner-container" class="py-2 row">
    {{ currentTime }}
    <template v-if="!timings.length">
      <input
        id="timing-input"
        type="file"
        name="timing-input"
        accept=".csv"
        @change.prevent="printFile"
      />
    </template>
    <template v-else>
      <div class="d-flex flex-column">
        <span v-for="(timing, i) in timings" :key="i" v-text="timing" />
      </div>
    </template>
  </div>
</template>
