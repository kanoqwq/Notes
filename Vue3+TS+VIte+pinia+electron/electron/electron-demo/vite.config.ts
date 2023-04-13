import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
//进程间通信用
import electronRender from 'vite-plugin-electron-renderer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),electron({
    entry:path.resolve(__dirname,'electron/index.ts')
  }),electronRender()],
})
