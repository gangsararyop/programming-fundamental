var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class Declaration
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.greeting = function () {
        console.log("Hallo ");
    };
    return User;
}());
// Class Expression
var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
var user = new User();
user.greeting();
// ==== Constructor ====
var User2 = /** @class */ (function () {
    function User2() {
        this.name = "";
        this.name = "Gangsar";
    }
    User2.age = 25;
    return User2;
}());
var user2 = new User2(); // <--- Object
console.log(user2.name);
console.log(User2.age);
// ==== Getter & Setter ====
var personI = {
    firstName: "Gangsar",
    lastName: "Aryo",
    get fullName() {
        return "".concat(this.firstName, " ").concat(this.lastName);
    },
    set fullName(value) {
        var splitedValue = value.split(" ");
        this.firstName = splitedValue[0].toUpperCase();
        this.lastName = splitedValue[1].toUpperCase();
    },
};
// personI.fullName = "Purwadhika Test";
personI.fullName = "Purwadhika Test";
console.log(personI.firstName);
console.log(personI.lastName);
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeName = "";
        this.employeeName = "Gangsar";
    }
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Employee.prototype.setEmployeeName = function (newName) {
        this.employeeName = newName;
    };
    return Employee;
}());
var employee = new Employee();
employee.setEmployeeName("Aryo");
console.log(employee.getEmployeeName);
// ==== Inheritance ====
var Product = /** @class */ (function () {
    function Product() {
        this.productName;
        this.price;
    }
    return Product;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        var _this = _super.call(this) || this;
        _this.author;
        return _this;
    }
    return Book;
}(Product));
var Library = /** @class */ (function () {
    function Library() {
    }
    return Library;
}());
var book = new Book();
console.log(book.productName);
// ==== instance of ====
console.log(book instanceof Book);
console.log(book instanceof Product);
console.log(book instanceof Library);
