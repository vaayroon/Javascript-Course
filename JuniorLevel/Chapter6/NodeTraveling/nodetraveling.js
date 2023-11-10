/* Childs methods
    * 1. replaceChild --> Replace a child
    * 2. removeChild --> Remove a child
    * 3. insertBefore
    * 4. hasChildNodes
*/

// 1. replaceChild
let container = document.querySelector(".container");
let oldH2 = document.querySelector(".container h2");
let liItem2 = document.createElement("H2");
liItem2.textContent = "This is a new H2";

let liItem3 = liItem2.cloneNode(true);
liItem3.textContent = "This is a new H2 - Cloned";
container.appendChild(liItem3);
container.replaceChild(liItem2, oldH2);

// 2. removeChild
let liItemToRemove = document.querySelector(".container h2:first-child");
container.removeChild(liItemToRemove);

/* Parent Properties
    * 1. parentNode --> Returns the parent node of the specified node, as a Node object.
    * 2. parentElement --> Returns the parent element node of the specified node, as an Element object.
    * 3. childNodes
    * 4. children
    * 5. firstChild
    * 6. firstElementChild
    * 7. lastChild
    * 8. lastElementChild
    * 9. nextSibling
    * 10. nextElementSibling
    * 11. previousSibling
    * 12. previousElementSibling
*/

/* Siblings Properties
    * 1. nextSibling
    * 2. nextElementSibling
    * 3. previousSibling
    * 4. previousElementSibling
*/

// 1. nextSibling
let containerSibling = document.querySelector(".container");
let nextSibling = containerSibling.nextSibling;
console.log(nextSibling); // #text (line break)

// 2. nextElementSibling
let nextElementSibling = containerSibling.nextElementSibling;
console.log(nextElementSibling); // <h3>Test Sibling</h3>

// 3. previousSibling
let previousSibling = containerSibling.previousSibling;
console.log(previousSibling); // #text (line break)

// 4. previousElementSibling
let previousElementSibling = containerSibling.previousElementSibling;
console.log(previousElementSibling); // <h2>Test</h2>

/* Node Closest what is it?
    * The closest() method returns the first ancestor of the current element (or the current element itself) which matches the selectors given in parameter. If there isn't such an ancestor, it returns null.
*/

// closest
let containetClosest = document.querySelector(".container");
console.log("🚀 ~ file: nodetraveling.js:68 ~ containetClosest:", containetClosest)
let closestElement = containetClosest.closest("div");
console.log(closestElement); // <div class="container">...</div>
