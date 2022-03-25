let add = (number1, number2) => number1 + number2;
let subtract = (number1, number2) => number1 - number2;
let multiply = (number1, number2) => number1 * number2;
let division = (number1, number2) => number1 / number2;

let number1 = 20;
let number2 = 10;
console.log(`${number1} + ${number2} = ${add(number1, number2)}`);
console.log(`${number1} - ${number2} = ${subtract(number1, number2)}`);
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
console.log(`${number1} / ${number2} = ${division(number1, number2)}`);