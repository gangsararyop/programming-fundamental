var arr = [];
var arr1 = new Array();
var arr2 = ["A", "B", "C", "D", "E"];
var arr3 = new Array("A", "B", "C", "D", "E");
var arrOfNum = [10, 20, 30, 40, 50];
console.log(arrOfNum[0]); // 10
var students = [
    {
        name: "Student 1",
        email: "student1@gmail.com",
    },
    {
        name: "Student 2",
        email: "student2@gmail.com",
    },
];
// ==== Built-in Methods Array ====
var arrOfStr = ["Gangsar", "Aryo"];
console.log(arrOfStr);
// Join
console.log(arrOfStr.join(" "));
// Pop
arrOfStr.pop();
console.log(arrOfStr); // ["Gangsar"]
// Push
arrOfStr.push("Purwadhika");
console.log(arrOfStr); // ["Gangsar", "Purwadhika"]
// Length
console.log(arrOfStr.length); // 2
// Splice
arrOfStr.splice(1, 0, "Aryo");
console.log(arrOfStr);
arrOfStr.splice(1, 1, "Gangsar 2");
console.log(arrOfStr);
// Slice
console.log(arrOfStr.slice(1, 3));
// Sort
var arrOfNumber2 = [5, 3, 5, 6, 1, 6, 2];
console.log(arrOfNumber2.sort());
// Reverse
console.log(arrOfStr.reverse());
// For each
arrOfStr.forEach(function (el, index) {
    console.log("".concat(index, " - ").concat(el));
});
// Map
var mapArrOfStr = arrOfStr.map(function (el) {
    return "".concat(el, " 1");
});
console.log(mapArrOfStr);
// Filter
var filterArrOfStr = arrOfStr.filter(function (el) {
    return el.includes("Gangsar");
});
console.log(filterArrOfStr);
// Find
var findArrOfStr = arrOfStr.find(function (el) {
    return el === "Gangsar 2";
});
console.log(findArrOfStr);
// Includes
console.log(arrOfStr.includes("Gangsa"));
