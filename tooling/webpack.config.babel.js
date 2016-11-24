/* ==========================================================================
   Webpack Tooling Config
   ========================================================================== */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Root is the parent of the tooling folder
export const ROOT = path.join(__dirname, '..');

export default {
    devtool: 'eval-source-map',
    entry: path.join(ROOT, 'src', 'index'),
    output: {
        path: path.join(ROOT, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.json', '.html']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', ['css?sourceMap!', 'sass?sourceMap'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', ['css?sourceMap!'])
            },
            {
                test: /\.html$/,
                loader: 'ng-cache?prefix=scripts/modules:**'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'url-loader?limit=100000'
            },
            { test: /\.(jpg|png|svg|mp3)$/, loader: 'file-loader?name=[path][name].[ext]' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
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
