module.exports = {
    // entry: "./src/index",
    // entry: "./src/3-animation",
    entry: "./src/4-animation-main",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [["@babel/plugin-transform-react-jsx", {
                            pragma: "createElement"
                        }]]
                    }
                }
            }
        ]
    },
    mode: "development",
    devtool: "source-map"
}