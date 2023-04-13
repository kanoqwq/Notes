const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
module.exports ={

    mode:"development",
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader"
            }
        ]
    },
    devServer:{
        port:11441,
        proxy:{

        }
    },
    resolve:{
        extensions:['.js','.ts'],
    },
    plugins:[
        new htmlwebpackplugin({
            template:'./public/index.html'
        })
    ]
}