document.addEventListener('DOMContentLoaded', checkBannedUser);

// Additional check for immediate execution if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    checkBannedUser();
}

function checkBannedUser() {
    try {
        // Check if localStorage is available
        if (typeof(Storage) === "undefined") {
            console.error('LocalStorage is not supported in this environment.');
            return;
        }

        const loggedInUser = localStorage.getItem('loggedInUser');

        // Ensure loggedInUser is valid
        if (loggedInUser === null) {
            console.warn('No user is currently logged in.');
            return;
        }

        // Object to store banned users
        const bannedUsers = {
            "uhyeah": true,
            "1234": true
            // Add more banned users as needed
        };

        // Validate loggedInUser value
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
}
