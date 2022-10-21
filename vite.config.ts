import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

const iconDirectory = path.resolve(__dirname, 'src/icons')

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          // extraProperties: {
          //   'display': 'inline-block',
          //   'vertical-align': 'middle',
          // },
          collections: {
            custom: FileSystemIconLoader(iconDirectory),
          }
        })
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
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', '@vueuse/core', '@vueuse/head'],
      dts: './auto-imports.d.ts',
      dirs: [
        'src/composables'
      ],
      vueTemplate: true
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