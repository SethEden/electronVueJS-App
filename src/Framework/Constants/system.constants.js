/**
 * @file system.constants.js
 * @module system-constants
 * @description Contains system defined acronyms, many of them derived from the basic-constants.
 * Also included are other constants like countries, named spoken languages.
 * Also included are common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';
import * as w from './word.constants';

// Miscelaneious
export const cENV = b.cEN + b.cV;
export const cLOG = b.cLO + b.cG;
export const cENVIRONMENT = p.cENV + b.cIR + b.cON + p.cMENT;
export const cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN;
export const cSTYLE = b.cST + b.cYL + b.cE;

// Compound System Words
export const cunderline = w.cunder + w.cline;
export const cUnderline = w.cUnder + w.cline;
export const cWithText = w.cWith + w.cText;
export const cwithText = w.cwith + w.cText;
export const cDebugTest = w.cDebug + w.cTest;
export const cDebugPage = w.cDebug + w.cPage;
export const cDebugTestExhaustive = cDebugTest + w.cExhaustive;
export const cDebugTestData = cDebugTest + w.cData;
export const cDebugPageScripts = cDebugPage + w.cScripts;
export const cDebugPageData = cDebugPage + w.cData;
export const cDebugKeywords = w.cDebug + w.cKeywords;
export const cLogBrowserActions = w.cLog + w.cBrowser + w.cActions;
export const cJournalBrowserActions = w.cJournal + w.cBrowser + w.cActions;
export const cDebugBrowserActions = w.cDebug + w.cBrowser + w.cActions;
export const cDebugSelectors = w.cDebug + w.cSelectors;
export const cDebugFunctions = w.cDebug + w.cFunctions;
export const cDebugFiles = w.cDebug + w.cFiles;
export const cTestAutomation = w.cTest + w.cAutomation;
export const cNumberOfRows = w.cNumber + w.cOf + w.cRows;
export const cMasterRowNumber = w.cMaster + w.cRow + w.cNumber;
export const cEnvironmentRow = w.cEnvironment + w.cRow;
export const cEnvironmentRowNumber = cEnvironmentRow + w.cNumber;
export const cPageScript = w.cPage + w.cScript;
export const cIntermediatePath = w.cIntermediate + w.cPath;
export const cTimeStamp = w.cTime + w.cStamp;
export const cPageScriptTimeStamp = cPageScript + cTimeStamp;
export const cDateTimeStamp = w.cDate + cTimeStamp;
export const cScriptDateStamp = w.cScript + w.cDate + w.cStamp;
export const cScriptTimeStamp = w.cScript + cTimeStamp;
export const cKeywordTimeStamp = w.cKeyword + cTimeStamp;
export const cTestTimeStamp = w.cTest + cTimeStamp;
export const cScriptDateTimeStamp = w.cScript + cDateTimeStamp;
export const cBeginScriptTimeStamp = w.cBegin + cScriptTimeStamp;
export const cEndScriptTimeStamp = w.cEnd + cScriptTimeStamp;
export const cBeginTestTimeStamp = w.cBegin + cTestTimeStamp;
export const cEndTestTimeStamp = w.cEnd + cTestTimeStamp;
export const cBeginPageScriptTimeStamp = w.cBegin + cPageScriptTimeStamp;
export const cEndPageScriptTimeStamp = w.cEnd + cPageScriptTimeStamp;
export const cBeginKeywordTimeStamp = w.cBegin + cKeywordTimeStamp;
export const cEndKeywordTimeStamp = w.cEnd + cKeywordTimeStamp;
export const cRunTime = w.cRun + w.cTime;
export const cRuntime = w.cRun + w.ctime;
export const cBrowserName = w.cBrowser + w.cName;
export const cHostName = w.cHost + w.cName;
export const cTestRunID = w.cTest + w.cRun + w.cID;
export const cfilesLists = w.cfiles + w.cLists;
export const cFileTypes = w.cFile + w.cTypes;
export const cFileName = w.cFile + w.cName;
export const cFilename = w.cFile + w.cname;
export const cfilename = w.cfile + w.cname;
export const cFileNames = cFileName + b.cs;
export const cFilenames = cFilename + b.cs;
export const cfilenames = cfilename + b.cs;
export const cPreValidateFileName = p.cPre + w.cValidate + cFileName;
export const cAsynchSingular = w.cAsynch + w.cSingular;
export const cSynchSingular = w.cSynch + w.cSingular;
export const cParallelMultiUnified = w.cParallel + w.cMulti + w.cUnified;
export const cAllowableCharacters = w.cAllowable + w.cCharacters;
export const cSpecialCharacters = w.cSpecial + w.cCharacters;
export const cTimeoutOverride = w.cTimeout + w.cOverride;
export const cDwellTime = w.cDwell + w.cTime;
export const cLogFilePathAndName = w.cLog + w.cFile + w.cPath + w.cAnd + w.cName;
export const cDataLogFilePathAndName = w.cData + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName;
export const cExecutionJournalFilePathAndName = w.cExecution + w.cJournal + w.cFile + w.cPath + w.cAnd + w.cName;
export const cResultsLogFilePathAndName = w.cResults + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName;
export const cTestDataPath = w.cTest + w.cData + w.cPath;
export const cLogFileEnabled = w.cLog + w.cFile + w.cEnabled;
export const cFileCounter = w.cFile + w.cCounter;
export const cDeltaT = g.cDelta + b.cT;
export const cVisibilityCheck = w.cVisibility + w.cCheck;
export const cvisibilityCheck = w.cvisibility + w.cCheck;
export const cOperatingSystem = w.cOperating + w.cSystem;
export const cInnerText = w.cInner + w.cText;
export const cinnerText = w.cinner + w.cText;
export const cInnerHTML = w.cInner + w.cHTML;
export const cinnerHTML = w.cInner + w.cHTML;
export const cTestData = w.cTest + w.cData;
export const cProcessingTimeout = w.cProcessing + w.cTimeout;
export const cIngestionCompleteDwellTime = w.cIngestion + w.cComplete + w.cDwellTime;
export const cRowNumber = w.cRow + w.cNumber;
export const cUsername = w.cUser + w.cname;
export const cPassword = w.cPass + w.cword; // b.cPa + b.css + b.cwo + b.crd; // 'Password';
export const cProjectName = w.cProject + w.cName;
export const cProjectDescription = w.cProject + w.cDescription;
export const cTestDataFileName = w.cTest + w.cData + cFileName;
export const cShareEmail = w.cShare + w.cEmail;
export const cAccessLevel = w.cAccess + w.cLevel;
export const cFileNumber = w.cFile + w.cNumber;
export const cConfigurationName = w.cConfiguration + w.cName;
export const cConfigurationElement = w.cConfiguration + w.cElement;
export const cConfigurationElements = cConfigurationElement + b.cs;
export const cVersionControl = w.cVersion + w.cControl;
export const cScriptRunTime = w.cScript + cRuntime;
export const cTestRunTime = w.cTest + cRuntime;
export const cTypeText = w.cType + w.cText;
export const ctypeText = w.ctype + w.cText;
export const cAbreviatedSelectors = w.cAbreviated + w.cSelectors;
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + w.cLogs;
export const cselectorTimeout = w.cselector + w.cTimeout;
export const cchildElementCount = w.cchild + w.cElement + w.cCount;
export const cUnderscore = w.cUnder + w.cscore; // 'Underscore'
export const cTestBureau = w.cTest + w.cBureau;
export const caddWithText = w.c_add + w.cWith + w.cText;
export const caddTimeout = w.c_add + w.cTimeout;
export const caddParent = w.c_add + w.cParent;
export const caddFindValue = w.c_add + w.cFind + w.cValue;
export const caddNth = w.c_add + w.cNth;
export const caddSibling = w.c_add + w.cSibling;
export const caddFilter = w.c_add + w.cFilter;
export const cgenerateRandom = w.cgenerate + w.cRandom;
export const crandomlyGenerate = w.crandomly + w.cGenerate;
export const cMixedCase = w.cMixed + w.cCase;
export const cUpperCase = w.cUpper + w.cCase;
export const cLowerCase = w.cLower + w.cCase;
export const cByLength = w.cBy + w.cLength;
export const cSpecialCharacter = w.cSpecial + w.cCharacter;
export const cWithSpecialCharacters = w.cWith + cSpecialCharacters
export const cTextByLength = w.cText + cByLength;
export const cTextWithSpecialCharacters = w.cText + cWithSpecialCharacters;
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength;
export const cAlphaNumeric = w.cAlpha + w.cNumeric;
export const cAlphaNumericCode = cAlphaNumeric + w.cCode;
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength;
export const cNumericCode = w.cNumeric + w.cCode;
export const cNumericCodeByLength = cNumericCode + cByLength;
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters;
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength;
export const cSpecialCharacterCodeByLength = cSpecialCharacter + w.cCode + cByLength;
export const cvalidEmail = w.cvalid + w.cEmail;
export const cValidEmail = w.cValid + w.cEmail;
export const cInvalidEmail = b.cIn + cvalidEmail;
export const cLetterOr = w.cLetter + b.cOr;
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter;
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + w.cNumber + w.cOr + cSpecialCharacter;
export const cAlphaNumericCharacter = cAlphaNumeric + w.cCharacter;
export const cNumericCharacter = w.cNumeric + w.cCharacter;
export const cNumberInRange = w.cNumber + b.cIn + w.cRange;
export const cBooleanValue = w.cBoolean + w.cValue;
export const cAlphabeticCharacter = w.cAlphabetic + w.cCharacter;
export const cCarriageReturn = w.cCarriage + w.cReturn;
export const cDashboardLogs = w.cDashboard + w.cLogs;
export const cVideoLogs = w.cVideo + w.cLogs;
export const cForwardSlash = w.cForward + w.cSlash;
export const cBackSlash = w.cBack + w.cSlash;
export const cPage_Keywords = w.cPage + b.cUnderscore + w.cKeywords;
export const cnavigateTo = w.cnavigate + b.cTo;
export const cNavigateTo = w.cNavigate + b.cTo;
export const cBrowserRefresh = w.cBrowser + w.cRefresh;
export const cSpaceIsColonSpace = b.cSpace + b.cIs + b.cColon + b.cSpace;
export const cdeployApplication = w.cdeploy + w.cApplication;
export const creleaseApplication = w.crelease + w.cApplication;
export const cbackground = w.cback + w.cground;
export const cBackground = w.cBack + w.cground;
export const cConfiguration_Colors = w.cConfiguration + b.cUnderscore + w.cColors;
export const cColorData = w.cColor + w.cData;
export const cColorName = w.cColor + w.cName;
export const cbusinessRule = w.cbusiness + w.cRule;
export const cBusinessRule = w.cBusiness + w.cRule;
export const cbusinessRules = w.cbusiness + w.cRules;
export const cBusinessRules = w.cBusiness + w.cRules;
export const crulesLibrary = w.crules + w.cLibrary;
export const cframework = w.cframe + w.cwork;
export const cFramework = w.cFrame + w.cwork;
export const cCommandsAliases = w.cCommands + w.cAliases;
export const cCommandWorkflows = w.cCommand + w.cWorkflows;
export const cStandardDeviation = w.cStandard + w.cDeviation;
export const cHexValue = g.cHex + w.cValue;

// Logging Constants
export const cBEGIN_Function = w.cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction;
export const cEND_Function = w.cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction;
export const cinputDataIs = w.cinput + w.cData + cSpaceIsColonSpace;
export const cinputMetaDataIs = w.cinput + w.cMetaData + cSpaceIsColonSpace;
export const creturnDataIs = w.creturn + w.cData + cSpaceIsColonSpace;
export const cLogBasicSystemEvents = w.cLog + w.cBasic + w.cSystem + w.cEvents;
export const cLogWarnings = w.cLog + w.cWarnings;
// Logging Styles Constants
export const cModuleFontStyle = w.cModule + w.cFont + w.cStyle;
export const cFunctionFontStyle = w.cFunction + w.cFont + w.cStyle;
export const cMessageFontStyle = w.cMessage + w.cFont + w.cStyle;
export const cDataFontStyle = w.cData + w.cFont + w.cStyle;
export const cModuleFontColor = w.cModule + w.cFont + w.cColor;
export const cFunctionFontColor = w.cFunction + w.cFont + w.cColor;
export const cMessageFontColor = w.cMessage + w.cFont + w.cColor;
export const cDataFontColor = w.cData + w.cFont + w.cColor;
export const cModuleFontBackgroundColor = w.cModule + w.cFont + w.cBackground + w.cColor;
export const cFunctionFontBackgroundColor = w.cFunction + w.cFont + w.cBackground + w.cColor;
export const cMessageFontBackgroundColor = w.cMessage + w.cFont + w.cBackground + w.cColor;
export const cDataFontBackgroundColor = w.cData + w.cFont + w.cBackground + w.cColor;

// File Types
export const cCatia = b.cCa + b.cti + b.ca; // 'Catia';
export const cDocument = g.cDoc + b.cu + p.cment; // 'Document';
export const cDocuments = w.cDocument + b.cs;
export const cDraft = b.cDr + p.caft; // 'Draft';
export const cDWG = b.cDW + b.cG; // 'DWG';
export const cHoops = b.cH + w.coops; // 'Hoops';
export const cHOOPS = b.cH + w.cOOPS; // 'HOOPS';
export const cImage = b.cIm + p.cage; // 'Image';
export const cImages = w.cImage + b.cs;
export const cInventor = p.cInv + b.cen + p.ctor; // 'Inventor';
export const cNeutral = b.cNe + b.cut + p.cral; // 'Neutral';
export const cNX = b.cNX; // 'NX';
export const cParasolid = b.cP + p.cara + w.csolid; // 'Para' + csolid;
export const cProE = p.cPro + b.cE; // 'ProE';
export const cRhino = b.cRh + p.cino; // 'Rhino';
export const cSolidEdge = w.cSolid + w.cEdge;
export const cSolidWorks = w.cSolid + w.cWorks;
export const cVRML = b.cVR + b.cML; // 'VRML';
export const cVrml = b.cVr + b.cml;
export const cvrml = b.cvr + b.cml;

// Countires
// TODO: Need to come back and generalize thse with constants re-use.
export const cAfghanistan = 'Afghanistan';
export const cAlbania = 'Albania';
export const cAlgeria = 'Algeria';
export const cAndorra = 'Andorra';
export const cAngola = 'Angola';
export const cAntigua = 'Antigua';
export const cArgentina = 'Argentina';
export const cArmenia = 'Armenia';
export const cAustralia = 'Australia';
export const cAustria = 'Austria';
export const cAzerbaijan = 'Axerbaijan';
export const cBahamas = 'Bahamas';
export const cBahrain = 'Bahrain';
export const cBangladesh = 'Bangladesh';
export const cBarbados = 'Barbados';
export const cBarbuda = 'Barbuda';
export const cBelarus = 'Belarus';
export const cBelgium = 'Belgium';
export const cBelize = 'Belize';
export const cBenin = 'Benin';
export const cBhutan = 'Bhutan';
export const cBolivia = 'Bolivia';
export const cBosnia = 'Bosnia';
export const cBotswana = 'Botswana';
export const cBrazil = 'Brazil';
export const cBrunei = 'Brunei';
export const cBulgaria = 'Bulgaria';
export const cBurkinaFaso = 'BurkinaFaso';
export const cBurundi = 'Burundi';
export const cCotedlvoire = 'Cote dlvoire';
export const cCaboVerde = 'Cabo Verde';
export const cCambodia = 'Cambodia';
export const cCameroon = 'Cameroon';
export const cCanada = 'Canada';
export const cCentralAfricanRepublic = 'Central African Republic';
export const cChad = 'Chad';
export const cChile = 'Chile';
export const cChina = 'China';
export const cColombia = 'Colombia';
export const cComoros = 'Comoros';
export const cCongo = 'Congo';
export const cCostaRica = 'Costa Rica';
export const cCroatia = 'Croatia';
export const cCuba = 'Cuba';
export const cCyprus = 'Cyprus';
export const cCzechia = 'Czechia';
export const cDemocraticRepublicOfTheCongo = 'Democratic Republic of the Congo';
export const cDenmark = 'Denmark';
export const cDjibouti = 'Djibouti';
export const cDominica = 'Dominica';
export const cDominicanRepublic = 'Dominican Republic';
export const cEcuador = 'Ecuador';
export const cEgypt = 'Egypt';
export const cElSalvador = 'El Salvador';
export const cEquatorialGuinea = 'Equatorial Guinea';
export const cEritrea = 'Eritrea';
export const cEstonia = 'Estonia';
export const cEswatini = 'Eswatini'; // Formerly Swaziland
export const cEthiopia = 'Ethiopia';
export const cFiji = 'Fiji';
export const cFinland = 'Finland';
export const cFrance = 'France';
export const cGabon = 'Gabon';
export const cGambia = 'Gambia';
export const cGeorgia = 'Georgia';
export const cGerman = b.cGe + b.cr + w.cman; // 'German';
export const cGermany = cGerman + b.cy; // 'Germany';
export const cGhana = 'Ghana';
export const cGreece = 'Greece';
export const cGrenada = 'Grenada';
export const cGuatemala = 'Guatemala';
export const cGuinea = 'Guinea';
export const cGuineaBissau = 'Guinea-Bissau';
export const cGuyana = 'Guyana';
export const cHaiti = 'Haiti';
export const cHerzegovina = 'Herzegovina';
export const cHolySee = 'Holy See';
export const cHonduras = 'Honduras';
export const cHungary = w.cHung + p.cary; // 'Hungary';
export const cIceland = 'Iceland';
export const cIndia = 'India';
export const cIndonesia = 'Indonesia';
export const cIran = 'Iran';
export const cIraq = 'Iraq';
export const cIreland = 'Ireland';
export const cIsrael = 'Israel';
export const cItaly = 'Italy';
export const cJamaica = 'Jamaica';
export const cJapan = 'Japan';
export const cJordan = 'Jordan';
export const cKazakhstan = 'Kazakhstan';
export const cKenya = 'Kenya';
export const cKiribati = 'Kiribati';
export const cKuwait = 'Kuwait';
export const cKyrgyzstan = 'Kyrgyzstan';
export const cLaos = 'Laos';
export const cLatvia = 'Latvia';
export const cLebanon = 'Lebanon';
export const cLesotho = 'Lesotho';
export const cLiberia = 'Liberia';
export const cLibya = 'Libya';
export const cLiechtenstein = 'Liechtenstein';
export const cLithuania = 'Lithuania';
export const cLuxembourg = 'Luxembourg';
export const cMadagascar = 'Madagascar';
export const cMalawi = 'Malawi';
export const cMalaysia = 'Malaysia';
export const cMaldives = 'Maldives';
export const cMali = 'Mali';
export const cMalta = 'Malta';
export const cMarshallIslands = 'Marshall Islands';
export const cMauritania = 'Mauritania';
export const cMauritius = 'Mauritius';
export const cMexico = 'Mexico';
export const cMicronesia = 'Micronesia';
export const cMoldova = 'Moldova';
export const cMonaco = 'Monaco';
export const cMongolia = 'Mongolia';
export const cMontenegro = 'Montenegro';
export const cMorocco = 'Morocco';
export const cMozambique = 'Mozambique';
export const cMyanmar = 'Myanmar';
export const cNamibia = 'Namibia';
export const cNauru = 'Nauru';
export const cNepal = 'Nepal';
export const cNetherlands = 'Netherlands';
export const cNewZealand = 'New Zealand';
export const cNevis = 'Nevis';
export const cNicaragua = 'Nicaragua';
export const cNiger = 'Niger';
export const cNigeria = 'Nigeria';
export const cNorthKorea = 'North Korea';
export const cNorthMacedonia = 'North Macedonia';
export const cNorway = 'Norway';
export const cOman = 'Oman';
export const cPakistan = 'Pakistan';
export const cPalau = 'Palau';
export const cPalestine = 'Palestine';
export const cPanama = 'Panama';
export const cPapuaNewGuinea = 'Papua New Guinea';
export const cParaguay = 'Paraguay';
export const cPeru = 'Peru';
export const cPhilippines = 'Philippines';
export const cPoland = 'Poland';
export const cPortugal = 'Portugal';
export const cPrincipe = 'Principe';
export const cQatar = 'Qatar';
export const cRomania = 'Romania';
export const cRussia = 'Russia';
export const cRwanda = 'Rwanda';
export const cSaintKitts = 'Saint Kitts';
export const cSaintLucia = 'Saint Lucia';
export const cSaintVincent = 'Saint Vincent';
export const cSomoa = 'Somoa';
export const cSanMarino = 'San Marino';
export const cSaoTome = 'Sao Tome';
export const cSaudiArabia = 'Saudi Arabia';
export const cSenegal = 'Senegal';
export const cSerbia = 'Serbia';
export const cSeychelles = 'Seychelles';
export const cSierraLeone = 'Sierra Leone';
export const cSingapore = 'Singapore';
export const cSlovakia = 'Slovakia';
export const cSlovenia = 'Slovenia';
export const cSolomonIslands = 'Solomon Islands';
export const cSomalia = 'Somalia';
export const cSouthAfrica = 'South Africa';
export const cSouthKorea = 'South Korea';
export const cSouthSudan = 'South Sudan';
export const cSpain = 'Spain';
export const cSriLanka = 'Sri Lanka';
export const cSudan = 'Sudan';
export const cSuriname = 'Suriname';
export const cSweden = 'Sweden';
export const cSwitzerland = 'Switzerland';
export const cSyria = 'Syria';
export const cTajikistan = 'Tajikistan';
export const cTanzania = 'Tanzania';
export const cThailand = 'Thailand';
export const cTimorLeste = 'Timor-Leste';
export const cTogo = 'Togo';
export const cTonga = 'Tonga';
export const cTrinidadAndTabago = 'Trinidad and Tabago';
export const cTunisia = 'Tunisia';
export const cTurkey = 'Turkey';
export const cTurkmenistan = 'Turkmenistan';
export const cTuvalu = 'Tuvalu';
export const cUganda = 'Uganda';
export const cUkraine = 'Ukraine';
export const cUnitedArabEmirates = 'United Arab Emirates';
export const cUnitedKingdom = 'United Kingdom';
export const cUnitedStatesOfAmerica = 'United States of America';
export const cUruguay = 'Uruguay';
export const cUzbekistan = 'Uzbekistan';
export const cVanuatu = 'Vanuatu';
export const cVenezuela = 'Venezuela';
export const cVietnam = 'Vietnam';
export const cYemen = 'Yemen';
export const cZambia = 'Zambia';
export const cZimbabwe = 'Zimbabwe';

// Languages
export const cChinese = p.cChi + b.cn + p.cese; // 'Chinese';
export const cChineseSimplified = cChinese + w.cSimplified;
export const cChineseTraditional = cChinese + w.cTraditional;
export const cCzech = b.cCz + b.ce + b.cch; // 'Czech';
export const cEnglish = b.cEn + b.cgl + p.cish; // 'English';
export const cFrench = b.cFr + b.cen + b.cch; // 'French';
// export const cGerman = b.cGe + b.cr + cman; // 'German'; // Defined above in the countries section
export const cHungarian = w.cHung + b.car + p.cian; // 'Hungarian';
export const cItalian = b.cIt + b.cal + p.cian; // 'Italian';
export const cJapanese = cJapan + p.cese; // 'Japanese';
export const cKorean = b.cKo + b.cre + b.can; // 'Korean';
export const cMiscellaneous = p.cMis + ccell + b.can + p.ceous; // 'Miscellaneous';
export const cPolish = b.cPo + b.cl + p.cish; // 'Polish';
export const cPortuguese = w.cPort + b.cug + b.cu + p.cese; // 'Portuguese';
export const cRussian = b.cRu + b.css + p.cian; // 'Russian';
export const cSpanish = b.cSp + b.can + p.cish; // 'Spanish';

// UI Element Types
export const cButton = b.cBu + b.ctt + b.con; // 'Button';

// Environment Variables
export const cQA = b.cQA;
export const cDEV = b.cDE + b.cV;
export const cPROD = p.cPRO + b.cD; // 'PROD';
export const cProd = p.cPro + b.cd; // 'Prod';
export const cPre = p.cPre;
export const cPRE = p.cPRE;
export const cPreProd = p.cPre + p.cProd;
export const cPREPROD = p.cPRE + p.cPROD;

// Key Combinations
export const cctrl_a = p.cctrl + b.cPlus + b.ca;
export const cctrl_b = p.cctrl + b.cPlus + b.cb;
export const cctrl_c = p.cctrl + b.cPlus + b.cc;
export const cctrl_d = p.cctrl + b.cPlus + b.cd;
export const cctrl_e = p.cctrl + b.cPlus + b.ce;
export const cctrl_f = p.cctrl + b.cPlus + b.cf;
export const cctrl_g = p.cctrl + b.cPlus + b.cg;
export const cctrl_h = p.cctrl + b.cPlus + b.ch;
export const cctrl_i = p.cctrl + b.cPlus + b.ci;
export const cctrl_j = p.cctrl + b.cPlus + b.cj;
export const cctrl_k = p.cctrl + b.cPlus + b.ck;
export const cctrl_l = p.cctrl + b.cPlus + b.cl;
export const cctrl_m = p.cctrl + b.cPlus + b.cm;
export const cctrl_n = p.cctrl + b.cPlus + b.cn;
export const cctrl_o = p.cctrl + b.cPlus + b.co;
export const cctrl_p = p.cctrl + b.cPlus + b.cp;
export const cctrl_q = p.cctrl + b.cPlus + b.cq;
export const cctrl_r = p.cctrl + b.cPlus + b.cr;
export const cctrl_s = p.cctrl + b.cPlus + b.cs;
export const cctrl_t = p.cctrl + b.cPlus + b.ct;
export const cctrl_u = p.cctrl + b.cPlus + b.cu;
export const cctrl_v = p.cctrl + b.cPlus + b.cv;
export const cctrl_w = p.cctrl + b.cPlus + b.cw;
export const cctrl_x = p.cctrl + b.cPlus + b.cx;
export const cctrl_y = p.cctrl + b.cPlus + b.cy;
export const cctrl_z = p.cctrl + b.cPlus + b.cz;

export const cApplicationName = w.cApplication + w.cName;
export const cApplicationRootPath = w.cApplication + w.cRoot + w.cPath;
export const cApplicationCleanedRootPath = w.cApplication + w.cCleaned + w.cRoot + w.cPath;
export const cConfigurationPath = w.cConfiguration + w.cPath;
export const cApplicationVersionNumber = w.cApplication + w.cVersion + w.cNumber;
export const cApplicationDescription = w.cApplication + w.cDescription;
export const cDataPath = w.cData + w.cPath;
export const cCtempPath = b.cc + b.cColon + b.cForwardSlash + p.ctemp + b.cForwardSlash;
export const cPageDataPath = w.cPage + w.cDataPath;
export const cWorkflowDataPath = w.cWorkflow + w.cDataPath;
export const cKeywordsDataPath = w.cKeywords + w.cDataPath;
export const cLocatorsDataPath = w.cLocators + w.cDataPath;
export const cclientRulesLibrary = w.cclient + w.cRules + w.cLibrary;
export const cCommandQueue = w.cCommand + w.cQueue;

// Configuration Settings
export const cArgumentDrivenInterface = w.cArgument + w.cDriven + w.cInterface;
export const cFigletFont = w.cFiglet + w.cFont;
export const cPrimaryCommandDelimiter = w.cPrimary + w.cCommand + w.cDelimiter;
export const cSecondaryCommandDelimiter = w.cSecondary + w.cCommand + w.cDelimiter;
export const cTertiaryCommandDelimiter = w.cTertiary + w.cCommand + w.cDelimiter;
export const cEnableBusinessRuleOutput = w.cEnable + w.cBusiness + w.cRule + w.cOutput;
export const cEnableBusinessRulePerformanceMetrics = w.cEnable + w.cBusiness + w.cRule + w.cPerformance + w.cMetrics;
export const cEnableCommandPerformanceMetrics = w.cEnable + w.cCommand + w.cPerformance + w.cMetrics;

// Test Time Tracking
export const cBeginDateTimeStamp = w.cBegin + cDateTimeStamp;
export const cEndDateTimeStamp = w.cEnd + cDateTimeStamp;
export const cItemsIndividuallySynch = w.cItems + w.cIndividually + w.cSynch;
export const cTimeStampVariableName = cTimeStamp + w.cVariable + w.cName;
export const cBeginTimeStampVariableName = w.cBegin + cTimeStampVariableName;
export const cEndTimeStampVariableName = w.cEnd + cTimeStampVariableName;
export const cBusinessRulePerformanceTrackingStack = w.cBusiness + w.cRule + w.cPerformance + w.cTracking + w.cStack;
export const cBusinessRuleNamesPerformanceTrackingStack = w.cBusiness + w.cRule + w.cNames + w.cPerformance + w.cTracking + w.cStack;
export const cBusinessRulesPerformanceAnalysisStack = w.cBusiness + w.cRules + w.cPerformance + w.cAnalysis + w.cStack;
export const cClearBusinessRulesPerformanceDataAfterAnalysis = w.cClear + w.cBusiness + w.cRules + w.cPerformance + w.cData + w.cAfter + w.cAnalysis;
export const cCommandPerformanceTrackingStack = w.cCommand + w.cPerformance + w.cTracking + w.cStack;
export const cCommandNamesPerformanceTrackingStack = w.cCommand + w.cNames + w.cPerformance + w.cTracking + w.cStack;
export const cCommandsPerformanceAnalysisStack = w.cCommands + w.cPerformance + w.cAnalysis + w.cStack;
export const cClearCommandPerformanceDataAfterAnalysis = w.cClear + w.cCommand + w.cPerformance + w.cData + w.cAfter + w.cAnalysis;

// Business Rules
export const cecho = b.cec + b.cho;
export const cEcho = b.cEc + b.cho;
// ********************************
// StringParsing rules in order
// ********************************
export const cstringToBoolean = w.cstring + w.cTo + w.cBoolean;
export const cstringToDataType = w.cstring + w.cTo + w.cData + w.cType;
export const cdetermineObjectDataType = w.cdetermine + w.cObject + w.cData + w.cType;
export const cisBoolean = w.cis + w.cBoolean;
export const cisInteger = w.cis + w.cInteger;
export const cisFloat = w.cis + w.cFloat;
export const cisString = w.cis + w.cString;
export const csingleQuoteSwapAfterEquals = w.csingle + w.cQuote + w.cSwap + w.cAfter + w.cEquals;
export const cswapForwardSlashToBackSlash = w.cswap + cForwardSlash + b.cTo + cBackSlash;
export const cswapBackSlashToForwardSlash = w.cswap + cBackSlash + b.cTo + cForwardSlash;
export const cswapDoubleForwardSlashToSingleForwardSlash = w.cswap + w.cDouble + cForwardSlash + b.cTo + w.cSingle + cForwardSlash;
export const cswapDoubleBackSlashToSingleBackSlash = w.cswap + w.cDouble + cBackSlash + b.cTo + w.cSingle + cBackSlash;
export const cgetUserNameFromEmail = w.cget + w.cUser + w.cName + w.cFrom + w.cEmail;
export const creplaceSpacesWithPlus = w.creplace + w.cSpaces + w.cWith + w.cPlus;
export const creplaceColonWithUnderscore = w.creplace + w.cColon + w.cWith + cUnderscore;
export const creplaceCharacterWithCharacter = w.creplace + w.cCharacter + w.cWith + w.cCharacter;
export const ccleanCarriageReturnFromString = w.cclean + cCarriageReturn + w.cFrom + w.cString;
export const cconvertStringToLowerCase = w.cconvert + w.cString + w.cTo + w.cLower + w.cCase;
export const cconvertStringToUpperCase = w.cconvert + w.cString + w.cTo + w.cUpper + w.cCase;
export const cgetFileNameFromPath = w.cget + cFileName + w.cFrom + w.cPath;
export const cgetFileExtension = w.cget + w.cFile + w.cExtension;
export const cremoveDotFromFileExtension = w.cremove + g.cDot + w.cFrom + w.cFile + w.cExtension;
export const cremoveFileExtensionFromFileName = w.cremove + w.cFile + w.cExtension + w.cFrom + cFileName;
export const cgetValueFromAssignmentOperationString = w.cget + w.cValue + w.cFrom + w.cAssignment + w.cOperation + w.cString;
export const caggregateNumericalDifferenceBetweenTwoStrings = w.caggregate + w.cNumerical + w.cDifference + w.cBetween + g.cTwo + w.cStrings;
export const cconvertCamelCaseStringToArray = w.cconvert + w.cCamel + w.cCase + w.cString + b.cTo + w.cArray;
export const cconvertArrayToCamelCaseString = w.cconvert + w.cArray + b.cTo + w.cCamel + w.cCase + w.cString;
export const cmapWordToCamelCaseWord = p.cmap + w.cWord + b.cTo + w.cCamel + w.cCase + w.cWord;
export const csimplifyAndConsolidateString = w.csimplify + w.cAnd + w.cConsolidate + w.cString;
export const ccompareSimplifiedAndConsolidatedStrings = w.ccompare + w.cSimplified + w.cAnd + w.cConsolidated + w.cStrings;
export const cdoesArrayContainLowerCaseConsolidatedString = w.cdoes + w.cArray + w.cContain + w.cLower + w.cCase + w.cConsolidated + w.cString;
export const cdoesArrayContainCharacter = w.cdoes + w.cArray + w.cContain + w.cCharacter;
export const cremoveCharacterFromArray = w.cremove + w.cCharacter + w.cFrom + w.cArray;
export const cascertainMatchingFilenames = w.cascertain + w.cMatching + cFilenames;
export const cdoesArrayContainFilename = w.cdoes + w.cArray + w.cContain + cFilename;
export const cgetDataCatagoryFromDataContextName = w.cget + w.cData + w.cCatagory + w.cFrom + w.cData + w.cContext + w.cName;
export const cgetDataCatagoryDetailNameFromDataContextName = w.cget + w.cData + w.cCatagory + w.cDetail + w.cName + w.cFrom + w.cData + w.cContext + w.cName;
export const cgetKeywordNameFromDataContextName = w.cget + w.cKeyword + w.cName + w.cFrom + w.cData + w.cContext + w.cName;
export const cparseSystemRootPath = w.cparse + w.cSystem + w.cRoot + w.cPath;
export const creplaceDoublePercentWithMessage = w.creplace + w.cDouble + w.cPercent + w.cWith + w.cMessage;
export const cremoveXnumberOfFoldersFromEndOfPath = w.cremove + b.cX + w.cnumber + b.cOf + w.cFolders + w.cFrom + w.cEnd + b.cOf + w.cPath;
export const cgetFirstTopLevelFolderFromPath = w.cget + g.cFirst + w.cTop + w.cLevel + w.cFolder + w.cFrom + w.cPath;
export const cisOdd = b.cis + w.cOdd;
export const cisEven = b.cis + w.cEven;
export const creplaceCharacterAtIndex = w.creplace  + w.cCharacter + w.cAt + w.cIndex;

// *********************************
// StringGeneration rules in order
// *********************************
export const cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + b.c1;
export const cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + b.c2;
export const cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + b.c1;
export const cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + b.c2;
export const cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + b.c1;
export const cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + b.c2;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + b.c1;
export const cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + b.c2;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c1;
export const cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c2;
export const cgenerateValidEmail1 = w.cgenerate + cValidEmail + b.c1;
export const cgenerateValidEmail2 = w.cgenerate + cValidEmail + b.c2;
export const cgenerateInvalidEmail1 = w.cgenerate + cInvalidEmail + b.c1;
export const cgenerateInvalidEmail2 = w.cgenerate + cInvalidEmail + b.c2;

// *********************************
// CharacterGeneration rules in order
// *********************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + b.c1;
export const crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + b.c2;
export const crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + b.c1;
export const crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + b.c2;
export const crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + b.c1;
export const crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + b.c2;
export const crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + b.c1;
export const crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + b.c2;
export const crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c1;
export const crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c2;
export const crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + w.cLetter + b.c1;
export const crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + w.cLetter + b.c2;
export const crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + w.cLetter + b.c1;
export const crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + w.cLetter + b.c2;
export const cconvertNumberToUpperCaseLetter = w.cconvert + w.cNumber + w.cTo + cUpperCase + w.cLetter;
export const cconvertNumberToLowerCaseLetter = w.cconvert + w.cNumber + w.cTo + cLowerCase + w.cLetter;

// *********************************
// mathOperations rules in order
// *********************************
export const chex2rgbConversion = p.chex + b.c2 + p.crgb + w.cConversion;

// Commands
export const cSystemCommandsAliasesActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cCommands + w.cBlob + b.cForwardSlash;
export const cSystemWorkflowsActualPath = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cWorkflows + b.cForwardSlash;
export const cSystemCommandsAliasesPath = w.cSystem + w.cCommands + w.cAliases + w.cPath;
export const cClientCommandsAliasesPath = w.cClient + w.cCommands + w.cAliases + w.cPath;
export const cSystemWorkflowsPath = w.cSystem + w.cWorkflows + w.cPath;
export const cClientWorkflowsPath = w.cClient + w.cWorkflows + w.cPath;
// ********************************
// Nominal Commands in order
// ********************************
export const cechoCommand = w.cecho + w.cCommand;
export const cEchoCommand = w.cEcho + w.cCommand;
export const cworkflowHelp = w.cworkflow + w.cHelp;
export const ccommandSequencer = w.ccommand + w.cSequencer;
export const cprintDataHive = w.cprint + w.cData + w.cHive;
export const ccommandGenerator = w.ccommand + w.cGenerator;
export const cbusinessRulesMetrics = w.cbusiness + w.cRules + w.cMetrics;
export const ccommandMetrics = w.ccommand + w.cMetrics;
export const cconvertColors = w.cconvert + w.cColors;

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = w.cWorkflow + b.cSpace + w.cstartup;