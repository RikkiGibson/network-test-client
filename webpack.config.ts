import * as webpack from 'webpack';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig: webpack.Configuration = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new ForkTsCheckerWebpackPlugin({ silent: true })
  ],
  module: {
    rules: [
      {
        sideEffects: false
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // speed up build times and get type checking through the forked checker plugin
          transpileOnly: true,
          configFile: path.join(__dirname, "tsconfig.webpack.json")
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
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

const contextConfig = {
  name: "context",
  ...baseConfig,
  entry: path.join(__dirname, 'samples/context.ts'),
  output: {
    filename: 'contextBundle.js',
    path: __dirname
  },
};

const monolithicConfig = {
  name: "monolithic",
  ...baseConfig,
  entry: path.join(__dirname, 'samples/monolithic.ts'),
  output: {
    filename: 'monolithicBundle.js',
    path: __dirname
  }
};

export = [contextConfig, monolithicConfig];