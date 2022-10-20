<template>
  <!-- <button @click="add">{{ num }}</button> -->
  <!-- <button @click="user.add()">{{ user.count }}</button>
  <div>{{ test.count }}</div>
  <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div>
  <button 
    class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    "
  >
    <i class="i-ic-baseline-addchart p-3"></i>Uno Aviabale
  </button> -->
  <router-view></router-view>
</template>

<script lang="ts" setup>
  // import { useUserStore } from '~/stores/user'
  // import { useTestStore } from '~/stores/test'
  // const user = useUserStore()
  // const test = useTestStore()

  // setInterval(() => {
  //   test.count++
  //   if (test.count > 10) {
  //     test.$reset()
  //   }
  // }, 1000);

</script>