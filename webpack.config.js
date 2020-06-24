const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 

const APP_DIR = path.resolve(__dirname, 'app/index.js');
const devMode = process.env.NODE_ENV !== 'production';
const config = {
  entry: { main: APP_DIR },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.css'],
  },
  devServer: {
    port: process.env.PORT || 4000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      // uncomment this to add Eslint functionalities
      { parser: { requireEnsure: false } },
      {
      // `mjs` support is still in its infancy in the ecosystem, so we don't
      // support it.
      // Modules who define their `browser` or `module` key as `mjs` force
      // the use of this extension, so we need to tell webpack to fall back
      // to auto mode (ES Module interop, allows ESM to import CommonJS).
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ttf|eot|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=[name].[ext]',
      },
      // You don't need any loader for .json anymore (since webpack >= v2.0.0).
      {
           type: 'javascript/auto',
           test: /\.json$/,
            exclude: /(node_modules)/,
            use: [{
              loader: 'file-loader',
              options: { name: '[name].[ext]' },
            }]
          }
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.browser': 'true' 
    }),
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        console.log(message);
      }
      }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {}
    }),
  ],
};
module.exports = config;
