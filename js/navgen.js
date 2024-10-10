// navigation-generator.js

// Global variable to store navigation state
window.navState = {
    links: [],
    lastClicked: null
};

document.addEventListener('DOMContentLoaded', () => {
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
                // Update global state
                window.navState.lastClicked = {
                    index: index,
                    time: Date.now(),
                    isNavGen: true
                };
                
                // Dispatch custom event
                const navClickEvent = new CustomEvent('navLinkClicked', { 
                    detail: { linkIndex: index, isNavGen: true } 
                });
                document.dispatchEvent(navClickEvent);
            });
            nav.appendChild(link);
            window.navState.links.push({ clicked: false, isNavGen: true });
        });
    }

    // Check if GGBlock is installed
    if (localStorage.getItem('GGBlock') === 'installed') {
        generateNav();
    } else {
        console.error("GGBlock not installed");
    }
});
