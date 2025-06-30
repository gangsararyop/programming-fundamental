// && -> and
// || -> or
// ! -> not

const car: string = "Honda";

if (car === "BMW" || car === "Toyota") {
  console.log("1. This car is awesome");
}

const car1: string = "Honda";
const car2: string = "Toyota";

if (car1 === "BMW" && car2 === "Toyota") {
  console.log("2.This car is awesome");
}

if (!(car == "Honda")) {
  console.log("3. This car is awesome");
}

// ==== Short-circuiting ====
const shortCircuitingVal: string = "test";
const result: string = shortCircuitingVal && "Truthy Value";
console.log(result);

const myName: string = "";
const result2: string = myName || "Guest";
console.log(result2);
