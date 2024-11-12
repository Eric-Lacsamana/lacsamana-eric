// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(number) {
    return number % 2 === 0;
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i < 10; i++) {
    console.log(`Is ${i} even?:`, isEven(i));
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
let num1 = 0;
let num2 = 0;

while(num1 >= 0 && num2 >= 0) {
     num1 = parseInt(prompt("Enter multiplicand:"));


    if (num1 >= 0) {
        num2 = parseInt(prompt("Enter multiplier:"));
        product = multiply(num1, num2);
  
        console.log('product is', product);
    }

    if (num1 < 0 || num2 < 0) {
        console.log('Entered negative number application is terminated');
    }
}


// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(string = '') {
    return string.split('').reverse().join('');
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log('Reverse string of "hello":', reverseString('hello'));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.



function countVowels(string = '') {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const arrayOfStrings = string.split('');

    for (let i = 0; i < arrayOfStrings.length; i++) {
      
        const isVowel = vowels.includes(arrayOfStrings[i]);

        if (isVowel) {
            vowelCount += 1;
        }
    }

    return vowelCount;    
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log('Vowel count of "JavaScript": ', countVowels('JavaScript'));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax (numbers  = []) {
    let maxNum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }

    return maxNum;

    // or
    // return Math.max(...numbers);
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log('Max number is:', findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(number) {
    if (number < 0) {
        return -1;
    } else if (number == 0)  {
        return 1;
    } else {
        return (number * calculateFactorial(number - 1));
    }
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log('Calculate factorial: ', calculateFactorial(5));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(string = '') {

    if (string.length <= 1) {
        return true;
    }

    if (string[0] !== string[string.length - 1]) {
        return false;
    }

    return isPalindrome(string.slice(1, string.length - 1));
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log('is palidrome? ', isPalindrome('level'))

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(numbers = []) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}
// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log('sum of array [1, 2, 3, 4, 5]:', sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log('capitalize first letter of "javascript":', capitalizeFirstLetter('javascript'));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(numbers = []) {
    return numbers.filter((number)=>  number % 2 === 0);
}
// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log('filter even numbers', filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));