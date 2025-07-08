// How to create an object
const obj = {}; // 1 (Most common use)
const obj1 = new Object(); // 2

// ==== Interface ====
interface ICar {
  brand: string;
  model: string;
  price: number;
  color?: string;
}

const car: ICar = {
  brand: "BMW",
  model: "BMW M3",
  price: 100000000,
};

// ==== Type ====
type Computer = {
  ram: number;
  vga: string;
  processor: string;
  turnOn: () => void;
};

const computer: Computer = {
  ram: 4,
  vga: "NVidia",
  processor: "AMD",
  turnOn: () => {}, // <-- Method
};

type Count = Number;

const count: Count = 0;

// ==== Interface Extend ====
interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IArticle extends IUser {
  title: string;
  description: string;
}

const article: IArticle = {
  id: 2,
  name: "Gangsar ARyo",
  email: "gangsar@gmail.com",
  title: "Test",
  description: "Test",
};

// ==== Add & Delete ====
interface IPerson {
  name: string;
  age: number;
  hobby?: string;
}

const person: IPerson = {
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
const customerA = {};
const customerB = {
  address: {
    name: "Jakarta",
  },
};

console.log(customerA.address?.name); // Undefined <--- customerA.address ? {} : undefined
console.log(customerB.address?.name);

// ==== Accessing Key ====
const customerC = {
  name: "Gangsar Aryo",
  email: "gangsar@gmail.com",
};

console.log(Object.keys(customerC)); // ["name", "email"] <--- array of keys

// ==== Mutable & Immutable ====
// Immutable
let firstName = "gangsar";

let newFirstName = firstName;

newFirstName = "Aryo";

console.log(firstName);
console.log(newFirstName);

// Mutable
let personA = {
  name: "Gangsar",
  age: 25,
  person1: {
    age: 30,
  },
  person2: {
    age: 20,
  },
};

let personB = personA.person2;

personB.age = 30;

console.log(personA);
console.log(personB);

// ==== For in loop ====
const personC = {
  name: "Purwadhika",
  age: 45,
};

for (let key in personC) {
  console.log(key);

  console.log(personC[key]);
}

// ==== Desctructuring assignment ====
const personD = {
  nama: "Purwadhika",
  umur: 45,
};

// const nama = personD.nama
// const umur = personD.umur
const { nama, umur } = personD;

console.log(nama);
console.log(umur);

const arrPerson = ["gangsar", "aryo"];

// const namaDepan = arrPerson[0]
// const namaBelakang = arrPerson[1]
const [namaDepan, namaBelakang] = arrPerson;

console.log(namaDepan);
console.log(namaBelakang);

// ==== Spread Operator ====
const personE = {
  nama: "Purwadhika1",
  umur: 45,
};

const personEE = {
  nama: "Purwadhika2",
  email: "test@gmail.com",
};

// const personF = {  nama: "Purwadhika", umur: 45, id: 0, email: "test@gmail.com" }
const personF = { ...personE, ...personEE };
console.log(personF);

const arrPersonA = ["gangsar", "aryo"];
const arrPersonB = ["gangsar", "aryo"];

const newArrPersonA = [...arrPersonA, ...arrPersonB];
console.log(newArrPersonA);

// ==== "this" Keyword ====
const personG = {
  name: "gangsar",
  age: 25,
  greet() {
    console.log(`Halo ${this.name}`);
  },
};
console.log(personG.greet());

// ==== Built-in Method ====
const personH = {
  name: "gangsar",
  age: 25,
};

// el --> [key, value] --> [name, "gangsar"]
Object.entries(personH).forEach(([key, value]: (string | number)[]) => {
  console.log(`${key} = ${value}`);
});
