document.addEventListener('DOMContentLoaded', () => {
    // Get all CSS variables from :root
    const rootStyles = getComputedStyle(document.documentElement);
    const cssVars = {};

    for (const key of rootStyles) {
        if (key.startsWith('--')) {
            const value = rootStyles.getPropertyValue(key).trim();
            if (isColorValue(value)) {
                cssVars[key] = value;
                localStorage.setItem(key, value);
                console.log(`${key}: ${value}`);
            }
        }
    }

    // Create max z-index box
    const maxZBox = document.createElement('div');
    maxZBox.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px;
        background: white;
        border: 1px solid black;
        z-index: 2147483647;
        max-height: 80vh;
        overflow-y: auto;
    `;
    document.body.appendChild(maxZBox);

    // Add title
    const title = document.createElement('h2');
    title.textContent = 'CSS Color Variables';
    maxZBox.appendChild(title);

    // Create color boxes
    for (const [key, value] of Object.entries(cssVars)) {
        const colorBox = createColorBox(key, value);
        maxZBox.appendChild(colorBox);
    }

    // Add update button
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update Page Colors';
    updateButton.style.marginTop = '10px';
    updateButton.addEventListener('click', updatePageColors);
    maxZBox.appendChild(updateButton);
});

function isColorValue(value) {
    return /^(#|rgb|hsl)/.test(value);
}

function createColorBox(key, value) {
    const box = document.createElement('div');
    box.style.marginBottom = '10px';

    const label = document.createElement('label');
    label.textContent = formatLabel(key);
    box.appendChild(label);

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = value;
    colorPicker.style.marginLeft = '10px';
    colorPicker.addEventListener('input', (e) => updateColor(key, e.target.value));
    colorPicker.addEventListener('change', (e) => {
        updateColor(key, e.target.value);
        document.documentElement.style.setProperty(key, e.target.value);
    });
    box.appendChild(colorPicker);

    return box;
}

function formatLabel(key) {
    return key.slice(2).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function updateColor(key, value) {
    localStorage.setItem(key, value);
    console.log(`Updated ${key}: ${value}`);
}

function updatePageColors() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('--')) {
            const value = localStorage.getItem(key);
            document.documentElement.style.setProperty(key, value);
        }
    }
}