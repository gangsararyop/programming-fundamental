/**
 * 1
 * Write a function to get the lowest, highest and average value in the array (with and without sort function).
 * Example : arr = [12, 5, 23, 18, 4, 45, 32]  → {lowest : 4, highest: 45, average: 19.8xxx}
 */
const lowestHighestValue1 = function (arr: number[]) {
  const sortArr = arr.sort(function (a: number, b: number) {
    return a - b;
  }); // Sort ascending

  const accumulateArr = arr.reduce(function (acc, currValue) {
    return acc + currValue;
  }, 0);

  const lowest = sortArr[0];
  const highest = sortArr[arr.length - 1]; // To get last index of array
  const average = accumulateArr / arr.length;

  return { lowest: lowest, highest: highest, average: average };
};
console.log(lowestHighestValue1([5, 12, 23, 18, 4, 45, 32]));

/**
 * 2
 * Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */
const concatWords = (arr: string[]) => {
  //   let test = "date";
  //   test = "and date";
  //   console.log(test); // "and date"

  if (arr.length > 1) {
    arr[arr.length - 1] = `and ${arr[arr.length - 1]}`; // "date" -> "and date"
  }

  return arr.join(", ");
};
console.log(concatWords(["apple", "banana", "cherry", "date"]));

/**
 * 3
 * Write a function from a given array of numbers and return the second smallest number
 * Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */
const secondLowestNumber = (arr: number[]) => {
  const sortArr = arr.sort(function (a: number, b: number) {
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
const sumTwoArr1 = (arr1: number[], arr2: number[]) => {
  const newArr: number[] = [];

  arr1.forEach((el, index) => {
    const sum = el + arr2[index];

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
const addNewElement = (arr: number[], newElement: number) => {
  const isElementExist = arr.includes(newElement);

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
const sumAllNumber = (mixedArr: any[]) => {
  let sum = 0;

  mixedArr.forEach((el) => {
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
const intToArr = (maxSize: number, ...args: number[]) => {
  return args.slice(0, maxSize);
};
console.log(intToArr(5, 5, 10, 24, 3, 6, 7, 8));

/**
 * 8
 * Write a function that will combine 2 given array into one array
 * Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
 */
const combineTwoArr = (arr1: number[], arr2: number[]) => {
  return arr2.concat(arr1);
};
console.log(combineTwoArr([1, 2, 3], [4, 5, 6]));

/**
 * 9
 * Write a function to find duplicate values in an array
 * Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
 */
const duplicateArr = (arr: number[]) => {
  const newArr: number[] = [];

  arr.forEach((el) => {
    const filterArr = arr.filter((el1) => el1 === 4); // [2, 2, 2]

    if (filterArr.length > 1) {
      const isExist = newArr.includes(el);

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
const findDiffTwoArr = (arr1: number[], arr2: number[]) => {
  const newArr: number[] = [];

  const mergedArr = arr1.concat(arr2);

  mergedArr.forEach((el) => {
    const filterArr = mergedArr.filter((el1) => el1 === el); // [1]

    if (filterArr.length === 1) {
      const isExist = newArr.includes(el);

      if (!isExist) {
        newArr.push(el);
      }
    }
  });

  return newArr;
};
console.log(findDiffTwoArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
