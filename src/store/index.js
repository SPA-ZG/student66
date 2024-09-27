import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'score',
  state: () => ({
    playerX: 0,
    playerO: 0
  }),
  getters: {
    getPlayerX: (state) => state.playerX,
    getPlayerO: (state) => state.playerO
  },
  actions: {
    addplayerX() {
      this.playerX++
    },
    addplayerO() {
      this.playerO++
    },
    resetPlayerScore() {
      this.playerO = 0
      this.playerX = 0
    }
  }
})
