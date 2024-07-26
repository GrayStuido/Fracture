// theme-loader.js

// Function to load and apply theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = savedTheme;
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  }
  
  // Initialize theme when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
  
    // Add event listener for theme toggle button if it exists
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
  });
  
  // Listen for changes in system color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      // Only auto-switch if the user hasn't explicitly set a preference
      document.body.className = e.matches ? 'dark-mode' : 'light-mode';
    }
  });