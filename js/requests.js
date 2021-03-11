const url = "https://myfridge-backend.herokuapp.com/api/"

async function getData(endpoint = '', headers = {}) {
    const response = await fetch(url + endpoint, {
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

async function postData(endpoint = '', data = {}, headers = {}) {
        const response = await fetch(url + endpoint, {
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

async function deleteData(endpoint = '', headers = {}) {
    const response = await fetch(url + endpoint, {
        method: 'DELETE',
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
