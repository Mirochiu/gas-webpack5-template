const sheetName = ''; // if more then one sheet in the spreadsheet

const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
let sheet;
if (sheetName) sheet = spreadsheet.getSheetByName(sheetName);
if (!sheet) sheet = spreadsheet.getActiveSheet();

export default function log(...args) {
  sheet.appendRow(Array.prototype.concat(new Date(), Array.from(args)));
}
