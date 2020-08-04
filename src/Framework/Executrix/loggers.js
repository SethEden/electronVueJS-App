/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

 /**
  * @function consoleLog
  * @description compares the class path to a series of configuration settings to determine
  * if we should log to the console or not.
  * Also can provisionally log to a log file as well since the console
  * is technically a transient data output.
  * @NOTE When it comes to dumping large amounts of data out of a script the console will not do,
  * and dumping data to an output log file is critical to debugging certain tests and workflows.
  * @param {string} classPath The class path for the caller of this funciton file.function or class.method.
  * @param {string} message The message or data contents that should be dumped to the output.
  * @return {void}
  * @author Seth Hollingsead
  * @date 2020/03/11
  */
 function consoleLog(classPath, message) {
   // if (Object.keys(D).length !== 0) {
   //   let logFile = configurator.getConfigurationSetting(s.cApplicationRootPath);
   //   if (logFile !== undefined) {
   //     // console.log('logFile is !== undefined');
   //     let debugSetting = false;
   //     let outputMessage = '';
   //     let rules = {};
   //     rules[1] = s.creplaceDoublePercentWithMessage;
   //     logFile = logFile + configurator.getConfigurationSetting(s.cLogFilePathAndName);
   //     // console.log('determine if there is a configuration setting for the class path');
   //     debugSetting = configurator.getConfigurationSetting(classPath);
   //     // console.log('DONE attempting to get the configuration setting for the class path, now check if it is not undefined and true');
   //     if (logFile.indexOf('txt') !== -1) { // If we have a log file then we will log it to the console & file.
   //       consoleLogProcess(debugSetting, logFile, classPath, message, true);
   //     } else { // No text log file specified, proceed with the same process for console only.
   //       consoleLogProcess(debugSetting, undefined, classPath, message, false);
   //     }
   //   }
   // }
   console.log(classPath + ' ' + message);
 };

 export default {
   consoleLog
 };
