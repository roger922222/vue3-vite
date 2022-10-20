<template>
  <div>
    <h1>Home</h1>
    <button @click="add">{{ num }}</button>
    <div>没有配置layout 走默认的 layout</div>
  </div>
</template>

<script lang="ts" setup>
  const num = ref(0)
  const add = () => {
    num.value++
  }
</script>


