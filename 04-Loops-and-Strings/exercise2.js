// create a game where you start with any random game number, ask the user to keep guessing
// the game number until they get it right. When they get it right, congratulate them and tell them
// how many guesses it took them to get it right.

let gameNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== gameNumber) {
    guess = parseInt(prompt("Guess the game number (between 1 and 100): "), 10);
    attempts++;
    if (guess < gameNumber) {
        console.log("Too low! Try again.");
    } else if (guess > gameNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(`Congratulations! You guessed the right number in ${attempts} attempts.`);
    }
}
