const path = require('path');

module.exports = {
  entry: './src/main.js',//入口
  output: {//出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode:'development'//设置mode
};
