module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["@babel/preset-env", { "modules": false }],
    // '@vue/cli-plugin-babel/preset',
    '@babel/preset-env'
    // '@vue/babel-preset-jsx'
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      'plugins': ['dynamic-import-node']
    }
  },
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
