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
/*
// liefert das erste Element zurück mit der Klasse "result"
var result = document.querySelector("result");

var vorname = document.getElementById("vorname");
// let vorname = document.querySelector('#vorname');

var nachname = document.getElementById("nachname");
// let nachname = document.querySelector('#nachname');

var email = document.getElementById("email");
// let email = document.querySelector('#email');

var passwort = document.getElementById("passwort");
// let passwort = document.querySelector('#passwort');

// Creating a XHR object 
var xhr = new XMLHttpRequest();
var url = "https://myfridge-backend.herokuapp.com/api/registration";

// open a connection
xhr.open("POST", url, true);

// Set the request header i.e. which type of content you are sending 
xhr.setRequestHeader("Content-Type", "application/json");

// Create a state change callback 
xhr.onreadystatechange = function () { 
  if (xhr.readyState === 400 && xhr.status === 200) { 
        // Print received data from server 
        result.innerHTML = xhr.responseText;       
    } 
}; 

// JSON data
var data = { 
  "vorname": vorname.value, 
  "nachname": nachname.value, 
  "email": email.value,
  "passwort": passwort.value }; 


var data = { 
  vorname: vorname.value, 
  nachname: nachname.value, 
  email: email.value,
  passwort: passwort.value };


// Sending data with the request 
//var json = JSON.stringify(data);
xhr.send(data);

//result.innerHTML


// Erster Versuch:
//  var vorname = document.getElementById("vorname");
//  var nachname = document.getElementById("nachname");
//  var passwort = document.getElementById("passwort");
//  var email = document.getElementById("email");

}

//$(document).ready(function () {
//  $('#loginModal').modal('show');
//  $(function () {
//    $('[data-toggle="tooltip"]').tooltip()
//  })
//});
*/

function loginForm() {
  
  var email1 = document.getElementById("email1");
  // let email = document.querySelector('#email');
  
  var passwort1 = document.getElementById("passwort1");
  
  var url = "https://myfridge-backend.herokuapp.com/api/login";
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
     }};
  
  var data = JSON.stringify({
    "email" : email1.value,
    "passwort" : passwort1.value
});
  
  xhr.send(data);
  
  if (xhr.status === 200) {
    alert("Sie haben sich als"+ vorname.value + " " + nachname.value + "registriert. Sie können sich nun einloggen");
  }

  document.write(data + xhr + xhr.status);
  
  }
