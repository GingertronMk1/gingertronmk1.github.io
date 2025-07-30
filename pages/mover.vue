<script setup lang="ts">
const move = ref<string>('')

type Player = {
  id: string;
  number: number;
  position: 'attack' | 'defense';
}

type Moves = {
  players: Player[];
  start: Keyframe;
  keyframes: Keyframe[];
}

type PlayerPosition = {
  player: string;
  x: number;
  y: number;
}

type Keyframe = {
  playerPositions: PlayerPosition[];
  time: number
}

const parsedMove = computed<Moves>({
  get(): Moves {
    try {
      return JSON.parse(move.value) as Moves;
    }
    catch (_e: unknown) {
      console.error(_e);
      return {
        players: [], start: {
          playerPositions: [],
          time: 0,
        },
        keyframes: []
      }
    }
  },
  set(newValue: Moves): void {
    move.value = JSON.stringify(newValue, null, '  ');
  }
});

parsedMove.value = {
  players: [
    {
      id: "leftWing",
      number: 1,
      position: 'attack',
    },
    {
      id: "leftLink",
      number: 2,
      position: 'attack',
    },
    {
      id: "leftMid",
      number: 3,
      position: 'attack',
    },
    {
      id: "rightMid",
      number: 3,
      position: 'attack',
    },
    {
      id: "rightLink",
      number: 2,
      position: 'attack',
    },
    {
      id: "rightWing",
      number: 1,
      position: 'attack',
    },
  ],
  start: {
    playerPositions: [],
    time: 0
  },
  keyframes: [],
}
</script>

<template>
  <main>
    <textarea
      id="move"
      v-model="move"
      name="move"
      cols="30"
      rows="10"
    />
    <div class="relative">
      <div
          v-for="player in parsedMove.players"
          :key="player.id"
          v-text="player.number"
          class="absolute w-[25px] h-[25px] rounded-2xl flex flex-row justify-center items-center"
          :class="player.position === 'attack' ? 'bg-blue-500' : 'bg-red-500'"
          :style="{
            width: '25px',
            height: '25px',
          }"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
