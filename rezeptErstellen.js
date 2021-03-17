$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="number" class="form-control" name="Menge' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" value="Stück" name="Einheit'  + counter + '" disabled /></td>';
        cols += '<td><input type="text" class="form-control" name="Zutat' + counter + '" /></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Entfernen"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});



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









$(document).ready(function () {
    var counter = 0;

    $("#addrow2").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="number" class="form-control"  name="Schritt' + counter + '" /></td>';
        cols += '<td><textarea name="Erklaerung' + counter + '" /></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Entfernen"></td>';
        newRow.append(cols);
        $("table.order-list2").append(newRow);
        counter++;
    });



    $("table.order-list2").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
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

//Validation of form
function chkFormular() {
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
  else {
  alert("Vielen Dank! Wir werden dein Rezept nun überprüfen und es dann hochladen. Wir sind gespannt auf dein Rezept!");
  }
}
