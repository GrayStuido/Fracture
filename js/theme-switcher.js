class ThemeSwitcher {
    constructor(options = {}) {
        this.options = {
            defaultTheme: 'light',
            storageKey: 'user-theme',
            ...options
        };
        this.currentTheme = this.options.defaultTheme;
        this.originalTheme = {};
        this.init();
    }

    init() {
        this.loadTheme();
        this.bindEvents();
        this.updateColorInputs();
    }

    loadTheme() {
        try {
            const savedTheme = localStorage.getItem(this.options.storageKey);
            this.applyTheme(savedTheme || this.options.defaultTheme);
        } catch (e) {
            console.warn('Unable to access localStorage. Falling back to default theme.');
            this.applyTheme(this.options.defaultTheme);
        }
    }

    bindEvents() {
        document.querySelectorAll('.theme-button').forEach(button => {
            button.addEventListener('click', () => this.handleThemeButtonClick(button));
        });

        document.querySelectorAll('.color-input input[type="color"]').forEach(input => {
            input.addEventListener('input', (e) => this.updateLiveTheme(e));
        });

        const applyButton = document.getElementById('apply-theme');
        const resetButton = document.getElementById('reset-theme');
        const exportButton = document.getElementById('export-theme');

        if (applyButton) applyButton.addEventListener('click', () => this.applyCustomTheme());
        if (resetButton) resetButton.addEventListener('click', () => this.resetToDefaults());
        if (exportButton) exportButton.addEventListener('click', () => this.exportCustomTheme());
    }

    handleThemeButtonClick(button) {
        const theme = button.getAttribute('data-theme');
        this.applyTheme(theme);
        this.saveTheme(theme);
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        this.updateColorInputs();
    }

    updateColorInputs() {
        document.querySelectorAll('.color-input input[type="color"]').forEach(input => {
            const propertyName = `--${input.name}`;
            const color = getComputedStyle(document.body).getPropertyValue(propertyName).trim();
            input.value = this.colorToHex(color);
        });
        this.originalTheme = this.getCurrentThemeColors();
    }

    updateLiveTheme(event) {
        const propertyName = `--${event.target.name}`;
        document.body.style.setProperty(propertyName, event.target.value);
    }

    applyCustomTheme() {
        const themeName = document.getElementById('theme-name')?.value || 'custom';
        const colors = this.getCurrentThemeColors();
        this.saveTheme(themeName);
        localStorage.setItem(themeName, JSON.stringify(colors));
        this.applyTheme(themeName);
    }

    resetToDefaults() {
        Object.entries(this.originalTheme).forEach(([prop, value]) => {
            document.body.style.setProperty(`--${prop}`, value);
        });
        this.updateColorInputs();
    }

    exportCustomTheme() {
        const themeName = document.getElementById('theme-name')?.value || 'custom';
        const colors = this.getCurrentThemeColors();
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

    getCurrentThemeColors() {
        const colorInputs = document.querySelectorAll('.color-input input[type="color"]');
        const colors = {};
        colorInputs.forEach(input => {
            colors[input.name] = input.value;
        });
        return colors;
    }

    colorToHex(color) {
        if (color.startsWith('#')) {
            return this.expandShorthandHex(color);
        }
        const [r, g, b] = this.getRgbValues(color);
        return this.rgbToHex(r, g, b);
    }

    expandShorthandHex(hex) {
        if (hex.length === 7) return hex;
        hex = hex.slice(1); // Remove the #
        return hex.length === 3 ? `#${hex.split('').map(x => x + x).join('')}` : `#${hex}`;
    }

    rgbToHex(r, g, b) {
        return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    }

    getRgbValues(color) {
        const tempElem = document.createElement('div');
        tempElem.style.color = color;
        document.body.appendChild(tempElem);
        const { color: rgbColor } = getComputedStyle(tempElem);
        document.body.removeChild(tempElem);

        const [, r, g, b] = /^rgba?\((\d+),\s*(\d+),\s*(\d+)\)/.exec(rgbColor) || [0, 0, 0];
        return [parseInt(r), parseInt(g), parseInt(b)];
    }

    saveTheme(theme) {
        try {
            localStorage.setItem(this.options.storageKey, theme);
        } catch (e) {
            console.warn('Unable to save theme to localStorage.');
        }
    }
}

// Initialize the theme switcher when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher({
        defaultTheme: 'light',
        storageKey: 'user-theme'
    });
});