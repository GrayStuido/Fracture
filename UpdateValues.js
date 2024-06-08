document.addEventListener('DOMContentLoaded', function() {
    var amount = 7;
    var logInFixValue = localStorage.getItem('LogInFix');

    if (logInFixValue === null || logInFixValue != amount) {
        // Remove the specified localStorage values
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('premium');
        localStorage.removeItem('profilePicture');
        
        // Set the 'LogInFix' value in localStorage to 'amount'
        localStorage.setItem('LogInFix', amount);

        // Reload the page
        location.reload();
    }
});
