const { Configuration } = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
//打包清理用
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const dotenv = require('dotenv')
const PROJECT_PATH = path.resolve(__dirname, "./");
const dotenvFile = path.resolve(PROJECT_PATH, `./.env.${process.env.NODE_ENV}`);
const fs = require('fs')

// 加载.env*文件  默认加载.env文件
const env = dotenv.config({
    path: fs.existsSync(dotenvFile)
        ? dotenvFile
        : path.resolve(PROJECT_PATH, `./.env`),
}).parsed;

/**
 * @type {Configuration}
 */
const config = {
    entry: "./src/main.ts",
    module: {
        //需要安装  vue-loader@next @vue/compiler-sfc
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            appendTsxSuffixTo: [/\.vue$/],
                            transpileOnly: true,
                        }
                    }
                ]
            },
        ]
    },
    //别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        //后缀自动补全
        extensions: ['.vue', '.ts', '.js', '.tsx', '.json']
    },
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: process.env.NODE_ENV == "development" ? [`🎄Server is Running on: http://localhost:${env.PORT}\n\n`] : []
            },
            onErrors: function (severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: false,
            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: []
        })
    ],
    stats: "errors-only",
    mode: env.ENV,
    devServer: {
        port: env.PORT,
        host: "localhost"
    }
    ,
    //性能优化/CDN
    externals: {
        // vue: "Vue"
    }

}
module.exports = config