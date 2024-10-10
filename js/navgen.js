// navigation-generator.js

document.addEventListener('DOMContentLoaded', () => {
    // Set Noconfirm to 0 on page load
    localStorage.setItem('Noconfirm', '0');

    const navItems = [
        { name: 'Home', link: 'index.html' },
        { name: 'Games', link: 'google-classroom.html' },
        { name: 'Tools', link: 'google-drive.html' },
        { name: 'Docs', link: 'Docs/Index.html' },
        { name: 'Frat-Chat', link: 'chat.html' },
        { name: 'Leaderboard', link: 'Launchpad.html' },
        { name: 'About', link: 'About.html' },
        { name: 'Addons', link: 'Addons.html' }
    ];

    function generateNav() {
        const nav = document.getElementById('main-nav');
        navItems.forEach((item, index) => {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.name;
            link.id = `navgen-${index}`;
            link.addEventListener('click', (event) => {
                // Set Noconfirm to 1 when a navigation link is clicked
                localStorage.setItem('Noconfirm', '1');
                
                // Dispatch custom event
                const navClickEvent = new CustomEvent('navLinkClicked', { 
                    detail: { linkIndex: index } 
                });
                document.dispatchEvent(navClickEvent);
            });
            nav.appendChild(link);
        });
    }

    // Check if GGBlock is installed
    if (localStorage.getItem('GGBlock') === 'installed') {
        generateNav();
    } else {
        console.error("GGBlock not installed");
    }
});
