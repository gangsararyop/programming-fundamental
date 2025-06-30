// && -> and
// || -> or
// ! -> not
var car = "Honda";
if (car === "BMW" || car === "Toyota") {
    console.log("1. This car is awesome");
}
var car1 = "Honda";
var car2 = "Toyota";
if (car1 === "BMW" && car2 === "Toyota") {
    console.log("2.This car is awesome");
}
if (!(car == "Honda")) {
    console.log("3. This car is awesome");
}
// Short-circuiting
var shortCircuitingVal = "";
var result = shortCircuitingVal && "Truthy Value";
console.log(result);
var myName = "";
var result2 = myName || "";
console.log(result2);
