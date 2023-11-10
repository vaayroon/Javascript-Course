/* Functions:
    - Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
    - Functions are actions. They allow the code to be called many times without repetition.
    - Functions can be declared using Function Declaration syntax, or Function Expression syntax.
    - Functions always return something. If there’s no return statement in the function, then its result is undefined.
    - Parameters can have default values, e.g. function sum(a, b = 1) { ... }
    - A function can return a value back into the calling code as the result.
    - To exit a function and return a value, we can use a directive return <value>.
    - There may be many occurrences of return in a single function. For instance:
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return document.write('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    document.write('Access granted');
} else {
    document.write('Access denied');
}

document.write('<br>');
document.write('<br>');


// all the ways to create a function
// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sume = function (a, b) {
    return a + b;
};

// Arrow Function Expression
let sumaf = (a, b) => a + b;

//Explain all the ways to call a function
// As a function
function csum(a, b) {
    return a + b;
}

// As a method
let obj = {
    sum(a, b) {
        return a + b;
    },
};

document.write(obj.sum(1, 2)+'<br>');

// As a constructor
class sumc {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.sum = function () {
            return this.a + this.b;
        };
    }
}

let obj2 = new sumc(3, 4);
document.write(obj2.sum());
