<template>
  <Header title="メモアプリ"/>
  <MemoList @editMemo="editMemo" :memos="state.memos"/>
  <MemoForm v-if="state.editingMemo != null" :editingMemo="state.editingMemo"/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Memo from './type/Memo'
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
      state.editingMemo = state.memos.find(memo => id === memo.id)
    }

    return {
      state,
      editMemo,
    }
  }
});
</script>

<style>

</style>
