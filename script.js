document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js
window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Show the pop-up after a delay
    setTimeout(() => {
        popup.classList.add('active');
    }, 2000);

    // Close the pop-up when the button is clicked
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });
});
