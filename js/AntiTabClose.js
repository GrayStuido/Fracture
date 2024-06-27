// Check if the local storage key 'GGBlock' has the value 'installed'
if (localStorage.getItem('GGBlock') !== 'installed') {
    // If not, prevent the rest of the script from running
    throw new Error("GGBlock not installed");
}

window.addEventListener('beforeunload', function (e) {
    var confirmationMessage = 'Are you sure you want to leave this page?';
    (e || window.event).returnValue = confirmationMessage; // Gecko + IE
    return confirmationMessage; // Webkit, Safari, Chrome
});
