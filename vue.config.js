const path = require('path');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          // 指定只处理 marked 库的文件
          include: path.resolve(__dirname, 'node_modules/marked'),
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },

  },
  // chainWebpack: config => {
  //   config.module
  //       .rule('')
  //       .test(/\.md$/)
  //       .use('html-loader')
  //       .loader('html-loader')
  //       .end()
  //       .use('markdown-loader')
  //       .loader('markdown-loader')
  //       .end()
  // },
  devServer: {
    host: "0.0.0.0",
    port: 80,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://192.168.1.45:8080`,
        // target: `http://192.168.1.176:8080`,
        target: `http://127.0.0.1:8080`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
      // [process.env.VUE_APP_BASE_API_SYS]: {
      //   target: `http://192.+168.1.176:8080`,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ["^" + process.env.VUE_APP_BASE_API_SYS]: "",
      //   },
      // },
    },
    disableHostCheck: true
  },
}
