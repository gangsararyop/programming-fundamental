// 1
var lowestHighestValue = function (arr) {
    var sortArr = arr.sort(function (a, b) { return a - b; });
    var additionalArr = arr.reduce(function (acc, currVal) { return acc + currVal; }, 0);
    var lowest = sortArr[0];
    var highest = sortArr[arr.length - 1];
    var average = additionalArr / arr.length;
    return { lowest: lowest, highest: highest, average: average };
};
console.log(lowestHighestValue([12, 5, 23, 18, 4, 45, 32]));
// 2
var joinArr = function (arr) {
    return arr.join(",");
};
console.log(joinArr(["apple", "banana", "cherry", "date"]));
// 3
var secSmallestNumber = function (arr) {
    var sortArr = arr.sort(function (a, b) { return a - b; });
    return sortArr[1];
};
console.log(secSmallestNumber([5, 3, 1, 7, 2, 6]));
// 4
var sumTwoArr = function (arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (el, index) {
        var sum = el + arr2[index];
        newArr.push(sum);
    });
    return newArr;
};
console.log(sumTwoArr([1, 2, 3], [3, 2, 1]));
// 5
var addElement = function (arr, newElement) {
    var isExist = arr.includes(newElement);
    if (!isExist) {
        arr.splice(arr.length, 0, newElement);
    }
    return arr;
};
console.log(addElement([1, 2, 3, 4], 7));
