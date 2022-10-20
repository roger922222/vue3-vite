<template>
  <!-- <button @click="add">{{ num }}</button> -->
  <button @click="user.add()">{{ user.count }}</button>
  <div>{{ test.count }}</div>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import { useUserStore } from '~/stores/user'
  import { useTestStore } from '~/stores/test'
  const user = useUserStore()
  const test = useTestStore()

  setInterval(() => {
    test.count++
    if (test.count > 10) {
      test.$reset()
    }
  }, 1000);

</script>