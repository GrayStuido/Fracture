document.addEventListener("DOMContentLoaded", function() {
    // Create a container for the HTML
    const container = document.createElement('div');

    // HTML string with scripts and stylesheet
    const htmlContent = `
        <link rel="stylesheet" href="../css/theme-index.css">
        <script src="../js/chromebookcheck.js" defer></script>
        <script src="../js/background-switcher.js" defer></script>
        <script src="../js/theme-switcher.js" defer></script>
    `;

    // Set the innerHTML of the container
    container.innerHTML = htmlContent;

    // Append the container to the head or body (adjust as needed)
    document.head.appendChild(container);
});

// auth-check.js

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = '../index.html'; // Redirect to login page if not logged in
    }
});
