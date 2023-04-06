// Listen for the Ctrl + M key combination
  var ctrlPressed = false;
  document.addEventListener("keydown", function(event) {
if (event.ctrlKey && event.key === 'i') { // M key while Ctrl is pressed
      clearTimeout(timeoutID);
      lockedDiv.style.display = "none";
	  localStorage.setItem("File-Locked-DoNotOpen", "false");
    }
  });
}
document.addEventListener("keydown", function(event) {
if (localStorage.getItem("File-Locked-DoNotOpen") === "false") {
    document.addEventListener("keydown", function(event) {
      if (event.ctrlKey && event.key === 'i') { // M key while Ctrl is pressed
        localStorage.setItem("File-Locked-DoNotOpen", "true");
        alert("The file has been locked. Please do not open it.");
		localStorage.setItem("File-Locked-DoNotOpen", "true");
      }
    });
  }
  }
});


// Actual Cloaking Code

// Check if the image link is saved in local storage
var savedImageLink = localStorage.getItem("imageLink");

// If the image link is not saved in local storage or is invalid, launch a prompt to ask for it
if (!savedImageLink || !isValidImageLink(savedImageLink)) {
  savedImageLink = prompt("Please enter the link of the image to use:");
  if (!savedImageLink || !isValidImageLink(savedImageLink)) {
    // If the user enters an invalid image link or cancels the prompt, default to a set image link
    savedImageLink = "https://cdn.discordapp.com/attachments/1019813222884323360/1090460201431343216/image.png";
  }
  localStorage.setItem("imageLink", savedImageLink);
}

// Function to check if a given image link is valid
function isValidImageLink(link) {
  var validExtensions = ["jpg", "jpeg", "png", "gif"];
  var extension = link.substring(link.lastIndexOf(".") + 1);
  return validExtensions.includes(extension.toLowerCase());
}

// Function to display the black overlay with the image
function displayOverlay(locked) {
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "black";
  overlay.style.opacity = "1";
  overlay.style.zIndex = "9999";
  overlay.classList.add("overlay");
  if (!locked) {
    var image = document.createElement("img");
    image.src = savedImageLink;
    image.style.position = "absolute";
    image.style.top = "50%";
    image.style.left = "50%";
    image.style.transform = "translate(-50%, -50%)";
    overlay.appendChild(image);
  }
  document.body.appendChild(overlay);

  // Add an event listener for the click event
  if (!locked) {
    overlay.addEventListener("click", function() {
      // When the overlay is clicked, remove it from the page
      document.body.removeChild(overlay);
    });
  }
}

// Check if the image link is saved in local storage
var savedImageLink = localStorage.getItem("imageLink");

// If the image link is not saved in local storage, launch a prompt to ask for it
if (!savedImageLink) {
  savedImageLink = prompt("Please enter the link of the image to use:");
  localStorage.setItem("imageLink", savedImageLink);
}

var locked = false; // variable to track whether the overlay is locked

// Add an event listener for the visibilitychange event
document.addEventListener("visibilitychange", function() {
  if (document.hidden && !locked) {
    // If the page is hidden and the overlay is not locked, display the black overlay with the saved image
    displayOverlay(false);
  }
});

// Add an event listener for the keydown event
document.addEventListener("keydown", function(event) {
  // Check if the user pressed Ctrl + Shift + U
  // Check if the user pressed Ctrl + Shift + U
  if (event.ctrlKey && event.shiftKey && event.key === "U") {
    // Launch the prompt to ask for the image link again
    var promptText = "Please enter the link of the image to use (or type '/fix/img' to reset the image):";
    var savedImageLink = prompt(promptText);
    
    if (savedImageLink === "/fix/img") {
      // Clear the existing image from local storage and set the default image link
      localStorage.removeItem("imageLink");
      savedImageLink = "https://cdn.discordapp.com/attachments/1019813222884323360/1090460201431343216/image.png";
    }
    
    localStorage.setItem("imageLink", savedImageLink);
    
    // Remove the existing black overlay and display a new one with the updated image
    var overlay = document.querySelector("div.overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
    if (!locked) {
      displayOverlay(false);
    }
  }
});
  
  // Check if the user pressed Shift + Y
  if (event.shiftKey && event.key === "Y") {
    // Toggle the locked variable
    locked = !locked;
    // Get the existing black overlay
    var overlay = document.querySelector("div.overlay");
    if (overlay) {
      if (locked) {
        // If the overlay is locked, remove the event listener for the click event
        overlay.removeEventListener("click", function() {
          document.body.removeChild(overlay);
        });
      } else {
        // If the overlay is not locked, add the event listener for the click event
        overlay.addEventListener("click", function() {
          document.body.removeChild(overlay);
        });
      }
    } else {
      if (!locked) {
        // If the overlay is not showing and is not locked, display it
        displayOverlay(false);
      }
    }
  }
});
