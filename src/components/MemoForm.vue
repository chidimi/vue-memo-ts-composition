<template>
  <form>
    <div>
      <label>タイトル</label>
      <input type="text">
    </div>
    <div>
      <label>内容</label>
      <textarea>
      </textarea>
    </div>
    <button>
    </button>
    <button>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import Memo from '../type/Memo'

interface State {
  memo: Memo | undefined;
}


export default defineComponent({
  props: {
    memo: {
      type: Object as PropType<Memo>
    }
  },
  setup(props) {
    const state = reactive<State>({
      memo: props.memo
    })

    return {
      state
    }
  },
})
</script>
