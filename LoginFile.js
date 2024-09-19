

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

// Utility functions for encoding/decoding
function encodeToBase64(str) {
    return btoa(encodeURIComponent(str));
}

function decodeFromBase64(str) {
    return decodeURIComponent(atob(str));
}

function inflate(str, level = 1, customInflator = null) {
    const defaultInflator = (char, lvl) => char.repeat(lvl + 1);
    const inflator = customInflator || defaultInflator;
    
    return str.split('')
        .map((char, index) => {
            const inflationFactor = Math.min(level, 10);
            const asciiCode = char.charCodeAt(0);
            const modifiedLevel = (inflationFactor + index) % 10 + 1;
            
            if (/[a-zA-Z]/.test(char)) {
                const shiftedChar = String.fromCharCode(
                    (asciiCode - (asciiCode <= 90 ? 65 : 97) + modifiedLevel) % 26 
                    + (asciiCode <= 90 ? 65 : 97)
                );
                return inflator(shiftedChar, modifiedLevel);
            } else {
                return inflator(char, modifiedLevel);
            }
        })
        .join('');
}

function deflate(str, level = 1, customDeflator = null) {
    const defaultDeflator = (subStr, lvl) => subStr[0];
    const deflator = customDeflator || defaultDeflator;
    
    const chunks = str.match(new RegExp(`.{1,${level + 1}}`, 'g')) || [];
    
    return chunks.map((chunk, index) => {
        const deflationFactor = Math.min(level, 10);
        const modifiedLevel = (deflationFactor + index) % 10 + 1;
        
        if (/[a-zA-Z]/.test(chunk[0])) {
            const asciiCode = chunk[0].charCodeAt(0);
            const shiftedChar = String.fromCharCode(
                (asciiCode - (asciiCode <= 90 ? 65 : 97) - modifiedLevel + 26) % 26 
                + (asciiCode <= 90 ? 65 : 97)
            );
            return deflator(shiftedChar + chunk.slice(1), modifiedLevel);
        } else {
            return deflator(chunk, modifiedLevel);
        }
    }).join('');
}

// Function to save login data
function saveLoginData(username, LoginFix) {
    const data = {
        username: username,
        LoginFix: LoginFix,
        LoginScriptCheck: JSON.stringify(users)
    };

    const encodedData = encodeToBase64(JSON.stringify(data));
    const inflatedData = inflate(encodedData);

    localStorage.setItem('LoginFix', inflatedData);
}

// Function to check login data
function checkLoginData() {
    const inflatedData = localStorage.getItem('LoginFix');
    if (!inflatedData) return false;

    const deflatedData = deflate(inflatedData);
    const decodedData = JSON.parse(decodeFromBase64(deflatedData));

    const storedUsername = decodedData.username;
    const storedLoginFix = decodedData.LoginFix;
    const storedLoginScriptCheck = JSON.parse(decodedData.LoginScriptCheck);

    const currentUser = users.find(u => u.username === storedUsername);

    if (!currentUser) return false;

    if (storedLoginFix !== localStorage.getItem('loggedInUser')) {
        logout();
        return false;
    }

    const currentUserIndex = users.findIndex(u => u.username === storedUsername);
    if (JSON.stringify(users[currentUserIndex]) !== JSON.stringify(storedLoginScriptCheck[currentUserIndex])) {
        if (currentUser.banned !== storedLoginScriptCheck[currentUserIndex].banned) {
            logout();
            return false;
        }
    }

    return true;
}

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
    
    localStorage.setItem('premium', user.premium);
    localStorage.setItem('loggedInUser', user.username);
    localStorage.setItem('profilePicture', user.profilePicture);
    
    // Save login data for security check
    saveLoginData(user.username, user.username);
    
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

function loginGuest() {
    localStorage.setItem('premium', 'Guest');
    localStorage.setItem('loggedInUser', 'Guest');
    
    // Save guest login data
    saveLoginData('Guest', 'Guest');
    
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
    localStorage.removeItem('LoginFix');
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
    
    if (loggedInUser && !checkLoginData()) {
        logout();
        return { isLoggedIn: false, username: null, isPremium: false };
    }
    
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
    } else {
        updateUIAfterLogout();
    }

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
