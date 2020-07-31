// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file stringGeneration.js
 * @module stringrGeneration
 * @description Contains all business rules for randomly generating strings of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:characterGeneration
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../../Executrix/loggers';
import { stringToBoolean } from './stringParsing';
import * as cg from './characterGeneration';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as n from '../../Constants/numeric.constants';
import * as w from '../../Constants/word.constants';
import * as s from '../../Constants/system.constants';
var path = require('path');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function generateRandomMixedCaseTextByLength
 * @description Parse the input string, and determine how many mixed case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number or how many randomly generated mixed case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomMixedCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomMixedCaseTextByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseTextByLength
 * @description Parse the input string, and determine how many upper case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomUpperCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomUpperCaseTextByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseTextByLength
 * @description Parse the input string, and determine how many lower case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated lower case alphabetic characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomLowerCaseTextByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomLowerCaseTextByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseTextWithSpecialCharactersByLength
 * @description Generate the specified number of random mixed case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or special characters to generate the output string.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case letters and special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomMixedCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseTextWithSpecialCharactersByLength
 * @description Generate the specified number of random upper case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated upper case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generate process.
 * @return {string} A string of randomly generated upper case letters and special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomUpperCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseTextWithSpecialCharactersByLength
 * @description Generate the specified number of random lower case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case letters and special characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomLowerCaseTextWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random mixed case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters and numbers where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomMixedCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateMixedCaseAlphaNumericCharacter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random upper case letters and/or numeric characters and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters and numbers where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomUpperCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateUpperCaseAlphaNumericCharacter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseAlphaNumericCodeByLength
 * @description Generate the specified number of random lower case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters and numbers where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomLowerCaseAlphaNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateLowerCaseAlphaNumericCharacter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomNumericCodeByLength
 * @description Generate the specified number of random numberic characters and string them together.
 * @param {string} inputData The number of randomly generated numeric characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated numeric characters where the length of the string is defined by the input parameter.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomNumericCodeByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomNumericCodeByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateNumericCharacter(inputData, inputMetaData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of mixed case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of upper case letters, numeric characters and special characters from a list of alloable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated upper case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated upper case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Generate a random selection of lower case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated, generate them ans string them together to the specified length.
 * @param {string} inputData The number of randomly generated lower case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomSpecialCharacterCodeByLength
 * @description Generate a random selection of characters from the input allowable alphabet of characters, generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated characters from the list of allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateRandomSpecialCharacterCodeByLength = function(inputData, inputMetaData) {
  let functionName = s.cgenerateRandomSpecialCharacterCodeByLength;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let numberOfCharactersToGenerate = parseInt(inputData);
  for (let counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
    returnData = returnData.concat(cg.randomlyGenerateSpecialCharacter(inputMetaData, ''));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateValidEmail
 * @description Generate a valid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateValidEmail = function(inputData, inputMetaData) {
  let functionName = s.cgenerateValidEmail;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  let allowableSpecialCharacters;
  let generateSpecialCharacters;
  let specifiedSuffixAndDomain;
  let bFalse = false;
  let sEmpty = '';
  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2];
      // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateValidEmailWithSpecificSuffixAndDomainName(inputData, generateSpecialCharacters,
        allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateRandomValidEmail(inputData, generateSpecialCharacters, allowableSpecialCharacters)
    } else {
      returnData = generateRandomValidEmail(inputData, b.cFalse, w.cEmpty);
    }
  } else {
    returnData = generateRandomValidEmail(inputData, b.cFalse, w.cEmpty);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateInvalidEmail
 * @description Generate an invalid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated, generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one of the input parameters, formeatted as an email: "a@b.com".
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const generateInvalidEmail = function(inputData, inputMetaData) {
  let functionName = s.cgenerateInvalidEmail;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let allowableSpecialCharacters;
  let generateSpecialCharacters;
  let specifiedSuffixAndDomain;
  let bFalse = false;
  let sEmpty = '';
  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2];
      // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName(inputData, generateSpecialCharacters,
        allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = stringToBoolean(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.
      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }
      returnData = generateRandomInvalidEmail(inputData, generateSpecialCharacters, allowableSpecialCharacters)
    } else {
      returnData = generateRandomInvalidEmail(inputData, [bFalse, sEmpty]);
    }
  } else {
    returnData = generateRandomInvalidEmail(inputData, [bFalse, sEmpty]);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateValidEmailWithSpecificSuffixAndDomainName
 * @description Generate a valid eamil composed of a random selection of mmixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {j@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
const generateValidEmailWithSpecificSuffixAndDomainName = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  let functionName = 'generateValidEmailWithSpecificSuffixAndDomainName';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'specifiedSuffixAndDomain is: ' + specifiedSuffixAndDomain);
  let returnData = '';
  let prefix = '';
  if ((numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2) && numberOfCharactersToGenerate >= 6 &&
  specifiedSuffixAndDomain.includes(b.cDot)) {
    // @NOTE We cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know we are already going to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfCharactersToGenerate, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }
    returnData = prefix + b.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomValidEmail
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
const generateRandomValidEmail = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  let functionName = 'generateRandomValidEmail';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);
  let returnData = '';
  let prefix = '';
  let suffix = '';
  let domainName = '';
  let numberOfPrefixCharacters = 0;
  let numberOfSuffixCharacters = 0;
  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know are already going to be reserved,  the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;

    // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up betwee the prefix and suffix.
    if (numberOfCharactersToGenerate === 4) { // Stick with a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength(n.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughtly equal to the times we generate a 3-character domain.)
      if (cg.randomlyGenerateBooleanValue('', '') === true) { // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(n.c2, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c2, allowableSpecialCharacters);
        }
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else { // Do a 3-characterdomain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(n.c3, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c3, allowableSpecialCharacters);
        }
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >= 4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength(n.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c2, allowableSpecialCharacters);
      }
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    }

    // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.
    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
    } else { // Should also never get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do something to see if we can survive, again as a matter of completness of code logic.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixCharacters, allowableSpecialCharacters);
    }
    if (generateSpecialCharacters === false) {
      suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters, '');
    } else {
      suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfSuffixCharacters, allowableSpecialCharacters);
    }
    returnData = prefix + b.cAt + suffix + b.cDot + domainName;
  } else {
    returnData = '';
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateInvalidEmailWithSpecificSuffixAndDomainName
 * @description Generate an invalid email composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TREUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
const generateInvalidEmailWithSpecificSuffixAndDomainName = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  let functionName = 'generateInvalidEmailWithSpecificSuffixAndDomainName';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'specifiedSuffixAndDomain is: ' + specifiedSuffixAndDomain);
  let returnData = '';
  let prefix = '';
  let numberOfPrefixCharacters = 0;
  let failureMode = -1;
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c3 = n.c3;
  let cTrue = g.cTrue;
  // console.log('Started the execution of the business rule generateInvalidEmailWithSpecificSuffixAndDomainName2');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);
  // console.log('Specified suffix and domain are: ' + specifiedSuffixAndDomain);

  failureMode = cg.randomlyGenerateNumberInRange(n.c1, [c3, cTrue, cTrue]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'failureMode is: ' + failureMode);
  // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.
  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "x" symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1: case '1':
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;
      case 2: case '2':
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;
      case 3: case '3':
        numberOfCharactersToGenerate = 0;
        break;
      default:
        numberOfCharactersToGenerate = 0;
        break;
    }

    // This is a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've ractored in all the other cases already above.
    numberOfPrefixCharacters = numberOfCharactersToGenerate;
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'prefix is: ' + prefix);

    switch (failureMode) {
      case 1: case '1': // Without the "@" symbol
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ symbol.');
        returnData = prefix + specifiedSuffixAndDomain;
        break;
      case 2: case '2': // Without the prefix
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix.');
        returnData = b.cAt + specifiedSuffixAndDomain;
        break;
      case 3: case '3': // Without the "@" & Prefix
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ and prefix.');
        returnData = specifiedSuffixAndDomain;
        break;
      default:
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'DEFAULT: Without the @ and prefix.');
        returnData = specifiedSuffixAndDomain;
        break;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function generateRandomInvalidEmail
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
const generateRandomInvalidEmail = function(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  let functionName = 'generateRandomInvalidEmail2';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'generateSpecialCharacters is: ' + generateSpecialCharacters);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'allowableSpecialCharacters is: ' + allowableSpecialCharacters);
  let returnData = '';
  let prefix = '';
  let suffix = '';
  let domainName = '';
  let numberOfPrefixCharacters = 0;
  let numberOfSuffixCharacters = 0;
  let numberOfDomainNameCharacters = 0;
  let failureMode = -1;
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let c28 = n.c2 + n.c8;
  let cTrue = g.cTrue;

  failureMode = cg.randomlyGenerateNumberInRange(n.c1, [c28, cTrue, cTrue]);
  failureMode = parseInt(failureMode);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'failureMode is: ' + failureMode);
  // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."

  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.
  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbo, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.

    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 || failureMode === 10 || failureMode === 11 || failureMode === 12 || failureMode === 13 || failureMode >= 21) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfCharactersToGenerate is: ' + numberOfCharactersToGenerate);

    // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.
    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || (failureMode >= 8 && failureMode <= 16) || failureMode === 19 || failureMode > 27) {
      // Consider that the number of characters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touching IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength(n.c2, '');
          // domainName = generateRandomMixedCaseAlphaNumericCodeByLength(b.c2, '');
        } else {
          if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
            // domainName = generateRandomMixedCaseTextWithSpecialCharactersByLength(b.c2, allowableSpecialCharacters);
            domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c2, allowableSpecialCharacters);
          } else {
            domainName = generateRandomMixedCaseTextByLength(n.c2, '');
            // domainName = generateRandomMixedCaseAlphaNumericCodeByLength(b.c2, '');
          }
        }
        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (cg.randomlyGenerateBooleanValue('', '') === true) { // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength(n.c2, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c2, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength(n.c2, '');
            }
          }
          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else { // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength(n.c3, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainNme = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(n.c3, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength2(n.c3, '');
            }
          }
          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3;
        }
      }
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'domainName is: ' + domainName);

    // ONLY do suffix and prefix if our failure modes do not exclude both.
    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode == 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!
      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!
      numberOfSuffixCharacters = 0;
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfPrefixCharacters is: ' + numberOfPrefixCharacters);
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'numberOfSuffixCharacters is: ' + numberOfSuffixCharacters);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
        } else {
          prefix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfPrefixCharacters.toString(), '');
        }
      }
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'prefix is: ' + prefix);

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
        } else {
          suffix = generateRandomMixedCaseAlphaNumericCodeByLength(numberOfSuffixCharacters.toString(), '');
        }
      }
    }
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'suffix is: ' + prefix);
  }

  switch (failureMode) {
    case 1: // Without the "@" symbol
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ symbol.');
      returnData = prefix + suffix + b.cDot + domainName;
      break;
    case 2: // Without the "." symbol
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the . symbol.');
      returnData = prefix + b.cAt + suffix + domainName;
      break;
    case 3: // Without both the "@" & "." symbols
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ and . symbols.');
      returnData = prefix + suffix + domainName;
      break;
    case 4: // Without the domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the domain name.');
      returnData = prefix + b.cAt + suffix + b.cDot;
      break;
    case 5: // Without the "@" & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ and domain name.');
      returnData = prefix + suffix + b.cDot + domainName;
      break;
    case 6: // Without the "." & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the . and domain name.');
      returnData = prefix + b.cAt + suffix;
      break;
    case 7: // Without the "@", "." & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, . and domain name.');
      returnData = prefix + suffix;
      break;
    case 8: // Without the Prefix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix.');
      returnData = b.cAt + suffix + b.cDot + domainName;
      break;
    case 9: // Without the Suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the suffix.');
      returnData = prefix + b.cAt + b.cDot + domainName;
      break;
    case 10: // Without the "@" & Prefix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ and prefix.');
      returnData = suffix + b.cDot + domainName;
      break;
    case 11: // Without the "." & Prefix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the . and prefix.');
      returnData = b.cAt + suffix + domainName;
      break;
    case 12: // Without the "@" & Suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @ and suffix.');
      returnData = prefix + b.cDot + domainName;
      break;
    case 13: // Without the "." & Suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the . and suffix.');
      returnData = prefix + b.cAt + domainName;
      break;
    case 14: // Without the "@", "." & Prefix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, . and prefix.');
      returnData = suffix + domainName;
      break;
    case 15: // Without the "@", "." & Suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, . and suffix.');
      returnData = prefix + domainName;
      break;
    case 16: // Without the "@", ".", Prefix, & Suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, ., prefix and suffix.');
      returnData = domainName;
      break;
    case 17: // Without the Prefix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix and domain name.');
      returnData = b.cAt + suffix + b.cDot;
      break;
    case 18: // Without the Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the suffix and domain name.');
      returnData = prefix + b.cAt + b.cDot;
      break;
    case 19: // Without the Prefix & suffix
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix and suffix.');
      returnData = b.cAt + b.cDot + domainName;
      break;
    case 20: // Without the Prefix, Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix, suffix and domain name.');
      returnData = b.cAt + b.cDot;
      break;
    case 21: // Without the "@", Prefix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, prefix and domain name.');
      returnData = suffix + b.cDot;
      break;
    case 22: // Without the ".", Prefix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the ., prefix and domain name.');
      returnData = b.cAt + suffix;
      break;
    case 23: // Without the "@", Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, suffix and domain name.');
      returnData = prefix + b.cDot;
      break;
    case 24: // Without the ".", Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the ., suffix and domain name.');
      returnData = prefix + b.cAt + b.cDot;
      break;
    case 25: // Without the "@", Prefix, Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the @, prefix, suffix and domain name.');
      returnData = b.cDot;
      break;
    case 26: // Without the ".", Prefix, Suffix & domain name
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the ., prefix, suffix and domain name.');
      returnData = b.cAt;
      break;
    case 27: // Without the Prefix, Suffix & "@"
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix, suffix and @.');
      returnData = b.cDot + domainName;
      break;
    case 28: // Without the Prefix, Suffix & "."
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'Without the prefix, suffix and ..');
      returnData = b.cAt + domainName;
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
