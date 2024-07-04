const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

console.log(__dirname)

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
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        // path: './dist',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        open: true,
    },
};