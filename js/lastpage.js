// Function to log the current page URL to local storage
function logCurrentPageToLocalStorage() {
    // Get the current page URL
    const currentPageURL = window.location.href;

    // Save the URL to local storage with a key name
    localStorage.setItem('currentPageURL', currentPageURL);

    // Log to console
    console.log('Current page URL saved to local storage:', currentPageURL);
}
// Call the function
logCurrentPageToLocalStorage();
