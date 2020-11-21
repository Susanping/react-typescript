const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    devtool:false,
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].[hash:5].js'
    },
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,'dist'),
        historyApiFallback:{
           index:'./index.html'
        }
    },
    resolve:{
        extendsions:['.ts','.tsx','.js','.json'],
        alias:{
            "@":path.resolve("src")
        }
    },
    modules:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
            new HtmlWebpackPlugin ({
                template:'./src/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
    ]
}