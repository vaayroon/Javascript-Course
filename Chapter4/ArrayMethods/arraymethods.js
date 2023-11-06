/* Array Methods

    - Array methods are built-in functions that we can apply to our arrays.
    - These methods make it easier to work with arrays.
    - We can use these methods to add, remove, and modify elements in our arrays.
    - We can also use these methods to search and sort our arrays.
    - We can also use these methods to iterate, transform, combine, create, fill, reverse, etc, over our arrays.
    - We can also use these methods to convert our arrays to strings.
    - We can also use these methods to convert our arrays to numbers.
    - We can also use these methods to convert our arrays to booleans.
    - We can also use these methods to convert our arrays to objects.
    - We can also use these methods to convert our arrays to functions.
    - We can also use these methods to convert our arrays to JSON.
    - We can also use these methods to convert our arrays to maps.
    - We can also use these methods to convert our arrays to sets.
    - We can also use these methods to convert our arrays to symbols.
*/

// Array Methods: concat()
// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// Syntax: array1.concat(array2, array3, ..., arrayX)
// Example:
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);
document.write(array3 + "<br>"); // Output: a,b,c,d,e,f

// Array Methods: copyWithin()
// The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
// Syntax: array.copyWithin(target, start, end)
// Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
document.write(fruits + "<br>"); // Output: Banana,Orange,Banana,Orange

// Array Methods: entries()
// The entries() method returns an Array Iterator object with key/value pairs.
// Syntax: array.entries()
// Example:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits1.entries();
document.write(f.next().value + "<br>"); // Output: 0,Banana
document.write(f.next().value + "<br>"); // Output: 1,Orange
document.write(f.next().value + "<br>"); // Output: 2,Apple
document.write(f.next().value + "<br>"); // Output: 3,Mango

// Array Methods: every()
// The every() method checks if all elements in an array pass a test (provided as a function).
// The every() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.
// Note: every() does not change the original array.
// Syntax: array.every(function(currentValue, index, arr), thisValue)
// Example:
const ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
}
document.write(ages.every(checkAdult) + "<br>"); // Output: false

// Array Methods: fill()
// The fill() method fills the specified elements in an array with a static value.
// You can specify the position of where to start and end the filling. If not specified, all elements will be filled.
// Note: this method overwrites the original array.
// Syntax: array.fill(value, start, end)
// Example:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi");
document.write(fruits2 + "<br>"); // Output: Kiwi,Kiwi,Kiwi,Kiwi

// Array Methods: filter()
// The filter() method creates a new array with array elements that passes a test.
// This method does not change the original array.
// Syntax: array.filter(function(currentValue, index, arr), thisValue)
// Example:
const ages1 = [32, 33, 16, 40];

document.write(ages1.filter(checkAdult) + "<br>"); // Output: 32,33,40

// Array Methods: find()
// The find() method returns the value of the first array element that passes a test function.
// This method does not change the original array.
// Syntax: array.find(function(currentValue, index, arr),thisValue)
// Example:
const ages2 = [3, 10, 18, 20];

document.write(ages2.find(checkAdult) + "<br>"); // Output: 18

// Array Methods: findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This method does not change the original array.
// Syntax: array.findIndex(function(currentValue, index, arr),thisValue)
// Example:
const ages3 = [3, 10, 18, 20];

document.write(ages3.findIndex(checkAdult) + "<br>"); // Output: 2

// Array Methods: forEach()
// The forEach() method calls a function once for each element in an array, in order.
// Note: the function is not executed for array elements without values.
// Note: this method does not change the original array.
// Syntax: array.forEach(function(currentValue, index, arr), thisValue)
// Example:
const fruits3 = ["apple", "orange", "cherry"];
fruits3.forEach( f => document.write(f + "<br>")); // Output: apple,orange,cherry

// Array Methods: from()
// The from() method returns an Array object from any object with a length property or any iterable object.
// Syntax: Array.from(object, mapFunction, thisValue)
// Example:
const myArr = Array.from("ABCDEFG");
document.write(myArr + "<br>"); // Output: A,B,C,D,E,F,G

// Array Methods: includes()
// The includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.
// Note: the includes() method is case sensitive.
// Syntax: array.includes(element, start)
// Example:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits4.includes("Mango") + "<br>"); // Output: true

// Array Methods: indexOf()
// The indexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
// Returns -1 if the item is not found.
// If the item is present more than once, the indexOf method returns the position of the first occurence.
// Note: the indexOf() method is case sensitive.
// Syntax: array.indexOf(item, start)
// Example:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits5.indexOf("Apple") + "<br>"); // Output: 2

// Array Methods: isArray()
// The isArray() method determines whether an object is an array.
// This function returns true if the object is an array, and false if not.
// Syntax: Array.isArray(obj)
// Example:
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.write(Array.isArray(fruits6) + "<br>"); // Output: true

// Array Methods: join()
// The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// Note: this method will not change the original array.
// Syntax: array.join(separator)
// Example:
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits7.join(" - ") + "<br>"); // Output: Banana - Orange - Apple - Mango

// Array Methods: keys()
// The keys() method returns an Array Iterator object with the keys of an array.
// Syntax: array.keys()
// Example:
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits8.keys();
document.write(keys.next().value + "<br>"); // Output: 0
document.write(keys.next().value + "<br>"); // Output: 1
document.write(keys.next().value + "<br>"); // Output: 2
document.write(keys.next().value + "<br>"); // Output: 3
document.write(keys.next().value + "<br>"); // Output: undefined

// Array Methods: lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
// Note: the string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.
// This method returns -1 if the value to search for never occurs.
// Note: the lastIndexOf() method is case sensitive!
// Syntax: string.lastIndexOf(searchvalue, start)
// Example:
const fruits9 = ["Apple", "Banana", "Orange", "Apple", "Mango"];
document.write(fruits9.lastIndexOf("Apple") + "<br>"); // Output: 3

// Array Methods: map()
// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.
// Syntax: array.map(function(currentValue, index, arr), thisValue)
// Example:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
document.write(newArr + "<br>"); // Output: 2,3,4,5

// Array Methods: pop()
// The pop() method removes the last element of an array, and returns that element.
// Note: this method changes the length of an array.
// Note: the pop() method does not change the original array.
// Syntax: array.pop()
// Example:
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits10.pop() + "<br>"); // Output: Mango
document.write(fruits10.pop() + "<br>"); // Output: Apple
document.write(fruits10.pop() + "<br>"); // Output: Orange
document.write(fruits10.pop() + "<br>"); // Output: Banana
