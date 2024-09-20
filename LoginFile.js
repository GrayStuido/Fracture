

const users = [
    { username: "jusinoj", password: "theearthisflat", banned: false, banReason: "", premium: true, profilePicture: "UserImages/jusino.png"  }, // Jayden Jusino
    { username: "mindGoblin", password: "personiscool", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Katie Gladysh
    { username: "Nooblet12905", password: "ImStupid12905", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // derpler
    { username: "Misha", password: "ballz4252", banned: false, banReason: "Drew Melon", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Marcelo Lujan
    { username: "dew.k_", password: "mumlover73", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Drew Melon
    { username: "Brennan", password: "carson", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Brennan McCoskery
    { username: "Martin the Destroyer", password: "stupid martin stupid little shit", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Eli Lubbe
    { username: "sillybilly", password: "sillybilly0924", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Simon Collins
    { username: "RiceSpice", password: "BigBirthdayCakeAbriviated", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Jason Yee
    { username: "AstroFlqr3", password: "As709166", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Jack Floor
    { username: "Potato", password: "ShangChi", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Austin Nguyen
    { username: "Ethan crivoloni", password: "1234567", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Brayden Siegner
    { username: "jamison", password: "Ghost242", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Jamison Austad
    { username: "Tea", password: "123abcmarryme", banned: false, banReason: "", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Scarlett Castro
    { username: "Khoa", password: "Khoadaog", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Khoa Nguyen
    { username: "Simone", password: "801888avasimone", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Ava S
    { username: "Markeshka", password: "80396012", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Mark
    { username: "colebubby", password: "123abc", banned: false, banReason: "", premium: true, profilePicture: "UserImages/PutinGriddy.gif"  }, // Cole Anthoney
    { username: "baba yaga", password: "baba yaga 123", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Carson Parrot
    { username: "unskatz", password: "hamburger4587", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Nate
    { username: "1234", password: "1234", banned: true, banReason: "Really?", premium: false, profilePicture: "UserImages/Placeholder.png"  }, // Hayden Coe
    { username: "block'o_cheese3", password: "1234567890", banned: false, banReason: "Ur still banned buddy", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Ignatius O'Dell
    { username: "hevdogbf", password: "hevdogbf", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Alex Emerson
    { username: "BenSkibidi", password: "Benskibidi1.", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Ben Reverez
    { username: "Junior?", password: "060871", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Robert Delgado
    { username: "Pepsi", password: "Aboutchicken298", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Pepsi.png"  }, // Katie
    { username: "Guitar Man", password: "Met4llic4", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Wess.jpg"  }, // Wes Porter
    { username: "Kingalm24", password: "W4k3yW4k3y", banned: false, banReason: "", premium: true, profilePicture: "UserImages/partena.webp"  }, // Alex Partan
    { username: "uhyeah", password: "Ba11ler", banned: true, banReason: "Voted Ban", premium: true, profilePicture: "UserImages/Dickens.png"  }, // Fason Dickens
    { username: "Atomically", password: "", banned: false, banReason: "Ifarted500times1123", premium: true, profilePicture: "UserImages/hao.jpg"  }, // Sy\ky Hao
    { username: "Hazzled", password: "Hazzled1", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, // Nikita Shpak
    { username: "Toptoast", password: "NerfMiner0", banned: false, banReason: "", premium: true, profilePicture: "UserImages/dylan.jpg"  }, // Dylan Austen
    { username: "NIko", password: "NikoFromOneShot22", banned: false, banReason: "", premium: true, profilePicture: "UserImages/marcelo.jpg"  }, // Marcelo Lujan
    { username: "Vafu moo", password: "807962807962", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Baby.gif"  }, //
    { username: "soup", password: "812182", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, //
    { username: "Kai", password: "6969420", banned: false, banReason: "", premium: true, profilePicture: "UserImages/Placeholder.png"  }, //
    { username: "Dvid", password: "Davidgame1.", banned: false, banReason: "", premium: true, profilePicture: "UserImages/david.jpg"  }, // David Chorny
    { username: "Shiningglaceon", password: "Sabradee7", banned: false, banReason: "", premium: true, profilePicture: "UserImages/jaiden.jpg"  }, // Jaiden Dietz
    { username: "Reidak", password: "thokbest877!!", banned: false, banReason: "", premium: true, profilePicture: "UserImages/reidak.webp"  }, // Adison Burck
    { username: "Salm", password: "Hundawg", banned: false, banReason: "", premium: true, profilePicture: "UserImages/The-Company-Drip.gif"  }, // Sal Aultman-meltz
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username);
    
    if (!user) {
        displayError("There is no account attached with this name, please create a login");
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
    
    // Set all keys to 'loggedOut' first
    setAllKeysToLoggedOut();
    
    // Then set the actual values
    localStorage.setItem('premium', user.premium);
    localStorage.setItem('loggedInUser', user.username);
    localStorage.setItem('profilePicture', user.profilePicture);
    localStorage.setItem('userVar', JSON.stringify(user));
    
    updateUIAfterLogin(user.username, user.premium);
}

function loginGuest() {
    setAllKeysToLoggedOut();
    
    localStorage.setItem('premium', 'false');
    localStorage.setItem('loggedInUser', 'Guest');
    localStorage.setItem('userVar', JSON.stringify({ username: 'Guest', premium: false }));
    
    updateUIAfterLogin('Guest', false);
}

function logout() {
    setAllKeysToLoggedOut();
    updateUIAfterLogout();
}

function setAllKeysToLoggedOut() {
    ['premium', 'loggedInUser', 'profilePicture', 'userVar'].forEach(key => {
        localStorage.setItem(key, 'loggedOut');
    });
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

function checkUserData() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const storedUserVar = localStorage.getItem('userVar');

    if (loggedInUser === 'loggedOut' || storedUserVar === 'loggedOut') {
        updateUIAfterLogout();
        return;
    }

    if (loggedInUser === 'Guest') {
        updateUIAfterLogin('Guest', false);
        return;
    }

    try {
        const storedUser = JSON.parse(storedUserVar);
        const currentUser = users.find(u => u.username === loggedInUser);

        if (!currentUser) {
            logout();
            return;
        }

        // Check if any user data has changed
        if (JSON.stringify(currentUser) !== JSON.stringify(storedUser)) {
            logout();
            return;
        }

        updateUIAfterLogin(currentUser.username, currentUser.premium);
    } catch (error) {
        console.error("Error parsing stored user data:", error);
        logout();
    }
}

function updateUIAfterLogin(username, isPremium) {
    document.getElementById('loginDiv').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.getElementById('name').textContent = username;
    const premiumStatusElement = document.getElementById('premiumStatus');
    if (isPremium) {
        premiumStatusElement.textContent = 'Premium Account';
        premiumStatusElement.classList.add('premium');
        premiumStatusElement.classList.remove('non-premium');
    } else {
        premiumStatusElement.textContent = 'Standard Account';
        premiumStatusElement.classList.add('non-premium');
        premiumStatusElement.classList.remove('premium');
    }
    
    const profilePicturePath = localStorage.getItem('profilePicture');
    if (profilePicturePath && profilePicturePath !== 'loggedOut') {
        const img = new Image();
        img.onload = function() {
            document.getElementById('profilePicture').src = profilePicturePath;
        };
        img.onerror = function() {
            document.getElementById('profilePicture').src = 'UserImages/Placeholder.png';
        };
        img.src = profilePicturePath;
    } else {
        document.getElementById('profilePicture').src = 'UserImages/Placeholder.png';
    }
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
    checkUserData();  // Check user data on script load

    setupInputNavigation();

    const logoutButton = document.querySelector('.container button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', login);
    }

    const guestLoginButton = document.getElementById('guestLoginButton');
    if (guestLoginButton) {
        guestLoginButton.addEventListener('click', loginGuest);
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
