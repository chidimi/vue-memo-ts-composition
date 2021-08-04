<template>
  <Header title="メモアプリ"/>
  <MemoList :memos="state.memos"/>
  <MemoForm />
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
      memos: []
    })

    onMounted(() => {
      state.memos = [
        {id: 1, title: 'memo1', content: '牛乳を買う'},
        {id: 2, title: 'memo2', content: '卵を買う'},
      ]
    })

    return {
      state
    }
  }
});
</script>

<style>
</style>
