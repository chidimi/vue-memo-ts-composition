<template>
  <div>
    <a href="javascript:void(0)" @click="onClickMemo(memo.id)">{{memo.title}}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Memo from '../types/Memo'

export default defineComponent({
  props: {
    memo: {
      type: Object as PropType<Memo>
    }
  },
  emits: ['editMemo'],
  setup(props, context) {
    const onClickMemo = (id: number) => {
      context.emit('editMemo', id)
    }

    return {
      onClickMemo
    }
  },
})
</script>
