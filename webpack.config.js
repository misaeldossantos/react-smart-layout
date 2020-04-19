const path = require("path")
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: ['.js', '.jsx'],
            },
            loader: "babel-loader"
        }]
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx']
    }
}