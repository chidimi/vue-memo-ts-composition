<template>
  <Header />
  <MemoList />
  <MemoForm />
  <Footer />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { Memo } from './type/Memo'

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
