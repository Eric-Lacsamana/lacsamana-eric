// Activity 2: Exploring ES6 Features

// In the JavaScript file, write code to perform the following tasks using common JS built-in methods. (act2.html, script2.js)

// script2.js

// Activity: Exploring ES6 Features

// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const calculateSquareRoot = (num) => num * num;
console.log(calculateSquareRoot(5));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = 'Alice';
const age = 25;
const greet = `My name is ${name} and I am ${age} years old`;
console.log(greet);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: 'Alice',
    lastName: 'Margatroid',
}
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = ['apple', 'banana', 'mango'];
const array2 = ['strawberry', 'lemon', 'kiwi'];
const combinedArray = [...array1, array2];

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateArea = (length = 0, width = 0) => length * width;
console.log(calculateArea(5, 10));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

class Person  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }
}

const personInstance = new Person(name, age);

console.log(personInstance.introduce());