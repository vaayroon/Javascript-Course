/* String Methods
The following table lists the most common string methods.
Method	Description
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an existing string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
*/

// String Methods: charAt()
// The charAt() method returns the character at the specified index in a string.
// The index of the first character is 0, the second character is 1, and so on.
// Note: the charAt() method is case sensitive.
// Syntax: string.charAt(index)
// Example:
const str = "HELLO WORLD";
document.write(str.charAt(0) + "<br>"); // Output: H
document.write(str.charAt(1) + "<br>"); // Output: E

// String Methods: charCodeAt()
// The charCodeAt() method returns the Unicode of the character at the specified index in a string.
// The index of the first character is 0, the second character is 1, and so on.
// Note: the charCodeAt() method is case sensitive.
// Syntax: string.charCodeAt(index)
// Example:
const str2 = "HELLO WORLD";
document.write(str2.charCodeAt(0) + "<br>"); // Output: 72
document.write(str2.charCodeAt(1) + "<br>"); // Output: 69

// String Methods: concat()
// The concat() method joins two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.
// Syntax: string.concat(string1, string2, ..., stringX)
// Example:
const text1 = "Hello";
const text2 = "World";
document.write(text1.concat(" ", text2) + "<br>"); // Output: Hello World

// String Methods: endsWith()
// The endsWith() method checks whether a string ends with specified string/characters.
// This method returns true if the string ends with the characters, and false if not.
// Note: the endsWith() method is case sensitive.
// Syntax: string.endsWith(searchvalue, length)
// Example:
const str3 = "Hello world, welcome to the universe.";
document.write(str3.endsWith("universe.") + "<br>"); // Output: true

// String Methods: fromCharCode()
// The fromCharCode() method converts Unicode values into characters.
// Syntax: String.fromCharCode(n1, n2, ..., nX)
// Example:
document.write(String.fromCharCode(72) + "<br>"); // Output: H
document.write(String.fromCharCode(69) + "<br>"); // Output: E

// String Methods: includes()
// The includes() method determines whether a string contains the specified string/characters.
// This method returns true if the string contains the characters, and false if not.
// Note: the includes() method is case sensitive.
// Syntax: string.includes(searchvalue, start)
// Example:
const str4 = "Hello world, welcome to the universe.";
document.write(str4.includes("world") + "<br>"); // Output: true

// String Methods: indexOf()
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
// Note: the indexOf() method is case sensitive.
// Syntax: string.indexOf(searchvalue, start)
// Example:
const str5 = "Hello world, welcome to the universe.";
document.write(str5.indexOf("welcome") + "<br>"); // Output: 13

// String Methods: lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
// This method returns -1 if the value to search for never occurs.
// Note: the lastIndexOf() method is case sensitive!
// Syntax: string.lastIndexOf(searchvalue, start)
// Example:
const str6 = "Hello planet earth, you are a great planet.";
document.write(str6.lastIndexOf("planet") + "<br>"); // Output: 36

// String Methods: localeCompare()
// The localeCompare() method compares two strings in the current locale.
// The locale is based on the language settings of the browser.
// The localeCompare() method returns a number indicating whether the string comes before, after or is equal as the compareString in sort order.
// Syntax: string.localeCompare(compareString)
// Example:
const str7 = "ab";
const str8 = "cd";
document.write(str7.localeCompare(str8) + "<br>"); // Output: -1

// String Methods: match()
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
// Syntax: string.match(regexp)
// Example:
const str9 = "The rain in SPAIN stays mainly in the plain";
const res = str9.match(/ain/g);
document.write(res + "<br>"); // Output: ain,ain,ain

// String Methods: repeat()
// The repeat() method returns a new string with a specified number of copies of an existing string.
// Syntax: string.repeat(count)
// Example:
const str10 = "Hello world!";
document.write(str10.repeat(2) + "<br>"); // Output: Hello world!Hello world!
