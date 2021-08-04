<template>
  <div>
    {{memo.id}}
    {{memo.title}}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Memo from '../type/Memo'

export default defineComponent({
  props: {
    memo: {
      type: Object as PropType<Memo>
    }
  },
  setup() {
    return {

    }
  },
})
</script>
