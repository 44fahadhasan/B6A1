type FormatValueT = string | number | boolean;

function formatValue(value: FormatValueT): FormatValueT | undefined {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
}

type GetLengthT = string | number[];

function getLength(value: GetLengthT): number | undefined {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${[this.name]}, Age: ${[this.age]}'`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

type BookT = {
  title: string;
  rating: number;
};

function filterByRating(array: BookT[]): BookT[] {
  return array.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type UserT = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: UserT[]): UserT[] {
  return users.filter((user) => user.isActive);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const isAvailable = book.isAvailable ? "Yes" : "No";
  const bookDetails = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${isAvailable}`;

  console.log(bookDetails);
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

type UniqueValuesT = (string | number)[];

function getUniqueValues(
  array1: UniqueValuesT,
  array2: UniqueValuesT
): UniqueValuesT {
  const mergedArray = [...array1, ...array2];
  const uniqueValues = new Set(mergedArray);
  return [...uniqueValues];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

type ProductT = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: ProductT[]): number {
  if (!products.length) return 0;

  const totalPrice = products.reduce((total, product) => {
    let eachProductTotal = product.price * product.quantity;

    if (product.discount) {
      eachProductTotal =
        eachProductTotal - (eachProductTotal * product.discount) / 100;
    }

    return total + eachProductTotal;
  }, 0);

  return totalPrice;
}

const products: ProductT[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
