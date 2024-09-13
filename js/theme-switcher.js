(function() {
    let originalTheme = {};
    let currentTheme = 'light';

    function initThemeSwitcher() {
        const buttons = document.querySelectorAll('.theme-button');
        const colorInputs = document.querySelectorAll('.color-input input[type="color"]');
        const applyButton = document.getElementById('apply-theme');
        const resetButton = document.getElementById('reset-theme');
        const exportButton = document.getElementById('export-theme');
        
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            // Set default theme if no theme is saved
            applyTheme('light');
        }

        // Add click event listeners to preset theme buttons
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                applyTheme(theme);
                localStorage.setItem('theme', theme);
            });
        });

        // Add change event listeners to color inputs
        colorInputs.forEach(input => {
            input.addEventListener('input', updateLiveTheme);
        });

        // Add click event listeners to action buttons
        applyButton.addEventListener('click', applyCustomTheme);
        resetButton.addEventListener('click', resetToDefaults);
        exportButton.addEventListener('click', exportCustomTheme);

        // Initialize color inputs with current theme colors
        updateColorInputs();
    }

    function applyTheme(theme) {
        currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        updateColorInputs();
    }

    function updateColorInputs() {
        const colorInputs = document.querySelectorAll('.color-input input[type="color"]');
        colorInputs.forEach(input => {
            const propertyName = `--${input.name}`;
            const color = getComputedStyle(document.body).getPropertyValue(propertyName).trim();
            input.value = colorToHex(color);
        });
        originalTheme = getCurrentThemeColors();
    }

    function updateLiveTheme(event) {
        const propertyName = `--${event.target.name}`;
        document.body.style.setProperty(propertyName, event.target.value);
    }

    function applyCustomTheme() {
        const themeName = document.getElementById('theme-name').value || 'custom';
        const colors = getCurrentThemeColors();
        localStorage.setItem('theme', themeName);
        localStorage.setItem(themeName, JSON.stringify(colors));
        applyTheme(themeName);
    }

    function resetToDefaults() {
        Object.entries(originalTheme).forEach(([prop, value]) => {
            document.body.style.setProperty(`--${prop}`, value);
        });
        updateColorInputs();
    }

    function exportCustomTheme() {
        const themeName = document.getElementById('theme-name').value || 'custom';
        const colors = getCurrentThemeColors();
        let cssContent = `[data-theme="${themeName}"] {\n`;
        Object.entries(colors).forEach(([prop, value]) => {
            cssContent += `    --${prop}: ${value};\n`;
        });
        cssContent += '}';

        const blob = new Blob([cssContent], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${themeName}.css`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function getCurrentThemeColors() {
        const colorInputs = document.querySelectorAll('.color-input input[type="color"]');
        const colors = {};
        colorInputs.forEach(input => {
            colors[input.name] = input.value;
        });
        return colors;
    }

    function colorToHex(color) {
        if (color.substr(0, 1) === '#') {
            return expandShorthandHex(color);
        }
        if (color.indexOf('rgb') > -1) {
            if (color.indexOf('rgba') === 0) {
                color = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+.*\d*)\s*\)$/i);
                return rgbToHex(parseInt(color[1]), parseInt(color[2]), parseInt(color[3]));
            } else {
                color = color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
                return rgbToHex(parseInt(color[1]), parseInt(color[2]), parseInt(color[3]));
            }
        }
        // If color is in named color format (e.g., 'red', 'blue'), create a temporary div to get its RGB value
        var tempElem = document.createElement('div');
        tempElem.style.color = color;
        document.body.appendChild(tempElem);
        var computedColor = window.getComputedStyle(tempElem).color;
        document.body.removeChild(tempElem);
        return colorToHex(computedColor);
    }

    function expandShorthandHex(hex) {
        // Check if it's already a full hex code
        if (hex.length === 7) {
            return hex;
        }
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, '');
        // Expand the shorthand
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        // Add the hash back and return
        return '#' + hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0');
    }

    // Run the initialization function when the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeSwitcher);
    } else {
        initThemeSwitcher();
    }
})();