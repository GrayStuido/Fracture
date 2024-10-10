// page-exit-handler.js

document.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('a');
    if (clickedElement) {
        const isNavGen = clickedElement.id.startsWith('navgen');
        const linkIndex = isNavGen ? parseInt(clickedElement.id.split('-')[1]) : -1;

        window.navState.lastClicked = {
            index: linkIndex,
            time: Date.now(),
            isNavGen: isNavGen
        };

        if (isNavGen) {
            window.navState.links[linkIndex].clicked = true;
        }

        // Dispatch custom event
        const navClickEvent = new CustomEvent('navLinkClicked', { 
            detail: { linkIndex: linkIndex, isNavGen: isNavGen } 
        });
        document.dispatchEvent(navClickEvent);
    }
});

window.addEventListener('beforeunload', function (e) {
    // Check if GGBlock is installed
    if (localStorage.getItem('GGBlock') !== 'installed') {
        console.error("GGBlock not installed");
        return;
    }

    const lastClicked = window.navState.lastClicked;
    const recentNavClick = lastClicked && 
                           (Date.now() - lastClicked.time < 1000) && 
                           lastClicked.isNavGen;

    if (!recentNavClick) {
        var confirmationMessage = 'Are you sure you want to leave this page?';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }
});
