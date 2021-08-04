<template>
  <button @click="deleteValue">削除</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'savebutton',
  setup(_, context) {
    const deleteValue = (() => {
      context.emit('deleteValue')
    })

    return {
      deleteValue
    }
  },
})
</script>

