const path = require("path");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
      },
      chainWebpackRendererProcess: (config) => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.plugin('define').tap((args) => {
          args[0]['IS_ELECTRON'] = true
          return args
        })
      },
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/Application/electronVueJS-App/background.js',
      // Provide an array of files that, when changed, will recompile the main process and restart Electron
      // Your main process file will be added by default
      mainProcessWatch: ['src/Application/electronVueJS-App/background.js', 'src/Application/electronVueJS-App/main.js'],
      // Provide a list of arguments that Electron will be launched with during "electron:serve",
      // which can be accessed from the main process (src/background.js).
      // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
      // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
      // mainProcessArgs: ['--arg-name', 'arg-value']
    }
  },
  chainWebpack: config => {
    // NOTE: I don't think we have any of this alias in our Electron-Vue-Vuetify code base or web-pack.
    config.resolve.alias
        .set("@", path.join(__dirname, "./src/Application/electronVueJS-App"));
    config
      .entry("app")
      .clear()
      .add("./src/Application/electronVueJS-App/background.js")
      .end();
  }
}
