<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AppButton from "~/components/AppButton.vue";
import PlayerComponent from "@/components/PlayerComponent.vue";
import type { Timeout } from "unenv/node/internal/timers/timeout";

const keyFrameLength = ref<number>(1000);
const currentTime = ref<number>(0);

type PlayerList = Record<string, number>;

type ObjectList = Record<
  string,
  {
    classes: string | string[];
    selectedColour: `#${string}`;
    nonSelectedColour: `${string}`;
  }
>;

type Teams = "attack" | "defense" | "objects";

const playing = ref<boolean>(false);
type PositionList<TPlayer, TObject> = {
  attack: TPlayer;
  defense: TPlayer;
  objects: TObject;
};

const players = ref<PositionList<PlayerList, ObjectList>>({
  attack: {
    leftWing: 1,
    rightWing: 1,
    leftLink: 2,
    rightLink: 2,
    leftMid: 3,
    rightMid: 3,
  },
  defense: {
    leftWing: 1,
    rightWing: 1,
    leftLink: 2,
    rightLink: 2,
    leftMid: 3,
    rightMid: 3,
  },
  objects: {
    ball: {
      classes: [
        "bg-white",
        "w-[0.8rem]",
        "h-[1rem]",
        "rounded-3xl",
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
      ],
      selectedColour: "#808080",
      nonSelectedColour: "#ffffff",
    },
  },
});

type KeyframeDate = {
  x: number;
  y: number;
};

type PlayerKeyframeData = KeyframeDate & {
  hasBall?: boolean;
};

type ObjectKeyframeData = KeyframeDate;
type ObjectLocationList = Record<string, ObjectKeyframeData>;
type PlayerLocationList = Record<string, PlayerKeyframeData>;

type Keyframe = {
  players: PositionList<PlayerLocationList, ObjectLocationList>;
};

const keyframes = ref<Keyframe[]>([
  {
    players: {
      attack: {
        leftWing: { x: 25, y: 40 },
        leftLink: { x: 35, y: 40 },
        leftMid: { x: 45, y: 40 },
        rightMid: { x: 55, y: 40 },
        rightLink: { x: 65, y: 40 },
        rightWing: { x: 75, y: 40 },
      },
      defense: {
        leftWing: { x: 25, y: 60 },
        leftLink: { x: 35, y: 60 },
        leftMid: { x: 45, y: 60 },
        rightMid: { x: 55, y: 60 },
        rightLink: { x: 65, y: 60 },
        rightWing: { x: 75, y: 60 },
      },
      objects: {
        ball: { x: 50, y: 50 },
      },
    },
  },
]);

const selectedPlayer = ref<[Teams, string]>([
  "attack",
  Object.keys(players.value["attack"])[0],
]);
const keyFrameSelection = ref<number>(0);

const selectedKeyFrame = computed<Keyframe>(
  () => keyframes.value[keyFrameSelection.value],
);

function addKeyframe(): void {
  const lastKeyFrame = Object.keys(keyframes.value);
  keyframes.value.push(
    JSON.parse(JSON.stringify(keyframes.value[lastKeyFrame.length - 1])),
  );
}

const getPlayerX = (positionGroup: Teams, index: string): number =>
  selectedKeyFrame.value.players[positionGroup][index].x;
const getPlayerY = (positionGroup: Teams, index: string): number =>
  selectedKeyFrame.value.players[positionGroup][index].y;

addKeyframe();

function startDrag(evt: DragEvent, itemPosition: Teams, itemId: string) {
  const [selectedPosition, selectedId] = selectedPlayer.value;
  if (itemPosition !== selectedPosition || itemId !== selectedId) {
    evt.preventDefault();
    return;
  }
  if (!evt.dataTransfer) {
    return;
  }
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.setDragImage(document.createElement("span"), 0, 0);
}

function onDragOver(evt: DragEvent) {
  if (evt.target === null) {
    return;
  }
  const { clientWidth, clientHeight, id } = evt.target as HTMLDivElement;
  if (id !== "field") {
    return;
  }
  evt.preventDefault();
  evt.stopPropagation();
  const { offsetX, offsetY } = evt;
  const targetWidth = clientWidth;
  const targetHeight = clientHeight;
  const newX = (offsetX / targetWidth) * 100;
  const newY = 100 - (offsetY / targetHeight) * 100;
  console.table({ clientWidth, clientHeight, offsetX, offsetY });
  const [selectedPosition, selectedPlayerId] = selectedPlayer.value;
  selectedKeyFrame.value.players[selectedPosition][selectedPlayerId].x =
    Math.ceil(newX);
  selectedKeyFrame.value.players[selectedPosition][selectedPlayerId].y =
    Math.ceil(newY);
}

watch(keyFrameSelection, function (newValue) {
  currentTime.value = Number(newValue) * keyFrameLength.value;
});

let interval: Timeout<any[]> | null = null;
let lastFrame: boolean = false;
function togglePlayback(): void {
  if (interval === null) {
    keyFrameSelection.value = 0;
    playing.value = true;
    interval = setInterval(function () {
      if (keyFrameSelection.value >= keyframes.value.length - 1 && !lastFrame) {
        lastFrame = true;
      } else if (lastFrame) {
        keyFrameSelection.value = 0;
        lastFrame = false;
      } else {
        keyFrameSelection.value++;
      }
    }, keyFrameLength.value);
  } else {
    clearInterval(interval);
    playing.value = false;
    interval = null;
    lastFrame = false;
    keyFrameSelection.value = 0;
  }
}

const dataJSON = computed({
  get() {
    return JSON.stringify(
      {
        keyframeLength: keyFrameLength.value,
        players: players.value,
        keyframes: keyframes.value,
      },
      null,
      4,
    );
  },
  set(newValue: string) {
    const originalPlayers = players.value;
    const originalKeyframes = keyframes.value;
    const originalKeyframeLength = keyFrameLength.value;
    try {
      const parsedJSON = JSON.parse(newValue);
      players.value = parsedJSON.players;
      keyframes.value = parsedJSON.keyframes;
      keyFrameLength.value = parsedJSON.keyframeLength;
    } catch (e) {
      console.info("error reading JSON", e);
      players.value = originalPlayers;
      keyframes.value = originalKeyframes;
      keyFrameLength.value = originalKeyframeLength;
    }
  },
});
const showJSON = ref<boolean>(true);
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl">Move</h1>

    <div
      id="field"
      class="w-full relative aspect-[1.5] bg-green-400 *:absolute *:cursor-pointer"
      @dragover="(e) => onDragOver(e)"
    >
      <PlayerComponent
        v-for="(number, index) in players.attack"
        :key="index"
        :colour-class="
          selectedPlayer[0] === 'attack' &&
          selectedPlayer[1] === index &&
          !playing
            ? 'bg-red-200'
            : 'bg-red-500'
        "
        :x-percent="getPlayerX('attack', index)"
        :y-percent="getPlayerY('attack', index)"
        :number="number"
        :should-be-animated="playing && keyFrameSelection > 0"
        :animation-length="keyFrameLength"
        @click="selectedPlayer = ['attack', index]"
        @dragstart="(e: DragEvent) => startDrag(e, 'attack', index)"
      />
      <PlayerComponent
        v-for="(number, index) in players.defense"
        :key="index"
        :colour-class="
          selectedPlayer[0] === 'defense' &&
          selectedPlayer[1] === index &&
          !playing
            ? 'bg-blue-200'
            : 'bg-blue-500'
        "
        :x-percent="getPlayerX('defense', index)"
        :y-percent="getPlayerY('defense', index)"
        :number="number"
        :should-be-animated="playing && keyFrameSelection > 0"
        :animation-length="keyFrameLength"
        @click="selectedPlayer = ['defense', index]"
        @dragstart="(e: DragEvent) => startDrag(e, 'defense', index)"
      />
      <div
        v-for="(object, index) in players.objects"
        :key="index"
        class="border-gray-700 border-2"
        :class="[object.classes]"
        :style="{
          left: `calc(${getPlayerX('objects', index)}% - 1rem)`,
          bottom: `calc(${getPlayerY('objects', index)}% - 1rem)`,
          backgroundColor:
            selectedPlayer[0] === 'objects' &&
            selectedPlayer[1] === index &&
            !playing
              ? object.selectedColour
              : object.nonSelectedColour,
          ...(playing && keyFrameSelection > 0
            ? {
                'transition-property': 'all',
                'transition-duration': `${keyFrameLength}ms`,
                'transition-timing-function': 'linear',
              }
            : []),
        }"
        draggable="true"
        @click="selectedPlayer = ['objects', index]"
        @dragstart="(e) => startDrag(e, 'objects', index)"
      />
    </div>
    <section class="flex flex-row gap-x-4 *:flex *:flex-col *:gap-4">
      <div class="max-w-32 [&>label]:flex [&>label]:flex-col">
        <span v-text="selectedPlayer.join(', ')" />
        <label for="y">
            y:
            <AppInput
              id="y"
              v-model="
                keyframes[keyFrameSelection]['players'][selectedPlayer[0]][
                  selectedPlayer[1]
                ].y
              "
              type="number"
              name="y"
              min="0"
              max="100"
              step="1"
              class="p-2"
            />
        </label>
        <label for="x">
            x:
            <AppInput
              id="x"
              v-model="
                keyframes[keyFrameSelection]['players'][selectedPlayer[0]][
                  selectedPlayer[1]
                ].x
              "
              type="number"
              name="x"
              min="0"
              max="100"
              step="1"
              class="p-2"
            />
        </label>
      </div>
      <section class="space-y-2">
        <h3 class="text-xl">Keyframe Select</h3>
        <label
          v-for="key in keyframes.keys()"
          :key="key"
          :for="key.toString()"
          class="flex flex-row gap-4"
        >
          <span v-text="key" />
          <AppInput
            :id="key.toString()"
            v-model="keyFrameSelection"
            :value="key"
            type="radio"
          />
          <span
            class="cursor-pointer font-extrabold text-red-700"
            @click="keyframes.splice(key, 1)"
            >X</span
          >
        </label>
        <AppButton @click="addKeyframe">Add Keyframe</AppButton>
      </section>
      <section>
        <label for="keyframeLength">
          Keyframe Length (ms)
          <AppInput
            id="keyframeLength"
            v-model="keyFrameLength"
            class="ms-4"
            type="number"
            name="keyframeLength"
            step="50"
          />
        </label>
        <AppButton @click="togglePlayback">{{
          playing ? "Pause" : "Play"
        }}</AppButton>
      </section>
    </section>
    <section class="flex flex-col">
      <label for="showJSON">
        Show JSON
        <input
          id="showJSON"
          v-model="showJSON"
          type="checkbox"
          name="showJSON"
        />
      </label>
      <AppInput
        type="textarea"
        v-show="showJSON"
        id="json"
        v-model="dataJSON"
        name="json"
        cols="30"
        rows="10"
      />
    </section>
  </div>
</template>
