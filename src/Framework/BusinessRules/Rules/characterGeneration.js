// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file characterGeneration.js
 * @module characterGeneration
 * @description Contains all business rules for randomly generating characters of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import loggers from '../../Executrix/loggers.js';
import { stringToBoolean } from './stringParsing.js';
import * as b from '../../Constants/basic.constants.js';
import * as g from '../../Constants/generic.constants.js';
import * as n from '../../Constants/numeric.constants.js';
import * as s from '../../Constants/system.constants.js';
var baseFileName = 'characterGeneration';

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from a-z or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseLetterOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z, a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randommly returns a random number, a random mixed case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from A-Z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randomly returns a random number, a random upper case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cUpperCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
 * @description Randomly generates an alphabetic letter from a-z or a number 0-9 or a random special character from the input list of special characters.
 * @param {string} inputData The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Randonly returns a random number, a random lower case letter of the alphabet, or a random special character from the list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(inputData + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random letter (could be upper case or lower case, which is also random) or a random number.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateMixedCaseAlphaNumericCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from A-Z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random upper case letter or a random number.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateUpperCaseAlphaNumericCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cUpperCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter
 * @description Randomly generates an alpha-numeric code from a-z or 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} Either a random lower case letter or a random number.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseAlphaNumericCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateLowerCaseAlphaNumericCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cLowerCaseEnglishAlphabet + g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumericCharacter
 * @description Randomly generates a string character in the range of 0-9.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single randomly generated string character in the range of 0-9.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateNumericCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateNumericCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cAllNumbers);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateSpecialCharacter
 * @description Randommly select a special character from a list of allowable special characters.
 * @param {string} inputData  The list of allowable special characters that should be used to randomly select from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A special character randomly selected from the input list of allowable special characters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateSpecialCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateSpecialCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  // NOTE: Cannot have a "." as part of a variable name in a {set}
  let cTrue = g.cTrue;
  let inputDataLength = inputData.length.toString();
  let number = randomlyGenerateNumberInRange(n.c1, [inputDataLength, g.cTrue, g.cTrue]);
  // @NOTE: The STring.length() above is a 1-base count, the STring.substring is zero-based.
  returnData = inputData.substring(number - 1, number);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateNumberInRange
 * @description Randomly generates a number between the start-range and end-range.
 * @param {string} inputData A string that contains the number with the minimum value.
 * @param {array<string|integer,boolean,boolean>} inputMetaData A map with multiple input parameters:
 *  maximumValue - A string that contains the number with the maximum value.
 *  includeMaximum - A Boolean value that indicates if the maximum should be included or excluded from the range of allowable range of values to return from.
 *  addMinimum - A Boolean value that indicates if the minimum should be added to the value or not.
 * @return {string} The new random number that was generated according to the input parameters.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateNumberInRange = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateNumberInRange;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let minimum = parseInt(inputData);
  let maximum = parseInt(inputMetaData[0]);
  let addOne = stringToBoolean(inputMetaData[1]);
  let addMinimum = stringToBoolean(inputMetaData[2]);
  if (addOne === true) {
    if (addMinimum === true) {
      returnData = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    } else {
      returnData = Math.floor(Math.random() * (maximum - minimum + 1));
    }
  } else {
    if (addMinimum === true) {
      returnData = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    } else {
      returnData = Math.floor(Math.random() * (maximum - minimum));
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData.toString();
};

/**
 * @function randomlyGenerateBooleanValue
 * @description Randomly generates a boolean value {@code TRUE} or {@code FALSE}.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value that is either {@code TRUE} or {@code FALSE} as a random 50-50 chance of one or the other.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateBooleanValue = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateBooleanValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = Math.random() >= 0.5;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter
 * @description Randomly generates either an upper case or lower case random alphabetic letter from a-z or A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z or A-Z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateMixedCaseAlphabeticCharacter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateMixedCaseAlphabeticCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cUpperCaseEnglishAlphabet + g.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateLowerCaseLetter
 * @description Randomly generates a lower case alphabetic letter from a-z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from a-z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateLowerCaseLetter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateLowerCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cLowerCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function randomlyGenerateUpperCaseLetter
 * @description Randomly generates an upper case alphabetic letter from A-Z.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A randomly generated alphabetic letter from A-Z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const randomlyGenerateUpperCaseLetter = function(inputData, inputMetaData) {
  let functionName = s.crandomlyGenerateUpperCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = randomlyGenerateSpecialCharacter(g.cUpperCaseEnglishAlphabet);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToUpperCaseLetter
 * @description Converts a number from 1-26 into a upper case letter of the alphabet A-Z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to an upper case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter A-Z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const convertNumberToUpperCaseLetter = function(inputData, inputMetaData) {
  let functionName = s.cconvertNumberToUpperCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let number = parseInt(inputData);
  number--;
  // console.log('number is: ' + number.toString(10));
  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toUpperCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function convertNumberToLowerCaseLetter
 * @description Converts a number from 1-26 into a lower case letter of the alphabet a-z.
 * @param {string} inputData A string that contains a number in the range of 1-26 that should be converted to a lower case letter of the alphabet.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A letter of the alphabet where 1-26 is converted to a letter a-z.
 * @author Seth Hollingsead
 * @date 2020/05/19
 */
export const convertNumberToLowerCaseLetter = function(inputData, inputMetaData) {
  let functionName = s.cconvertNumberToLowerCaseLetter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  let number = parseInt(inputData);
  number--;
  // console.log('number is: ' + number.toString(10));
  if (number > 25 || number < 0) {
    returnData = ''; // Shouldn't actually need to do this, but it's a good place holder.
  } else {
    returnData = g.cUpperCaseEnglishAlphabet.substring(number, number + 1).toLowerCase();
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
