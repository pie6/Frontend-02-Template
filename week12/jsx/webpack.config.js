module.exports = {
    // entry: "./3-Parse-JSX.js",
    // entry: "./4-carousel-render-img",
    // entry: "./5-carousel-drag-function",
    // entry: "./6-carousel-drag-img",
    entry: "./7-carousel",
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
    watch: true
}