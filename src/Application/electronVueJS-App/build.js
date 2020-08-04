#!/usr/bin/env node

/**
 * @file build.js
 * @module build
 * @description This is the main init for the build processes for the application.
 * This includes the Build which uses Babel to transpile the code down from
 * ES6 (ECMA Script 6) syntax to JavaScript Common syntax, and all non-code files
 * including generated documentation are copied to the bin folder under the same nested folder structure.
 * It also includes the release process where the compiled code & non-code files (Configuration & Documentation)
 * is packaged up into a single zip file and saved in the Release folder.
 * @requires module:warden
 * @requires module:system-constants
 * @requires module:basic-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// global.appRoot = path.resolve(__dirname);
// var rootPath = global.appRoot;
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import warden from '../../Framework/Controllers/warden.js';
import * as s from '../../Framework/Constants/system.constants.js';
import * as b from '../../Framework/Constants/basic.constants.js';
var copyResult = false;
var baseFileName = 'build';

/**
 * @function bootStrapApplication
 * @description Setup all the application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/01
 */
function bootStrapApplicationDeployment() {
  console.log('BEGIN build.bootStrapApplicationDeployment');
  const homedir = require('os').homedir();
  console.log('homedir is: ' + homedir);
  // rootPath = warden.processRootPath(rootPath);
  // warden.bootStrapApplication(rootPath + c.cConfigurationDataLookupPrefixPath);
  // warden.saveRootPath(rootPath);
  // warden.mergeClientBusinessRules(clientRules.initClientRulesLibrary());
  // warden.mergeClientCommands(clientCommands.initClientCommandsLibrary());
  // warden.loadCommandAliases(s.cSystemCommandsAliasesActualPath, c.cClientCommandAliasesActualPath);
  // warden.loadCommandWorkflows(s.cSystemWorkflowsActualPath, c.cClientWorkflowsActualPath);
};

/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/Application/<MyAppName>/Resources/ folder to the
 * bin/Application/<MyAppName>/Resources/ folder.
 * Finally all the tranpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/01
 */
function deployApplication() {
  let functionName = s.cdeployApplication;
  warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // console.log(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // let copyResult;
  // try {
  //   // fse.copySync('/src/Application/electronVueJS-App/Resources/*', '/bin/Application/NodeJS-App/Resources/*');
  //   warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
  //   warden.setConfigurationSetting(s.cSourceResourcesPath, c.cSourceResourcesPath);
  //   warden.setConfigurationSetting(s.cBinaryResourcesPath, c.cBinaryResourcesPath);
  //   warden.enqueueCommand(s.cBuildWorkflow);
  //   let commandResult = true;
  //   while(warden.isCommandQueueEmpty() === false) {
  //     commandResult = true;
  //     commandResult = warden.processCommandQueue();
  //   }
  //   let deploymentResult = warden.getConfigurationSetting(s.cdeploymentCompleted);
  //   console.log('Deployment was completed: ' + deploymentResult);
  // } catch (err) {
  //   console.error(err);
  //   warden.setConfigurationSetting('deploymentCompleted', false);
  // }
  // warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function releaseApplication
 * @description Determines if the current version number is higher than the release archive of zip files.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */
function releaseApplication() {
  let functionName = s.creleaseApplication;
  console.log('BEGIN build.' + functionName);
  // warden.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // let releaseResult;
  // try {
  //   warden.setConfigurationSetting(s.cPassAllConstantsValidations, false);
  //   warden.setConfigurationSetting(s.cBinaryRootPath, c.cBinaryRootPath);
  //   warden.setConfigurationSetting(s.cBinaryReleasePath, c.cBinaryReleasePath);
  //   warden.enqueueCommand(s.cReleaseWorkflow);
  //   let commandResult = true;
  //   while(warden.isCommandQueueEmpty() === false) {
  //     commandResult = true;
  //     commandResult = warden.processCommandQueue();
  //   }
  //   let releaseResult = warden.getConfigurationSetting(s.creleaseCompleted);
  //   console.log('Release was completed: ' + releaseResult);
  // } catch (err) {
  //   console.error(err);
  // }
  // warden.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

bootStrapApplicationDeployment();
deployApplication();
releaseApplication();
