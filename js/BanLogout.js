document.addEventListener('DOMContentLoaded', function() {
    try {
        const loggedInUser = localStorage.getItem('loggedInUser');

        // Check if localStorage is accessible
        if (loggedInUser === null) {
            console.warn('No user is currently logged in.');
            return;
        }

        // Object to store banned users
        const bannedUsers = {
            "uhyeah": true,
            "1234": true,
            // Removed duplicates from the original banned list
        };

        // Check if the loggedInUser is banned
        if (typeof loggedInUser === 'string' && loggedInUser.trim() !== '') {
            if (bannedUsers.hasOwnProperty(loggedInUser)) {
                console.warn(`User "${loggedInUser}" is banned. Logging out...`);
                localStorage.setItem('loggedInUser', 'banned');
                localStorage.removeItem('loggedInUser');
                location.reload();
            } else {
                console.log(`User "${loggedInUser}" is not banned.`);
            }
        } else {
            console.error('Invalid loggedInUser value found in localStorage:', loggedInUser);
        }
    } catch (error) {
        console.error('An error occurred while checking the banned users:', error);
    }
});
