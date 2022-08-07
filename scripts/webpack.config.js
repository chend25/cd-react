const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}
module.exports = {
  mode: 'development',
  entry: {
    client: resolve('../src/index.js'),
  },
  output: {
    path: resolve('../dist'),
  },
  resolve: { // 减少后缀
    // extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
     // 将打包后的资源注入到html文件内  
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    compress: true, // 启动Gzip
    port: 3000, // 端口
    open: true // 自动打开浏览器
  }
};
