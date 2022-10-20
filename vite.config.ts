import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    }),
    Pages({
      extensions: ['vue']
    })
  ],
  resolve: {
     alias: {
       '~/': `${path.resolve(__dirname, 'src')}/`
     }
  }
})