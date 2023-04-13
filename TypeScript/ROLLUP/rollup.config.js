import path from 'path'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
const isDev = () =>{
    return process.env.NODE_ENV === 'development'
}
// console.log(process.env.NODE_ENV);
export default {
    input: "./src/index.ts",
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: 'umd',
        sourcemap:true
    },
    plugins: [
        ts(),
        livereload(),
        terser(),
        replace({//可以将node里面的东西注册到前端浏览器上
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),
        isDev() && serve({
            port: 11455,
            open: true,
            openPage: '/public/index.html'
        })
    ]
}