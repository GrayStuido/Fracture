// auth-check.js

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = '../index.html'; // Redirect to login page if not logged in
    }
});

const asciiArt1 = `
 ########******************************************* 
#                                                   *
#                         *                         *
#                         **                        +
#                        *@*                        +
*                       *@@@*                       +
*                      *@@@@@*                      +
*                     *@@@@@@@*                     +
*                    *@@@@@@@@@*                    +
*                   **@@@@@@@@@**                   +
*                    *@@@@@@@@@*                    =
*            *        *@@@@@@@*        *            =
*            **        *@@@@@*        **            =
*            *@*       **@@@%*       *@*            =
*            *@@**      *@@@*      **@@*            =
*            *@@@%*      *@*      **@@@*            =
*            *@@@@@*      *      *@@@@@*            =
*            *@@@@@@*           *@@@@@@*            =
*        *****@@@@@@@*         *@@@@@@@*****        =
*          **@@@@@@@@@**     **@@@@@@@@@**          =
*            **@@@@@@@@@@@@@@@@@@@@@@@**            =
*              **@@@@@@@@@@@@@@@@@@@**              =
*                 *@@@@@@@@@@@@@@@**                -
*                   *@@@@@@@@@@@*                   -
*                     *@@@@@@@*                     -
*                       *@@@*                       -
*                         *                         -
*                                                   -
 *****++++++++++++++=====================----------- 
`;
console.log(asciiArt1);

document.addEventListener("DOMContentLoaded", function() {
    const scriptUrls = [
        "../js/gamer.js",
        "js/script2.js",
        "js/script3.js"
    ];

    function loadScripts(urls) {
        if (urls.length === 0) return;

        const script = document.createElement("script");
        script.src = urls[0];
        script.onload = function() {
            console.log(`${urls[0]} loaded`);
            urls.shift(); // Remove the loaded script from the list
            loadScripts(urls); // Load the next script
        };

        document.head.appendChild(script);
    }

    loadScripts(scriptUrls);
});
