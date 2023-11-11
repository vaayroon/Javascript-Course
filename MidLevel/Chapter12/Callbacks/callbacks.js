/* Explain javascript callbacks: what are they, why are they useful, and how do you use them?
    * A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
    * Callbacks are useful because they allow us to write better asynchronous code.
    * Callbacks are used in situations such as:
    * - Making http requests
    * - Reading files
    * - Waiting for user input
    * - Waiting for events to occur
    * - Calling functions after another function has finished
    * - etc.
*/

/* Callbacks exercise:
    * Modify the previous exercise to use callbacks.
    * The callback should be called after the average mark has been calculated.
    * The callback should receive the average mark as a parameter.
    * The callback should show the average mark.
*/

// Create Project class with its name and mark
class Project {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
}

// Create a Course Object that has a name and a list of projects, average mark and exam mark
// The average mark is calculated internal with the average of the projects and the exam mark
class Course {
    constructor(id, name, projects, examMark) {
        this.id = id;
        this.name = name;
        this.projects = projects;
        this.examMark = examMark;
        this.averageMark = this.calculateAverageMark();
    }

    calculateAverageMark() {
        let sum = 0;
        this.projects.forEach(project => {
            sum += project.mark;
        });
        return (sum / this.projects.length + this.examMark) / 2;
    }
}

// Create a User Object that with id, name, and a list of courses with its projets and marks
class User {
    constructor(id, name, courses) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
}

// Create a list of users with its courses at least 3. Each course has 2 projects at least
const users = [
    new User(1, "Juan", [
        new Course(1,"Math", [
            new Project("Project 1", 5),
            new Project("Project 2", 6)
        ], 7),
        new Course(2,"English", [
            new Project("Project 1", 7),
            new Project("Project 2", 8)
        ], 9)
    ]),
    new User(2, "Maria", [
        new Course(1,"Math", [
            new Project("Project 1", 5),
            new Project("Project 2", 6)
        ], 7),
        new Course(3,"Chemistry", [
            new Project("Project 1", 7),
            new Project("Project 2", 8)
        ], 9)
    ])
];
console.log("🚀 ~ file: callbacks.js:80 ~ users:", users)

// Create a function that receives a user and a callback function
// The function should call the callback function with the average mark of the user
function showAverageMark(course, callback) {
    callback(course.averageMark);
}

// Create a function that shows the average mark
function showMark(mark) {
    console.log(mark);
}

// Call the function showAverageMark for each user
users.forEach(user => {
    user.courses.forEach(course => {
        console.log("🚀 ~ file: callbacks.js:99 ~ course:", course)
        showAverageMark(course, showMark);
    });
});
