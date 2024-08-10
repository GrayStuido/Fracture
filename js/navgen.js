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
        navItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.name;
            nav.appendChild(link);
        });
    }

    generateNav();
});