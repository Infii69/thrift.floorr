function showPopup() {
    const popup = document.getElementById("popup");
    const progress = popup.querySelector(".progress");

    // Show the popup
    popup.style.display = "flex";

    // Reset animations (for consecutive additions)
    progress.style.width = "0%";
    popup.querySelector(".checkmark").style.visibility = "hidden";
    popup.querySelector(".checkmark").style.opacity = "0";

    // Trigger progress bar animation
    setTimeout(() => {
        progress.style.width = "100%";
    }, 100);

    // Show the checkmark after progress completes
    setTimeout(() => {
        popup.querySelector(".checkmark").style.visibility = "visible";
        popup.querySelector(".checkmark").style.opacity = "1";
    }, 3000);

    // Hide the popup after a delay
    setTimeout(() => {
        popup.style.display = "none";
    }, 4000);
}

// Example usage
function addToCart(itemName) {
    console.log(`${itemName} added to cart`);
    showPopup();
}
