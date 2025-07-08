// ==== Callback Function ====
// Function utama
var test = function (cb) {
    return cb();
};
// Callback function
var cb = function () {
    return "test";
};
console.log(test(cb));
// ==== Function Sequence ====
var result = "";
function greet(str) {
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
