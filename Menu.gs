function onOpen(e) {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('my AI')
      .addItem('my Jobs','Jobs')
      .addItem('my Skills','Skills')
      .addItem('my Ventures','Ventures')
      .addItem('Command Line','CLI')
      .addItem('AI Help', 'w3aiHelp')
      .addItem('AI Setup', 'setupAI')
      .addToUi();
}

function Jobs() {
}

function Skills() {
}

function Ventures() {
}

function CLI() {
  
  var prompt = 'my AI $> ';
  var position = 'B4';
  var nrCliLines = 50;
  // Get Current Tab data
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab = ss.getActiveSheet();
  var tabName = tab.getName();
  var lastRow = tab.getLastRow();
  var lastCol = tab.getLastColumn();
  
  // Style the first 2 columns under header as Console
  tab.getRange(4, 1, nrCliLines, 2).setBackground('black').setFontColor('#40ff50').setFontSize(18).setFontWeight('bold');
  tab.getRange(4, 1).setValue(prompt);
  tab.getRange(4, 2).activateAsCurrentCell();
}

function w3aiHelp() {
   var html = HtmlService.createHtmlOutputFromFile('w3aiHelp')
  .setTitle('W3AI.net Help')
      .setWidth(550);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);

}

function setupAI() {
}
