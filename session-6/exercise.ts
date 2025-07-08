// Exercise 1
interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

const students: Student[] = [
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

const calculateStudents = (dataStudents: Student[]) => {
  const sortByAge = [...dataStudents].sort((a, b) => a.age - b.age);
  const sortByScore = [...dataStudents].sort((a, b) => a.score - b.score);

  const studentsLength = dataStudents.length;

  const totalAge = dataStudents.reduce((acc, nextVal) => acc + nextVal.age, 0);
  const totalScore = dataStudents.reduce(
    (acc, nextVal) => acc + nextVal.score,
    0
  );

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

// Exercise 2

interface IProduct {
  name: string;
  price: number;
  qty?: number;
}

interface ITransaction {
  total: number;
  product: Product[];
}

class Product {
  name: string;
  price: number;
  qty?: number;

  constructor(data: IProduct) {
    const { name, price, qty } = data;

    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Transaction {
  total: number;
  products: IProduct[];

  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(data: IProduct) {
    this.products.push(data);

    this.total = this.products.reduce((acc, nextVal) => acc + nextVal.price, 0);
  }

  totalPrice() {
    console.log(this.total);
  }

  checkout() {
    console.log({ total: this.total, products: this.products });
  }
}

const product1 = new Product({ name: "Air Mineral", price: 5000, qty: 5 });
const product2 = new Product({ name: "Mie Instant", price: 3000, qty: 10 });
const product3 = new Product({ name: "Bumbu Masako", price: 2500, qty: 15 });

const transaction = new Transaction();
transaction.addToCart(product1);
transaction.addToCart(product2);
transaction.addToCart(product3);

transaction.totalPrice();
transaction.checkout();
