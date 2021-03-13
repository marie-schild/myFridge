function sendForm() {

var vorname = document.getElementById("vorname");
// let vorname = document.querySelector('#vorname');

var nachname = document.getElementById("nachname");
// let nachname = document.querySelector('#nachname');

var email = document.getElementById("email");
// let email = document.querySelector('#email');

var passwort = document.getElementById("passwort");

var url = "https://myfridge-backend.herokuapp.com/api/registration";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = JSON.stringify({
  "vorname" : vorname.value,
  "nachname": nachname.value,
  "email" : email.value,
  "passwort" : passwort.value,
  "ernaehrungstyp": ernaehrungstyp.value
});

xhr.send(data);

if (xhr.status === 200) {
  alert("Sie haben sich als"+ vorname.value + " " + nachname.value + "registriert. Sie können sich nun einloggen");
}

document.write(xhr + xhr.status);

}




function loginForm() {
  
  var email1 = document.getElementById("email1");
  // let email = document.querySelector('#email');
  
  var passwort1 = document.getElementById("passwort1");
  
  var url = "https://myfridge-backend.herokuapp.com/api/login";
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  
  xhr.setRequestHeader("Content-Type", "application/json");
    
    
  var data = JSON.stringify({
    "email" : email1.value,
    "passwort" : passwort1.value
  });
  
  xhr.send(data);
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status === 200) {
          alert("Vielen Dank fürs Einloggen!");
          window.location = "https://Kuhlschrankverwaltung.chrisfitzer.repl.co/MeinBereich.html";
        } else {
          var false_l = document.getElementById("false-login");

          false_l.innerHTML("Email oder Passwort ist falsch");
          alert("Falsch angemeldet");
        }
     }};

}
