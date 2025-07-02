// Function

// Function Declaration
function square() {
  return "aryo";
}

console.log(square());

// Function Expression
const subtraction = function (
  number1: number,
  number2: number,
  name: string = "Gangsar"
) {
  console.log(name);

  return number1 - number2;
};

console.log(subtraction(5, 3));

const myFunc = function (a: string, b: string, ...args: string[]) {
  console.log(a);
  console.log(b);
  console.log(args);
};

console.log(myFunc("Gangsar", "Aryo", "Test 1", "Test 2", "Test 3", "Test 4"));

// Nested Fuction
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello" + " " + firstName; // `Hello ${firstName}`
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }

  return `${sayHello()} ${welcomeMessage()}`;
}
console.log(getMessage("Gangsar"));

// Closure
function greeting(name: string) {
  const defaultMessage: string = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}

const greetingGangsar = greeting("Gangsar");
console.log(greetingGangsar());

function multiplier(factor: number) {
  return (num: number) => {
    return factor * num;
  };
}

console.log(multiplier(5)(3));

// Recursive
function countDown(fromNumber: number) {
  console.log(fromNumber);

  let nextNumber: number = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(5);

// Arrow Function

// const square2 = (number: number) => {
//   return number * number;
// };
const square2 = (number: number) => number * number;

const square3 = (number: number) => {
  const number2 = 1;

  return number * number2;
};

console.log(square3(2));
