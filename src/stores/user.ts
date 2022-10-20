// import { defineStore, acceptHMRUpdate } from 'pinia'
// import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const count = ref(0)
  const add = (num: number = 2) => {
    count.value = count.value + num
  }
  return { count, add }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}