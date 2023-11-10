class Calculator {
    constructor() {
    }
    Addition(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    Subtract(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    Division(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    Multiplication(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    Square(num, exp) {
        let number = num;
        for (var i = 1; i < exp; i++) {
            number = number * num;
        }
        return number;
    }
    SquareRoot(num) {
        return Math.sqrt(num);
    }
    CubeRoot(num) {
        return Math.cbrt(num);
    }
}

const calculator = new Calculator();

alert("¿Which operation wanna do?");
let operacion = prompt("1: Add,  2: Subtract,  3: Divide,  4: Multiply,  5: Square,  6: Square Root,  7: Cube Root");

if (operacion == 1) {
    let number1 = prompt("First number to add");
    let number2 = prompt("Second number to add");
    result = calculator.Addition(number1, number2);
    alert(`The result is --> ${result}`);
}
else if (operacion == 2) {
    let number1 = prompt("First number to subtract");
    let number2 = prompt("Second number to subtract");
    result = calculator.Subtract(number1, number2)
    alert(`The result is --> ${result}`);
}
else if (operacion == 3) {
    let number1 = prompt("First number to divide");
    let number2 = prompt("Second number to divide");
    result = calculator.Division(number1, number2)
    alert(`The result is --> ${result}`);
}
else if (operacion == 4) {
    let number1 = prompt("First number to multiply");
    let number2 = prompt("Second number to multiply");
    result = calculator.Multiplication(number1, number2)
    alert(`The result is --> ${result}`);
}
else if (operacion == 5) {
    let number1 = prompt("Number to square");
    let number2 = prompt("Exponent");
    result = calculator.Square(number1, number2)
    alert(`The result is --> ${result}`);
}
else if (operacion == 6) {
    let number1 = prompt("Number to square root:");
    result = calculator.SquareRoot(number1)
    alert(`The result is --> ${result}`);
}

else if (operacion == 7) {
    let number1 = prompt("Number to cube root:");
    result = calculator.CubeRoot(number1)
    alert(`The result is --> ${result}`);
}

else {
    alert("Invalid option")
}