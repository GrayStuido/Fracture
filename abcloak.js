// Function to launch prompts and inject link
function launchPrompts() {
  // Prompt for page title
  let pageTitle = prompt("Enter Page Title (leave blank for default):");
  if (!pageTitle) {
    pageTitle = "Google";
  }

  // Prompt for favicon link
  let faviconLink = prompt("Enter favicon link (leave blank for default):");
  if (!faviconLink) {
    faviconLink = "https://google.com/favicon.ico";
  }

  // Prompt for link to open in iframe
  const link = prompt("Enter link to open:");

  // Wait for 2 seconds
  setTimeout(() => {
    // Open new window
    const newWindow = window.open("", "_blank");
    // Inject script from link
    const script = document.createElement("script");
    script.src = "https://drive.google.com/uc?export=view&id=1f7dTmBgRnNLb7rUFgkkKD-N_Ph8Aq5PF";
    newWindow.document.head.appendChild(script);
    // Inject iframe with link
    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.id = "Embed";
    newWindow.document.getElementById("target").appendChild(iframe);
  }, 2000);
}

// Add keyboard shortcut to launch prompts again
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === "U") {
    launchPrompts();
  }
});

// Launch prompts and inject link on page load
launchPrompts();
