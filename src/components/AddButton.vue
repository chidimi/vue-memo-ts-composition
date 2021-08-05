<template>
  <button @click="add">+</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddButton',
  setup(_, context) {
    const add = (() => {
      context.emit('add')
    })

    return {
      add
    }
  },
})
</script>

