

const users = [
    { username: "jusinoj", password: "theearthisflat", banned: false, banReason: "", premium: true, profilePicture: "UserImages/jusino.png"  }, // Jayden Jusino
    { username: "mindGoblin", password: "personiscool", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Katie Gladysh
    { username: "Nooblet12905", password: "ImStupid12905", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // derpler
    { username: "Misha", password: "ballz4252", banned: false, banReason: "Drew Melon", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Marcelo Lujan
    { username: "dew.k_", password: "mumlover73", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Drew Melon
    { username: "Brennan", password: "carson", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Brennan McCoskery
    { username: "Martin the Destroyer", password: "stupid martin stupid little shit", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Eli Lubbe
    { username: "sillybilly", password: "sillybilly0924", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Simon Collins
    { username: "RiceSpice", password: "BigBirthdayCakeAbriviated", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Jason Yee
    { username: "AstroFlqr3", password: "As709166", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Jack Floor
    { username: "Potato", password: "ShangChi", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Austin Nguyen
    { username: "Ethan crivoloni", password: "1234567", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Brayden Siegner
    { username: "jamison", password: "Ghost242", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Jamison Austad
    { username: "Tea", password: "123abcmarryme", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Scarlett Castro
    { username: "Khoa", password: "Khoadaog", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Khoa Nguyen
    { username: "Simone", password: "801888avasimone", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Ava S
    { username: "Markeshka", password: "80396012", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Mark
    { username: "colebubby", password: "123abc", banned: false, banReason: "", premium: true, profilePicture: "UserImages/PutinGriddy.gif"  }, // Cole Anthoney
    { username: "baba yaga", password: "baba yaga 123", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Carson Parrot
    { username: "unskatz", password: "hamburger4587", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Nate
    { username: "1234", password: "1234", banned: true, banReason: "Really?", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Hayden Coe
    { username: "block'o_cheese3", password: "1234567890", banned: false, banReason: "Ur still banned buddy", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Ignatius O'Dell
    { username: "hevdogbf", password: "hevdogbf", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Alex Emerson
    { username: "BenSkibidi", password: "Benskibidi1.", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Ben Reverez
    { username: "Junior?", password: "060871", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Robert Delgado
    { username: "Pepsi", password: "Aboutchicken298", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Pepsi.png"  }, // Katie
    { username: "Guitar Man", password: "Met4llic4", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Wess.jpg"  }, // Wes Porter
    { username: "Kingalm24", password: "W4k3yW4k3y", banned: false, banReason: "", premium: true, profilePicture: "UserImages/nimrod.png"  }, // Alex Partan
    { username: "uhyeah", password: "Ba11ler", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Dickens.png"  }, // Fason Dickens
    { username: "", password: "", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, //
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
    
    clearError();
    
    localStorage.setItem('premium', user.premium);
    localStorage.setItem('loggedInUser', user.username);
    localStorage.setItem('profilePicture', user.profilePicture);
    
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

function loginGuest() {

    localStorage.setItem('premium', 'Guest');
    localStorage.setItem('loggedInUser', 'Guest');
    
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

function logout() {
    localStorage.removeItem('premium');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('profilePicture');
    updateUIAfterLogout();
    location.reload();
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
    const premiumStatusElement = document.getElementById('premiumStatus');
    if (isPremium) {
        premiumStatusElement.textContent = 'Premium Account';
        premiumStatusElement.classList.add('premium');
    } else {
        premiumStatusElement.textContent = 'Standard Account';
        premiumStatusElement.classList.add('non-premium');
    }
    
    const profilePicturePath = localStorage.getItem('profilePicture') || 'UserImages/Placeholder.png';
    const img = new Image();
    img.onload = function() {
        document.getElementById('profilePicture').src = profilePicturePath;
    };
    img.onerror = function() {
        document.getElementById('profilePicture').src = 'UserImages/Placeholder.png';
    };
    img.src = profilePicturePath;
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

document.addEventListener('DOMContentLoaded', () => {
    setupInputNavigation();

    const loginStatus = checkLoginStatus();
    if (loginStatus.isLoggedIn) {
        updateUIAfterLogin(loginStatus.username, loginStatus.isPremium);
    }

    const logoutButton = document.querySelector('.container button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    const termsAccepted = localStorage.getItem('termsAccepted') === 'true';
    if (!termsAccepted) {
        showTermsAndConditions();
    }

    const acceptTermsButton = document.querySelector('#termsContainer button');
    if (acceptTermsButton) {
        acceptTermsButton.addEventListener('click', () => {
            localStorage.setItem('termsAccepted', 'true');
            hideTermsAndConditions();
        });
    }
});
