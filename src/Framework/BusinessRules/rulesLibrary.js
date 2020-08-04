/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined business rules as a map between function names and function calls.
 * @requires module:characterGeneration
 * @requires module:stringGeneration
 * @requires module:stringParsing
 * @requires module:mathOperations
 * @requires module:system-constants
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as characterGeneration from './Rules/characterGeneration.js';
import * as stringGeneration from './Rules/stringGeneration.js';
import * as stringParsing from './Rules/stringParsing.js';
import * as mathOperations from './Rules/mathOperations.js';
import * as s from '../Constants/system.constants.js';
import * as D from '../Resources/data.js';

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/15
 */
export const initRulesLibrary = function() {
  // console.log('BEGIN rulesLibrary.initRulesLibrary');
  D[s.cBusinessRules] = {};
  D[s.cBusinessRules] = {
    [s.cEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

    // Business Rules
    // ********************************
    // StringParsing rules in order
    // ********************************
    [s.cstringToBoolean]: (inputData, inputMetaData) => stringParsing.stringToBoolean(inputData, inputMetaData),
    [s.cstringToDataType]: (inputData, inputMetaData) => stringParsing.stringToDataType(inputData, inputMetaData),
    [s.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsing.determineObjectDataType(inputData, inputMetaData),
    [s.cisBoolean]: (inputData, inputMetaData) => stringParsing.isBoolean(inputData, inputMetaData),
    [s.cisInteger]: (inputData, inputMetaData) => stringParsing.isInteger(inputData, inputMetaData),
    [s.cisFloat]: (inputData, inputMetaData) => stringParsing.isFloat(inputData, inputMetaData),
    [s.cisString]: (inputData, inputMetaData) => stringParsing.isString(inputData, inputMetaData),
    [s.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
    [s.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
    [s.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
    [s.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
    [s.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
    [s.cgetUserNameFromEmail]: (inputData, inputMetaData) => stringParsing.getUserNameFromEmail(inputData, inputMetaData),
    [s.creplaceSpacesWithPlus]: (inputData, inputMetaData) => stringParsing.replaceSpacesWithPlus(inputData, inputMetaData),
    [s.creplaceColonWithUnderscore]: (inputData, inputMetaData) => stringParsing.replaceColonWithUnderscore(inputData, inputMetaData),
    [s.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
    [s.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
    [s.cconvertStringToLowerCase]: (inputData, inputMetaData) => stringParsing.convertStringToLowerCase(inputData, inputMetaData),
    [s.cconvertStringToUpperCase]: (inputData, inputMetaData) => stringParsing.convertStringToUpperCase(inputData, inputMetaData),
    [s.cgetFileNameFromPath]: (inputData, inputMetaData) => stringParsing.getFileNameFromPath(inputData, inputMetaData),
    [s.cgetFileExtension]: (inputData, inputMetaData) => stringParsing.getFileExtension(inputData, inputMetaData),
    [s.cremoveDotFromFileExtension]: (inputData, inputMetaData) => stringParsing.removeDotFromFileExtension(inputData, inputMetaData),
    [s.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
    [s.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData),
    [s.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
    [s.cconvertCamelCaseStringToArray]: (inputData, inputMetaData) => stringParsing.convertCamelCaseStringToArray(inputData, inputMetaData),
    [s.cconvertArrayToCamelCaseString]: (inputData, inputMetaData) => stringParsing.convertArrayToCamelCaseString(inputData, inputMetaData),
    [s.cmapWordToCamelCaseWord]: (inputData, inputMetaData) => stringParsing.mapWordToCamelCaseWord(inputData, inputMetaData),
    [s.csimplifyAndConsolidateString]: (inputData, inputMetaData) => stringParsing.simplifyAndConsolidateString(inputData, inputMetaData),
    [s.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
    [s.cdoesArrayContainLowerCaseConsolidatedString]: (inputData, inputMetaData) => stringParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData),
    [s.cdoesArrayContainCharacter]: (inputData, inputMetaData) => stringParsing.doesArrayContainCharacter(inputData, inputMetaData),
    [s.cremoveCharacterFromArray]: (inputData, inputMetaData) => stringParsing.removeCharacterFromArray(inputData, inputMetaData),
    [s.cascertainMatchingFilenames]: (inputData, inputMetaData) => stringParsing.ascertainMatchingFilenames(inputData, inputMetaData),
    [s.cdoesArrayContainFilename]: (inputData, inputMetaData) => stringParsing.doesArrayContainFilename(inputData, inputMetaData),
    [s.cvalidateConstantsDataValidation]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidation(inputData, inputMetaData),
    [s.cdetermineSuggestedConstantsValidationLineOfCode]: (inputData, inputMetaData) => stringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData),
    [s.cvalidateConstantsDataValidationLineItemName]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData),
    [s.cvalidateConstantsDataValues]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValues(inputData, inputMetaData),
    [s.cgetDataCatagoryFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData),
    [s.cgetDataCatagoryDetailNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData),
    [s.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData),
    [s.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData),
    [s.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData),
    [s.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
    [s.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData),
    [s.cisOdd]: (inputData, inputMetaData) => stringParsing.isOdd(inputData, inputMetaData),
    [s.cisEven]: (inputData, inputMetaData) => stringParsing.isEven(inputData, inputMetaData),
    [s.creplaceCharacterAtIndex]: (inputData, inputMetaData) => stringParsing.replaceCharacterAtIndex(inputData, inputMetaData),

    // *********************************
    // StringGeneration rules in order
    // *********************************
    [s.cgenerateRandomMixedCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength(inputData, inputMetaData),
    [s.cgenerateRandomUpperCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength(inputData, inputMetaData),
    [s.cgenerateRandomLowerCaseTextByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength(inputData, inputMetaData),
    [s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomMixedCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(inputData, inputMetaData),
    [s.cgenerateRandomUpperCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(inputData, inputMetaData),
    [s.cgenerateRandomLowerCaseAlphaNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(inputData, inputMetaData),
    [s.cgenerateRandomNumericCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength(inputData, inputMetaData),
    [s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(inputData, inputMetaData),
    [s.cgenerateRandomSpecialCharacterCodeByLength]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength(inputData, inputMetaData),
    [s.cgenerateValidEmail]: (inputData, inputMetaData) => stringGeneration.generateValidEmail(inputData, inputMetaData),
    [s.cgenerateInvalidEmail]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail(inputData, inputMetaData),

    // *********************************
    // CharacterGeneration rules in order
    // *********************************
    [s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateMixedCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateUpperCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateLowerCaseAlphaNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateNumericCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateSpecialCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateNumberInRange]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange(inputData, inputMetaData),
    [s.crandomlyGenerateBooleanValue]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue(inputData, inputMetaData),
    [s.crandomlyGenerateMixedCaseAlphabeticCharacter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(inputData, inputMetaData),
    [s.crandomlyGenerateLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter(inputData, inputMetaData),
    [s.crandomlyGenerateUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter(inputData, inputMetaData),
    [s.cconvertNumberToUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData),
    [s.cconvertNumberToLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData),

    // *********************************
    // Math Operations rules in order
    // *********************************
    [s.chex2rgbConversion]: (inputData, inputMetaData) => mathOperations.hex2rgbConversion(inputData, inputMetaData)
  }
  // console.log('END rulesLibrary.initRulesLibrary function');
};
