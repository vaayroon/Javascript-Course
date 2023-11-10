/* Classes, classList and classList methods:
    - add --> Adds one or more class names to an element :  element.classList.add("class1", "class2", ...)
    - remove --> Removes one or more class names from an element : element.classList.remove("class1", "class2", ...)
    - toggle --> Toggles between a class name for an element : element.classList.toggle("class", true|false)
    - contains --> Returns a Boolean value, indicating whether an element has the specified class name : element.classList.contains("class")
    - item --> Returns the class name with a specified index number from an element : element.classList.item(index)
    - replace --> Replaces an existing class name with a new class name : element.classList.replace("oldClass", "newClass")
    - length --> Returns the number of class names for an element : element.classList.length
*/

// add
let element6 = document.getElementById("testH1Id");
element6.classList.add("btn", "btn-warning");
console.log(element6.classList);

// remove
element6.classList.remove("btn");
console.log(element6.classList);

// toggle
element6.classList.toggle("btn");
console.log(element6.classList);
element6.classList.toggle("btn", true);

// contains
console.log(element6.classList.contains("btn"));

// item
console.log(element6.classList.item(0));

// Replace
element6.classList.replace("btn-warning", "btn-danger");

// length
console.log(element6.classList.length);