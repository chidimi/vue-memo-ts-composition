<template>
  <ul v-for="memo in memos" :key="memo.id">
    <li>
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
  setup(props) {
    const state = reactive<State>({
      memos: props.memos
    })

    return {
      state
    }
  },
})
</script>
