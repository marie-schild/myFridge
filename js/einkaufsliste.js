// Funktionen, die zur Einkaufsliste bei betätigen des "+ Produkt hinzufügen"-Buttons automatisch eine Tabellenzeile hinzufügen und bei betätigen des "Entfernen"-Buttons in Form einer Mülltonne wieder entfernen.
$(document).ready(function () {
    var counter = 0;
    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        // Legt die Arten der neu hinzuzufügenden Zeilen der Einkaufsliste fest
        cols += '<td><input type="checkbox"  id="confirmneu" name="confirm" /><label id = "checkitemneu" for="confirm2"></label></td>';
        cols += '<td><input type="number" min="1" max="10" step="0.5" class="form-control" placeholder="Stück" name="Stück' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" placeholder="Produkt" name="Produkt' + counter + '" /></td>';

        // Fügt den "Entfernen"-Button in Form einer Mülltonne (Bild) der Zeile hinzu
        cols += '<td><input type="image" width="auto" height="72" alt="Muelltonne" src="/Bilder/muell.png" class="ibtnDel btn btn-md btn-danger" value=""></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
        

        // Variable "countshoppinglist" wird erstellt und bekommt den Wert der Anzahl der Shoppinglist-Items aus dem lokalen Speicher zugewiesen
        var countshoppinglist = localStorage.getItem('countshoppinglist');
        // Anzahl der countShoppingListItems wird um 1 hochgezählt
        countshoppinglist++;
        // Id der Listen Elemente wird der Wert confirm + der Anzahl der ShoppingListItems zugewiesen
        document.getElementById("confirmneu").id = "confirm"+countshoppinglist;
        

        // for der Listen Elemente wird der Wert confirm und der Anzahl der ShoppingListItems zugewiesen
        document.getElementById("checkitemneu").id ="checkitem"+countshoppinglist;
        document.getElementById("checkitem"+countshoppinglist).htmlFor = "confirm"+countshoppinglist; 
        // Im lokalen Speicher wird Anzahl der ShoppingListItems aktualisiert
        localStorage.setItem('countshoppinglist',countshoppinglist);
    });
    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });
});

// Funktion zur Erstellung eines Counters, um die Shopping-List-Items zu zählen
function countShoppingListItems(){
  localStorage.setItem('countshoppinglist',1)
  
}

// Funktion zur Berechnung der neu angelegten Zeile der Einkaufsliste
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

// Funktion, die beim betätigen des "Einkauf beenden"-Buttons ein Pop-Up Fenster im Browser auslöst.
function  einkauf() {
  alert("Wir hoffen, du hattest einen entspannten Einkauf und konntest alles besorgen. Deine Einkaufsliste wird jetzt gelöscht!");
}
