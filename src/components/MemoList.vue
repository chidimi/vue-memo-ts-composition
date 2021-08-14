<template>
  <div class="bg-yellow-100 m-4 rounded-xl shadow-md">
    <ul class="p-4 ml-5" v-for="memo in memos" :key="memo.id">
      <li class="list-disc">
        <MemoItem @editMemo="onClickMemo" :memo="memo"/>
      </li>
    </ul>
  </div>
  <AddButton @add="addMemo" />
  <DeleteButton buttonName="全削除" @deleteValue="deleteAll" />
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import Memo from '../types/Memo'
import MemoItem from './MemoItem.vue'
import AddButton from './AddButton.vue'
import DeleteButton from './DeleteButton.vue'

interface State {
  memos: Memo[] | undefined;
}

export default defineComponent({
  name: 'MemoList',
  components: {
    MemoItem,
    AddButton,
    DeleteButton
  },
  props: {
    memos: {
      type: Object as PropType<Memo[]>
    }
  },
  emits: ['editMemo', 'add', 'delete'],
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

    const deleteAll = () => {
      context.emit('delete')
    }

    return {
      state,
      onClickMemo,
      addMemo,
      deleteAll
    }
  },
})
</script>
