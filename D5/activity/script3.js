// Activity 3: Guess the Secret Number
// Open your JavaScript development environment or console.
// Declare a variable named secretNumber and assign it a random integer between 1 and 10 
// Declare a variable named attempts and set it to 0. This variable will keep track of the number of attempts made by the player.
// Declare a variable named guessedNumber to store the player's guesses.
// Display a welcome message to the player using console.log().
// Start a do-while loop to repeatedly ask the player for their guess until they guess the correct number.
// Inside the loop, prompt the player to enter their guess using prompt() function and store it in the guessedNumber variable.
// Use an if statement to check if the guessedNumber is lower than the secretNumber.
// If it is lower, display the message "Too low! Try again." using console.log().
// Use an else if statement to check if the guessedNumber is higher than the secretNumber.
// If it is higher, display the message "Too high! Try again." using console.log().
// Use an else statement to handle the case when the guessedNumber matches the secretNumber.
// Display the message "Congratulations! You guessed the correct number: [secretNumber]" using console.log().
// Display the message "It took you [attempts] attempts." to let the player know how many attempts they took.
// Increment the attempts variable by 1.
// Repeat steps 7-11 until the guessedNumber matches the secretNumber.
// End the game.

const secretNumber = 7;
let attempts = 0;
let guessedNumber;

console.log('Welcome to guessing number game')
do {
    guessedNumber = parseInt(prompt("Enter number from 1 to 10:"))


    if (guessedNumber > secretNumber) {
        console.log('Too high! Try again.');
    } else if (guessedNumber < secretNumber) {
        console.log('Too low! Try again.')
    } else if (guessedNumber === secretNumber) {
        console.log('It took you '+ attempts + ' attempts');
    } else if (guessedNumber === secretNumber) {
        console.log('Congratulations! You guessed the correct number: ' + secretNumber)
    }
    attempts++
} while (guessedNumber !== secretNumber);
