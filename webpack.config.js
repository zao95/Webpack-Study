const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,   //.css 확장자로 끝나는 모든 파일
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    'url-loader',
                    'file-loader', // 이미지별 캐시관리를 위해 hash값을 기반으로 파일명 수정
                ],
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                },
            },
            {
                test: /\.html$/i,
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',   //템플릿 경로 지정
            filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
        })
    ],
    devServer: {
        contentBase: __dirname + "/src/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000
    },
}