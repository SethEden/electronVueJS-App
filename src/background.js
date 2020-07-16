/**
 * @file background.js
 * @module background
 * @description This is the real init for the whole application, but it really is just a wrapper/call-forwarder.
 * Apparently the Electron-Vue-Webpack architecture REQUIRES the background.js & main.js files to be present and accounted for
 * as part of the basic execution/build system, and those are hard requirements because there are hard-coded path elements
 * in those npm packages. So apparently there is no room for flexibility on that point.
 * Since I am trying to enable this system to scale I am only using these as wrappers/call-forwarders.
 * See the Dev_Journal.txt for additional details.
 *  Details can also be found at this link:
 * {@link https://stackoverflow.com/questions/62722398/simulatedgreg-electron-vue-vuetify-error-message-vue-warn-unknown-custom-ele}
 * @requires {@link https://www.npmjs.com/package/electron|electron}
 * @requires module:application
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
'use strict'

import { app, protocol } from 'electron';
import application from './Application/electronVueJS-App/application';
const isDevelopment = process.env.NODE_ENV !== 'production';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

/**
 * @name protocol.registerSchemesAsPrivileged
 * @description The application schema must be registered with it's privileges before any application execution can begin.
 * @type {Object}
 * @author System Generated
 * @date 2020/07/15
 */
protocol.registerSchemesAsPrivileged([
  // Scheme must be registered before the app is ready
  { scheme: 'app', privileges: { secure: true, standard: true } }
]);

// /**
//  * @name createWindow
//  * @description Wrapper call to create the main application window.
//  * @return {void}
//  * @author System Generated
//  * @date 2020/07/15
//  */
// function createWindow () {
//   win = application.createMainApplicationWindow(win);
// };

/**
 * @name window_all_closed
 * @description Handles the event that all application windows are closed.
 * @return {void}
 * @author System Generated
 * @date 2020/07/15
 */
app.on('window-all-closed', () => {
  // Quit when all windows are closed.

  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  application.quitApplication();
});

/**
 * @name activate
 * @description Handles the event that the application is activated.
 * @type {void}
 * @author System Generated
 * @date 2020/07/15
 */
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  win = application.activateApplication(win);
});

/**
 * @name ready
 * @description Handles the event that the application is ready.
 * @type {void}
 * @author System Generated
 * @date 2020/07/15
 */
app.on('ready', async () => {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  win = await application.applicationReady(win);
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit();
      }
    });
  } else {
    process.on('SIGTERM', () => {
      app.quit();
    });
  }
};