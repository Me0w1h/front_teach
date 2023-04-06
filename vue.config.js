const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  //报语法错的vue.config上加一句lintOnSave:false关掉语法检查，然后重新启动一下
  lintOnSave:false,

  transpileDependencies: true,
  //更改默认端口
  devServer: {
    open: false, // 自动打开浏览器
    port: 80,
},
//设置是否在开发环境下每次保存代码时都启用 eslint验证
lintOnSave: false
})
