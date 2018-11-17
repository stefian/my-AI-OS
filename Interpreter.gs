function interpreter(cmd) {
  
  var args = cmd.split(' ');
  Logger.log(args);
  Logger.log(args[1]);
  
  var command = args[0];
  var argsNo = args.length;
  
  // Check in the registry if the command exists
  var registry = SpreadsheetApp.openById('1vJBOYyN_pNnzwXRTlSibHsV0OQpv2YttRrt3TDvINWc');
  var services = registry.getSheetByName('Services');
  
  var regSize = services.getLastRow();
  var entrySize = services.getLastColumn();
  var headerRows = 2;  // 2 Header Rows in the registry spreadsheet 
      
  // Check all command rows
  for (var i = 1 + headerRows; i <= regSize; i++) {
    
    var regEntry = services.getRange(i, 1, 1, entrySize).getValues();
    Logger.log(regEntry);
    Logger.log(args[0]);
    Logger.log(regEntry[0][1]);
    Logger.log(argsNo);
    Logger.log(regEntry[0][2]);
    
    if ( (args[0] == regEntry[0][1]) && ( argsNo == regEntry[0][2]) ) {
    
      var execString = regEntry[0][3] + args[1] + regEntry[0][4];
      Logger.log(execString);
      
      eval(execString);
      
    }
    
  }
  
}
