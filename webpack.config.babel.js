import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './src/Presentation.jsx',
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader!import-glob-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        include: /src\/assets/,
      },
      {
        test: /\.jsx?$/,
        loader: 'raw-loader',
        include: /src\/assets/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!isomorphic-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
