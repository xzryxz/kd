var HtmlWebpackPlugin = require('html-webpack-plugin')
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

var config = require('./webpack.config.js')

config.plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html.tpl',
    inject: 'body',
  }),
  new InterpolateHtmlPlugin({
    PUBLIC_URL: '',
  }),
]

module.exports = config
