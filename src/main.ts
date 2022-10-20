// import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'
// import { createPinia } from 'pinia'

import 'uno.css'
import 'nprogress/nprogress.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 自动加载
Object.values(import.meta.glob('./modules/*.ts', { eager: true }))
  .forEach(i => i['install']?.({ app, router, isClient: true }))