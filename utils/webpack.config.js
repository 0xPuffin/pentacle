const path = require('path');

module.exports = {
    entry: "../src/index.tsx",
    target: "node",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    }
};