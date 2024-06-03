// User Logins
const users = {
    'bafu moo': { password: '807962', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Brenden Wesdal
    'possum!': { password: 'livefasteattrash', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Kenzie
    'deninog': { password: '1111', banned: true, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' },
    'jusinoj': { password: 'theearthisflat', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/jusino.png' }, // Jayden Jusino
    'Griffon': { password: '07032008GAAP', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Griffon Piazzisi
    'Tysoniscool': { password: '80852612', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Tyson Falhman
    'Oskie': { password: 'La*eggcool456', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Oskie Ayala
    'Reidak': { password: 'thokbest877!', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/reidak.webp' }, // Adison
    '9.5kWhiskey': { password: 'SillyGoofy69', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' },
    'junior': { password: 'Password2', banned: true, banReason: 'No one likes you', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Junior Victor
    '@The_realbread24': { password: 'fracture123', banned: true, banReason: '1) Suspected Cheating. 2) Voted ban', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Iggy
    'kingalm24': { password: 'W4k3yW4k3y', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/partena.webp' }, // Alex Partan
    'nimrod.': { password: 'ilikefanta', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Westly Porter
    'uhyeah': { password: 'uhyeahh', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' },
    'juju_woahmazing': { password: 'Julian200808', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' },
    'Zach': { password: '123321', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Zach
    'RiceSpice': { password: 'BigBirthdayCakeAbriviated', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Jason Yee
    'pro gammer': { password: 'Password', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Aaron Chen
    'mindGoblin': { password: 'personiscool', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Katie Gladysh
    'Nooblet12905': { password: 'ImStupid12905', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Derpler
    'Misha': { password: 'ballz4252', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Marcelo Lujan
    'dew.k_': { password: 'mumlover73', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Drew Melon
    'Brennan': { password: 'carson', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Brennan McCoskery
    'Martin the Destroyer': { password: 'stupid martin stupid little shit', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Eli Lubbe
    'sillybilly': { password: 'sillybilly0924', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Simon Collins
    'AstroFlqr3': { password: 'As709166', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Jack Floor
    'Potato': { password: 'ShangChi', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Austin Nguyen
    'Poopy123': { password: 'Poop1234', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' },
    'Ethan crivoloni': { password: '1234567', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Brayden Siegner
    'jamison': { password: 'Ghost242', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Jamison Austad
    'Tea': { password: '123abcmarryme', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Scarlett Castro
    'Khoa': { password: 'Khoadaog', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Khoa Nguyen
    'Simone': { password: '801888avasimone', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Ava Simone
    'Markeshka': { password: '80396012', banned: false, banReason: '', premium: false, profilePicture: 'UserImages/Placeholder.png' }, // Mark 
    'cole': { password: '123abc', banned: false, banReason: '', premium: true, profilePicture: 'UserImages/Placeholder.png' }, // Cole Anthony
    'Debug Account': { password: 'juhygtfrd6ftgyhiuh7867g5f6rfytguy6yftguyih', banned: false, banReason: '', premium: true, profilePicture: 'UserIcons/The-Company-Drip.gif' }
};

// List of banned usernames
const bannedUsers = ['deninog', 'junior', '@The_realbread24'];

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const storedUsername = localStorage.getItem('loggedInUser');
    if (storedUsername && (users[storedUsername]?.banned || bannedUsers.includes(storedUsername))) {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('premium');
        localStorage.removeItem('profilePicture');
        document.getElementById('loginDiv').style.display = 'block';
    } else if (storedUsername && users[storedUsername]) {
        document.getElementById('loginDiv').style.display = 'none';
    }

    // Update local storage if user data is out of date
    updateUserLocalStorage(storedUsername);
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');

    if (users[username]) {
        if (users[username].banned) {
            const banReason = users[username].banReason;
            if (banReason) {
                errorMessage.textContent = `You are banned. Reason: ${banReason}`;
            } else {
                errorMessage.textContent = 'You are banned. No reason given.';
            }
            errorMessage.style.display = 'block';
            loginButton.classList.add('error-button');
        } else if (users[username].password === password) {
            localStorage.setItem('loggedInUser', username);
            localStorage.setItem('premium', users[username].premium);
            localStorage.setItem('profilePicture', users[username].profilePicture);
            document.getElementById('loginDiv').style.display = 'none';
            window.location.reload(); // Reload the page
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
            loginButton.classList.add('error-button');
        }
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
        loginButton.classList.add('error-button');
    }
}

function updateUserLocalStorage(username) {
    if (username && users[username]) {
        const user = users[username];
        const storedPremium = localStorage.getItem('premium') === 'true';
        const storedProfilePicture = localStorage.getItem('profilePicture');

        if (user.premium !== storedPremium) {
            localStorage.setItem('premium', user.premium);
        }

        if (user.profilePicture !== storedProfilePicture) {
            localStorage.setItem('profilePicture', user.profilePicture);
        }
    }
}

// Add event listeners for Enter key
document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('password').focus();
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        login();
    }
});
