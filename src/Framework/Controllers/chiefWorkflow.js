/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefData from '../Controllers/chiefData.js';
import loggers from '../Executrix/loggers.js';
import * as b from '../Constants/basic.constants.js';
import * as w from '../Constants/word.constants.js';
import * as s from '../Constants/system.constants.js';
var D = require('../Resources/data.js');
var baseFileName = 'chiefWorkflow';

/**
 * @function loadCommandWorkflowsFromPath
 * @description Loads the command workflows XML file that is specified by the input.
 * @param {string} commandWorkflowFilePathConfigurationName The path and file name to the XML that contains the command workflows definitions.
 * (Could be system defined command workflows or client command defined command workflows)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
function loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName) {
  let functionName = loadCommandWorkflowsFromPath.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandWorkflowFilePathConfigurationName is: ' + commandWorkflowFilePathConfigurationName);
  let allCommandWorkflowsData = {};
  allCommandWorkflowsData = chiefData.setupAllXmlData(commandWorkflowFilePathConfigurationName, s.cCommandWorkflows);
  if (D[s.cCommandWorkflows] === undefined) { // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[s.cCommandWorkflows] = {};
    D[s.cCommandWorkflows] = allCommandWorkflowsData[s.cCommandWorkflows];
  } else {
    for (let i=0; i<allCommandWorkflowsData[s.cCommandWorkflows][w.cWorkflow].length; i++) {
      D[s.cCommandWorkflows][w.cWorkflow].push(allCommandWorkflowsData[s.cCommandWorkflows][w.cWorkflow][i])
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

export default {
  loadCommandWorkflowsFromPath
};
