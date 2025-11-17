function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
}


function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  return value.length; 
}



class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



type Boi= {
  title: string;
  rating: number;
};

function filterByRating(booksArr: Boi[]): Boi[] {
  return booksArr.filter((book: Boi): boolean => book.rating >= 4);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};


function filterActiveUsers(users: User[]): User[] {
  return users.filter((user: User): boolean => user.isActive);
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const { title, author, publishedYear, isAvailable } = book;
  
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
}


function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {

  const uniqueArr: (string | number)[] = [];

  function isPresent(
    value: string | number,
    arr: (string | number)[]
  ): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!isPresent(arr1[i], uniqueArr)) {
      uniqueArr[uniqueArr.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isPresent(arr2[i], uniqueArr)) {
      uniqueArr[uniqueArr.length] = arr2[i];
    }
  }

  return uniqueArr;
}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional (0–100)
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const baseTotal = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = (baseTotal * product.discount) / 100;
        return baseTotal - discountAmount;
      }

      return baseTotal;
    })
    .reduce((sum, price) => sum + price, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
