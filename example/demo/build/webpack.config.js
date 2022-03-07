const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false, // 编译过程是否不需要类型检查
            }
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
    new ForkTsCheckerWebpackPlugin()
  ],
  // 分包
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
