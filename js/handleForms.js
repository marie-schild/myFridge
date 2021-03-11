let user = {};

function updateSubmit(e) {
    //Verhindert das automatische Abschicken des Default Formulars
    e.preventDefault();

    //Daten des Forms als Object mappen
    const formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => data[key] = value);

    //Header der Anfrage
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    
    //Anfrage durchführen
    //-> Weitere Verarbeitung nach then
    putData('user/' + user._id, data, headers)
    .then(res =>{
        console.log(res);
    });
}

function loginSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => data[key] = value);

    const headers = {
        "Content-Type": "application/json"
    }

    postData('login', data, headers)
    .then(res =>{
        localStorage.setItem('token', res.token);
        user = res;
    });
}

function registerSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => data[key] = value);

    const headers = {
        "Content-Type": "application/json"
    }

    postData('registration', data, headers)
    .then(res =>{
        localStorage.setItem('token', res.token);
        user = res;
    });
}

function signoutSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => data[key] = value);

    const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }

    getData('logout', headers)
    .then(res =>{
        localStorage.setItem('token', '');
    });
}
