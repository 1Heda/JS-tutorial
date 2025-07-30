
// let favoriteColor = "red";
// let guess = "red";

// console.log("let's play a guessing game!");
// console.log("Your guess: " + guess);

// if (guess === favoriteColor) {
//     console.log("Correct "  + guess + " is the favorite color!");
// }else{
//     console.log("Incorrect "  + guess + " is not the favorite color.");
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function guessColor() {
//   rl.question("Guess my favorite color: ", (guess) => {
//     if (guess.toLowerCase() === "red") {
//       console.log("Correct! " + guess + " is my favorite color!");
//       rl.close();
//     } else {
//       console.log("Incorrect! " + guess + " is not my favorite color.\n");
//       rl.close();
      
//     }
    
//   });
// }

// guessColor(); // Start the guessing game


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) +1; // Random number between 1 and 10

function guessNumber() {
    rl.question("Guess a number between 1 and 10: ", (input) => {
        const guess = parseInt(input);
        if(isNaN(guess)){
            console.log("PLease Enter a valid number.");
            guessNumber(); // Ask again
        }else if (guess < secretNumber) {
            console.log("Too low! Try again.");
            guessNumber(); // Ask again
        }
        else if (guess > secretNumber) {
            console.log("Too high! Try again.");
            guessNumber(); // Ask again
        }
        else {
            console.log("Correct! The secret number was " + secretNumber );
            rl.close(); // Close the readline interface
        }
    });
}