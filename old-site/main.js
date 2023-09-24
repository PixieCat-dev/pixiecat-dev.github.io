// Define the desired key sequence
const desiredSequence = ['r', 'i', 's', 'i', 'n', 'g'];
let currentSequence = [];

// Function to check if the sequence is complete
function checkSequence() {
    if (currentSequence.join('') === desiredSequence.join('')) {
        // Redirect to a page when the sequence is complete
        window.location.href = 'https://pixiecat-dev.github.io/old-site/projects/codename-rising'; // Replace with your desired URL
    }
}

// Event listener for key presses
document.addEventListener('keydown', function(event) {
    // Convert the key to lowercase for case insensitivity
    const key = event.key.toLowerCase();

    // Add the key to the current sequence
    currentSequence.push(key);

    // Keep only the last n keys in the sequence, where n is the length of the desired sequence
    currentSequence = currentSequence.slice(-desiredSequence.length);

    // Check if the sequence is complete
    checkSequence();
});
