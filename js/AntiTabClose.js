// page-exit-handler.js

window.addEventListener('beforeunload', function (e) {
    // Check if GGBlock is installed
    if (localStorage.getItem('GGBlock') !== 'installed') {
        console.error("GGBlock not installed");
        return;
    }

    // Check if Noconfirm is set to 1
    if (localStorage.getItem('Noconfirm') === '1') {
        // If Noconfirm is 1, don't show the confirmation dialog
        return;
    }

    // If Noconfirm is not 1, show the confirmation dialog
    var confirmationMessage = 'Are you sure you want to leave this page?';
    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});

// Reset Noconfirm to 0 when a new page starts loading
window.addEventListener('unload', function() {
    localStorage.setItem('Noconfirm', '0');
});

document.addEventListener('DOMContentLoaded', function() {
    localStorage.setItem('Noconfirm', '0');
});
