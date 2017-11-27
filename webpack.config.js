// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: './src',
  // Output our app to the dist/ directory
  output: {
    filename: 'app.js',
    path: `${__dirname}/build`,
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    }),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' },
      { from: 'src/data', to: 'data' },
    ]),
  ],
};
