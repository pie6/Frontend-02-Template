module.exports = {
    entry: {
        '1-index': './1/1-index.js',
        '2-index': './2/2-index.js',
        '3-index': './3/3-index.js',
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
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
    devtool: "source-map",
    watch: true
}