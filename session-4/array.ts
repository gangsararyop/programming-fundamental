const arr = [];
const arr1 = new Array();

const arr2: string[] = ["A", "B", "C", "D", "E"];
const arr3: string[] = new Array("A", "B", "C", "D", "E");

const arrOfNum: number[] = [10, 20, 30, 40, 50];

console.log(arrOfNum[0]); // 10

const students = [
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

const arrOfStr: string[] = ["Gangsar", "Aryo"];
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
const arrOfNumber2 = [5, 3, 5, 6, 1, 6, 2];
console.log(arrOfNumber2.sort());

// Reverse
console.log(arrOfStr.reverse());

// For each
arrOfStr.forEach((el, index) => {
  console.log(`${index} - ${el}`);
});

// Map
const mapArrOfStr = arrOfStr.map((el) => {
  return `${el} 1`;
});
console.log(mapArrOfStr);

// Filter
const filterArrOfStr = arrOfStr.filter((el: string) => {
  return el.includes("Gangsar");
});
console.log(filterArrOfStr);

// Find
const findArrOfStr = arrOfStr.find((el) => {
  return el === "Gangsar 2";
});
console.log(findArrOfStr);

// Includes
console.log(arrOfStr.includes("Gangsa"));
