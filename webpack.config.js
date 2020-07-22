const path = require("path")
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: 'index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        library: "react-smart-layout",
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals(), {
        react: 'react',
        'react-native': 'react-native'
    }],
    optimization: {
        minimize: true
    },
    devtool: 'source-map',
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
    target: 'node',
    node: {
        __dirname: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx']
    }
}