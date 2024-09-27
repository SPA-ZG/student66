<template>
  <div class="gameboard" :style="{ backgroundColor: boardColor }">
    <div class="status">{{ gameStatus }}</div>
    <div class="board">
      <Square
        v-for="(value, index) in squares"
        :key="index"
        :value="value"
        @click="handleClick(index)"
      />
    </div>
    <ResetButton @reset="resetGame" />
    <div class="score-board">
      <p>Player X: {{ playerX }}</p>
      <p>Player O: {{ playerO }}</p>
      <button @click="resetPlayerScore">Reset player score</button>
    </div>
    <div>
      <label for="boardColor">Change Color:</label>
      <input v-model="boardColor" id="boardColor" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import Square from './Square.vue'
import ResetButton from './ResetButton.vue'
import { useStore } from '../store/index.js'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    Square,
    ResetButton
  },
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: Math.random() < 0.5,
      boardColor: ''
    }
  },
  computed: {
    gameStatus() {
      const winner = this.calculateWinner(this.squares)
      const store = useStore()
      if (winner) {
        if (winner === 'X') {
          store.playerX++
        } else {
          store.playerO++
        }
        return `Player ${winner} wins!`
      } else if (this.squares.every((square) => square !== null)) {
        return 'Draw!'
      } else {
        return `Next player: ${this.xIsNext ? 'X' : 'O'}`
      }
    },
    ...mapState(useStore, ['playerX', 'playerO'])
  },
  methods: {
    handleClick(index) {
      if (this.calculateWinner(this.squares) || this.squares[index]) {
        return
      }
      const squares = this.squares.slice()
      squares[index] = this.xIsNext ? 'X' : 'O'
      this.squares = squares
      this.xIsNext = !this.xIsNext
    },
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      for (const line of lines) {
        const [a, b, c] = line
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]
        }
      }

      return null
    },
    resetGame() {
      this.squares = Array(9).fill(null)
      this.xIsNext = Math.random() < 0.5
    },
    ...mapActions(useStore, ['addplayerX', 'addplayerO', 'resetPlayerScore'])
  },
  onMounted() {
    console.log('Board component mounted')
  }
}
</script>

<style scoped>
.gameboard {
  max-width: 500px;
  display: grid;
  border-radius: 50px;
  margin: 20px auto;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  margin: 20px auto;
  max-width: 310px;
}

.status {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

#boardColor {
  padding: 5px;
  border-radius: 5px; /* Rounded corners for the player name input */
}
</style>
