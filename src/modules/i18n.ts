import { createI18n } from 'vue-i18n'
import type  { UserModule } from './types'

// 通过vite自动创建
import messages from '@intlify/vite-plugin-vue-i18n/messages'


export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    locale: 'en',
    messages
  })
  app.use(i18n)
}