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
          document.getElementById("signup-form").submit();
          alert("Vielen Dank fürs Einloggen!");

          var json = JSON.parse(xhr.responseText);


          localStorage.setItem("global_id", json._id);

          localStorage.setItem("global_token", json.token);

          window.location = "https://zealous-brown-3f1929.netlify.app/MeinBereich.html";
        } else {
        document.getElementById("false-login").innerHTML = "Email oder Passwort ist falsch";
        }
        
     }};
     

}

// ID die von loginForm abgespeichert wird


function name_abfrage() {

  var global_id = localStorage.getItem("global_id");
  var global_token = localStorage.getItem("global_token");
  
  var mein_bereich_name = document.getElementById("mein_bereich_name");

  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
  var url = "https://myfridge-backend.herokuapp.com/api/";
  
  var xhr = new XMLHttpRequest();

    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    getData('user/' + global_id, headers)
    .then(res =>{
        console.log(res);
        document.getElementById("mein_bereich_name").innerHTML = res.vorname;
    });
}

function einstellungen_abfrage() {

  var global_id = localStorage.getItem("global_id");
  var global_token = localStorage.getItem("global_token");

  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
  var url = "https://myfridge-backend.herokuapp.com/api/";
  
  
    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    getData('user/' + global_id, headers)
    .then(res =>{
        console.log(res);
        document.getElementById("evorname").value = res.vorname;
        document.getElementById("enachname").value = res.nachname;
        document.getElementById("eemail").value = res.email;
        document.getElementById("eernaehrungstyp").value = res.ernaehrungstyp;
        document.getElementById("avatar").value = res.profilbild;
    });


}

function deleteUser() {

  var global_id = localStorage.getItem("global_id");
  var global_token = localStorage.getItem("global_token");

  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
  var url = "https://myfridge-backend.herokuapp.com/api/";

    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    deleteData('user/' + global_id, headers)
    .then(res =>{
        console.log(res);
    });


}
function logoutUser(){
  
  var global_token = localStorage.getItem("global_token");
  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
  var url = "https://myfridge-backend.herokuapp.com/api/";
    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    getData('logout', headers)
    .then(res =>{
        console.log(res);
        localStorage.setItem('global_token', '');
        window.location = "https://zealous-brown-3f1929.netlify.app/index.html";
    });
}


function updateUser(){
  var url = "https://myfridge-backend.herokuapp.com/api/";
  var global_id = localStorage.getItem("global_id");
  var global_token = localStorage.getItem("global_token");
  var data = {
    "vorname" : document.getElementById("evorname").value,
    "nachname": document.getElementById("enachname").value,
    "email" : document.getElementById("eemail").value,
    "passwort" : document.getElementById("epasswort").value,
    "ernaehrungstyp": document.getElementById("eernaehrungstyp").value,
    "profilbild": document.getElementById("avatar").value
  };
  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
    putData('user/' + global_id, data, headers)
    .then(res =>{
        console.log(res);
        alert("Deine Daten wurden erfolgreich geändert");
        window.location = "https://zealous-brown-3f1929.netlify.app/MeinBereich.html";
    });
}

function bild_abfrage(bild) {

  var global_id = localStorage.getItem("global_id");
  var global_token = localStorage.getItem("global_token");
  
  var mein_bereich_name = document.getElementById("mein_bereich_name");

  const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('global_token')
    }
  var url = "https://myfridge-backend.herokuapp.com/api/";
  
  var xhr = new XMLHttpRequest();

    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    getData('user/' + global_id, headers)
    .then(res =>{
        console.log(res);
        document.getElementById(bild).src = res.profilbild;
    });
}
