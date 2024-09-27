<template>
  <div>
    <Header />
    <main>
      <h1>History</h1>
      The very first traces of tic-tac-toe go back to Egypt, which has remnants of 3x3 game boards
      on roofing tiles from 1300 BCE. Other variations included the terni lapilli (three pebbles at
      a time) from the Roman Empire, three men’s morris from various parts of Asia, and Picaria from
      Native Americans. The name “tic-tac-toe” came about when the British name of “noughts (zero)
      and crosses” was first printed in a scholarly journal in 1858. This was renamed “tic-tac-toe”
      in the 20th century. Furthermore, this was not only a paper and pencil game, but it was also
      one of the very first video games, specifically developed by British computer scientist
      Alexandar S. Douglas in 1952. And in 1975, MIT students developed a perfect tic- tac-toe game
      using a Tinkertoy computer. This is currently showcased in the Museum of Science in Boston.
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
