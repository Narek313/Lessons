/* 
__________________JavaScript Window - The Browser Object Model__________________

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

_____The Browser Object Model (BOM)_____

There are no official standards for the Browser Object Model (BOM).

Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

_____The Window Object_____

The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:

window.document.getElementById("header");
is the same as:
document.getElementById("header");


1. window.innerHeight - the inner height of the browser window (in pixels)
2. window.innerWidth - the inner width of the browser window (in pixels)

The browser window (the browser viewport) is NOT including toolbars and scrollbars.

3. window.open() - open a new window
4. window.close() - close the current window
5. window.moveTo() - move the current window
6. window.resizeTo() - resize the current window

__________________JavaScript Window Screen__________________

The window.screen object contains information about the user's screen.

_____Window Screen_____

The window.screen object can be written without the window prefix.

Properties:

1. screen.width
2. screen.height
3. screen.availWidth
4. screen.availHeight
5. screen.colorDepth
6. screen.pixelDepth

(The screen.availWidth and screen.availHeight properties return the width and the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.)

_____

The screen.colorDepth property returns the number of bits used to display one color.

All modern computers use 24 bit or 32 bit hardware for color resolution:

24 bits =      16,777,216 different "True Colors"
32 bits = 4,294,967,296 different "Deep Colors"
Older computers used 16 bits: 65,536 different "High Colors" resolution.

Very old computers, and old cell phones used 8 bits: 256 different "VGA colors".

(The #rrggbb (rgb) values used in HTML represents "True Colors" (16,777,216 different colors))

For modern computers, Color Depth and Pixel Depth are equal.
_____


__________________JavaScript Window Location__________________

The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

_____Window Location_____

The window.location object can be written without the window prefix.

Some examples:

1. window.location.href returns the href (URL) of the current page
2. window.location.hostname returns the domain name of the web host
3. window.location.pathname returns the path and filename of the current page
4. window.location.protocol returns the web protocol used (http: or https:)
5. window.location.assign() loads a new document

(Most browsers will not display default port numbers (80 for http and 443 for https))

__________________JavaScript Window History__________________

The window.history object contains the browsers history.

_____Window History_____

The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

1. history.back() - same as clicking back in the browser
2. history.forward() - same as clicking forward in the browser

__________________JavaScript Window Navigator__________________

The window.navigator object contains information about the visitor's browser.

_____Window Navigator_____

The window.navigator object can be written without the window prefix.

Some examples:

1. navigator.cookieEnabled
2. navigator.appName
3. navigator.appCodeName
4. navigator.product
5. navigator.appVersion
6. navigator.userAgent
7. navigator.platform
8. navigator.language
9. navigator.onLine
10. navigator.javaEnabled()

The cookieEnabled property returns true if cookies are enabled, otherwise false
The appName property returns the application name of the browser

(Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.)

The appCodeName property returns the application code name of the browser

("Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.)

The product property returns the product name of the browser engine

(Do not rely on this. Most browsers returns "Gecko" as product name !!)

The appVersion property returns version information about the browser
The userAgent property returns the user-agent header sent by the browser to the server

(Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser)

The platform property returns the browser platform (operating system)
The language property returns the browser's language
The onLine property returns true if the browser is online
The javaEnabled() method returns true if Java is enabled

__________________JavaScript Popup Boxes__________________

JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

_____Alert Box_____

An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.
The window.alert() method can be written without the window prefix.

alert("sometext");

_____Confirm Box_____

A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
The window.confirm() method can be written without the window prefix.

confirm("sometext");

_____Prompt Box_____

A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
The window.prompt() method can be written without the window prefix.

prompt("sometext","defaultText");

_____Line Breaks_____

To display line breaks inside a popup box, use a back-slash followed by the character n:
alert("Hello\nHow are you?");

__________________JavaScript Timing Events__________________

JavaScript can be executed in time-intervals.
This is called timing events.

_____Timing Events_____

The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

1. window.setTimeout(function, milliseconds)
2. window.clearTimeout(timeoutVariable)
3. window.setInterval(function, milliseconds)
4. window.clearInterval(timerVariable)

__________________JavaScript Cookies__________________

Cookies let you store user information in web pages.

_____What are Cookies?_____

Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.
Next time the user visits the page, the cookie "remembers" his/her name.
Cookies are saved in name-value pairs like:
username = John Doe

When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

_____Create a Cookie with JavaScript_____

JavaScript can create, read, and delete cookies with the document.cookie property.

With JavaScript, a cookie can be created like this:
document.cookie = "username=John Doe";

You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

_____Read a Cookie with JavaScript_____

With JavaScript, cookies can be read like this:
let x = document.cookie;

document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

_____Change a Cookie with JavaScript_____

With JavaScript, you can change a cookie the same way as you create it

_____Delete a Cookie with JavaScript_____

Deleting a cookie is very simple.

You don't have to specify a cookie value when you delete a cookie.

Just set the expires parameter to a passed date:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

You should define the cookie path to ensure that you delete the right cookie.
Some browsers will not let you delete a cookie if you don't specify the path.

*/ 

// Example

// function setCookie(cname, cvalue, exdays) {
//     let d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

//   function checkCookie() {
//     let username = getCookie("username");
//     if (username != "") {
//      alert("Welcome again " + username);
//     } else {
//       username = prompt("Please enter your name:", "");
//       if (username != "" && username != null) {
//         setCookie("username", username, 365);
//       }
//     }
//   }