// auth-check.js

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    }
});
