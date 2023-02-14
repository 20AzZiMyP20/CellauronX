import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: "development",
    target: "electron-main",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./app"),
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader' }]
        }]
    },

};