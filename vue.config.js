const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//关闭eslint语法检查，否则会报语法错误，导致项目起不来
module.exports = {
  lintOnSave: false,
  //使用webpack配置代理转发
  devServer: {
    proxy: {
      "/api": {
        //这里配置的是要转发的服务器的地址
        target: "http://39.98.123.211",
        //这个意思是把路径重写，如果路径中有api就替换成空串，具体写不写要看接口中有没api
        // pathRewrite: {"^/api" : ""}
      }
    }
  }
}
