
var webpack = require('webpack');
var helpers = require('./helpers');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
var HMR = helpers.hasProcessFlag('hot');
const autoprefixer = require('autoprefixer');

var metadata = {
  title: 'NgRx Shopping Cart Example',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
};
/*
 * Config
 * with default values at webpack.default.conf
 */
module.exports = helpers.defaults({
  // static data for index.html
  metadata: metadata,
  // devtool: 'eval' // for faster builds use 'eval'

  // our angular app
  entry: { 'polyfills': './src/polyfills.ts', 'main': './src/app/bootstrap.ts' },

  // Config for our build files
  output: {
    path: helpers.root('dist')
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader", exclude: [ helpers.root('node_modules/rxjs') ] }
    ],
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'ts-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html') ] }

    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: 'polyfills', filename: 'polyfills.bundle.js', minChunks: Infinity }),
    // static assets
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
    // generating html
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'HMR': HMR
      }
    }),
    new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
  ],

  // Other module loader config

  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host
  }
});
