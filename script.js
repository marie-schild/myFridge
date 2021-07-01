// Funktion zum Erstellen eines Users auf der Registrierungs Seite
function sendForm(){

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";

  // Deklaration der Variable "data", welche die erforderlichen Parameter der API, die vom Benutzer fesgelegten Werte, aus dem Formular speichert 
  var data = {
    "vorname" : document.getElementById("vorname").value,
    "nachname": document.getElementById("nachname").value,
    "email" : document.getElementById("email").value,
    "passwort" : document.getElementById("passwort").value,
    "ernaehrungstyp": document.getElementById("ernaehrungstyp").value,
    // Standard Profilbild, dass immer vorausgefüllt wird
    "profilbild": "/Bilder/avatare/Standard.png"
  };

  // Deklaration der Konstante "headers", die das Datenformat festlegt, welches im Backend als JSON verarbeitet wird
  const headers = {
    'Content-Type': 'application/json',
  }

  // Die Funktion postData wird aufgerufen und die Variablen "data" und "header" sowie der Endpoint "registration" werden übergeben 
  postData('registration', data, headers)
  
  // Erhalten eines Responses "res"
  .then(res =>{
    
    // Response "res" wird in Konsole geschrieben
    console.log(res);
    
    // Wenn der eindeutige Identifier "email" aus der Response mit der Email aus dem Formular übereinstimmt:
    if (res.email === document.getElementById("email").value){
      alert("Sie haben sich als "+ vorname.value + " " + nachname.value + " registriert. Sie können sich nun einloggen");
      
      // Weiterleitung auf Startseite
      window.location = "https://zealous-brown-3f1929.netlify.app/index.html";
    } else {
      alert("Die Email wurde bereits verwendet");

      // Neu laden der Registrierungs Seite
      window.location = "https://zealous-brown-3f1929.netlify.app/registrierung.html";
    }
  });
}

// Funktion zum Einloggen
function loginForm() {
  
  // Deklaration der Variable "email1", welche die Email abfragt
  var email1 = document.getElementById("email1");
  
  // Deklaration der Variable "passwort1", welche das Passwort abfragt
  var passwort1 = document.getElementById("passwort1");
  
  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/login";
  
  // Deklaration der Variable "xhr", welche eine Verbindung zur API erstellt
  var xhr = new XMLHttpRequest();

  // Öffnet Verbindung zu API
  xhr.open("POST", url);
  
  // Legt das Datenformat fest, welches im Backend als JSON verarbeitet wird
  xhr.setRequestHeader("Content-Type", "application/json");

  // Deklaration der Variable "data", welche die erforderlichen Parameter der API, die vom Benutzer fesgelegten Werte, aus dem Formular speichert und in Strings umwandelt
  var data = JSON.stringify({
    "email" : email1.value,
    "passwort" : passwort1.value
  });
  
  // Sendet die Daten
  xhr.send(data);
  
  // Prüfung ob der Datentransfer erfolgreich abgeschlossen wurde
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // console.log(xhr.status);
      // console.log(xhr.responseText);

      // Wenn User/Email in Datenbank gefunden wurde:
      if (xhr.status === 200) {
        // Nutzer wird eingeloggt
        document.getElementById("signup-form").submit();
        alert("Vielen Dank fürs Einloggen!");

        // Speicherung des Response in einer Variable im JSON Format
        var json = JSON.parse(xhr.responseText);

        // Speicherung der "global_id" im lokalen Speicher
        localStorage.setItem("global_id", json._id);

        // Speicherung des "global_token" im lokalen Speicher
        localStorage.setItem("global_token", json.token);

        // Weiterleitung zu MeinBereich Seite
        window.location = "https://zealous-brown-3f1929.netlify.app/MeinBereich.html";
      } else {

      // Wenn User/Email nicht in Datenbank gefunden oder Passwort falsch dann Fehlermeldung
      document.getElementById("false-login").innerHTML = "Email oder Passwort ist falsch";
      } 
    }};
}

// Funktion um Namen auf MeinBereich Seite anzuzeigen
function name_abfrage() {

  // Abrufen der "global_id" aus dem lokalen Speicher
  var global_id = localStorage.getItem("global_id");

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");
  
  // Deklaration der Variable "mein_bereich_name"
  var mein_bereich_name = document.getElementById("mein_bereich_name");

  // Deklaration der Konstante "headers"
  const headers = {
        // Legt Datenformat JSON fest
        'Content-Type': 'application/json',

        // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";
  
  // Deklaration der Variable "xhr", welche eine Verbindung zur API erstellt
  var xhr = new XMLHttpRequest();

    // Die Funktion getData wird aufgerufen und die Variablen "global_id" und "headers" sowie der Endpoint "user/" werden übergeben 
    getData('user/' + global_id, headers)
    // Erhalten eines Responses "res"
    .then(res =>{
        console.log(res);
        // Schreiben des zurückgelieferten Vornamens aus dem Response in die Seite
        document.getElementById("mein_bereich_name").innerHTML = res.vorname;
    });
}

// Funktion zur Abfrage der User Daten
function einstellungen_abfrage() {

  // Abrufen der "global_id" aus dem lokalen Speicher
  var global_id = localStorage.getItem("global_id");

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");

  // Deklaration der Konstante "headers"
  const headers = {
    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',

    // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
    'Authorization': 'Bearer ' + localStorage.getItem('global_token')
  }

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";
  
  // Die Funktion getData wird aufgerufen und die Variablen "global_id" und "headers" sowie der Endpoint "user/" werden übergeben 
  getData('user/' + global_id, headers)
  // Erhalten eines Responses "res"
  .then(res =>{
    console.log(res);

    // Ausfüllen der Felder mit den Daten aus dem Response
    document.getElementById("evorname").value = res.vorname;
    document.getElementById("enachname").value = res.nachname;
    document.getElementById("eemail").value = res.email;
    document.getElementById("eernaehrungstyp").value = res.ernaehrungstyp;
    document.getElementById("avatar").value = res.profilbild;
  });
}

// Funktion um User zu löschen
function deleteUser() {

   // Abrufen der "global_id" aus dem lokalen Speicher
  var global_id = localStorage.getItem("global_id");

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");

  // Deklaration der Konstante "headers"
  const headers = {
    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',

    // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
    'Authorization': 'Bearer ' + localStorage.getItem('global_token')
  }

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";

  // Die Funktion deleteData wird aufgerufen und die Variablen "global_id" und "headers" sowie der Endpoint "user/" werden übergeben 
  deleteData('user/' + global_id, headers)
  // Erhalten eines Responses "res"
  .then(res =>{
    console.log(res);
    // Weiterleitung auf die Startseite
    window.location = "https://zealous-brown-3f1929.netlify.app/index.html";
  });
}

// Funktion um User auszuloggen
function logoutUser(){

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");

  // Deklaration der Konstante "headers"
  const headers = {
    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',

    // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
    'Authorization': 'Bearer ' + localStorage.getItem('global_token')
  }

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";
    
    // Die Funktion getData wird aufgerufen und die Variable "headers" sowie der Endpoint "logout" werden übergeben 
    getData('logout', headers)
    // Erhalten eines Responses "res"
    .then(res =>{
        console.log(res);

        // Wert des "global_token" im lokalen Speicher wird geleert
        localStorage.setItem('global_token', '');

        // Weiterleitung auf die Startseite
        window.location = "https://zealous-brown-3f1929.netlify.app/index.html";
    });
}

// Funktion um Daten des User zu aktualisieren
function updateUser(){

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";

  // Abrufen der "global_id" aus dem lokalen Speicher
  var global_id = localStorage.getItem("global_id");

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");

  // Deklaration der Variable "data", welche die erforderlichen übergebenen Parameter der API, zum Aktualisieren aus dem Formular speichert 
  var data = {
    "vorname" : document.getElementById("evorname").value,
    "nachname": document.getElementById("enachname").value,
    "email" : document.getElementById("eemail").value,
    "passwort" : document.getElementById("epasswort").value,
    "ernaehrungstyp": document.getElementById("eernaehrungstyp").value,

    // Wert wird aus Auswahl des Profilbilds festgelegt
    "profilbild": document.getElementById("avatar").value
  };

  // Deklaration der Konstante "headers"
  const headers = {
    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',
  
    // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
    'Authorization': 'Bearer ' + localStorage.getItem('global_token')
  }

  // Die Funktion putData wird aufgerufen und die Variablen "global_id", "data" und "headers" sowie der Endpoint "user/" werden übergeben 
  putData('user/' + global_id, data, headers)
  // Erhalten eines Responses "res"
  .then(res =>{
    console.log(res);
    alert("Deine Daten wurden erfolgreich geändert");

    // Weiterleitung auf MeinBereich
    window.location = "https://zealous-brown-3f1929.netlify.app/MeinBereich.html";
  });
}

// Funktion zum Abrufen des Profilbilds/Avatar mit Übergabe der jeweiligen ID des abgefragten Bildes
function bild_abfrage(bild) {

  // Abrufen der "global_id" aus dem lokalen Speicher
  var global_id = localStorage.getItem("global_id");

  // Abrufen des "global_token" aus dem lokalen Speicher
  var global_token = localStorage.getItem("global_token");
  
  // Deklaration der Konstante "headers"
  const headers = {
    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',
    
    // Legt den Token "global_token" von dem Login fest (Wichtig da man nach 30min automatisch abgemeldet wird)
    'Authorization': 'Bearer ' + localStorage.getItem('global_token')
  }

  // Deklaration der Variable "url", welche als Base-URL verwendet wird
  var url = "https://famlist-backend.herokuapp.com/api/";
  
  // Die Funktion getData wird aufgerufen und die Variablen "global_id" und "headers" sowie der Endpoint "user/" werden übergeben 
  getData('user/' + global_id, headers)
  // Erhalten eines Responses "res"
  .then(res =>{
    console.log(res);

    // Die Ressource der abgefragten Bild ID wird zu dem Response an der Stelle Profilbild (hinterlegte URL ist Dateipfad unserer Standard Bilder)
    document.getElementById(bild).src = res.profilbild;
  });
}

// Funktion zur Abfrage der hinterlegten Rezepte
function rezept_abfrage() {

  // Deklaration der Konstante "headers"
  const headers = {

    // Legt Datenformat JSON fest
    'Content-Type': 'application/json',
  }
  
  // Deklaration der Variable "xhr", welche eine Verbindung zur API erstellt
  var xhr = new XMLHttpRequest();

  // Die Funktion getData wird aufgerufen und die Variable "headers" sowie der Endpoint "recipes" werden übergeben 
  getData('recipes', headers)
  // Erhalten eines Responses "res"
  .then(res =>{
      // console.log(res);

      // Für jedes Rezept an der Stelle i des Response wird der Name, der Schwierigkeitsgrad, ... in die Übersicht geschrieben
      for(var i = 0; i < res.length; i++){
          console.log(res[i].name);
          console.log(res[i].schwierigkeitsgrad);
          console.log(res[i].zubereitungszeit);
          console.log(res[i].beschreibung);
          console.log(res[i].bild);

          document.getElementById("rezept-title-"+i).innerHTML = res[i].name;
          document.getElementById("rezept-bild-"+i).src = res[i].bild; 
          document.getElementById("rezept-text-"+i).innerHTML = res[i].beschreibung;
          document.getElementById("rezept-schwierigkeit-"+i).innerHTML = res[i].schwierigkeitsgrad;
          document.getElementById("rezept-zubereitungszeit-"+i).innerHTML = res[i].zubereitungszeit;
      } 
  });
}
