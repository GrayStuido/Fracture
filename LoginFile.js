const users = [
    { username: "jusinoj", password: "theearthisflat", banned: false, banReason: "", premium: true }, // Jayden Jusino
    { username: "mindGoblin", password: "personiscool", banned: false, banReason: "", premium: false }, // Katie Gladysh
    { username: "Nooblet12905", password: "ImStupid12905", banned: false, banReason: "", premium: false }, // derpler
    { username: "Misha", password: "ballz4252", banned: false, banReason: "Drew Melon", premium: false }, // Marcelo Lujan
    { username: "dew.k_", password: "mumlover73", banned: false, banReason: "", premium: false }, // Drew Melon
    { username: "Brennan", password: "carson", banned: false, banReason: "", premium: false }, // Brennan McCoskery
    { username: "Martin the Destroyer", password: "stupid martin stupid little shit", banned: false, banReason: "", premium: false }, // Eli Lubbe
    { username: "sillybilly", password: "sillybilly0924", banned: false, banReason: "", premium: false }, // Simon Collins
    { username: "RiceSpice", password: "BigBirthdayCakeAbriviated", banned: false, banReason: "", premium: true }, // Jason Yee
    { username: "AstroFlqr3", password: "As709166", banned: false, banReason: "", premium: false }, // Jack Floor
    { username: "Potato", password: "ShangChi", banned: false, banReason: "", premium: true }, // Austin Nguyen
    { username: "Ethan crivoloni", password: "1234567", banned: false, banReason: "", premium: true }, // Brayden Siegner
    { username: "jamison", password: "Ghost242", banned: false, banReason: "", premium: true }, // Jamison Austad
    { username: "Tea", password: "123abcmarryme", banned: false, banReason: "", premium: false }, // Scarlett Castro
    { username: "Khoa", password: "Khoadaog", banned: false, banReason: "", premium: true }, // Khoa Nguyen
    { username: "Simone", password: "801888avasimone", banned: false, banReason: "", premium: false }, // Ava S
    { username: "Markeshka", password: "80396012", banned: false, banReason: "", premium: true }, // Mark
    { username: "cole", password: "123abc", banned: false, banReason: "", premium: true }, // Cole Anthoney
    { username: "baba yaga", password: "baba yaga 123", banned: false, banReason: "", premium: true }, // Carson Parrot
    { username: "unskatz", password: "hamburger4587", banned: false, banReason: "", premium: false }, // Nate
    { username: "1234", password: "1234", banned: true, banReason: "Really?", premium: false }, // Hayden Coe
    { username: "block'o_cheese3", password: "1234567890", banned: true, banReason: "Homosexual", premium: false }, // Ignatius O'Dell
    { username: "hevdogbf", password: "hevdogbf", banned: false, banReason: "", premium: true }, // Alex Emerson
    { username: "BenSkibidi", password: "Benskibidi1.", banned: false, banReason: "", premium: false }, // Ben Reverez
    { username: "Junior?", password: "060871", banned: false, banReason: "", premium: false }, // Robert Delgado
    { username: "", password: "", banned: false, banReason: "", premium: false }, //
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username);
    
    if (!user) {
        displayError("There is no account attached with this name, please create a login (IF YOU ARE GETTING THIS PLEASE RESUBMIT IF YOU DONT ALREADY HAVE A SUBMISSION IN THE FORM MOST OF THE LOGINS HAVE BEEN LOST)");
        return;
    }
    
    if (user.password !== password) {
        displayError("Incorrect Password");
        return;
    }
    
    if (user.banned) {
        displayError(`This account has been banned. Reason: ${user.banReason}`);
        return;
    }
    
    // Clear any previous error messages
    clearError();
    
    // Store premium status and logged-in user in local storage
    localStorage.setItem('premium', user.premium);
    localStorage.setItem('loggedInUser', user.username);
    
    // Refresh the page after a short delay
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function clearError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

function setupInputNavigation() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    usernameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            loginButton.click();
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupInputNavigation();

    const loginStatus = checkLoginStatus();
    if (loginStatus.isLoggedIn) {
        updateUIAfterLogin(loginStatus.username, loginStatus.isPremium);
    }

    // Add logout event listener
    const logoutButton = document.querySelector('.container button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    // Add login event listener
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    // Check if terms have been accepted
    const termsAccepted = localStorage.getItem('termsAccepted') === 'true';
    if (!termsAccepted) {
        showTermsAndConditions();
    }

    // Add terms acceptance event listener
    const acceptTermsButton = document.querySelector('#termsContainer button');
    if (acceptTermsButton) {
        acceptTermsButton.addEventListener('click', () => {
            localStorage.setItem('termsAccepted', 'true');
            hideTermsAndConditions();
        });
    }
});

function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function clearError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

function logout() {
    localStorage.removeItem('premiumStatus');
    localStorage.removeItem('loggedInUser');
    updateUIAfterLogout();
}

function banUser(username, reason) {
    const user = users.find(u => u.username === username);
    if (user) {
        user.banned = true;
        user.banReason = reason;
        console.log(`User ${username} has been banned. Reason: ${reason}`);
    } else {
        console.log(`User ${username} not found.`);
    }
}

function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const premiumStatus = localStorage.getItem('premium') === 'true';
    
    return {
        isLoggedIn: !!loggedInUser,
        username: loggedInUser,
        isPremium: premiumStatus
    };
}

function updateUIAfterLogin(username, isPremium) {
    document.getElementById('loginDiv').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.getElementById('name').textContent = username;
    document.getElementById('premiumStatus').textContent = isPremium ? 'Premium' : 'Standard';
    document.getElementById('profilePicture').src = 'Icons/Default.png'; // Update with actual profile picture logic
}

function updateUIAfterLogout() {
    document.getElementById('loginDiv').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').textContent = '';
}

function showTermsAndConditions() {
    const termsContainer = document.getElementById('termsContainer');
    if (termsContainer) {
        termsContainer.style.display = 'block';
    }
}

function hideTermsAndConditions() {
    const termsContainer = document.getElementById('termsContainer');
    if (termsContainer) {
        termsContainer.style.display = 'none';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const loginStatus = checkLoginStatus();
    if (loginStatus.isLoggedIn) {
        updateUIAfterLogin(loginStatus.username, loginStatus.isPremium);
    }

    // Add logout event listener
    const logoutButton = document.querySelector('.container button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    // Add login event listener
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    // Check if terms have been accepted
    const termsAccepted = localStorage.getItem('termsAccepted') === 'true';
    if (!termsAccepted) {
        showTermsAndConditions();
    }

    // Add terms acceptance event listener
    const acceptTermsButton = document.querySelector('#termsContainer button');
    if (acceptTermsButton) {
        acceptTermsButton.addEventListener('click', () => {
            localStorage.setItem('termsAccepted', 'true');
            hideTermsAndConditions();
        });
    }
});