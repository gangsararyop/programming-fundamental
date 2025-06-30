/**
 * Write a code to check whether the number is odd or even
 * Example: 25 → odd number, 2 → even number
 */

const inputNumber: number = 23;

if (!(inputNumber % 2)) {
  console.log(`${inputNumber} is even`);
} else {
  console.log(`${inputNumber} is odd`);
}

/**
 * Write a code to check whether the number is prime number or not
 * Example: 7 → 7 is a prime number
 * Example: 6 → 6 is not a prime number
 */

const number: number = 11;

if (number <= 1) {
  console.log(`${number} is not prime number`);
}

if (number === 2) {
  console.log(`${number} is prime number`);
}

let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log(`${number} is prime number`);
} else {
  console.log(`${number} is not prime number`);
}

/**
 * Write a code to find the sum of the numbers 1 to N
 * Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
 * Example: 3 → 1 + 2 + 3 = 6
 */

const number2 = 5;
let totalNumber = 0;

for (let i = 1; i <= number2; i++) {
  totalNumber += i; // totalNumber = totalNumber + i
}

console.log(`Total number = ${totalNumber}`);

/**
 * Write a code to find factorial of a number
 * Example: 4! → 4 x 3 x 2 x 1 = 24
 * Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
 */

const factorialNumber = 6;
let totalFactorialNumber = 1;

for (let i = factorialNumber; i > 0; i--) {
  totalFactorialNumber *= i;
}

console.log(`Total factorial number is ${totalFactorialNumber}`);

/**
 * Write a code to print the first N fibonacci numbers
 * Example: 15 → 610
 */

const fibonacciNumber = 1;
let totalFibonacciNumber = 0;

let fa = 0;
let fb = 1;

for (let i = 0; i < fibonacciNumber; i++) {
  const tempFibonacciNumber = fa + fb;

  fa = fb;
  fb = tempFibonacciNumber;
}

console.log(`Fibonacci number is ${fa}`);
