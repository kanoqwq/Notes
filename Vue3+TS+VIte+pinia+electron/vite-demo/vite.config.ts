import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//loadEnv可以读取到自定义的环境变量
//性能测试工具
import { visualizer } from 'rollup-plugin-visualizer'
export default ({ mode }: any) => {
  console.log(mode);//development
  console.log(loadEnv(mode, process.cwd()));//cwd获取process的运行目录 { VITE_KANO_DEV: 'http://www.abc.com' }

  return defineConfig({
    plugins: [vue({
      //支持响应式语法糖
      reactivityTransform: true
    }), visualizer(
      {
        open: true
      }
    )],
    build: {
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,//css拆分
      sourcemap: false,
      minify: 'terser',
      assetsInlineLimit:4000 //小于4000kb的媒体会被编译成base64
    }
  })
}
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue({
//     //支持响应式语法糖
//     reactivityTransform:true
//   })]
// })
