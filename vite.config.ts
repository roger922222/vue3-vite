import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

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
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
      extendRoute(route) {
        console.log(route, 'route')
      }
    }),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dts: './auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      dts: './component.d.ts',
      dirs: ['src/components', 'src/**/components'],
    }),
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')]
    })
  ],
  resolve: {
     alias: {
       '~/': `${path.resolve(__dirname, 'src')}/`
     }
  }
})