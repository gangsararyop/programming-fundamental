// Class Declaration
class User {
  greeting() {
    console.log("Hallo ");
  }
}

// Class Expression
const User1 = class {};

const user = new User();
user.greeting();

// ==== Constructor ====
class User2 {
  name: string = "";

  static age: number = 25;

  constructor() {
    this.name = "Gangsar";
  }
}

const user2 = new User2(); // <--- Object
console.log(user2.name);
console.log(User2.age);

// ==== Getter & Setter ====
const personI = {
  firstName: "Gangsar",
  lastName: "Aryo",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value: string) {
    const splitedValue = value.split(" ");

    this.firstName = splitedValue[0].toUpperCase();
    this.lastName = splitedValue[1].toUpperCase();
  },
};

// personI.fullName = "Purwadhika Test";
personI.fullName = "Purwadhika Test";
console.log(personI.firstName);
console.log(personI.lastName);

class Employee {
  employeeName: string = "";

  constructor() {
    this.employeeName = "Gangsar";
  }

  getEmployeeName() {
    return this.employeeName;
  }

  setEmployeeName(newName: string) {
    this.employeeName = newName;
  }
}

const employee = new Employee();
employee.setEmployeeName("Aryo");

console.log(employee.getEmployeeName);

// ==== Inheritance ====
class Product {
  productName: string;
  price: number;

  constructor() {
    this.productName;
    this.price;
  }
}

class Book extends Product {
  author: string;

  constructor() {
    super();
    this.author;
  }
}

class Library {}

const book = new Book();
console.log(book.productName);

// ==== instance of ====
console.log(book instanceof Book); // true
console.log(book instanceof Product); // true
console.log(book instanceof Library); // false
