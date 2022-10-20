import type { UserModule } from './types'

export const install: UserModule = (({app}) => {
  const pinia = createPinia()
  app.use(pinia)
})