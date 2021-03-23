// Funktion, um neues Rezept an die Datenbank zu schicken
function sendRezept() {
  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://myfridge-backend.herokuapp.com/api/";
  
  // Auslesen und erstellen der Variable "zutaten" für die Anzahl der Zutaten
  var zutaten = localStorage.getItem('count');
  
  // Auslesen und erstellen der Variable "rezeptschritte" für die Anzahl der Rezeptschritte
  var rezeptschritte = localStorage.getItem('countstep');
  
  // Erstellen des Array "zutatenliste", welche "zutaten" lang ist
  var zutatenliste = [zutaten];

  // Schleife: Solange "i" kleiner/gleich "zutaten" ist wird "zutat-objekt" erstellt
  for (i = 0; i <= zutaten; i++){
    
    // Erstellen des String "zutat_objekt" 
    // "zutat_objekt" enthält "produktmenge" und "produktname", welche ausgelesen werden, sowie "einheit", welche als Stück festgelegt wird
    var zutat_objekt = {
      "produktmenge": document.getElementById("menge-"+i).value,
      "einheit": "Stück",
      "produktname": document.getElementById("zutat-"+i).value
    }
    // Dem Array "zutatenliste" wird an der Stelle i ein "zutaten_objekt" hinzugefügt
    zutatenliste[i] = zutat_objekt;
  }

  //Erstellen eines JSON Objektes "zubereitung"
  var zubereitung = {}

  // Erstellen eines Arrays "zubereitung_list", welches keine feste Länge hat
  var zubereitung_list = [];

  // Schleife: Solange "i" kleiner/gleich "rezeptschritte" ist wird "newSchrittNummer" und "newSchrittBeschreibung" zu "zubereitung_list" hinzugefügt
  for(i = 0; i <= rezeptschritte; i++){
    var newSchrittNummer = "" + parseInt(i+1);
    var newSchrittBeschreibung = document.getElementById("schritt-beschreibung-"+i).value;
    // Zubereitung an der Stelle "newSchrittNummer" wird der Wert "newSchrittBeschreibung" zugewiesen
    zubereitung[newSchrittNummer] = newSchrittBeschreibung;
  }
  // Dem Array zubereitung_list wird der neue Zubereitungsschritt hinzugefügt
  zubereitung_list.push(zubereitung);


// Erstellen der Variable data, welche die Werte "name", "beschreibung", "kategorien", "zubereitungszeit", "schwierigkeitgrad", "zubereitung", "zutaten" enthält, welche ausgelesen werden und "bild", "mahlzeit", "bewertung", welche einen leeren String zugewiesen bekommen
  var data = {
    "name" : document.getElementById("titel").value,
    "beschreibung": document.getElementById("beschreibung").value,
    "kategorien" : document.getElementById("ernaehrungstyp").value,
    "zubereitungszeit" : document.getElementById("zeit").value,
    "schwierigkeitsgrad": document.getElementById("schwierigkeit").value,
    "bild": "",
    "mahlzeit": "",
    "bewertung": "",
    "zubereitung": zubereitung_list,
    "zutaten": zutatenliste
  };

  // Deklaration der Konstante "headers"
  const headers = {

    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',
  }
  // Die Funktion postData wird aufgerufen und die Variablen "data" und "headers" sowie der Endpoint "recipe" werden übergeben 
  postData('recipe', data, headers)
  // Erhalten eines Responses "res"
  .then(res =>{
    // res wird in Konsole geschrieben
    console.log(res);
  });
}
