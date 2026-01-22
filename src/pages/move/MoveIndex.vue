<script setup lang="ts">
import { useMoveStore } from '@/stores/moveStore.ts'
import AppButton from '@/components/AppButton.vue'
import Player from '@/pages/move/Player.vue'

const moveStore = useMoveStore()
</script>

<template>
  {{ moveStore.getMaxId }}
  <div class="flex flex-row space-x-4">
    <AppButton @click="moveStore.addNewPlayer('attack')">Add new attacking player</AppButton>
    <AppButton @click="moveStore.addNewPlayer('defense')">Add new defensive player</AppButton>
  </div>
  <div>
    <div class="aspect-video bg-green-500 relative">
      <Player v-for="player in moveStore.players" :key="player.id" :player-id="player.id" />
    </div>
  </div>
</template>

<style scoped></style>
