// Function to open overlay
function openOverlay() {
    document.getElementById('overlay').style.display = 'block';
}

// Function to close overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Add event listeners for the image and the overlay
document.getElementById('myImage').addEventListener('click', openOverlay);
document.getElementById('overlay').addEventListener('click', closeOverlay);

