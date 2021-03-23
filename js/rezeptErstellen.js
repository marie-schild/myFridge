// Funktionen, die zur Zutatenliste bei betätigen des "+ Zutat hinzufügen"-Buttons automatisch eine Tabellenzeile hinzufügen und bei betätigen des "Entfernen"-Buttons wieder entfernen. Diese Funktionen werden in abgewandelter Weise auch in den Zeilen 66-114 sowie für die Einkaufsliste in "einkaufsliste.js" verwendet.
$(document).ready(function () {
    var counter = 0;
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

         // Legt die Arten der neu hinzuzufügenden Zeilen der Zutatenliste fest
        cols += '<td><input type="number" id="menge-neu" min="1" max="10" step="0.5" class="form-control" name="Menge' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" value="Stück" name="Einheit'  + counter + '" disabled /></td>';
        cols += '<td><input type="text" id="zutat-neu" class="form-control" name="Zutat' + counter + '" /></td>';

        // Fügt den "Entfernen"-Button der Zeile hinzu
        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Entfernen"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;

        // Deklaration der Variable "count", die aus dem lokalen Speicher gelesen wird
        var count = localStorage.getItem('count');

        // "count" wird hochgezählt
        count++;

        // Überschreibt die ID's der neu erstellten Reihe für die Menge und die Zutat  
        document.getElementById("menge-neu").id = "menge-" + count;
        document.getElementById("zutat-neu").id = "zutat-" + count;

        // Hochgezählte "count"-Variable wird in lokalem Speicher gespeichert
        localStorage.setItem('count', count);
    });
    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1

        // Deklaration der Variable "count", die aus dem lokalen Speicher gelesen wird
        var count = localStorage.getItem('count');
        
        // "count" wird um 1 reduziert
        count -= 1;

        // Runtergezählte "count"-Variable wird in lokalem Speicher gespeichert
        localStorage.setItem('count', count);
    });
});

// Funktion, die den lokalen Counter setzt
function setCounter(){
  localStorage.setItem('count', 0);
  localStorage.setItem('countstep', 0);
}

// Funktion zur Berechnung der neu angelegten Zeile der Zutatenliste
function calculateRow(row) {
  var price = +row.find('input[name^="price"]').val();
}

function calculateGrandTotal() {
  var grandTotal = 0;
  $("table.order-list").find('input[name^="price"]').each(function () {
      grandTotal += +$(this).val();
  });
  $("#grandtotal").text(grandTotal.toFixed(2));
}


// Funktionen, die zur Rezeptschrittetabelle bei betätigen des "+ Schritt hinzufügen"-Buttons automatisch eine Tabellenzeile hinzufügen und bei betätigen des "Entfernen"-Buttons wieder entfernen. Für die genaue Beschreibung der einzelnen Funktionen siehe Zeile 1-64.
$(document).ready(function () {
    var counter = 0;

    $("#addrow2").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="number" id="schritt-neu" min="1" max="15" step="1" class="form-control"  name="Schritt' + counter + '" /></td>';
        cols += '<td><textarea id="schritt-beschreibung-neu" name="Erklaerung' + counter + '" /></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Entfernen"></td>';
        newRow.append(cols);
        $("table.order-list2").append(newRow);
        counter++;

        var countstep = localStorage.getItem('countstep');
        countstep++;
        document.getElementById("schritt-neu").id = "schritt-" + countstep;
        document.getElementById("schritt-beschreibung-neu").id = "schritt-beschreibung-" + countstep;
        localStorage.setItem('countstep', countstep);
    });



    $("table.order-list2").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1

        var countstep = localStorage.getItem('countstep');
        countstep -= 1;
        localStorage.setItem('countstep', countstep);
    });


});

function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list2").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}


// Funktion, die das Formular zur Rezepteerstellung auf Vollständigkeit überprüft. Bei fehlenden Eingaben wird der Benutzer auf die fehlenden Fehler hingewiesen. Nach vollständigem Ausfüllen wird der Benutzer über das Abschicken seines Rezeptes über ein Pop-Up Fenster im Browser informiert.
function chkFormular() {
 // Falls der Titel des Rezeptes noch nicht ausgefüllt wurde (also leer ist), wird der Nutzer durch einen Zoom-Effekt darauf aufmerksam gemacht und kann den Titel direkt bearbeiten. Für die anderen Felder geschieht dies analog.
 if(document.Recipe.Titel.value == "")  {
   document.Recipe.Name.focus();
   return false;
  }
 if(document.Recipe.Beschreibung.value == "") {
   document.Recipe.Beschreibung.focus();
   return false;
  }
  if(document.Recipe.Beschreibung.value == "") {
   document.Recipe.Beschreibung.focus();
   return false;
  }
  if(document.Recipe.Menge.value == "") {
   document.Recipe.Menge.focus();
   return false;
  }
  if(document.Recipe.Zutat.value == "") {
   document.Recipe.Zutat.focus();
   return false;
  }
  if(document.Recipe.Schritt.value == "") {
   document.Recipe.Schritt.focus();
   return false;
  }
  if(document.Recipe.Erklaerung.value == "") {
   document.Recipe.Erklaerung.focus();
   return false;
  }
  // Falls alle Angaben erfolgreich gemacht wurden, wird der Nutzer durch ein Pop-Up Fenster darauf aufmerksam gemacht.
  else {
  alert("Vielen Dank! Wir werden dein Rezept nun überprüfen und es dann hochladen. Wir sind gespannt auf dein Rezept!");
  }
}
