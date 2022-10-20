import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = useRouter()

export default createRouter({
  history: createWebHistory(),
  routes
})