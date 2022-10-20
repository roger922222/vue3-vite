import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
// const router = useRouter()
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

export default createRouter({
  history: createWebHistory(),
  routes
})