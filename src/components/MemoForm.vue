<template>
  <form>
    <div>
      <label>タイトル</label>
      <input type="text" v-model="state.editingMemo.title">
    </div>
    <div>
      <label>内容</label>
      <textarea v-model="state.editingMemo.content">
      </textarea>
    </div>
    <button>
    </button>
    <button>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUpdated, PropType, reactive } from 'vue'
import Memo from '../type/Memo'

interface State {
  editingMemo: Memo | undefined;
}


export default defineComponent({
  props: {
    editingMemo: {
      type: Object as PropType<Memo>
    }
  },
  setup(props) {
    const state = reactive<State>({
      editingMemo: props.editingMemo
    })

    onUpdated(() => {
      state.editingMemo = props.editingMemo
    })

    return {
      state
    }
  },
})
</script>
