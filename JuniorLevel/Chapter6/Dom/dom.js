/* DOM - Extended Concepts:
    - DOM Traversal --> 3 methods: parentNode, childNodes, firstChild
    - DOM Manipulation --> 4 methods: createElement, createTextNode, appendChild, removeChild
    - DOM Events --> 3 methods: addEventListener, removeEventListener, dispatchEvent
    - DOM Performance --> 1 method: getElementById
    - DOM Style --> 1 method: getComputedStyle
    - DOM Attributes --> 2 methods: getAttribute, setAttribute
    - DOM Navigation --> 2 methods: querySelector, querySelectorAll
    - DOM Range --> 1 method: createRange
    - DOM Mutation --> 1 method: observe
    - DOM Storage --> 2 methods: sessionStorage, localStorage
    - DOM History --> 2 methods: history, location
    - DOM Geolocation --> 1 method: navigator
    - DOM Forms --> 1 method: form
    - DOM Console --> 1 method: console
    - DOM Timers --> 1 method: setTimeout
    - DOM Animation --> 1 method: requestAnimationFrame
    - DOM Web Workers --> 1 method: worker
    - DOM Fetch --> 1 method: fetch
*/

/* DOM - Nodes
    - Node Types:
        - Element Node --> HTML tags like <p>, <div>, <ul>, <li>, <a>, <img>, <input>
        - Attribute Node --> HTML attributes like class="main", id="main", src="main.jpg", href="main.html"
        - Text Node --> HTML text like "Some text here"
        - Comment Node --> HTML comments like <!-- Some comment here -->
        - Document Node --> Is the root node of the DOM tree. .HTML document like <!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>
    - Node Properties:
        - nodeType
        - nodeName
        - nodeValue
        - childNodes
        - firstChild
        - lastChild
        - nextSibling
        - previousSibling
        - parentNode
    - Node Methods:
        - appendChild
        - removeChild
        - replaceChild
        - insertBefore
*/

/* Document - Methods of element selection
    - getElementById
    - getElementsByTagName
    - getElementsByClassName
    - querySelector
    - querySelectorAll
*/

// getElementById
let element = document.getElementById("test1Id");
document.write(element + "<br>");

// querySelectorAll
let element2 = document.querySelectorAll("p");
for (let i = 0; i < element2.length; i++) {
    document.write(element2[i] + "<br>");
}

/* Document - Methods of element creation
    - createElement
    - createTextNode
*/

/* Methods to define, obtain and remove attributes
    - getAttribute
    - setAttribute
    - removeAttribute
*/

// getAttribute
let element3 = document.getElementById("test1Id");
document.write(element3.getAttribute("class") + "<br>");

/* Methods to define, obtain and remove classes
    - className --> Returns the value of the class attribute of the specified element
    - classList --> Returns the class name(s) of an element
*/

// className
let element4 = document.getElementById("test1Id");
document.write(element4.className + "<br>");

// classList
let element5 = document.getElementById("test1Id");
document.write(element5.classList + "<br>");


/* Global Attributes
    - accessKey
    - contentEditable
    - isContentEditable
    - contextMenu
    - dir
    - draggable
    - dropzone
    - hidden
    - id
    - lang
    - spellcheck
    - style
    - tabIndex
    - title
*/

let h1 = document.getElementById("h1tag");
h1.setAttribute("contentEditable", "true"); // Makes the element editable
h1.setAttribute("dir", "rtl"); // Sets the text direction to right-to-left
h1.setAttribute("hidden", "true"); // Hides the element
h1.removeAttribute("hidden"); // show the element, so remove the hidden attribute
h1.setAttribute("lang", "en"); // Sets the language of the element's content to english
// Set spellcheck
h1.setAttribute("spellcheck", "true"); // Turns on spell checking for the element
h1.setAttribute("tabIndex", "2"); // Sets the tab order of an element


/* Inputs Attributes
    - accept
    - alt
    - autocomplete
    - autofocus
    - checked
    - dirname
    - disabled
    - form
    - formaction
    - formenctype
    - formmethod
    - formnovalidate
    - formtarget
    - height
    - list
    - max
    - maxlength
    - min
    - multiple
    - name
    - pattern
    - placeholder
    - readonly
    - required
    - size
    - src
    - step
    - type
    - value
    - width
*/

let input = document.getElementById("inputTestId");
let inputFile = document.getElementById("inputFileTestId");
input.type = "number"; // Sets the input type to x
input.value = "sasasa"; // Sets the value of the input field to x

inputFile.accept = "image/jpg"; // Sets the file types that the server accepts (only for type="file")

/* form: Specifies the form the element belongs to
    - formaction: Specifies where to send the form-data when a form is submitted. Only for type="submit"
    - formenctype: Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
    - formmethod: Specifies how to send the form-data (which HTTP method to use). Only for type="submit"
    - formnovalidate: Specifies that the form-data should not be validated on submission. Only for type="submit"
    - formtarget: Specifies where to display the response after submitting the form. Only for type="submit"
*/

// formaction
let input2 = document.getElementById("inputSubmitTestId");
input2.type = "submit";
input2.formaction = "https://www.google.com";
input2.setAttribute("formaction", "https://www.google.com");
input2.setAttribute("form", "formTestId");
// using querySelector select the form with id formTestId and then the first input element
let inputForm = document.querySelector("#formTestId input");
inputForm.setAttribute("minlength", "5"); // Sets the minimum length of text in an input field to x
inputForm.setAttribute("maxlength", "10"); // Sets the maximum length of text in an input field to x
inputForm.required = true; // Sets the width of an input field to x characters

/* Style attribute: Sets or returns the value of the style attribute of an element
    Here we dont user underscore, we use camelCase
*/

inputForm.style.backgroundColor = "#081"; // Sets the background color of an element to red
inputForm.style.color = "#fff"; // Sets the background color of an element to red