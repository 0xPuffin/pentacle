// var webpack = require("webpack");
//
// module.exports = {
//     entry: "./index.tsx",
//     mode: "development",
//     output: {
//         path: "build/assets",
//         filename: "bundle.js",
//         publicPath: "assets"
//     },
//
//     devServer: {
//         inline: true,
//         contentBase: "./build",
//         port: 3000
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 loader: "babel-loader"
//             },
//
//             {
//                 test: /\.json$/,
//                 exclude: /(node_modules)/,
//                 loader: "json-loader"
//             }
//         ]
//     }
// };