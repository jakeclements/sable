/* ==========================================================================
   Webpack Dev Server
   ========================================================================== */
import path from 'path';
import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config, { ROOT } from './webpack.config.babel';

// Create a compiler from our config at ./webpack.config.babel.js
const compiler = webpack(config);

// Setup the server config
const server = new webpackDevServer(compiler, {
    contentBase: path.join(ROOT, 'build'),
    open: true,
    historyApiFallback: true,
    compress: false,
    stats: {
        assets: true,
        colors: true,
        version: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
    },
    // https: true,
    publicPath: '/assets/'
});

// Start the server
server.listen(8080, 'localhost')
