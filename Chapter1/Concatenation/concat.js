/* Concatenation is the process of appending one string to the end of another string.
For example, if we concatenate the string "I love" with the string " to code." we get "I love to code.".
JavaScript offers two ways to concatenate strings: the concat() method and the + operator.
*/

/* 1. The concat() method concatenates one or more strings.
The concat() method returns a new string with the appended string(s).
The concat() method does not change the existing strings, it returns a new string.
The concat() method can be used instead of the plus operator. These two lines do the same: */
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" " + text2);
document.write(text3 + "<br>");

/* 2. The + operator can also be used to add (concatenate) strings.
When used on strings, the + operator is called the concatenation operator.
The + operator can also be used to add a variable to another variable: */
let text4 = "Hello";
let text5 = "World";
let text6 = text4 + " " + text5;
document.write(text6 + "<br>");

/* 3. The += assignment operator can also be used to add (concatenate) strings:
The += assignment operator can also be used to add a variable to another variable: */
let text7 = "Hello";
let text8 = "World";
text7 += " " + text8;
document.write(text7 + "<br>");

/* 4. `Template literals` are string literals allowing embedded expressions.
You can use multi-line strings and string interpolation features with them.
Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). */
let text9 = "Hello";
let text10 = "World";
let text11 = `${text9}
${text10}`;
document.write(text11 + "<br>");

/* You can scape "`" with "\" */
let text12 = "Hello";
let text13 = "World";
let text14 = `\`${text12}
${text13}\``;