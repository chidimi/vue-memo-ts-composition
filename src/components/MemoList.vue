<template>
  <ul v-for="memo in memos" :key="memo.id">
    <li @click="onClickMemo(memo.id)">
      <MemoItem :memo="memo"/>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import Memo from '../type/Memo'
import MemoItem from './MemoItem.vue'

interface State {
  memos: Memo[] | undefined;
}

export default defineComponent({
  name: 'MemoList',
  components: {
    MemoItem,
  },
  props: {
    memos: {
      type: Object as PropType<Memo[]>
    }
  },
  setup(props, context) {
    const state = reactive<State>({
      memos: props.memos
    })

    const onClickMemo = (id: string) => {
      context.emit('edit', id)
    }

    return {
      state,
      onClickMemo
    }
  },
})
</script>
