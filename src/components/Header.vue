<template>
  <header class="p-3 bg-green-300 text-left">
    <h1 class="text-4xl text-white">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['title'],
};
</script>
