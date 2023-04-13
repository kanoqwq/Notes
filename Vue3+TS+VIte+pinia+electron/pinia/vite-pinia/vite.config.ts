import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api/setu': {
        target: 'https://www.dmoe.cc/random.php?return=json',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api\/setu/, '')
        }
      }
    }
  }
})
