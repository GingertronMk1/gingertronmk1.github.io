import { defineStore } from 'pinia'
import Player from '@/pages/move/Player.vue'

export type PlayerId = number;

export type PlayerType = 'attack' | 'defense' | 'ball';

export type Player = {
  id: PlayerId,
  number: number,
  type: PlayerType
};
export type KeyframePlayer = {
  id: PlayerId,
  x: number,
  y: number,
  hasBall: boolean,
}
export type Keyframe = Record<PlayerId, KeyframePlayer>

export const useMoveStore = defineStore('move', {
  state: (): {
    players: Player[],
    keyframes: Keyframe[],
    currentKeyframe: number,
    selectedPlayer: PlayerId,
  } => ({
    players: [],
    keyframes: [],
    currentKeyframe: 0,
    selectedPlayer: 0,
  }),
  getters: {
    getMaxId: (state): number => state.players.length < 1
        ? 0
        : Math.max(...state.players.map(({ id }) => id)),
    getPlayer: (state): (playerId: PlayerId) => Player => {
      return function (playerId: PlayerId) {
        const player: Player | undefined = state.players.find(({ id }: { id: PlayerId }): boolean => id === playerId)
        if (player === undefined) {
          throw new Error(`No player found with ID ${playerId}`);
        }
        return player;
      }
    }
  },
  actions: {
    addNewPlayer: function(type: PlayerType, n: number = 1) {
      this.players.push({
        id: this.getMaxId + 1,
        type: type,
        number: n,
      })
    }
  }
})
