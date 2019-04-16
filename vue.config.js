module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://111.67.194.231:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}