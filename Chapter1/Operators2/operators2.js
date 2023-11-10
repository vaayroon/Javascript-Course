/* Comparisons Operators:
    > greater than
    < less than
    >= greater than or equal to
    <= less than or equal to
    == equal to
    != not equal to
    === equal value and equal type
    !== not equal value or not equal type
    ? ternary operator
*/

let x = 5;
let y = 5;
let z = 6;
let xs = "5";
document.write(x > y); // false
document.write("<br>");
document.write(x < y); // false
document.write("<br>");
document.write(x >= y); // true
document.write("<br>");
document.write(x <= y); // true
document.write("<br>");
document.write(x == y); // true
document.write("<br>");
document.write(x != y); // false
document.write("<br>");
document.write(x === y); // true
document.write("<br>");
document.write(x !== y); // false
document.write("<br>");
document.write(x === xs); // false
document.write("<br>");
document.write(x !== xs); // true
document.write("<br>");
document.write(x == xs); // true
document.write("<br>");

/* logic Operators:
    && and
    || or
    ! not
*/
/* Create thruth tables for &&, ||, !
    a   b   a && b  a || b  !a
    0   0     0       0     1
    0   1     0       1     1
    1   0     0       1     0
    1   1     1       1     0
*/

let a = 5;
let b = 6;
let c = 7;
let d = 8;
let e = 9;
let f = 10;
document.write("<br>");
document.write((a < b) && (c > d)); // false
document.write("<br>");
document.write((a < b) && (c < d)); // true
document.write("<br>");
document.write((a < b) || (c > d)); // true
document.write("<br>");
document.write((a > b) || (c > d)); // false
document.write("<br>");
document.write(!(a > b)); // true
document.write("<br>");

/* Explain CamelCase
    CamelCase is a naming convention in which each word within a compound word is capitalized except for the first word.
    For example: firstName, lastName, etc.
*/