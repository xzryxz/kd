const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')


module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  devtool: 'source-map',

  devServer: {
    hot: true,
  },

  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.web.js',
      '.webpack.js',
    ],
  },

  module: {
    rules: [
      { test: /\.tsx$/, loader: 'awesome-typescript-loader', },
      { test: /\.js?$/, loader: 'source-map-loader', enforce: 'pre', },
      { test: /\.md$/, use: 'raw-loader' },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html.tpl',
      inject: 'body',
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'src/public',
    }),
  ],
}
