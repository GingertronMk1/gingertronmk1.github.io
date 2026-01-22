import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export type PlayerId = number;

export type PlayerType = "attack" | "defense" | "ball";

export interface Player {
  id: PlayerId;
  number: number;
  type: PlayerType;
}
export interface KeyframePlayer {
  id: PlayerId;
  x: number;
  y: number;
  hasBall: boolean;
}
export type Keyframe = Record<PlayerId, KeyframePlayer>;

export const useMoveStore = defineStore("move", () => {
  // Basic
  const players = ref<Player[]>([]);
  const keyframes = ref<Keyframe[]>([{}]);
  const currentKeyframe = ref<number>(0);
  const selectedPlayer = ref<number>(0);

  // Getters
  const getMaxId = computed<number>((): number =>
    players.value.length < 1 ? 0 : Math.max(...players.value.map(({ id }) => id)),
  );
  const getPlayer = computed<(playerId: PlayerId) => Player>(
    (): ((playerId: PlayerId) => Player) => {
      return function (playerId: PlayerId) {
        const player: Player | undefined = players.value.find(
          ({ id }: { id: PlayerId }): boolean => id === playerId,
        );
        if (player === undefined) {
          throw new Error(`No player found with ID ${playerId}`);
        }
        return player;
      };
    },
  );
  const getCurrentKeyframe = computed(() => {
    const kf = keyframes.value[currentKeyframe.value];
    if (kf === undefined) {
      throw new Error(`No keyframe ${currentKeyframe.value}`);
    }
    return kf;
  });
  const getPlayerPosition = computed(() => {
    const kf = keyframes.value[currentKeyframe.value];
    if (kf === undefined) {
      throw new Error(`No keyframe ${currentKeyframe.value}`);
    }
    return (playerId: PlayerId) => {
      const playerKf: KeyframePlayer | undefined = getCurrentKeyframe.value[playerId];
      if (playerKf === undefined) {
        throw new Error(`No player ${playerId} at keyframe ${getCurrentKeyframe.value}`);
      }
      return playerKf;
    };
  });
  function addNewPlayer(type: PlayerType, n = 1): void {
    players.value.push({
      id: getMaxId.value + 1,
      type: type,
      number: n,
    });
  }

  function setKeyframe(n: number) {
    if (0 > n || n > keyframes.value.length) {
      throw new Error(`Keyframe selection '${n}' out of bounds`);
    }
    currentKeyframe.value = n;
  }

  function incrementKeyframe() {
    setKeyframe(currentKeyframe.value + 1);
  }
  function decrementKeyframe() {
    setKeyframe(currentKeyframe.value - 1);
  }

  watch(players.value, function (newValue: Player[]) {
    newValue.forEach(function ({ id }: { id: PlayerId }): void {
      keyframes.value = keyframes.value.map(function (keyframe: Keyframe) {
        keyframe[id] ??= {
          id: id,
          x: 0,
          y: 0,
          hasBall: false,
        };
        return keyframe;
      });
    });
  });
  return {
    addNewPlayer,
    currentKeyframe,
    getMaxId,
    getPlayer,
    getPlayerPosition,
    keyframes,
    players,
    selectedPlayer,
    setKeyframe,
    incrementKeyframe,
    decrementKeyframe,
  };
});
