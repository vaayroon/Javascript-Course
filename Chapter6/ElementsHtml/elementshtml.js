/* Obtain and Modify content Element:
    * 1. textContent --> Get the text content of an element
    * 2. innerHTML --> Get the HTML content of an element
    * 3. outerHTML --> Get the HTML content of an element including the element itself
    * 4. innerText --> Deprecated
    * 5. outerText --> Deprecated
*/

let h1Tomodify = document.getElementById("testH1Id");
// 4. innerText
console.log(h1Tomodify.innerText);
document.write(h1Tomodify.innerText + "<br>");

// 1. textContent
console.log(h1Tomodify.textContent);
document.write(h1Tomodify.textContent + "<br>");

// 2. innerHTML
console.log(h1Tomodify.innerHTML);
document.write(h1Tomodify.innerHTML + "<br>");

// 3. outerHTML
console.log(h1Tomodify.outerHTML);
document.write(h1Tomodify.outerHTML + "<br>");

/* Creation of elements:
    * 1. createElement --> Create an element
    * 2. createTextNode --> Create a text node
    * 3. appendChild --> Add a child to an element
    * 3.1. createDocumentFragment --> Add a child to an element
    * 4. insertBefore
    * 5. removeChild
    * 6. replaceChild
*/

// 1. createElement
let container = document.querySelector(".container");
let liItem = document.createElement("LI");
liItem.style.color = "red";
console.log(liItem);

// 2. createTextNode
let liItemtext = document.createTextNode("This is a item of the list");
console.log("🚀 ~ file: elementshtml.js:42 ~ liItemtext:", liItemtext)

// 3. appendChild
// liItem.innerHTML = liItemtext; --> Wrong beacuse liItemtext is a text node!!!!!!!!!!!!
liItem.appendChild(liItemtext);
console.log(liItem);
container.appendChild(liItem);

// 3.1. createDocumentFragment
let fragment = document.createDocumentFragment();
let fragment2 = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    let liItem = document.createElement("LI");
    liItem.style.color = "#081";
    let liItemtext = document.createTextNode("This is the correct way to add a text node/child to an element");
    liItem.appendChild(liItemtext);
    fragment.appendChild(liItem);
}
fragment2 = fragment.cloneNode(true);
console.log("🚀 ~ file: elementshtml.js:55 ~ fragment2:", fragment2)
container.appendChild(fragment);

/* Obtain and Modify child elements:
    * 1. childNodes --> Get all child nodes of an element
    * 2. children --> Get all child elements of an element
    * 3. firstChild --> Get the first child node of an element
    * 4. firstElementChild --> Get the first child element of an element
    * 5. lastChild --> Get the last child node of an element
    * 6. lastElementChild --> Get the last child element of an element
*/

// 1. childNodes
console.log(container.childNodes);
document.write(container.childNodes + "<br>");

// 2. children
console.log(container.children);
document.write(container.children + "<br>");

// 3. firstChild
console.log(container.firstChild); // --> Take care of the spaces between the elements
document.write(container.firstChild + "<br>");

// 4. firstElementChild
console.log(container.firstElementChild);
document.write(container.firstElementChild + "<br>");

// 5. lastChild
console.log(container.lastChild); // --> Take care of the spaces between the elements
document.write(container.lastChild + "<br>");

// 6. lastElementChild
console.log(container.lastElementChild);
document.write(container.lastElementChild + "<br>");
