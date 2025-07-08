/**
 * Write a code to swap the case of each character from string
 * Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
 */
var swapStr = function (str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var alp = str[i];
        if (alp === alp.toUpperCase()) {
            newStr += alp.toLowerCase();
        }
        else {
            newStr += alp.toUpperCase();
        }
    }
    return newStr;
};
console.log(swapStr("The QuiCk BrOwN Fox"));
var changeA = function (str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        var alp = str[i];
        if (alp === "a" || alp === "A") {
            newStr += "*";
        }
        else {
            newStr += alp;
        }
    }
    return newStr;
};
console.log(changeA("An apple a day keeps the doctor away"));
var isPalindrome = function (str) {
    var arrStr = str.split("");
    var reverseArrStr = arrStr.reverse();
    var reverseStr = reverseArrStr.join("");
    if (str === reverseStr) {
        return true;
    }
    return false;
};
console.log(isPalindrome("test"));
