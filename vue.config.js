module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://111.67.194.231:3000',   // production
        target: 'http://localhost:3000',          // develop
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}