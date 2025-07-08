"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    name: "Gangsar",
    age: 25,
    email: "gangsar@gmail.com",
};
var jsonObj = JSON.stringify(obj); // JSON
console.log(jsonObj);
var parsedJSON = JSON.parse(jsonObj);
console.log(parsedJSON);
exports.default = obj;
