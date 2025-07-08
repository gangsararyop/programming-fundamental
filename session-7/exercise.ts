interface IStudent {
  name: string;
  email: string;
}

const modifyArr = (arr1: IStudent[], arr2: IStudent[]) => {
  const mergedArr = [...arr1, ...arr2];

  const newArr: IStudent[] = [];

  mergedArr.forEach((el: IStudent) => {
    const isExist = newArr.find((el1: IStudent) => el.email === el1.email);

    if (!isExist) {
      newArr.push(el);
    }
  });

  return newArr;
};

console.log(
  modifyArr(
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
    ],
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 3", email: "student3@mail.com" },
    ]
  )
);

// Exercise 2
interface IUser {
  name: string;
  age: number;
}

const switchProps = (data: IUser[]) => {
  return data.map((el) => {
    const newObj = {};

    Object.entries(el).forEach(([key, value]) => {
      if (!newObj[value]) {
        newObj[value] = key;
      }
    });

    return newObj;
  });
};

// console.log(switchProps([{ name: "David", age: 20 }]));

// Exercise 3
const factorial = (num: number) => {
  if (num === 0) return 1;

  if (num > 1) {
    num = num * factorial(num - 1);
  }

  return num;
};

console.log(factorial(2));
