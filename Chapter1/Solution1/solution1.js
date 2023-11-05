// ask 3 users How much money do they have and store it in a variable
let user1Money = parseFloat(prompt("How much money do you have?"));
let user1Name = "Pepito";
let user2Money = parseFloat(prompt("How much money do you have?"));
let user2Name = "Pablito";
let user3Money = parseFloat(prompt("How much money do you have?"));
let user3Name = "Juanito";

//Create a collection of users with its money and namess to iterate
let users = [
    {name: user1Name, money: user1Money},
    {name: user2Name, money: user2Money},
    {name: user3Name, money: user3Money},
];
//create a dictionary where the prices of different types of ice-creams are stored
let iceCreams = {
    vanilla: 0.6,
    chocolate: 1,
    strawberry: 1.6,
    strawberry: 1.7,
    chocolatechip: 1.8,
    mintchocolatechip: 2.9,
};

//Check if the users has enough money to buy the ice-cream and the money the rest. Iterate overt them and print a message
//to the console if they can afford it or not
//use switch
console.log("🚀 ~ file: solution1.js:21 ~ vanilla:", iceCreams.vanilla <= user1Money && user1Money <= iceCreams.chocolate)
console.log("🚀 ~ file: solution1.js:21 ~ vanilla:", iceCreams.chocolate <= user1Money <= iceCreams.strawberry)
console.log("🚀 ~ file: solution1.js:23 ~ vanilla:", typeof(iceCreams.vanilla))
console.log("🚀 ~ file: solution1.js:23 ~ vanilla:", typeof(user1Money))

//Iterate over the users
for (let i = 0; i < users.length; i++) {
    //check if the user has enough money to buy the ice-cream
    if (iceCreams.vanilla <= users[i].money && users[i].money <= iceCreams.chocolate) {
        //if so, print a message to the console
        console.log(`${users[i].name} can buy vanilla ice-cream`);
    } else if (iceCreams.chocolate <= users[i].money && users[i].money <= iceCreams.strawberry) {
        console.log(`${users[i].name} can buy chocolate ice-cream`);
    } else if (iceCreams.strawberry <= users[i].money && users[i].money <= iceCreams.chocolatechip) {
        console.log(`${users[i].name} can buy strawberry ice-cream`);
    } else if (iceCreams.chocolatechip <= users[i].money && users[i].money <= iceCreams.mintchocolatechip) {
        console.log(`${users[i].name} can buy chocolatechip ice-cream`);
    } else if (iceCreams.mintchocolatechip <= users[i].money && users[i].money) {
        console.log(`${users[i].name} can buy mintchocolatechip ice-cream`);
    } else {
        //if not, print a message to the console
        console.log(`${users[i].name} can't buy any ice-cream`);
    }
}

