// Function to create a falling character
function createFallingCharacter() {
    const characters = "01?";
    const fontSize = Math.floor(Math.random() * 18) + 12; // Random font size between 12 and 36 pixels
    const horizontalSpread = 100; // Adjust the horizontal spread as needed
    const verticalSpacing = 70; // Adjust the vertical spacing as needed

    const characterCount = Math.floor(Math.random() * 30) + 1; // Generate 1 to 10 characters in each interval

    for (let i = 0; i < characterCount; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        const leftPosition = Math.random() * horizontalSpread; // Random horizontal position within the specified spread
        const element = document.createElement("div");
        element.textContent = character;
        element.style.fontSize = fontSize + "px";
        element.style.left = leftPosition + "vw";
        element.style.position = "absolute";
        element.style.top = -i * verticalSpacing + "px"; // Apply vertical spacing
        document.querySelector(".matrix-fall").appendChild(element);

        // Remove the character element when it reaches the bottom
        setTimeout(() => {
            element.remove();
        }, 5000); // Remove after 5 seconds (adjust as needed)
    }
}

// Create falling characters at a faster interval
setInterval(createFallingCharacter, 50); // Adjust the interval as needed
