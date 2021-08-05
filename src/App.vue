<template>
  <Header title="メモアプリ"/>
  <MemoList @add="addMemo" @editMemo="editMemo" :memos="state.memos"/>
  <MemoForm @save="saveMemo" @deleteValue="deleteMemo" v-if="state.editingMemo != null" :editingMemo="state.editingMemo"/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Memo from './types/Memo'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MemoList from './components/MemoList.vue'
import MemoForm from './components/MemoForm.vue'

interface State {
  memos: Memo[];
  editingMemo: Memo | undefined;
}

export default defineComponent({
  name: 'App',
  components: {
    Header,
    MemoList,
    MemoForm,
    Footer,
  },
  setup() {
    const state = reactive<State>({
      memos: [],
      editingMemo: undefined,
    })

    onMounted(() => {
      state.memos = [
        {id: 1, title: 'memo1', content: '牛乳を買う'},
        {id: 2, title: 'memo2', content: '卵を買う'},
      ]
    })

    const editMemo = (id: number) => {
      const targetMemo = state.memos.find(memo => id === memo.id)
      state.editingMemo = Object.assign({}, targetMemo)
    }

    const saveMemo = (editingMemo: Memo) => {
      state.memos = state.memos.filter((memo) => memo.id !== editingMemo.id)
      state.memos = [...state.memos, Object.assign({}, editingMemo)]
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

    const numbering = () :number => {
      const memos = state.memos
      if (memos.length === 0) return 1
      return Math.max(...memos.map(memo => memo.id))
    }

    return {
      state,
      editMemo,
      saveMemo,
      addMemo,
      deleteMemo
    }
  }
});
</script>

<style>

</style>
