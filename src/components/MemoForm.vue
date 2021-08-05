<template>
    <div>
      <label>タイトル</label>
      <input type="text" v-model="state.editingMemo.title">
    </div>
    <div>
      <label>内容</label>
      <textarea v-model="state.editingMemo.content">
      </textarea>
    </div>
    <SaveButton @save="saveMemo" />
    <DeleteButton @deleteValue="deleteMemo" />
</template>

<script lang="ts">
import { defineComponent, onUpdated, PropType, reactive } from 'vue'
import Memo from '../types/Memo'
import SaveButton from './SaveButton.vue'
import DeleteButton from './DeleteButton.vue'

interface State {
  editingMemo: Memo | undefined;
}


export default defineComponent({
  name: 'MemoForm',
  components: {
    SaveButton,
    DeleteButton,
  },
  props: {
    editingMemo: {
      type: Object as PropType<Memo>
    }
  },
  emits: ['save', 'deleteValue'],
  setup(props, context) {
    const state = reactive<State>({
      editingMemo: props.editingMemo
    })

    onUpdated(() => {
      state.editingMemo = props.editingMemo
    })

    const saveMemo = () => {
      context.emit('save', state.editingMemo)
    }

    const deleteMemo = () => {
      context.emit('deleteValue', state.editingMemo)
    }

    return {
      state,
      saveMemo,
      deleteMemo
    }
  },
})
</script>
