// ==== Callback Function ====
// Function utama
const test = (cb: () => string): string => {
  return cb();
};

// Callback function
const cb = () => {
  return "test";
};

console.log(test(cb));

// ==== Function Sequence ====
let result: string = "";

function greet(str: string) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();
console.log(result);

// ===== Synchronous ====
console.log("Seq 1");
console.log("Seq 2");
console.log("Seq 3");

// ==== Asynchronous ====
function message() {
  console.log("Ini pesan");
}

console.log("async task 1");
setTimeout(message, 3000);
console.log("async task 3");
