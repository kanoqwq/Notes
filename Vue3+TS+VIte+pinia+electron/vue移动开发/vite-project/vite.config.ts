import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtoViewPort from 'postcss-px-to-viewport'
import unoCss from 'unocss/vite'
//预设
import {presetIcons,presetUno} from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unoCss({
    //写需要缩写的css
    //预设
    presets:[presetIcons(),presetUno()],//presetUno 集成tailwindcss等
    rules: [
      ['flex', { display: "flex" }],
      ['red', { color: "red" }],
      [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })]
    ],
    //缩写css也可以进一步缩写
    shortcuts:{
      mar:['red','m-1']
    }
  })],
  css: {
    postcss: {
      plugins: [
        pxtoViewPort({
          unitToCnvert: 'px',
          viewpoerWidth: 320
        })
      ]
    }
  }
})
