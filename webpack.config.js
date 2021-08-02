const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./main.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        // path: path.resolve(
        //     __dirname,
        //     "C:/program files/openserver/domains/localhost"
        // ),
    },
    devServer: {
        contentBase: "./dist",
        // contentBase: "C:/program files/openserver/domains/localhost",
    },
    module: {
        rules: [{
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"],
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    },
                }, ],
            },
            {
                test: /\.(webp|gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img/",
                    },
                }, ],
            },
            {
                test: /\.js/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                }, ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.pug",
            filename: "index.html",
            chunks: ["main"],
        }),
        new MiniCssExtractPlugin(),
    ],
};