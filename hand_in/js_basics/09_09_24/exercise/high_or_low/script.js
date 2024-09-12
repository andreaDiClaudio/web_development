// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomly select a number between 1 and 100
const secretNumber = getRandomNumber(1, 100);

let attempts = 0;

// Get elements from the DOM
const guessInput = document.getElementById("guessInput");
const submitGuessButton = document.getElementById("submitGuess");
const feedbackElement = document.getElementById("feedback");

// Function to handle the user's guess
function handleGuess() {
    const guess = parseInt(guessInput.value, 10);

    // Validate if the guess is a number and within the range
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedbackElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    // Provide feedback to the user
    if (guess < secretNumber) {
        feedbackElement.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
        feedbackElement.textContent = "Too high! Try again.";
    } else {
        // Guess is correct
        feedbackElement.textContent = `Congratulations! You guessed the number correctly in ${attempts} attempts.`;
        // Disable the input and button after correct guess
        guessInput.disabled = true;
        submitGuessButton.disabled = true;
    }
}

// Add event listener to the button
submitGuessButton.addEventListener("click", handleGuess);
