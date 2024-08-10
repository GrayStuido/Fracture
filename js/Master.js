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
        "../js/ErudaConsole.js",
        "../js/LoadingScreen.js"
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



document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('ErduaConsoleActive') === 'true') {
      function loadEruda() {
        if (typeof eruda === 'undefined') {
          var erudaScript = document.createElement('script');
          erudaScript.src = "//cdn.jsdelivr.net/npm/eruda/eruda.min.js";
          document.body.appendChild(erudaScript);
          erudaScript.onload = function() {
            eruda.init();
            var erudaTimingScript = document.createElement('script');
            erudaTimingScript.src = "//cdn.jsdelivr.net/npm/eruda-timing/eruda-timing.min.js";
            document.body.appendChild(erudaTimingScript);
            erudaTimingScript.onload = function() { eruda.add(erudaTiming); };
  
            var erudaCodeScript = document.createElement('script');
            erudaCodeScript.src = "//cdn.jsdelivr.net/npm/eruda-code/eruda-code.min.js";
            document.body.appendChild(erudaCodeScript);
            erudaCodeScript.onload = function() { eruda.add(erudaCode); };
  
            var erudaDomScript = document.createElement('script');
            erudaDomScript.src = "//cdn.jsdelivr.net/npm/eruda-dom/eruda-dom.min.js";
            document.body.appendChild(erudaDomScript);
            erudaDomScript.onload = function() { eruda.add(erudaDom); };
          };
        } else {
          eruda.show();
        }
      }
  
      loadEruda();
    }
  });
