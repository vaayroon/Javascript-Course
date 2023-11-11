// Create an interfaz  that allows us to introduce marks and show the average mark
// Validate that there are no errors
// The average mark should be take into account the mark of 2 more projects
// If the average mark is greater than 5, show a message that says "Approved"


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
    ]),
    new User(3, "Pedro", [
        new Course(4,"Programming", [
            new Project("Project 1", 5),
            new Project("Project 2", 6)
        ], 7),
        new Course(2,"English", [
            new Project("Project 1", 7),
            new Project("Project 2", 8)
        ], 9)
    ])
];
console.log("🚀 ~ file: solution10.js:76 ~ users:", users)


// get form
const form = document.getElementById("formTestId");
// get select with id selectUserId and add the users to the select
const selectUserId = document.getElementById("selectUserId");
users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.id;
    option.text = user.name;
    selectUserId.appendChild(option);
});

// add the courses from user to the select with id selectCourseId
const selectCourseId = document.getElementById("selectCourseId");
selectUserId.addEventListener("change", (event) => {
    // get the user selected
    const user = users.find(user => user.id === parseInt(event.target.value));
    // remove all the options from the select
    selectCourseId.innerHTML = "";
    // add the courses from user to the select
    user.courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.name;
        option.text = course.name;
        selectCourseId.appendChild(option);
    });
});


const inputMark = document.getElementById("examMarkId");

// crate a event listener to the form with submit event and prevent the default action
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // get the user selected
    const user = users.find(user => user.id === parseInt(selectUserId.value));
    // get the course selected
    const course = user.courses.find(course => course.name === selectCourseId.value);
    // get the mark from the input with id examMarkId from the form
    const mark = parseInt(inputMark.value);
    // validate that the mark is a number
    if (isNaN(mark)) {
        alert("The mark must be a number");
        return;
    }
    // validate that the mark is between 0 and 10
    if (mark < 0 || mark > 10) {
        alert("The mark must be between 0 and 10");
        return;
    }
    // add the mark to the course
    course.examMark = mark;
    // calculate the average mark
    course.averageMark = course.calculateAverageMark();
    // show the average mark
    alert(`The average mark is ${course.averageMark}`);
    // validate if the average mark is greater than 5
    if (course.averageMark > 5) {
        alert("Approved");
    } else {
        alert("Not Approved");
    }
});
