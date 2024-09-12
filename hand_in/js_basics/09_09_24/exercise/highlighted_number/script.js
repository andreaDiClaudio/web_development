// Get the container element
const containerElement = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Create a new div element for each number
    const newDivElement = document.createElement("div");

    // Set the text content of the div to the current number
    newDivElement.textContent = i;

    // Apply the default 'number' class to each number
    newDivElement.classList.add("number");

    // Check if the number is even or odd and apply the appropriate class
    if (i % 2 === 0) {
        newDivElement.classList.add("even"); // Apply 'even' class
    } else {
        newDivElement.classList.add("odd"); // Apply 'odd' class
    }

    // Add an event listener to highlight the number when clicked
    newDivElement.addEventListener("click", () => {
        // Remove highlight from all numbers
        const allDivs = containerElement.querySelectorAll("div");
        allDivs.forEach(div => div.classList.remove("highlight"));

        // Add highlight to the clicked number
        newDivElement.classList.add("highlight");
    });

    // Append the new div to the container
    containerElement.appendChild(newDivElement);
}
