module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  // 自己引入的配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
