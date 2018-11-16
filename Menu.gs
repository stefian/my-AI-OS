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

// var logRow = 3;  // Log Row
var logCol = 3;  // Log Column

var cmdRow = 3;  // Command Row Cell
var cmdCol = 2;  // Command Column Cell
var cmdRowPos = 'F1';  // Command Row Position
var cmdColPos = 'H1';  // Command Column Position
var cursorPosition = 'D1';

  // Get Current Tab data
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var tab = ss.getActiveSheet();
  var tabName = tab.getName();
  var lastRow = tab.getLastRow();
  var lastCol = tab.getLastColumn();

function Jobs() {
}

function Skills() {
}

function Ventures() {
}

function CLI() {
  
  var prompt = 'my AI $> ';
  var position = 'B3';
  var nrCliLines = 40;
  
  //var activeCell = tab.getActiveCell();
  //var aRow = activeCell.getRow();
  //var aCol = activeCell.getColumn();
  
  // if (tab.getRange(cursorPosition).getValue() == 'R3C2') {
  // Style the first 2 columns under header as Console
  // tab.getRange(3, 1, nrCliLines, 2).setBackground('black').setFontColor('#40ff50').setFontSize(18).setFontWeight('bold');
  // tab.getRange(3, 1).setValue(prompt);
  // tab.getRange(3, 2).activateAsCurrentCell();
  // }
  
  
  // Read position of the cursor
  cmdRow = tab.getRange(cmdRowPos).getValue();
  // cmdRow = Number(cmdRow);
  cmdCol = tab.getRange(cmdColPos).getValue();
  // cmdCol = Number(cmdCol);
  var cmd = tab.getRange(cmdRow, cmdCol).getValue();
  cmdRow++;
  tab.getRange(cmdRow, cmdCol-1).setValue(prompt);
  tab.getRange(cmdRowPos).setValue(cmdRow);
  tab.getRange(cmdRow, cmdCol).activateAsCurrentCell();
  tab.getRange(cursorPosition).setValue('R' + cmdRow + 'C' + cmdCol);
  log('cmd: ' + cmd);
  
  // var cmds = cmd.split('\n');
  // Logger.log(cmds);og
  
  // Read the last cmd / line
  // var lastCmdIndex = cmd.lastIndexOf('\n') + 1;
  // Logger.log('-- lastCmdIndex: ' + lastCmdIndex);
  // var lastCmd = cmd.slice(lastCmdIndex, cmd.length);
  // Logger.log('-- lastCmd: ' + lastCmd);
  
  
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

function log(value) {
  tab.getRange(cmdRow - 1, logCol).setValue(' -- ' + value);
  // logRow++;
}
