What are some differences between interfaces and types in TypeScript?

TypeScript এর Type হলো বিভিন্ন ডেটার ধরন (type) কীভাবে ব্যবহার হবে— সে বিষয়টা নিয়ন্ত্রণ করে।

Type মূলত তিন ভাগে ভাগ করা:
১। Any Type
২।Built-In Type
৩।User-Defined Type

Type নিশ্চিত করে যে প্রোগ্রামে ভুল ডেটা ব্যবহার না হয়।

Type এ Unions(|) এবং intersection(&) ব্যবহার করা যায়

Same নামে conflict error দেয়

উদাহরণ:

type User = {
name: string,
age: number;
}

type UserMore = {
id: string,
role: string;
}

type CombinedUser = User & UserMore;

const user: CombinedUser = {
name: "Md. Fahad Hasan",
age: 24,
role: "Developer"
};

Interface হলো এক ধরনের নিয়ম বা চুক্তি।
যেখানে শুধু property, method, event-এর নাম লেখা হয়— কিন্তু implementation থাকে না।

Interface সেই structure সেট করে দেয় যেটা class বা object কে follow করতে হবে।

implements, extends ব্যবহার করা যায়

same নামে merge হয়ে যায়

উদাহরণ:

interface User {
name: string;
age: number;
}

interface User {
id: string;
role: string;
}

const user: User = {
name: "Md. Fahad Hasan",
age: 24,
id: "123",
role: "Developer"
};

Provide an example of using union and intersection types in TypeScript.

Union type মানে একটা ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটিকে ধারণ করতে পারে।

উদাহরণ:

type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
console.log("Current Status:", status);
}

showStatus("success");
showStatus("error");
showStatus("loading");

Intersection type মানে দুই বা তার বেশি type এর সবগুলো property মিলিয়ে একটি নতুন টাইপ তৈরি করা।

উদাহরণ:

type User = {
name: string;
age: number;
};

type Account = {
email: string;
role: string;
};

type FullUser = User & Account;

const user: FullUser = {
name: "Md. Fahad Hasan",
age: 24,
email: "fahad@gmail.com",
role: "Developer",
};
