/* Conditionals:
    - if --> if (condition) { code }
    - else if --> if (condition) { code } else if (condition) { code }
    - else --> if (condition) { code } else { code }
    - switch --> switch (condition) { case: code break; default: code break; }
    - ternary --> condition ? code : code
*/

let x = 5;
let y = 6;
let z = 7;
let xs = "5";

document.write("if, else if and else Statement");
document.write("<br>");
if (x > y) {
    document.write("x is greater than y");
} else if (x < y) {
    document.write("x is less than y");
} else {
    document.write("x is equal to y");
}
document.write("<br>");

document.write("Switch Statement");
document.write("<br>");

switch (z) {
    case 5:
        document.write("z is 5");
        break;
    case 6:
        document.write("z is 6");
        break;
    default:
        document.write("z is not 5 or 6");
        break;
}
document.write("<br>");

document.write("Ternary Operator");
document.write("<br>");

document.write(x == y ? "x is equal to y" : "x is not equal to y");