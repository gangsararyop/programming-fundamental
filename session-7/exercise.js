var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var modifyArr = function (arr1, arr2) {
    var mergedArr = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    var newArr = [];
    mergedArr.forEach(function (el) {
        var isExist = newArr.find(function (el1) { return el.email === el1.email; });
        if (!isExist) {
            newArr.push(el);
        }
    });
    return newArr;
};
console.log(modifyArr([
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
], [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
]));
var switchProps = function (data) {
    return data.map(function (el) {
        var newObj = {};
        Object.entries(el).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!newObj[value]) {
                newObj[value] = key;
            }
        });
        return newObj;
    });
};
// console.log(switchProps([{ name: "David", age: 20 }]));
// Exercise 3
var factorial = function (num) {
    if (num === 0)
        return 1;
    if (num > 1) {
        num = num * factorial(num - 1);
    }
    return num;
};
console.log(factorial(2));
