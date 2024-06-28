const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        // app: './main.js',
        app: path.join(__dirname, 'main.js')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        // path: './dist',
        path: path.join(__dirname, 'dist')
    },
};