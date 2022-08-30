/*
 * @Date: 2022-08-06 21:23:53
 * @LastEditors: chend25
 * @LastEditTime: 2022-08-29 22:52:21
 * @FilePath: \cd-react\scripts\webpack.config.js
 */
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
      },
    ]
  },
  plugins: [
     // 将打包后的资源注入到html文件内  
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // babel 转换 %PUBLIC_URL% 导致报错, 使用HtmlWebpackPlugin解决
      // https://stackoverflow.com/questions/50824024/urierror-failed-to-decode-param-public-url-favicon-ico/52581502#52581502
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json'
    })
  ],
  devServer: {
    compress: true, // 启动Gzip
    port: 3000, // 端口
    // open: true // 自动打开浏览器
  }
};
