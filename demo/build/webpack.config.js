const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
