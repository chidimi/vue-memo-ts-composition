<template>
  <button class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="add">新規追加</button>
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

