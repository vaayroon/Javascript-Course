//Create a json object that contains alist of school subjects and inside subject the students who are taking that subject. The student should be an array of objects that contains student id, name and marks.

let subjects = {
    "math": [
        {
            "id": 1,
            "name": "Juan",
            "marks": 10
        },
        {
            "id": 2,
            "name": "Pedro",
            "marks": 8
        },
        {
            "id": 3,
            "name": "Maria",
            "marks": 9
        }
    ],
    "physics": [
        {
            "id": 1,
            "name": "Juan",
            "marks": 10
        },
        {
            "id": 2,
            "name": "Pedro",
            "marks": 8
        },
        {
            "id": 3,
            "name": "Maria",
            "marks": 9
        }
    ],
    "chemistry": [
        {
            "id": 1,
            "name": "Juan",
            "marks": 10
        },
        {
            "id": 2,
            "name": "Pedro",
            "marks": 8
        },
        {
            "id": 3,
            "name": "Maria",
            "marks": 9
        }
    ]
}

//Create a function that takes 2 string, the user name and the subject where the user want to enroll
//If the subject exist, add the user has less than 5 students enrolled, then add the user to the subject and return a suc
//If the subject doesn't exist, return an error message
//If the subject exist but has 5 students enrolled, return an error message
//If the user is already enrolled in the subject, return an information message

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

//Create a function that takes 2 string, the user name and the subject where the user want to remove
//If the subject exist, remove the user from the subject and return an sucess message
//If the subject doesn't exist, return an error message
//If the user is not enrolled in the subject, return an error message

function removeStudent(subject, name) {
    if (subjects.hasOwnProperty(subject)) {
        let index = subjects[subject].findIndex(x => x.name == name);
        if (index != -1) {
            subjects[subject].splice(index, 1);
            alert("The student has been removed");
            return subjects[subject];
        }
        else {
            return "The student is not enrolled in the subject";
        }
    }
    else {
        return "The subject doesn't exist";
    }
}

//Create a function to that ask the user to enter its name and the subject where the user want to enroll
//Call the function to add the user to the subject
//Print the result of the function

let username = prompt("Enter your name");
let subject = prompt("Enter the subject you want to enroll");
let response = addStudent(subject, username);
console.log(response);
alert(response);

let username2 = prompt("Enter your name");
let subject2 = prompt("Enter the subject you want to unenroll");
let response2 = removeStudent(subject2, username2);
console.log(response2);
alert(response2);