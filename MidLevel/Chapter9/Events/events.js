/* Javascript Events
    * Events are actions that can be detected by your application
    * Events can be triggered by the user or by the browser
    * Events can be used to trigger functions
    * Events are declared in HTML using the onEventName attribute
    * Events can be declared in Javascript using the addEventListener() method
    * Events can be declared in Javascript using the onEventName property
    * Events can be declared in Javascript using the onEventName attribute
*/

/* Javascript Event Handlers:
    * Event handlers are functions that are triggered by events
    * Event handlers are declared in HTML using the onEventName attribute
    * Event handlers are declared in Javascript using the onEventName property
    * Event handlers are declared in Javascript using the onEventName attribute
    * Types:
    * - Mouse Events -->  onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmouseout, onmousemove
    * - Keyboard Events --> onkeydown, onkeyup, onkeypress
    * - Frame/Object Events --> onload, onunload, onscroll, onresize
    * - Form Events --> onblur, onchange, onfocus, onreset, onselect, onsubmit
    * - Window Events --> onblur, onchange, onfocus, onreset, onselect, onsubmit
    * - Miscellaneous Events --> onerror, onhelp, onselectstart
    * - HTML5 Events --> ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onscroll
    * - HTML5 Form Events --> oninput, oninvalid, onsearch
    * - HTML5 Keyboard Events --> onkeydown, onkeypress, onkeyup
    * - HTML5 Mouse Events --> onmousedown, onmousemove, onmouseout, onmouseover, onmouseup
    * - HTML5 Media Events --> onabort, oncanplay, oncanplaythrough, ondurationchange, onemptied, onended, onerror, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onreadystatechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting
    * - HTML5 Touch Events --> ontouchcancel, ontouchend, ontouchmove, ontouchstart
    * - HTML5 Transition Events --> ontransitionend
    * - HTML5 Animation Events --> onanimationstart, onanimationend, onanimationiteration
    * - HTML5 Server-Sent Events --> onerror, onmessage, onopen
*/

/* Javascript Event Listeners:
    * Event listeners are functions that are triggered by events
    * Event listeners are declared in Javascript using the addEventListener() method
    * Event listeners are declared in Javascript using the onEventName property
    * Event listeners are declared in Javascript using the onEventName attribute
*/

/* addEventListener() method and removeEventListener() method
addEventListener() method attaches an event handler to the specified element
removeEventListener() method removes an event handler that has been attached with the addEventListener() method
Syntax: element.addEventListener(event, function, useCapture);
event --> Required. A String that specifies the name of the event
function --> Required. Specifies the function to run when the event occurs. When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object
useCapture --> Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. Possible values: true - The event handler is executed in the capturing phase. false- Default. The event handler is executed in the bubbling phase
*/

// addEventListener, removeEventListener example
// <button id="myBtn">Try it</button>
// <script>
const mybtn = document.getElementById("myBtn");
mybtn.addEventListener("click", ()=>{ 
    let par = document.querySelector("p");
    par.style.color = "red";
    console.log("🚀 ~ file: events.js:56 ~ par:", par)
});

/* Event flow:
    * Event flow is the order in which event handlers are executed when one element is nested inside a second element, and both elements have registered a handle for the same event
    * With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements
    * With bubbling, the event is first captured and handled by the outermost element and then propagated to inner elements
*/

/* Event Bubbling --> Add true as the third parameter in the addEventListener() method to specify that the event handler should be executed in the capturing phase
<div id="myDivId" style="background-color: #081;">
    <button id="myBtn">Click me</button>
</div>
<script> */
const myDiv = document.getElementById("myDivId");
myDiv.addEventListener("click", ()=>{ 
    console.log("🚀 ~ file: events.js:71 ~ myDiv.addEventListener ~ myDiv", myDiv)
}, true);

/* Stop Event Propagation:
    * The stopPropagation() method prevents propagation of the same event from being called
    * The stopImmediatePropagation() method prevents other listeners of the same event from being called
*/

// stopPropagation() method example
// <div id="myDivId" style="background-color: #081;">
//     <button id="myBtn">Click me</button>
// </div>
// <script>
const myBtn2 = document.getElementById("stopPropBtnId");
myBtn2.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("🚀 ~ file: events.js:83 ~ myBtn2.addEventListener ~ event", event)
});

/* Mouse events:
    * onclick --> The event occurs when the user clicks on an element
    * ondblclick --> The event occurs when the user double-clicks on an element
    * onmousedown --> The event occurs when the user presses a mouse button over an element
    * onmousemove --> The event occurs when the pointer is moving while it is over an element
    * onmouseout --> The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
    * onmouseover --> The event occurs when the pointer is moved onto an element, or onto one of its children
    * onmouseup --> The event occurs when a user releases a mouse button over an element
*/

// onclick example
// <button onclick="displayDate()">The time is?</button>
// <script>
function displayDate() {
    console.log("🚀 ~ file: events.js:99 ~ displayDate ~ Date()", Date())
    document.getElementById("onClickBtnId").innerHTML = Date();
}

// ondblclick example
// <button ondblclick="displayDate()">The time is?</button>
// <script>
function displayDateDB() {
    console.log("🚀 ~ file: events.js:107 ~ displayDate ~ Date()", Date())
    document.getElementById("onDblClickBtnId").innerHTML = Date();
}

/* Keyboard Events:
    * onkeydown --> The event occurs when the user is pressing a key
    * onkeypress --> The event occurs when the user presses a key
    * onkeyup --> The event occurs when the user releases a key
    * onkeydown vs onkeypress --> The onkeydown event occurs when the user is pressing a key (for example: when the user presses any key on the keyboard). The onkeypress event occurs when the user presses a key (for example: when the user presses an arrow key on the keyboard)
*/

// onkeydown example
// <input type="text" onkeydown="displayDateKD()" />
// <script>
function displayDateKD() {
    console.log("🚀 ~ file: events.js:121 ~ displayDateKD ~ Date()", Date())
    document.getElementById("onKeyDownBtnId").value = Date();
}

// onkeypress example
// <input type="text" onkeypress="displayDateKP()" />
// <script>
function displayDateKP() {
    console.log("🚀 ~ file: events.js:129 ~ displayDateKP ~ Date()", Date())
    document.getElementById("onKeyDownBtnId").value = "key Pressed";
}

// onkeyup example
// <input type="text" onkeyup="displayDateKU()" />
// <script>
function displayDateKU() {
    console.log("🚀 ~ file: events.js:137 ~ displayDateKU ~ Date()", Date())
    document.getElementById("onKeyDownBtnId").value = "key Released";
}

/* Interface Events:
    * onload --> The event occurs when an object has loaded
    * onunload --> The event occurs once a page has unloaded (for <body>)
    * onscroll --> The event occurs when an element's scrollbar is being scrolled
    * onresize --> The event occurs when the document view is resized
    * onerror --> The event occurs when an error occurs while loading an external file
    * onhashchange --> The event occurs when there has been changes to the anchor part of a URL
    * onoffline --> The event occurs when the browser starts to work offline
    * unload --> The unload event occurs when the user navigates away from a page
    * resize --> The resize event occurs when the browser window changes size
*/

// onload example
// <body onload="checkCookies()">
// <script>
function checkCookies() {
    let text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    console.log("🚀 ~ file: events.js:157 ~ checkCookies ~ text", text)
}

// resize example
window.addEventListener("resize", ()=>{ 
    console.log("We are resizing the window")
    console.log("🚀 ~ file: events.js:164 ~ window.addEventListener ~ window.innerHeight", window.innerHeight)
});

// onerror example
// <img src="image.gif" onerror="imgError()">
// <script>
function iframeError() {
    alert("The image could not be loaded.");
}

// select example
const selectInput = document.getElementById("onKeyDownBtnId");
const selectInputShow = document.getElementById("containerSelectShow");
selectInput.addEventListener("select", (e)=>{ 
    console.log("🚀 ~ file: events.js:177 ~ selectInput.addEventListener ~ selectInput.value", selectInput.value)
    selectInputShow.innerHTML = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
});
