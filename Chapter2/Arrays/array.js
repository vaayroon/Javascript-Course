/* Arryas:
    - Arrays are used to store multiple values in a single variable.
    - Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
    - In JavaScript, arrays use numbered indexes.
*/

/* 1. Creating an Array:
    - There are two different ways to create an array:
        1. let arrayName = [item1, item2, ...]; // recommended
        2. let arrayName = new Array(item1, item2, ...);
*/
let fruits = ["Banana", "Orange", "Apple", "Mango", 12];
document.write("Fruits1" + "<br>");
document.write(fruits + "<br>");
let fruits2 = new Array("Banana", "Orange", "Apple", "Mango", 36);
document.write("Fruits2" + "<br>");
document.write(fruits2 + "<br>");
/* You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.
*/

/* 2. Accessing Array Elements:
    - You access an array element by referring to the index number.
    - Array indexes start with 0.
*/
document.write("Fruits[0]" + "<br>");
document.write(fruits[0] + "<br>");
document.write("Fruits[4]" + "<br>");
document.write(fruits[4] + "<br>");
document.write("Fruits2[15]" + "<br>");
document.write(fruits2[15] + "<br>");

/* Associative arrays (json):
    - Many programming languages support arrays with named indexes.
    - Arrays with named indexes are called associative arrays (or hashes).
    - JavaScript does not support arrays with named indexes.
    - In JavaScript, arrays always use numbered indexes.
*/

let pc1 = {
    name: "HP",
    ram: "8GB",
    cpu: "i5",
    hdd: "1TB"
};

// Create a frase that will be written in the document
let frase = "My PC is a " + pc1.name + " with " + pc1.ram + " of RAM, " + pc1.cpu + " processor and " + pc1.hdd + " of HDD.";
document.write(frase + "<br>");