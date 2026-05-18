<script setup lang="ts">
import { ref, computed } from 'vue'
const newLine = '\n'
const header = `Who | Opposition | What | Points | Total Points | Anything Else?
---|---|---|---|---|---`
const input = ref('')
const output = computed(() => {
  return [
    header,
    input.value
      .replace(/ *[–-] */g, ' | ')
      .replace(/Opposition: */g, '')
      .split(newLine)
      .filter((line) => line.trim() !== '')
      .sort((a, b) => {
        const aTeam = a.replace(/^.*(\(.*\)).*$/, '$1')
        const bTeam = b.replace(/^.*(\(.*\)).*$/, '$1')
        const teamCompare = aTeam.localeCompare(bTeam)
        return teamCompare === 0 ? a.localeCompare(b) : teamCompare
      })
      .join(newLine),
  ].join(newLine)
})
</script>

<template>
  <div class="flex flex-col *:border-gray-500 space-y-4">
    <textarea
      id="input"
      v-model="input"
      name="input"
      cols="30"
      rows="10"
      placeholder="Copy the text from the RFL website here, and it should spit out a markdown table"
    />
    <pre class="overflow-scroll" v-text="output" />
  </div>
</template>

<style scoped></style>
