/* ==========================================================================
   Webpack Tooling Config
   ========================================================================== */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Root is the parent of the tooling folder
export const ROOT = path.join(__dirname, '..');

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
        new NyanProgressPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(ROOT, 'src', 'views', '*.html'),
                to: path.join(ROOT, 'build'),
                force: true,
                flatten: true
            }
        ])
    ]
}
