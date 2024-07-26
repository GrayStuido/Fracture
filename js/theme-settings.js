// theme-settings.js

// Function to save theme to localStorage
function saveTheme(themeName) {
    localStorage.setItem('theme', themeName);
  }
  
  // Function to apply theme to preview
  function applyThemePreview(themeName) {
    document.body.className = themeName;
  }
  
  // Function to handle theme selection
  function handleThemeSelection(event) {
    const selectedTheme = event.target.value;
    saveTheme(selectedTheme);
    applyThemePreview(selectedTheme);
  }
  
  // Function to initialize theme settings
  function initializeThemeSettings() {
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      // Set initial value based on localStorage
      const currentTheme = localStorage.getItem('theme') || 'light-mode';
      themeSelect.value = currentTheme;
      applyThemePreview(currentTheme);
  
      // Add event listener for theme changes
      themeSelect.addEventListener('change', handleThemeSelection);
    }
  }
  
  // Initialize settings when DOM is loaded
  document.addEventListener('DOMContentLoaded', initializeThemeSettings);