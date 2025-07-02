/**
 * 1
 * Write a function to get the lowest, highest and average value in the array (with and without sort function).
 * Example : arr = [12, 5, 23, 18, 4, 45, 32]  → {lowest : 4, highest: 45, average: 19.8xxx}
 */
var lowestHighestValue1 = function (arr) {
    var sortArr = arr.sort(function (a, b) {
        return a - b;
    }); // Sort ascending
    var accumulateArr = arr.reduce(function (acc, currValue) {
        return acc + currValue;
    }, 0);
    var lowest = sortArr[0];
    var highest = sortArr[arr.length - 1]; // To get last index of array
    var average = accumulateArr / arr.length;
    return { lowest: lowest, highest: highest, average: average };
};
console.log(lowestHighestValue1([5, 12, 23, 18, 4, 45, 32]));
/**
 * 2
 * Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */
var concatWords = function (arr) {
    //   let test = "date";
    //   test = "and date";
    //   console.log(test); // "and date"
    if (arr.length > 1) {
        arr[arr.length - 1] = "and ".concat(arr[arr.length - 1]); // "date" -> "and date"
    }
    return arr.join(", ");
};
console.log(concatWords(["apple", "banana", "cherry", "date"]));
/**
 * 3
 * Write a function from a given array of numbers and return the second smallest number
 * Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */
var secondLowestNumber = function (arr) {
    var sortArr = arr.sort(function (a, b) {
        return a - b;
    });
    return sortArr[1];
};
console.log(secondLowestNumber([5, 3, 1, 7, 2, 6]));
/**
 * 4
 * Write a function to calculate each element in the same position from two arrays of integer.
 * Assume both arrays are of the same length.
 * Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
 */
var sumTwoArr1 = function (arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (el, index) {
        var sum = el + arr2[index];
        newArr.push(sum);
    });
    return newArr;
};
console.log(sumTwoArr1([1, 2, 3], [3, 2, 1]));
/**
 * 5
 * Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
 * Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
 * Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
 */
var addNewElement = function (arr, newElement) {
    var isElementExist = arr.includes(newElement);
    if (!isElementExist) {
        arr.push(newElement);
    }
    return arr;
};
console.log(addNewElement([1, 2, 3, 4], 7));
/**
 * 6
 * Write a function from a given array of mixed data types and return the sum of all the number
 * Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */
var sumAllNumber = function (mixedArr) {
    var sum = 0;
    mixedArr.forEach(function (el) {
        if (typeof el === "number") {
            sum += el;
        }
    });
    return sum;
};
console.log(sumAllNumber(["3", 1, "string", null, false, undefined, 2]));
/**
 * 7
 * Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
 * Example :
    maxSize = 5, given integers is 5, 10, 24, 3, 6, 7,8
    The function will return [5, 10, 24, 3, 6]
 */
var intToArr = function (maxSize) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.slice(0, maxSize);
};
console.log(intToArr(5, 5, 10, 24, 3, 6, 7, 8));
/**
 * 8
 * Write a function that will combine 2 given array into one array
 * Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */
var combineTwoArr = function (arr1, arr2) {
    return arr2.concat(arr1);
};
console.log(combineTwoArr([1, 2, 3], [4, 5, 6]));
/**
 * 9
 * Write a function to find duplicate values in an array
 * Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */
var duplicateArr = function (arr) {
    var newArr = [];
    arr.forEach(function (el) {
        var filterArr = arr.filter(function (el1) { return el1 === 4; }); // [2, 2, 2]
        if (filterArr.length > 1) {
            var isExist = newArr.includes(el);
            if (!isExist) {
                newArr.push(el);
            }
        }
    });
    return newArr;
};
console.log(duplicateArr([1, 2, 2, 2, 3, 3, 4, 5, 5]));
/**
 * 10
 * Write a function to find the difference in 2 given array
 * Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
 */
var findDiffTwoArr = function (arr1, arr2) {
    var newArr = [];
    var mergedArr = arr1.concat(arr2);
    mergedArr.forEach(function (el) {
        var filterArr = mergedArr.filter(function (el1) { return el1 === el; });
        if (filterArr.length === 1) {
            var isExist = newArr.includes(el);
            if (!isExist) {
                newArr.push(el);
            }
        }
    });
    return newArr;
};
console.log(findDiffTwoArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
