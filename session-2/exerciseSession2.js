/**
 * Write a code to check whether the number is odd or even
 * Example: 25 → odd number, 2 → even number
 */
var inputNumber = 23;
if (!(inputNumber % 2)) {
    console.log("".concat(inputNumber, " is even"));
}
else {
    console.log("".concat(inputNumber, " is odd"));
}
/**
 * Write a code to check whether the number is prime number or not
 * Example: 7 → 7 is a prime number
 * Example: 6 → 6 is not a prime number
 */
var number = 11;
if (number <= 1) {
    console.log("".concat(number, " is not prime number"));
}
if (number === 2) {
    console.log("".concat(number, " is prime number"));
}
var isPrime = true;
for (var i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}
if (isPrime) {
    console.log("".concat(number, " is prime number"));
}
else {
    console.log("".concat(number, " is not prime number"));
}
/**
 * Write a code to find the sum of the numbers 1 to N
 * Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
 * Example: 3 → 1 + 2 + 3 = 6
 */
var number2 = 5;
var totalNumber = 0;
for (var i = 1; i <= number2; i++) {
    totalNumber += i; // totalNumber = totalNumber + i
}
console.log("Total number = ".concat(totalNumber));
/**
 * Write a code to find factorial of a number
 * Example: 4! → 4 x 3 x 2 x 1 = 24
 * Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
 */
var factorialNumber = 6;
var totalFactorialNumber = 1;
for (var i = factorialNumber; i > 0; i--) {
    totalFactorialNumber *= i;
}
console.log("Total factorial number is ".concat(totalFactorialNumber));
/**
 * Write a code to print the first N fibonacci numbers
 * Example: 15 → 610
 */
var fibonacciNumber = 1;
var totalFibonacciNumber = 0;
var fa = 0;
var fb = 1;
for (var i = 0; i < fibonacciNumber; i++) {
    var tempFibonacciNumber = fa + fb;
    fa = fb;
    fb = tempFibonacciNumber;
}
console.log("Fibonacci number is ".concat(fa));
function multiplier(factor, number) {
    return number * factor;
}
var mul = multiplier(3);
console.log(mul(5));
