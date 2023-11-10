/* Window in Javascript:
    - window is the global object in client-side JavaScript,
    - represents the browser window that contains the DOM document
    - window object is also the global scope, which means that any variable declared in the global scope is a property of the window object
    - window object has a self-referential property window, which can be used to refer to the window object itself
    - window object is also the top level object in the Document Object Model (DOM)
    - window object is supported by all browsers
*/

/* Window Object Methods:
    - alert(): displays an alert box with a message and an OK button
    - blur(): removes focus from the current window
    - clearInterval(): clears a timer set with setInterval()
    - clearTimeout(): clears a timer set with setTimeout()
    - close(): closes the current window
    - confirm(): displays a dialog box with a message and an OK and a Cancel button
    - createPopup(): creates a pop-up window
    - focus(): sets focus to the current window
    - moveBy(): moves a window relative to its current position
    - moveTo(): moves a window to the specified position
    - open(): opens a new browser window
    - print(): prints the content of the current window
    - prompt(): displays a dialog box that prompts the visitor for input
    - resizeBy(): resizes the window by the specified pixels
    - resizeTo(): resizes the window to the specified width and height
    - scrollBy(): scrolls the content by the specified number of pixels
    - scrollTo(): scrolls the content to the specified coordinates
    - setInterval(): calls a function or evaluates an expression at specified intervals (in milliseconds)
    - setTimeout(): calls a function or evaluates an expression after a specified number of milliseconds
    - stop(): stops the window from loading
*/

// Open wait 4 seconds and close
// var myWindow = window.open("https://youtube.com");
// myWindow.close();

/* Window Object Properties:
    - closed: returns a boolean value indicating whether the window has been closed or not
    - defaultStatus: sets or returns the default text in the statusbar of a window
    - document: returns the Document object for the window
    - frames: returns an array-like object representing all the child windows of the window
    - history: returns the History object for the window
    - innerHeight: returns the inner height of a window's content area
    - innerWidth: returns the inner width of a window's content area
    - length: returns the number of frames (including the parent window) in the window
    - location: returns the Location object for the window
    - name: sets or returns the name of a window
    - navigator: returns the Navigator object for the window
    - opener: returns a reference to the window that created the window
    - outerHeight: returns the outer height of a window, including toolbars/scrollbars
    - outerWidth: returns the outer width of a window, including toolbars/scrollbars
    - pageXOffset: returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
    - pageYOffset: returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
    - parent: returns the parent window of the current window
    - screen: returns the Screen object for the window
    - screenLeft: returns the horizontal coordinate of the window relative to the screen
    - screenTop: returns the vertical coordinate of the window relative to the screen
    - screenX: returns the horizontal coordinate of the window relative to the screen
    - screenY: returns the vertical coordinate of the window relative to the screen
    - self: returns an object reference to the window
    - status: sets or returns the text in the statusbar of a window
    - top: returns the topmost browser window
    - scrollX: is an alias of pageXOffset
    - scrollY: is an alias of pageYOffset
*/


// screen
let testH2 = document.getElementById("idTestLine");
testH2.innerHTML = "screen.width: " + screen.width + " screen.height: " + screen.height;

const screenTest = window.screen;
console.log("🚀 ~ file: midbasics.js:73 ~ screenTest:", screenTest);
console.log("🚀 ~ file: midbasics.js:74 ~ screenTest.availWidth:", screenTest.availWidth);

// screenLeft
const screenLeftTest = window.screenLeft;
console.log("🚀 ~ file: midbasics.js:78 ~ screenLeftTest:", screenLeftTest);

// location
const locationTest = window.location;
console.log("🚀 ~ file: midbasics.js:80 ~ locationTest:", locationTest);

// scrollX
const scrollXTest = window.scrollX;
console.log("🚀 ~ file: midbasics.js:83 ~ scrollXTest:", scrollXTest);

// scrollY
const scrollYTest = window.scrollY;
console.log("🚀 ~ file: midbasics.js:86 ~ scrollYTest:", scrollYTest);

// scroll
const scrollTest = window.scroll(0, 100);
console.log("🚀 ~ file: midbasics.js:89 ~ scrollTest:", scrollTest);

/* window.location.* :
    - window.location.href: returns the href (URL) of the current page
    - window.location.hostname: returns the domain name of the web host
    - window.location.pathname: returns the path and filename of the current page
    - window.location.protocol: returns the web protocol used (http: or https:)
    - window.location.assign(): loads a new document
    - window.location.replace(): replaces the current document with a new one
    - window.location.reload(): reloads the current document
*/

// window.location.href
const locationHrefTest = window.location.href;
console.log("🚀 ~ file: midbasics.js:102 ~ locationHrefTest:", locationHrefTest);

// window.location.hostname
const locationHostnameTest = window.location.hostname;
console.log("🚀 ~ file: midbasics.js:105 ~ locationHostnameTest:", locationHostnameTest);

// window.location.pathname
const locationPathnameTest = window.location.pathname;
console.log("🚀 ~ file: midbasics.js:108 ~ locationPathnameTest:", locationPathnameTest);

// window.location.protocol
const locationProtocolTest = window.location.protocol;
console.log("🚀 ~ file: midbasics.js:111 ~ locationProtocolTest:", locationProtocolTest);

// window.location.assign()
/* const locationAssignTest = window.location.assign("https://www.youtube.com");
console.log("🚀 ~ file: midbasics.js:114 ~ locationAssignTest:", locationAssignTest); */
