/*
AJAX is a developer's dream, because you can:

1. Read data from a web server - after the page has loaded
2. Update a web page without reloading the page
3. Send data to a web server - in the background

AJAX is not a programming language.

AJAX is a technique for accessing web servers from a web page.

AJAX stands for Asynchronous JavaScript And XML.

_________________What is AJAX?_________________

AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)

AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

_________________How AJAX Works_________________

https://www.w3schools.com/js/pic_ajax.gif

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

__________________________________

HTTP = HyperText Transfer Protocol

Status Codes

200 = Success
400 = Client Error
500 = Server Error

__________________________________

The keystone of AJAX is the XMLHttpRequest object.

_________________The XMLHttpRequest Object_________________

All modern browsers support the XMLHttpRequest object.

The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

_________________Create an XMLHttpRequest Object_________________

All modern browsers (Chrome, Firefox, IE7+, Edge, Safari, Opera) have a built-in XMLHttpRequest object.

Syntax for creating an XMLHttpRequest object:

let xhttp = new XMLHttpRequest();

_________________XMLHttpRequest Object Methods_________________

Method - Description

new XMLHttpRequest() - Creates a new XMLHttpRequest object
abort()	- Cancels the current request
getAllResponseHeaders() - Returns header information
getResponseHeader() - Returns specific header information
open(method, url, async, user, psw) - Specifies the request

method: the request type GET or POST
url: the file location
async: true (asynchronous) or false (synchronous)
user: optional user name
psw: optional password

send() - Sends the request to the server
Used for GET requests
send(string) - Sends the request to the server.
Used for POST requests
setRequestHeader() - Adds a label/value pair to the header to be sent

_________________XMLHttpRequest Object Properties_________________

Property - Description

onreadystatechange - Defines a function to be called when the readyState property changes
readyState - Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
responseText - Returns the response data as a string
responseXML - Returns the response data as XML data
status - Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
For a complete list go to the Http Messages Reference
statusText - Returns the status-text (e.g. "OK" or "Not Found")

_________________GET or POST?_________________

GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:

A cached file is not an option (update a file or database on the server).
Sending a large amount of data to the server (POST has no size limitations).
Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
*/ 

const requestURL = `https://jsonplaceholder.typicode.com/users`;

// const xhr = new XMLHttpRequest();
// xhr.open("GET", requestURL);

// // xhr.responseType = 'json'

// xhr.onload = () => {
//     if(xhr.status >= 400) {
//         console.error(xhr.response);
//     } else {
//         console.log(JSON.parse(xhr.response));
//     }
// }

// xhr.onerror = () => {
//     console.log(xhr.response);
// }

// xhr.send()

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(xhr);

        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
    
        xhr.onload = () => {
            if(xhr.status >= 400) {
                console.error(xhr.response);
            } else {
                console.log(JSON.parse(xhr.response));
            }
        };
    
        xhr.onerror = () => {
            console.log(xhr.response);
        };
    
        xhr.send(JSON.stringify(body));
    })
}

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

const body = {
    name: 'Narek',
    age:17
}

sendRequest('POST', requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))