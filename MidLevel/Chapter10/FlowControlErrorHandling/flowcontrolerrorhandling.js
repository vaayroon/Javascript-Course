/* Flow Control and Error Handling in javascript:
    * 1. if statement --> if (condition) {statement}
    * 2. switch statement --> switch (expression) {case n: statement}
    * 3. while statement --> while (condition) {statement}
    * 4. do-while statement --> do {statement} while (condition)
    * 5. for statement --> for (initialization; condition; increment) {statement}
    * 6. for-in statement --> for (variable in object) {statement}
    * 7. for-of statement --> for (variable of object) {statement}
    * 8. break statement --> break [label];
    * 9. continue statement --> continue [label];
    * 10. throw statement --> throw expression;
    * 11. try-catch statement --> try {statement} catch (variable) {statement}
    * 12. try-finally statement --> try {statement} finally {statement}
    * 13. try-catch-finally statement --> try {statement} catch (variable) {statement} finally {statement}
    * 14. debugger statement --> debugger;
    * 15. with statement --> with (expression) {statement}
    * 16. label statement --> label: statement
    * 17. return statement --> return [expression];
    * 18. yield statement --> yield [expression]; --> What yield does --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
*/

/* Exeptions:
    * 1. Error --> Base class for all errors
    * 2. EvalError --> An error has occurred in the eval() function
    * 3. RangeError --> A number "out of range" has occurred
    * 4. ReferenceError --> An illegal reference has occurred
    * 5. SyntaxError --> A syntax error has occurred
    * 6. TypeError --> A type error has occurred
    * 7. URIError --> An error in encodeURI() has occurred
*/

// Example with try-catch-finally, continue and throw
function testTryCatchFinally() {
    try {
        console.log("try");
        throw new Error("Error");
        return; // This will not be executed
    } catch (e) {
        console.log("catch");
        return;
    } finally {
        console.log("finally"); // This will always be executed
    }
}

testTryCatchFinally();
