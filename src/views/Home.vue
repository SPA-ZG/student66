<template>
  <div class="main">
    <Header />

    <main>
      <h2>Game Board</h2>
      <TicTacToeBoard />
    </main>
  </div>
</template>

<script>
import TicTacToeBoard from '@/components/TicTacToeBoard.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    TicTacToeBoard,
    Header
  }
}
</script>

<style scoped>
.main {
  background-color: #ffe082;
  min-height: 900px;
}

header {
  text-align: center;
}
</style>
