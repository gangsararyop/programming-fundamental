// Function
// Function Declaration
function square() {
    return "aryo";
}
console.log(square());
// Function Expression
var subtraction = function (number1, number2, name) {
    if (name === void 0) { name = "Gangsar"; }
    console.log(name);
    return number1 - number2;
};
console.log(subtraction(5, 3));
var myFunc = function (a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    console.log(args);
};
console.log(myFunc("Gangsar", "Aryo", "Test 1", "Test 2", "Test 3", "Test 4"));
// Nested Fuction
function getMessage(firstName) {
    function sayHello() {
        return "Hello" + " " + firstName; // `Hello ${firstName}`
    }
    function welcomeMessage() {
        return "Welcome to Purwadhika";
    }
    return "".concat(sayHello(), " ").concat(welcomeMessage());
}
console.log(getMessage("Gangsar"));
// Closure
function greeting(name) {
    var defaultMessage = "Hello ";
    return function () {
        return defaultMessage + name;
    };
}
var greetingGangsar = greeting("Gangsar");
console.log(greetingGangsar());
function multiplier(factor) {
    return function (num) {
        return factor * num;
    };
}
console.log(multiplier(5)(3));
// Recursive
function countDown(fromNumber) {
    console.log(fromNumber);
    var nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);
// Arrow Function
// const square2 = (number: number) => {
//   return number * number;
// };
var square2 = function (number) { return number * number; };
var square3 = function (number) {
    var number2 = 1;
    return number * number2;
};
console.log(square3(2));
// isNaN
console.log(isNaN(3));
