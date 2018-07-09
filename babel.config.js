module.exports = {
  presets: [
    '@vue/app',
    // [
    //   'es2015',
    //   {
    //     'modules': false
    //   }
    // ],
  ],
  plugins: [
    'syntax-dynamic-import',
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
    // [
    //   'component',
    //   {
    //     'libraryName': 'element-ui',
    //     'styleLibraryName': 'theme-chalk'
    //   }
    // ]
  ]
}