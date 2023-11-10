/* Create a solution for a party:
    - Only the persons who are 21 or older can drink alcohol and enter the party.
    - Only the persons who are 18 or older can enter the party.
    - If the person enter after 2AM and before 8AM, the person enter free.
    - Take the time from system.
*/

let ageAsked = parseInt(prompt('How old are you?', 19));
let timeAsked = parseInt(prompt('What time is it?', 24));

let ageValidator = (age, time) => {
    console.log("🚀 ~ file: solution2.js:13 ~ ageValidator ~ age:", age)
    console.log("🚀 ~ file: solution2.js:18 ~ ageValidator ~ time:", time)
    if (age < 18) {
        document.write('You are too young to enter the party. <br>');
    } else if (age >= 18 && age < 21) {
        document.write('You can enter, but you can not drink alcohol. <br>');
        timeValidator(time);
    } else if (age >= 21) {
        document.write('You can enter and drink alcohol. <br>');
        timeValidator(time);
    }
}

let timeValidator = (time) => {
    if (time >= 2 && time < 8) {
        document.write('You can enter free. <br>');
    } else {
        document.write('You can not enter free. <br>');
    }
}

ageValidator(ageAsked, timeAsked);
/* ageAsked = prompt('How old are you?', 19);
timeAsked = prompt('What time is it?', 24);
ageValidator(ageAsked, timeAsked);
ageAsked = prompt('How old are you?', 19);
timeAsked = prompt('What time is it?', 24);
ageValidator(ageAsked, timeAsked); */