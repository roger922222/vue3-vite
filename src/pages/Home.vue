<template>
  <div>
    <h1>Home</h1>
    <button @click="add">{{ num }}</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const num = ref(0)
  const add = () => {
    num.value++
  }
</script>