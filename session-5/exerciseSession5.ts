// 1
const lowestHighestValue = (arr: number[]) => {
  const sortArr = arr.sort((a, b) => a - b);

  const additionalArr = arr.reduce((acc, currVal) => acc + currVal, 0);

  const lowest = sortArr[0];
  const highest = sortArr[arr.length - 1];
  const average = additionalArr / arr.length;

  return { lowest, highest, average };
};
console.log(lowestHighestValue([12, 5, 23, 18, 4, 45, 32]));

// 2
const joinArr = (arr: string[]) => {
  return arr.join(",");
};
console.log(joinArr(["apple", "banana", "cherry", "date"]));

// 3
const secSmallestNumber = (arr: number[]) => {
  const sortArr = arr.sort((a, b) => a - b);

  return sortArr[1];
};
console.log(secSmallestNumber([5, 3, 1, 7, 2, 6]));

// 4
const sumTwoArr = (arr1: number[], arr2: number[]) => {
  const newArr: number[] = [];

  arr1.forEach((el, index) => {
    const sum = el + arr2[index];

    newArr.push(sum);
  });

  return newArr;
};
console.log(sumTwoArr([1, 2, 3], [3, 2, 1]));

// 5
const addElement = (arr: number[], newElement: number) => {
  const isExist = arr.includes(newElement);

  if (!isExist) {
    arr.splice(arr.length, 0, newElement);
  }

  return arr;
};
console.log(addElement([1, 2, 3, 4], 7));
