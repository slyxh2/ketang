const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules'),
        },
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /(j|t)sx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/typescript"
                    ],
                    plugins: [
                        ["import", { libraryName: 'antd', style: 'css' }]
                    ]
                },
                include: path.resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 3 }//TODO
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    },
                    {
                        loader: 'px2rem-loader',//TODO
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)/,
                loader: 'url-loader'
                //type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        /*  new CopyWebpackPlugin({
             patterns: [
                 { from: path.resolve(__dirname, 'static'), to: path.resolve(__dirname, 'dist') }
             ]
         }) */
    ]
}
