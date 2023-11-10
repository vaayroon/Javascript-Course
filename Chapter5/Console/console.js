/* Console Register functions:
    - console.log() --> Print a message in the console
    - console.info() --> Print an information message in the console
    - console.warn() --> Print a warning message in the console
    - console.error() --> Print an error message in the console
    - console.clear() --> Clear the console
    - console.table() --> Print a table in the console
    - console.time() --> Start a timer
    - console.timeEnd() --> Stop the timer
    - console.trace() --> Print the stack trace
 */

// console.table() example
let subjects = {
    "Math": [
        {
            "id": 1,
            "name": "John",
            "marks": 0
        },
        {
            "id": 2,
            "name": "Jane",
            "marks": 0
        }
    ],
    "English": [
        {
            "id": 1,
            "name": "John",
            "marks": 0
        },
        {
            "id": 2,
            "name": "Jane",
            "marks": 0
        }
    ]
}
console.table(subjects);

// console.trace() example

function addStudent(subject, name) {
    if (subjects.hasOwnProperty(subject)) {
        if (subjects[subject].length < 5) {
            let index = subjects[subject].findIndex(x => x.name == name);
            if (index == -1) {
                let id = subjects[subject].length + 1;
                let student = {
                    "id": id,
                    "name": name,
                    "marks": 0
                }
                subjects[subject].push(student);
                alert("The student has been added");
                return subjects[subject];
            }
            else {
                return "The student is already enrolled in the subject";
            }
        }
        else {
            return "The subject is full";
        }
    }
    else {
        return "The subject doesn't exist";
    }
}

console.trace(addStudent("Math", "John"));

/* Console counters function:
    - console.count() --> Count the number of times a function is called
    - console.countReset() --> Reset the counter
*/

/* Console grouping function:
    - console.group() --> Group the console output
    - console.groupEnd() --> End the group
    - console.groupCollapsed() --> Group the console output collapsed
*/

// console.group() example
console.group("Group 1");
console.log("Hello");
console.log("World");
console.groupEnd();

// console.groupCollapsed() example
console.groupCollapsed("Group 2");
console.log("Hello");
console.log("World");
console.groupEnd();


/* Console timing functions:
    - console.time() --> Start a timer
    - console.timeEnd() --> Stop the timer
    - console.timeLog() --> Log the time
*/

// console.time() example
console.time("Timer");
for (let i = 0; i < 100000; i++) {
    i++;
}
console.timeEnd("Timer");

// console.timeLog() example
console.time("Timer");
for (let i = 0; i < 100000; i++) {
    i++;
}
console.timeLog("Timer");
for (let i = 0; i < 100000; i++) {
    i++;
}
console.timeEnd("Timer");