//引入包
const path = require('path');
//引入html插件,这玩意会自动生成html文件，并自动引入js到html
const HTMLWebPlugin = require('html-webpack-plugin')
//引入clean插件（每次编译的时候会先删除dist文件全部重新编译）
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//webpack中的所有的配置信息都需要暴露出去
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在的目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的名字
        filename: 'bundle.js',
        //禁用箭头函数（以便于支持ie），默认套的一层箭头函数不经过babel的转译，略坑
        environment:{
            arrowFunction:false
        }
    },
    //指定webpack打包时要用的模块
    module: {
        //指定loader的规则
        rules: [
            {
                //指定规则生效的文件
                //我们要对ts文件生效
                test: /\.ts$/,
                //使用ts-loader插件,插件按数组顺序从前往后生效
                use: [
                    {
                        //指定加载器
                        loader:'babel-loader',
                        //设置babel
                        options:{
                            //设置预定义环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88"
                                            // "ie":"11"
                                        },
                                        //指定corejs版本
                                        "corejs":"3",
                                        //使用corejs的方式[按需、全局]
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //指定要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    //用来支持引用模块
    resolve: {
        //设置能被webpack当作模块解析的文件后缀
        extensions: ['.ts', '.js'],
        //可以设置一个目录别名。这里设置 @ 就是nodejs运行的根目录
        alias: {
            "@": path.resolve(__dirname, './')
        }
    },
    //配置webpack插件
    plugins: [
        // new CleanWebpackPlugin(),
        new HTMLWebPlugin({
            title: "HELLO WEBPACK~",
            //template: './src/index.html'
        })
    ]
}