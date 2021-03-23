// Deklaration der Konstante "url", welche als Base-URL verwendet wird
const url = "https://myfridge-backend.herokuapp.com/api/"

// Asynchrone Funktion die Daten abruft und dazu einen Endpoint und einen Header entgegen nimmt
async function getData(endpoint = '', headers = {}) {
  // Deklaration der Konstante "response", die die Datenabfrage abwartet
  const response = await fetch(url + endpoint, {
    // Definieren dass Daten abgerufen werden
    method: 'GET',
    
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:  headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });
  return response.json();
}

// Asynchrone Funktion die Daten erstellt und dazu einen Endpoint, die Daten und einen Header entgegen nimmt
async function postData(endpoint = '', data = {}, headers = {}) {
  const response = await fetch(url + endpoint, {
    // Definieren dass Daten erstellt werden
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:  headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json();    
}

// Asynchrone Funktion die Daten aktualisiert und dazu einen Endpoint, die Daten und einen Header entgegen nimmt
async function putData(endpoint = '', data = {}, headers = {}) {
  const response = await fetch(url + endpoint, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:  headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

// Asynchrone Funktion die Daten löscht und dazu einen Endpoint und einen Header entgegen nimmt
async function deleteData(endpoint = '', headers = {}) {
  const response = await fetch(url + endpoint, {
    // Definieren dass Daten gelöscht werden
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers:  headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
    //body: JSON.stringify(data)
  });
  return response.json();
}
