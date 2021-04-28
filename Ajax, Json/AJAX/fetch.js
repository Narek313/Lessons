const requestURL = `https://jsonplaceholder.typicode.com/users`;

// ________________________GET_______________________________


function sendRequest(method, url, body = null) {
    return fetch(url)
    return fetch(url).then(response => {
        return response.json();
    })
}

sendRequest('GET', requestURL)
.then(data => console.log(data))
.catch(err => console.log(err))


// ________________________POST_______________________________

// function sendRequest(method, url, body = null) {

//     const headers = {
//         'Content-Type': 'application/json'
//     } 

//     return fetch(url, {
//         method,
//         body: JSON.stringify(body),
//         headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then(err => {
//             const e = new Error('Something went wrong');
//             e.data = err
//             throw e
//         })
//     })
// }

// const body = {
//     name: 'Narek',
//     age:17
// }

// sendRequest('POST', requestURL, body)
// .then(data => console.log(data))
// .catch(err => console.log(err))
