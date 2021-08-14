<template>
    <div class="grid-cols-3">
        <label class="block m-4">タイトル</label>
        <input v-focus type="text"
        class="mt-1 block m-4 w-80 rounded-md border-gray-300 shadow-sm focus:border-indigo-300
              focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        v-model="state.editingMemo.title">
        <span class="block ml-4">内容</span>
        <textarea class="m-4 w-80 h-60 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
                        focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        v-model="state.editingMemo.content">
        </textarea>
    </div>
      <SaveButton class="ml-6" @save="saveMemo" />
      <DeleteButton buttonName="削除" @deleteValue="deleteMemo" />
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
  directives: {
    focus: {
    // ディレクティブの定義
      mounted(el) {
        el.focus()
      },
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
      deleteMemo,
    }
  },
})
</script>
