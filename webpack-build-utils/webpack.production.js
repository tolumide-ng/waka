const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
}

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // new PurgecssPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        // }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true,
                extractComments: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
}
