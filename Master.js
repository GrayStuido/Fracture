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
