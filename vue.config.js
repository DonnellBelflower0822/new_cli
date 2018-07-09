const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 输出的目录
  outputDir: 'app',
  // 资源目录
  assetsDir: 'static',
  // 配置多页面
  pages: {
    // 首页
    index: {
      entry: 'src/module1/main.js',
      template: 'public/module1.html',
      filename: 'module1.html'
    },
    module2: {
      entry: 'src/module2/main.js',
      template: 'public/module2.html',
      filename: 'module2.html'
    },
  },

  // 配置别名
  chainWebpack: config => {
    config
      .resolve
      .alias
      // 公共资源
      .set('assets', resolve('src/assets'))
      // 公共组件
      .set('com', resolve('src/components'))
      // home开发目录
      .set('module1', resolve('src/module1'))
  },

  // 插件
  configureWebpack: {
    plugins: [
      // 开启gzip格式
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      }),
      // 配置dll

    ]
  },
  // css
  css: {
    sourceMap: false,
  },
  // 不需要 **.map.js
  productionSourceMap: false,

}