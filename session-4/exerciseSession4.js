/**
 * Create a function that can create a triangle pattern according to the height we provide like the following :
 * 01
 * 02  03
 * 04  05  06
 * 07  08  09  10
 *
 * Parameters : height → triangle height
 */
var triangleNumber = function (height) {
    var number = 1;
    // Row
    for (var i = 1; i <= height; i++) {
        var columns = "";
        // Column
        for (var ii = 1; ii <= i; ii++) {
            if (number < 10) {
                columns += "0".concat(number, " ");
            }
            else {
                columns += "".concat(number, " ");
            }
            number++;
        }
        console.log(columns);
    }
};
triangleNumber(6);
/**
 * Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
 * Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
 */
var removeOddNumbers = function (arr) {
    return arr.filter(function (el) { return el % 2 === 0; });
};
console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
