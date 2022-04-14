const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    Plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ]
}
// console.log(process.env);