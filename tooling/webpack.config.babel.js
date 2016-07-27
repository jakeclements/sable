/* ==========================================================================
   Webpack Tooling Config
   ========================================================================== */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';

// Root is the parent of the tooling folder
const ROOT = path.join(__dirname, '..');

export default {
    entry: path.join(ROOT, 'src', 'index'),
    output: {
        path: path.join(ROOT, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new NyanProgressPlugin()
    ]
}
