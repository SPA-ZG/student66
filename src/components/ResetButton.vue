<template>
  <button @click="resetBoard">Reset Board</button>
</template>

<script>
export default {
  methods: {
    resetBoard() {
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
button {
  margin-top: 10px;
  font-size: 1em;
}
</style>
