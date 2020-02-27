const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

require('dotenv').config()

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.scss', '.sass'],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            // template: path.join(__dirname, '../src', 'index.html'),
            template: './src/index.html',
            inject: 'body',
            // favicon: './src/assets/svgs/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
            chunkFilename: '[id].css',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BASE_URL: JSON.stringify(process.env.BASE_URL),
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$|.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                    },
                },
            },
        ],
    },
}
