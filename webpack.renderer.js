import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: "development",
    entry: "./src/app/index.jsx",
    output: {
        path: path.resolve(__dirname, "./app"),
        filename: "renderer.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"],
                }
            }
        ],
    },
}