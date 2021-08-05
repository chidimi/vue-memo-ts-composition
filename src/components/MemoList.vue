<template>
  <ul v-for="memo in memos" :key="memo.id">
    <li>
      <MemoItem @editMemo="onClickMemo" :memo="memo"/>
    </li>
  </ul>
  <AddButton @add="addMemo" />
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import Memo from '../types/Memo'
import MemoItem from './MemoItem.vue'
import AddButton from './AddButton.vue'

interface State {
  memos: Memo[] | undefined;
}

export default defineComponent({
  name: 'MemoList',
  components: {
    MemoItem,
    AddButton,
  },
  props: {
    memos: {
      type: Object as PropType<Memo[]>
    }
  },
  emits: ['editMemo', 'add'],
  setup(props, context) {
    const state = reactive<State>({
      memos: props.memos
    })
    const onClickMemo = (id: number) => {
      context.emit('editMemo', id)
    }
    const addMemo = () => {
      context.emit('add')
    }

    return {
      state,
      onClickMemo,
      addMemo
    }
  },
})
</script>
