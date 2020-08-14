module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.SethEden.electronVueJS-App",
        productName: "Electron VueJS App",
        win: {
          target: [ "nsis" ]
        }
      }
    }
  }
}
