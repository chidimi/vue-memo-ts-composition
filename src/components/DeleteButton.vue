<template>
  <button class="m-4 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" @click="deleteValue">{{buttonName}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'savebutton',
  props: ['buttonName'],
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

