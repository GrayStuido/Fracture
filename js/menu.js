let menuOpen = false;
let informationShown = false;
const menuItems = [
    {name: 'Home', link: '../index.html'},
    {name: 'Games', link: '../google-classroom.html'},
    {name: 'Leaderboard', link: '../Launchpad.html'},
    {name: 'Tools', link: '../google-drive.html'},
    {name: 'Docs', action: '../Docs/Index.html'},
    {name: 'Frat-Chat', link: '../chat.html'},
    {name: 'Screenshot', action: 'screenshot', class: 'screenshot'},
    {name: 'Reload', action: 'reloadPage', class: 'reload'}
];

const menuCenterX = 100; // X coordinate of the menu center
const menuCenterY = 100; // Y coordinate of the menu center
const radius = 90; // Radius for the menu items
const textRadius = 60; // Radius for the text

function createRadialMenu() {
    const svg = document.getElementById('radialItems');
    const totalItems = menuItems.length;
    const angleStep = (2 * Math.PI) / totalItems;

    menuItems.forEach((item, index) => {
        const startAngle = index * angleStep - Math.PI / 2;
        const endAngle = (index + 1) * angleStep - Math.PI / 2;
        
        const x1 = menuCenterX + radius * Math.cos(startAngle);
        const y1 = menuCenterY + radius * Math.sin(startAngle);
        const x2 = menuCenterX + radius * Math.cos(endAngle);
        const y2 = menuCenterY + radius * Math.sin(endAngle);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${menuCenterX} ${menuCenterY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`);
        path.setAttribute('fill', '#27153b');
        path.setAttribute('class', `menu-section ${item.class || ''}`);
        path.onclick = () => handleMenuItemClick(item);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const textAngle = (startAngle + endAngle) / 2;
        const textX = menuCenterX + textRadius * Math.cos(textAngle);
        const textY = menuCenterY + textRadius * Math.sin(textAngle);
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('class', 'menu-text');
        text.textContent = item.name;

        svg.appendChild(path);
        svg.appendChild(text);
    });
}

function toggleRadialMenu() {
    const radialMenu = document.getElementById('radialMenu');
    const radialItems = document.getElementById('radialItems');
    const triggerDiv = radialMenu.querySelector('.trigger-div');
    const menuIcon = triggerDiv.querySelector('.menu-icon');
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        radialMenu.classList.add('center');
        triggerDiv.style.transform = 'scale(1.2)';
        radialItems.classList.add('active');
        menuIcon.classList.add('spin');
        setTimeout(() => {
            menuIcon.classList.remove('spin');
            menuIcon.style.backgroundImage = "url('CloseButton.png')";
        }, 300); // 0.5 seconds for the spin animation
    } else {
        radialMenu.classList.remove('center');
        triggerDiv.style.transform = 'scale(1)';
        radialItems.classList.remove('active');
        menuIcon.classList.add('spin');
        setTimeout(() => {
            menuIcon.classList.remove('spin');
            menuIcon.style.backgroundImage = "url('HamburgerMenu.png')";
        }, 300); // 0.5 seconds for the spin animation
    }
}

function handleMenuItemClick(item) {
    if (item.link) {
        window.location.href = item.link;
    } else if (item.action) {
        switch(item.action) {
            case 'screenshot':
                toggleScreenshotInfo();
                break;
            case 'hideMenu':
                hideMenuAndPrompt();
                break;
            case 'reloadPage':
                location.reload();
                break;
        }
    }
    toggleRadialMenu();
}

function toggleScreenshotInfo() {
    if (informationShown) {
        const textDiv = document.getElementById("textDiv");
        const gridDiv = document.getElementById("gridDiv");
        if (textDiv) document.body.removeChild(textDiv);
        if (gridDiv) document.body.removeChild(gridDiv);
        informationShown = false;
    } else {
        const textDiv = document.createElement("div");
        textDiv.id = "textDiv";
        textDiv.style.backgroundColor = "transparent";
        const dateTime = new Date().toLocaleString();
        const userAgent = navigator.userAgent;
        const browserMatch = userAgent.match(/\b(Chrome|Safari|Firefox|Edge|Opera)\b/i);
        const osMatch = userAgent.match(/\b(Windows|Macintosh|Linux|Android|iOS|Google Chrome OS 64-bit|Google Chrome)\b/i);
        const browser = browserMatch ? browserMatch[0] : "Unknown Browser";
        const os = osMatch ? osMatch[0] : "Unknown OS";
        textDiv.innerHTML = `
            <p style="z-index: 99; position: absolute; bottom: 10px; left: 10px;">Date and Time: ${dateTime}</p>
            <p style="z-index: 99; position: absolute; bottom: 30px; left: 10px;">OS: ${os}</p>
            <p style="z-index: 99; position: absolute; bottom: 50px; left: 10px;">Browser: ${browser}</p>
        `;
        document.body.appendChild(textDiv);

        const gridDiv = document.createElement("div");
        gridDiv.id = "gridDiv";
        gridDiv.style.backgroundColor = "transparent"; // Remove background color
        for (let i = 0; i < 9; i++) {
            const gridBox = document.createElement("div");
            gridBox.className = "gridBox";
            gridBox.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            const innerSquare = document.createElement("div");
            innerSquare.className = "innerSquare";
            innerSquare.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            gridBox.appendChild(innerSquare);
            gridDiv.appendChild(gridBox);
        }
        document.body.appendChild(gridDiv);
        informationShown = true;
    }
}

// Call this function to create the radial menu
createRadialMenu();
