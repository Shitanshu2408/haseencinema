document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo img'); // Select the logo
    const title = document.querySelector('.title'); // Select the title
    const text = "Capturing Moments, Crafting Stories..."; // Text to type out
    let isTyping = false; // Flag to prevent re-click during typing

    // Function to type out text character by character
    function typeText(text, element, delay = 100) {
        element.textContent = ""; // Clear the text initially
        let index = 0;

        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (index < text.length) {
                    element.textContent += text[index];
                    index++;
                } else {
                    clearInterval(interval); // Stop typing when done
                    resolve(); // Resolve the promise once typing is done
                }
            }, delay);
        });
    }

    // Add click event to the logo
    logo.addEventListener('click', async () => {
        if (isTyping) return; // Prevent multiple clicks during typing
        isTyping = true; // Set flag to true during typing

        await typeText(text, title, 100); // Wait until typing completes
        isTyping = false; // Reset flag after typing is done
    });
});
