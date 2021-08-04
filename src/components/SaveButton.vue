<template>
  <button @click="save">保存</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'savebutton',
  setup(_, context) {
    const save = (() => {
      context.emit('save')
    })

    return {
      save
    }
  },
})
</script>

