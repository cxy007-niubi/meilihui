module.exports = {
  devServer: {
    // 关闭报错情况下的浏览器遮罩层
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      // 反向代理，解决跨域
      '/appapi': {
        target: ' http://www.meihigo.hk',
        changeOrigin: true
      }
    }
  },
  lintOnSave: false // 关了eslint 检查
}
