/* Loops and Iterations:
    - for --> for (let i = 0; i < 10; i++) {}
    - while --> while (condition) {}
    - do while --> do {} while (condition);
    - for in --> for (let x in object) {}
    - for of --> for (let x of object) {}
*/
/* Explain what break, continue and label does:
    - break --> breaks out of the loop
    - continue --> skips the current iteration
    - label --> labels a block of code
*/

// for in example
const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    document.write(`${key}: ${person[key]} <br>`);
}
document.write("<br>");
// for of example
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    document.write(`${color} <br>`);
}

// label example
let i = 0;
outer: for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        i++;
        if (i > 3) {
            break outer;
        }
        document.write(`x: ${x}, y: ${y} <br>`);
    }
}
document.write("<br>");