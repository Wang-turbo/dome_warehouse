const path=require('path')
//启用热更新 第2步 
const webpack=require('webpack')
//导入在内存中 生成HTML 页面中的插件
//这两个插件的作用：
// 1 自动在内存中根据指定页面生成一个内存的页面
// 2 自动把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',//入口
  output: {//出口
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  mode:'development',//设置mode
  devServer:{//这是配置dev-server命令参数的第二种形式相对来说麻烦一些
       //--open --port 3000 --contentBase src --hot
       open:true,//自动打开浏览器
       port:3000,//设置启动时候的运行端口
       contentBase:'src',//指定托管的根目录
       hot:true//启动热更新   第1步
  },
  plugins:[//配置插件的节点
       new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象，启用热更新的第3部
       new htmlWebpackPlugin({//创建一个在内存中生成的HTML页面插件
           template:path.join(__dirname,'./src/index.html'),//指定模板页面将来会根据指定的页面路径去生成内存中的页面
           filename:'index.html'//指定生成的页面的名称
       })
  ],
};