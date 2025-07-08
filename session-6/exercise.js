var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var students = [
    {
        name: "Gangsar",
        email: "gangsar@gmail.com",
        age: 22,
        score: 90,
    },
    {
        name: "Aryo",
        email: "aryo@gmail.com",
        age: 20,
        score: 100,
    },
    {
        name: "Test 1",
        email: "test1@gmail.com",
        age: 30,
        score: 75,
    },
    {
        name: "Test 2",
        email: "test2@gmail.com",
        age: 25,
        score: 80,
    },
    {
        name: "Test 3",
        email: "test3@gmail.com",
        age: 19,
        score: 60,
    },
];
var calculateStudents = function (dataStudents) {
    var sortByAge = __spreadArray([], dataStudents, true).sort(function (a, b) { return a.age - b.age; });
    var sortByScore = __spreadArray([], dataStudents, true).sort(function (a, b) { return a.score - b.score; });
    var studentsLength = dataStudents.length;
    var totalAge = dataStudents.reduce(function (acc, nextVal) { return acc + nextVal.age; }, 0);
    var totalScore = dataStudents.reduce(function (acc, nextVal) { return acc + nextVal.score; }, 0);
    return {
        Score: {
            highest: sortByScore[studentsLength - 1].score,
            lowest: sortByScore[0].score,
            average: totalScore / studentsLength,
        },
        Age: {
            highest: sortByAge[studentsLength - 1].age,
            lowest: sortByAge[0].age,
            average: totalAge / studentsLength,
        },
    };
};
console.log(calculateStudents(students));
var Product = /** @class */ (function () {
    function Product(data) {
        var name = data.name, price = data.price, qty = data.qty;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return Product;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.total = 0;
        this.products = [];
    }
    Transaction.prototype.addToCart = function (data) {
        this.products.push(data);
        this.total = this.products.reduce(function (acc, nextVal) { return acc + nextVal.price; }, 0);
    };
    Transaction.prototype.totalPrice = function () {
        console.log(this.total);
    };
    Transaction.prototype.checkout = function () {
        console.log({ total: this.total, products: this.products });
    };
    return Transaction;
}());
var product1 = new Product({ name: "Air Mineral", price: 5000, qty: 5 });
var product2 = new Product({ name: "Mie Instant", price: 3000, qty: 10 });
var product3 = new Product({ name: "Bumbu Masako", price: 2500, qty: 15 });
var transaction = new Transaction();
transaction.addToCart(product1);
transaction.addToCart(product2);
transaction.addToCart(product3);
transaction.totalPrice();
transaction.checkout();
