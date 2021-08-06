<template>
  <header class="sticky top-0 p-2 bg-green-300 text-left">
    <h1 class="text-4xl text-white font-semibold">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "MemoHeader",
  props: ['title'],
};
</script>
