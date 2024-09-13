document.addEventListener('DOMContentLoaded', function() {
    // Check if 'premium' exists in localStorage
    const isPremium = localStorage.getItem('premium');

    // If 'premium' is not set or is set to false, display message and redirect after 3 seconds
    if (isPremium !== 'true') {
        // Create a full-screen black div
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'black';
        overlay.style.color = 'white';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.fontSize = '2em';
        overlay.style.fontFamily = 'Arial, sans-serif';
        overlay.innerText = 'This is a premium game';

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Redirect to index.html after 3 seconds
        setTimeout(function() {
            window.location.href = '';
        }, 3000);
    }
});
