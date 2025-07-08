var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
// How to create an object
var obj = {}; // 1 (Most common use)
var obj1 = new Object(); // 2
var car = {
    brand: "BMW",
    model: "BMW M3",
    price: 100000000,
};
var computer = {
    ram: 4,
    vga: "NVidia",
    processor: "AMD",
    turnOn: function () { }, // <-- Method
};
var count = 0;
var article = {
    id: 2,
    name: "Gangsar ARyo",
    email: "gangsar@gmail.com",
    title: "Test",
    description: "Test",
};
var person = {
    name: "Gangsar Aryo",
    age: 25,
};
// Add property
person.hobby = "Olahraga";
console.log(person);
// Delete property
delete person.hobby;
console.log(person);
// ==== Accessing the value within object ====
console.log(person.name); // 1 <--- use for static key
console.log(person["name"]); // 2 <--- use for dynamic key
// ==== Optional Chaining ====
var customerA = {};
var customerB = {
    address: {
        name: "Jakarta",
    },
};
console.log((_a = customerA.address) === null || _a === void 0 ? void 0 : _a.name); // Undefined <--- customerA.address ? {} : undefined
console.log((_b = customerB.address) === null || _b === void 0 ? void 0 : _b.name);
// ==== Accessing Key ====
var customerC = {
    name: "Gangsar Aryo",
    email: "gangsar@gmail.com",
};
console.log(Object.keys(customerC)); // ["name", "email"] <--- array of keys
// ==== Mutable & Immutable ====
// Immutable
var firstName = "gangsar";
var newFirstName = firstName;
newFirstName = "Aryo";
console.log(firstName);
console.log(newFirstName);
// Mutable
var personA = {
    name: "Gangsar",
    age: 25,
    person1: {
        age: 30,
    },
    person2: {
        age: 20,
    },
};
var personB = personA.person2;
personB.age = 30;
console.log(personA);
console.log(personB);
// ==== For in loop ====
var personC = {
    name: "Purwadhika",
    age: 45,
};
for (var key in personC) {
    console.log(key);
    console.log(personC[key]);
}
// ==== Desctructuring assignment ====
var personD = {
    nama: "Purwadhika",
    umur: 45,
};
// const nama = personD.nama
// const umur = personD.umur
var nama = personD.nama, umur = personD.umur;
console.log(nama);
console.log(umur);
var arrPerson = ["gangsar", "aryo"];
// const namaDepan = arrPerson[0]
// const namaBelakang = arrPerson[1]
var namaDepan = arrPerson[0], namaBelakang = arrPerson[1];
console.log(namaDepan);
console.log(namaBelakang);
// ==== Spread Operator ====
var personE = {
    nama: "Purwadhika1",
    umur: 45,
};
var personEE = {
    nama: "Purwadhika2",
    email: "test@gmail.com",
};
// const personF = {  nama: "Purwadhika", umur: 45, id: 0, email: "test@gmail.com" }
var personF = __assign(__assign({}, personE), personEE);
console.log(personF);
var arrPersonA = ["gangsar", "aryo"];
var arrPersonB = ["gangsar", "aryo"];
var newArrPersonA = __spreadArray(__spreadArray([], arrPersonA, true), arrPersonB, true);
console.log(newArrPersonA);
// ==== "this" Keyword ====
var personG = {
    name: "gangsar",
    age: 25,
    greet: function () {
        console.log("Halo ".concat(this.name));
    },
};
console.log(personG.greet());
// ==== Built-in Method ====
var personH = {
    name: "gangsar",
    age: 25,
};
// el --> [key, value] --> [name, "gangsar"]
Object.entries(personH).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    console.log("".concat(key, " = ").concat(value));
});
