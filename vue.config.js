const path = require("path");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
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
