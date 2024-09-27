<template>
  <button class="square" @click="handleClick">{{ value }}</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: String
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
})
</script>

<style scoped>
.square {
  width: 100px;
  height: 100px;
  font-size: 1.5em;
}
</style>
