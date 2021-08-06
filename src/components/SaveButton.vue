<template>
  <button class="m-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" @click="save">保存</button>
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

