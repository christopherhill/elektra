var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isDevelopment = process.env.NODE_ENV === 'development';

var order = function(list) {
  return (chunk1, chunk2) => {
    const c1i = list.indexOf(chunk1.names[0]);
    const c2i = list.indexOf(chunk2.names[0]);
    if (c1i < c2i) return -1;
    else if (c1i === c2i) return chunk1.id < chunk2.id ? -1 : 1;
    else return 1;
  }
}

module.exports = {

  devtool: 'inline-source-map',
  entry: {
    vendor: './app/vendor.ts',
    polyfills: './app/polyfills.ts',
    app: './app/app.bootstrap.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './../dist'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.ts', '.js', '.html', '.css', '.json'],
    descriptionFiles: ['package.json']
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: [/node_modules/, 'index.html']
      },
      {
        test: /\.ts$/,
        loader: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app', 'vendor', 'polyfills']
    // }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      chunks: ['vendor', 'polyfills', 'app'],
      chunksSortMode: order(['vendor', 'polyfills', 'app']),
      inject: 'body'
    }),
    !isDevelopment ? new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      },
      minimize: true,
      mangle: false
    }) : function() {}
  ],
  devServer: {
    port: 8000,
    historyApiFallback: true
  }

};
