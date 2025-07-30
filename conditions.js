
let favoriteColor = "red";
let guess = "red";

console.log("let's play a guessing game!");
console.log("Your guess: " + guess);

if (guess === favoriteColor) {
    console.log("Correct "  + guess + " is the favorite color!");
}else{
    console.log("Incorrect "  + guess + " is not the favorite color.");
}