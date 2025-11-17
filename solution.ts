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
