<template>
  <div class="flex flex-col h-screen">
    <MemoHeader title="メモアプリ"/>
    <div class="flex-grow">
      <MemoList @delete="deleteAll" @add="addMemo" @editMemo="editMemo" :memos="state.memos"/>
      <MemoForm @save="saveMemo" @deleteValue="deleteMemo" v-if="state.editingMemo !== undefined" :editingMemo="state.editingMemo"/>
    </div>
    <MemoFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from 'vue';
import Memo from './types/Memo'
import MemoHeader from './components/MemoHeader.vue'
import MemoFooter from './components/MemoFooter.vue'
import MemoList from './components/MemoList.vue'
import MemoForm from './components/MemoForm.vue'
import memoStorage from './localstorage'

interface State {
  memos: Memo[];
  editingMemo: Memo | undefined;
}

export default defineComponent({
  name: 'App',
  components: {
    MemoHeader,
    MemoList,
    MemoForm,
    MemoFooter,
  },
  setup() {
    const state = reactive<State>({
      memos: [],
      editingMemo: undefined,
    })

    onMounted(() => {
      state.memos = memoStorage.fetch()
    })

    watch(() => state.memos, () => {
      memoStorage.save(state.memos)
    })

    const editMemo = (id: number) => {
      const targetMemo = state.memos.find(memo => id === memo.id)
      state.editingMemo = Object.assign({}, targetMemo)
    }

    const saveMemo = (editingMemo: Memo) => {
      state.memos = state.memos.map(memo => {
        if (memo.id === editingMemo.id) {
          return Object.assign({}, editingMemo)
        } else {
          return memo
        }
      })
    }

    const addMemo = () => {
      const NEW_MEMO_TITLE = '新しいメモ'
      const newId = numbering() + 1
      const newMemo: Memo = {id: newId, title: NEW_MEMO_TITLE, content: ''}
      state.memos = [...state.memos, Object.assign({}, newMemo)]
      state.editingMemo = newMemo
    }

    const deleteMemo = (editingMemo: Memo) => {
      state.memos = state.memos.filter(memo => editingMemo.id !== memo.id)
      state.editingMemo = undefined
    }

    const deleteAll = () => {
      if (window.confirm('本当にすべて削除しますか?')) {
        state.memos = []
        state.editingMemo = undefined
      }
    }

    const numbering = () :number => {
      if (state.memos.length === 0) return 1
      return Math.max(...state.memos.map(memo => memo.id))
    }

    return {
      state,
      editMemo,
      saveMemo,
      addMemo,
      deleteMemo,
      deleteAll
    }
  }
});
</script>

