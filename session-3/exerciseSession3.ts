/**
 * Write a code to swap the case of each character from string
 * Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
 */

const swapStr = (str: string) => {
  let newStr = "tHE ";

  for (let i = 0; i < str.length; i++) {
    const alp = str[i];

    if (alp === alp.toUpperCase()) {
      newStr += alp.toLowerCase();
    } else {
      newStr += alp.toUpperCase();
    }
  }

  return newStr;
};

console.log(swapStr("The QuiCk BrOwN Fox"));

const changeA = (str: string) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const alp = str[i];

    if (alp === "a" || alp === "A") {
      newStr += "*";
    } else {
      newStr += alp;
    }
  }

  return newStr;
};

console.log(changeA("An apple a day keeps the doctor away"));

const isPalindrome = (str: string) => {
  const arrStr = str.split("");

  const reverseArrStr = arrStr.reverse();

  const reverseStr = reverseArrStr.join("");

  if (str === reverseStr) {
    return true;
  }

  return false;
};

console.log(isPalindrome("test"));
