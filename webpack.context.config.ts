import * as webpack from 'webpack';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config: webpack.Configuration = {
  entry: path.join(__dirname, 'lib/contextTest.ts'),
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: 'contextBundle.js',
    path: __dirname
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({silent: true})
  ],
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        sideEffects: false
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)|(startServer\.ts)/,
        options: {
          // speed up build times and get type checking through the forked checker plugin
          transpileOnly: true,
          configFile: path.join(__dirname, "tsconfig.webpack.json")
        }
      }
    ]
  },
  // TODO: setup which ensures that the bundle we ship out of ms-rest[-azure]-js works in the browser
  // Downside: more individual watches are required to make this responsive to your edits
  // externals: {
  //   "ms-rest-js": "msRest",
  //   "ms-rest-azure-js": "msRestAzure"
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "moment": path.resolve('./node_modules/moment/min/moment.min.js')
    }
  },
  node: {
    fs: "empty",
    net: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: false,
    process: true
  }
};

export = config;