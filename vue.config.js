const path = require('path')
const webpack = require("webpack");

module.exports = {

  // publicPath: process.env.NODE_ENV === 'production'
  //   ? './'
  //   : '/',
  publicPath:'./',
  outputDir: 'tpm',// 输出文件目录
  assetsDir: "./apple",//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: './index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: false,
  // 选项...
  devServer: {
    open: true,      // 运行项目时，是否自动开启新窗口。
    // host: 'localhost',
    port: 8888,  // 默认端口号。
    https: false,      // 如果开启就会以https开头。
    hotOnly: false,      //安装模块更好的兼容，不需要配置。
    proxy: {
      '/api.php': {
        target: 'http://www.demo.test',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
    //   // '/web': {
    //   //   target: 'https:www.bjzhanbotest.com',
    //   //   changeOrigin: true,
    //   //   pathRewrite: {
    //   //       '^/web': ''
    //   //     }
    //   // }
    },
		// overlay: {
		//       warnings: false,
		//       errors: false
		//     },
  },
  //定制主题

  configureWebpack: {
		// plugins: [
		//             new webpack.ProvidePlugin({
		//                 $:"jquery",
		//                 jQuery:"jquery",
		//                 "windows.jQuery":"jquery"
		//             })
		//         ],
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }

}
