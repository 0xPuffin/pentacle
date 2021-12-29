var webpack = require("webpack");

module.export = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },

    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },

            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            }
        ]
    }
};