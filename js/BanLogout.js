document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    // Object to store banned users with their usernames as keys
    const bannedUsers = {
        "uhyeah": true,
        "1234": true,
        "1234": true,
        "1234": true,
        "1234": true,
        "1234": true,
        "1234": true
    };

    if (loggedInUser && bannedUsers.hasOwnProperty(loggedInUser)) {
        localStorage.setItem('loggedInUser', 'banned');
        localStorage.removeItem('loggedInUser');
        location.reload();
    }
});
