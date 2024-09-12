const duckJokes = [
    "Why did the duck get a promotion? Because he was excellent at quack-u-lations!",
    "What do you call a clever duck? A wise quacker!",
    "Why do ducks make great detectives? They always quack the case!",
    "What does a duck say when buying lipstick? Put it on my bill!",
    "Why did the duck go to therapy? He was feeling a little down!",
    "What’s a duck’s favorite ballet? The Nutquacker!",
    "How do ducks watch their favorite shows? On a duck streaming service called 'Featherflix'!",
    "Why did the duck bring an umbrella? Because it heard the forecast was going to be fowl!",
    "Why was the duck bad at basketball? He kept quacking under pressure!",
    "What does a duck eat with soup? Quackers!"
];

// Select the elements
const duckLogo = document.querySelector("img");
const marqueeElement = document.querySelector(".marquee");
const buttonElement = document.querySelector(".button");
const questionDiv = document.querySelector(".questionDiv");
const userButtonElement = document.getElementById("redirectButton")

userButtonElement.addEventListener('click', () => {
    window.location.href = 'user.html';
});

// Add event listener for button click to save input
buttonElement.addEventListener('click', () => {
    let textAreaValue = document.querySelector(".textarea").value;

    textAreaValue = `${formatDate()} - ${textAreaValue}`
    // Retrieve existing inputs from localStorage or initialize as empty array
    const savedInputs = JSON.parse(localStorage.getItem('userInputs')) || [];

    // Add the new input to the array
    savedInputs.push(textAreaValue);

    // Save the updated array back to localStorage
    localStorage.setItem('userInputs', JSON.stringify(savedInputs));

    // Create and display the new input
    const answerElement = document.createElement("p");
    answerElement.innerText = textAreaValue;
    questionDiv.appendChild(answerElement);
});

// Add event listeners for duck logo mouseover and mouseout
duckLogo.addEventListener('mouseover', () => {
    const randomNum = Math.floor(Math.random() * duckJokes.length);
    marqueeElement.innerText = duckJokes[randomNum];
});

duckLogo.addEventListener('mouseout', () => {
    marqueeElement.innerText = "";
});


//function to have the date in the format DD/MM/YYYY, hh:mm
function formatDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

// Add event listener to the button
document.querySelector('.jokeButton').addEventListener('click', fetchJoke);

// Function to fetch a joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist');
        const jokeData = await response.json();
        console.log(jokeData);

        const jokeContainer = document.querySelector('.jokeDiv');

        const jokeElement = document.createElement('p');

        // Determine the joke type and set the content
        jokeElement.innerText = jokeData.type === 'single' ?
            jokeData.joke :
            `${jokeData.setup} - ${jokeData.delivery}`;

        // Append the joke to the container
        jokeContainer.appendChild(jokeElement);
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('jokeDisplay').textContent = 'Sorry, something went wrong. Please try again later.';
    }
}


// Function to load saved inputs from localStorage and display them
function loadSavedInputs() {
    const savedInputs = JSON.parse(localStorage.getItem('userInputs')) || [];
    savedInputs.forEach(input => {
        const answerElement = document.createElement("p");
        answerElement.innerText = input;
        questionDiv.appendChild(answerElement);
    });
}

// Load and display saved inputs when the page loads
loadSavedInputs();