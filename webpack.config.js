const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    // port: 9000,
    hot: true,
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
    ]
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
