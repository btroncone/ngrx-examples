var helpers = require('./helpers');

var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin  = require('webpack/lib/DefinePlugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';


module.exports = helpers.defaults({
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          helpers.root('node_modules/rxjs')
        ]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          "compilerOptions": {
            "noEmitHelpers": true,
            "removeComments": true,
          }
        },
        exclude: [ /\.e2e\.ts$/ ]
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'raw-loader' }
    ],
    postLoaders: [

      {
        test: /\.(js|ts)$/,
        include: helpers.root('src'),
        loader: 'istanbul-instrumenter-loader',
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({

      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),
    new ProvidePlugin({

      '__metadata': 'ts-helper/metadata',
      '__decorate': 'ts-helper/decorate',
      '__awaiter': 'ts-helper/awaiter',
      '__extends': 'ts-helper/extends',
      '__param': 'ts-helper/param',
    })
  ],
});

