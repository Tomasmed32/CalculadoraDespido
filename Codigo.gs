function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url = "https://docs.google.com/spreadsheets/d/1fpteeMjNeji0sHdy9ItPk_C8yfqXpEFj-L8jIIBjO0Q/edit#gid=1485081134";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Datos persona trabajadora");
  var an = ws.getRange("E12").getValue();

  ws.getRange("B4").setValue(formObject.Fecha_de_ingreso);
  ws.getRange("B5").setValue(formObject.Fecha_de_despido);
  ws.getRange("B6").setValue(formObject.Mejor_sueldo_bruto);
  ws.getRange("B7").setValue(formObject.Preaviso);

  let resultado;
  if (ws.getRange("H11").getValue() >= 25) {
    resultado = ws.getRange("E21").setValue(an + 1);
  } else if (ws.getRange("H11").getValue() <= 24) {
    resultado = ws.getRange("E21").setValue(an + 0);
  }
  return resultado;
}
