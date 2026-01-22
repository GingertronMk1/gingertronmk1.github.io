<script setup lang="ts">
import { type PlayerId, useMoveStore } from "@/stores/moveStore.ts";
import { computed } from "vue";

const { playerId } = defineProps<{
  playerId: PlayerId;
}>();

const moveStore = useMoveStore();

const player = computed(() => moveStore.getPlayer(playerId));
const currentPlayerPosition = computed(() => moveStore.getPlayerPosition(playerId));
</script>

<template>
  <div
    class="cursor-pointer absolute w-8 h-8 rounded-2xl aspect-square flex flex-row justify-center items-center border border-black"
    :class="{
      'bg-red-500': player.type === 'attack',
      'bg-blue-500': player.type === 'defense',
    }"
    :style="{
      right: `${currentPlayerPosition.x}%`,
      top: `${currentPlayerPosition.y}%`,
    }"
    v-text="playerId"
  />
</template>

<style scoped></style>
