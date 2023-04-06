// Set the link variable
var InjectLink = 'https://raw.githubusercontent.com/GrayStuido/Fracture/main/EaglercraftUltra/Mods/ModMenu.js';
var script;

// Inject the ModMenu when Ctrl+K is pressed
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.code === 'KeyK') {
    if (!script) {
      // Create a script element
      script = document.createElement('script');
      // Set the ID of the script element to the link
      script.id = InjectLink;

      // Retrieve code from GitHub page using XMLHttpRequest
      var request = new XMLHttpRequest();
      request.open('GET', InjectLink, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Set the content of the script element to the code retrieved from GitHub
          script.textContent = request.responseText;
        } else {
          console.error('Failed to load script');
        }
      };
      request.onerror = function() {
        console.error('Failed to load script');
      };
      request.send();

      // Inject the script element into the head of the HTML page
      document.head.appendChild(script);
    } else {
      // Remove the script element from the head of the HTML page
      document.head.removeChild(script);
      script = null;
    }
  }
});
