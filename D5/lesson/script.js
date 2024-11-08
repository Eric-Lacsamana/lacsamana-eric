// Variables

// let name = 'John';
// name = 'Paul'
// const temp = 100;

// Outputing variables
// console.log(name);
// console.log(temp);


// Basic Syntax
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);


// Primitive types: These are the most basic data types in JavaScript:
// Number: Represents numeric values. For example, 5, 3.14, -10.

// String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.

// Boolean: Represents either true or false (logical values).
// Null: Represents the intentional absence of any object value.
// Undefined: Represents an uninitialized or missing value.


// Primitive data types;
let name = "John"; //string
let age = 25; // number
let isStudent = true; // boolean
let car = null; // null
let city; // undefined

// Outputting Data Types;
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of city:", typeof city);

// Operators and Expressions
// Arithemtic Operators

let x = 5;
let y = 2;

let difference = x - y;
console.log("Difference:", difference);

let product = x * y;
console.log("Product:", product);

let quotient = x / y;
console.log("Quotient:", quotient);

let remainder = x % y;
console.log("Remainder:", remainder);

// Assignment operator
let a = 10;
let b = 5;

a += b;
console.log("a:", a);

a -=b;
console.log("a:", a);

a *= b;
console.log("a:", a);

a /= b;
console.log("a:", a);

// Comparisson operators
let p = 3;
let q = 6;

console.log("p > q:", p > q);
console.log("p < q:", p < q);
console.log("p >= q:", p >= q);
console.log("p <= q:", p <= q);
console.log("p === q:", p === q);
console.log("p === q:", p === q);
console.log("p !== q:", p !== q);

// Logical Operators
let sunny = true;
let warm = false;

console.log("True and False", sunny && warm);
console.log("True and True", sunny && sunny);
console.log("True || False", sunny && warm);
console.log("Not Trye", !sunny);