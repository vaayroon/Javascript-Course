/* Create a Class called animal */

class Animals {
    constructor(species, name, age, color, legs) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.info = `The ${this.species} is called ${this.name}, it is ${this.age} years old, it is ${this.color} and has ${this.legs} legs.`;
    }

    PrintInfo() {
        document.write(this.info + "<br>");
    }

    getAnimalSpecies() {
        return this.species;
    }

    getAnimalName() {
        return this.name;
    }

    getAnimalAge() {
        return this.age;
    }

    getAnimalColor() {
        return this.color;
    }

    getAnimalLegs() {
        return this.legs;
    }
}

let dog = new Animals("Dog", "Rex", 5, "Brown", 4);
let cat = new Animals("Cat", "Felix", 2, "Black", 4);
let bird = new Animals("Bird", "Tweety", 1, "Yellow", 2);

dog.PrintInfo();
cat.PrintInfo();
bird.PrintInfo();

/* Explain: Abstraction, Modularity, Encapsulation, Polymorphism and Inheritance
    - Abstraction: Abstraction is the process of hiding the implementation details and showing only the functionality to the user.
    - Modularity: Modularity is the process of dividing a program into multiple independent modules.
    - Encapsulation: Encapsulation is the process of binding together the data and functions that manipulate them.
    - Polymorphism: Polymorphism is the ability of an object to take on many forms.
    - Inheritance: Inheritance is the process where one class acquires the properties (methods and fields) of another.
*/

/* Give examples with Animal class */

// Abstraction
class Animal {
    constructor(species, name, age, color) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.color = color;
        this.info = `The ${this.species} is called ${this.name}, it is ${this.age} years old, it is ${this.color}.`;
    }

    PrintInfo() {
        document.write(this.info + "<br>");
    }
}


// Inheritance from Animal -> Dog
document.write("<br>" + "<strong> Inheritance </strong>" + "<br>");
class Dog extends Animal {
    constructor(species, name, age, color, legs, breed) {
        super(species, name, age, color);
        this.legs = legs;
        this.breed = breed;
        this.info = `The ${this.species} is called ${this.name}, it is ${this.age} years old, it is ${this.color} and has ${this.legs} legs. It is a ${this.breed} breed.`;
    }
    Bark() {
        document.write("Woof! Woof!" + "<br>");
    }
}

let dog2 = new Dog("Dog", "Rex", 5, "Brown", 4, "Labrador");
dog2.PrintInfo();
dog2.Bark();

/* Static Methods:
    - Static methods are called without instantiating their class and cannot be called through a class instance.
    - Static methods are often used to create utility functions.
*/
document.write("<br>" + "<strong> Static Methods </strong>" + "<br>");
class StaticMethod {
    static PrintInfo() {
        document.write("This is a static method." + "<br>");
    }
}

StaticMethod.PrintInfo();

/* Getters and Setters:
    - Getters and setters are used to define methods that follow the naming convention of properties.
    - Getters and setters are important, because they hide internal class details.
    - Getters and setters can be used on computed properties.
    - Getters and setters are not called like methods. They are called like properties.
*/

document.write("<br>" + "<strong> Getters and Setters </strong>" + "<br>");
class GettersSetters {
    constructor(name) {
        this.name = name;
    }

    get GetName() {
        return this.name;
    }

    /**
     * @param {string} value
     */
    set SetName(value) {
        this.name = value;
    }
}

let gettersSetters = new GettersSetters("John");
document.write(gettersSetters.GetName + "<br>");
gettersSetters.SetName = "Peter";
document.write(gettersSetters.GetName + "<br>");