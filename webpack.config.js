'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: './bin/',
        publicPath: "./bin/",
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 2 versions'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader!' + __dirname +'/webpack-custom-loaders/remove-number-json-loader'
            }]
    },
    devServer: {
        inline: true,
        contentBase: "./",
        host: "localhost",
        port: 3000
    },
    watch: NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoErrorsPlugin()
    ]
}