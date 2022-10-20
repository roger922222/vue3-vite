import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      'path': '/',
      component: () => import('~/pages/Index.vue')
    },
    {
      'path': '/login',
      component: () => import('~/pages/Login.vue')
    }
  ]
})