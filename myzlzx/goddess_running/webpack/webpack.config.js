// 作者：张轩
// 链接：https://zhuanlan.zhihu.com/p/20367175
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
 //  module: {
 //   loaders: [
 //     {
 //        test: /\.scss$/,
 //        loaders: ['style', 'css', 'sass'],
 //        include: APP_PATH
 //      }
 //   ]
 // },
//添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};
