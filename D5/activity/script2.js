const num1 = parseInt(prompt("Enter starting number:"));

const num2 = parseInt(prompt("Enter ending number:"));



for (let i = num1; i <= num2; i++) {
    if (num1 === i) {
        console.log('Starting number' , i);
    } else if (num2 === i) {
        console.log('Ending number' , i);
    } else  {
        console.log('Next number' , i);
    }
}