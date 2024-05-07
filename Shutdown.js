document.addEventListener("DOMContentLoaded", function() {
    var PageDown = false;
    
    if (PageDown) {
        // Set maximum z-index value
        var maxZIndex = 9999;

        // Create a new div element
        var fullscreenDiv = document.createElement("div");

        // Set styles to make the div fullscreen
        fullscreenDiv.style.position = "fixed";
        fullscreenDiv.style.top = "0";
        fullscreenDiv.style.left = "0";
        fullscreenDiv.style.width = "100%";
        fullscreenDiv.style.height = "100%";
        fullscreenDiv.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Semi-transparent black background
        fullscreenDiv.style.display = "flex";
        fullscreenDiv.style.justifyContent = "center";
        fullscreenDiv.style.alignItems = "center";
        fullscreenDiv.style.flexDirection = "column"; // Align items vertically
        fullscreenDiv.style.zIndex = maxZIndex; // Set z-index value

        // Create an img element
        var image = document.createElement("img");
        var imageUrl = "favicon.png";
        var retryCount = 0;

        function loadImage() {
            image.onload = function() {
                // Image loaded successfully
                image.style.width = "300px";
                image.style.height = "auto";
            };
            image.onerror = function() {
                // Image failed to load
                if (retryCount < 8) {
                    // Retry loading the image
                    retryCount++;
                    imageUrl = "../" + imageUrl; // Prepend "../" to the URL
                    image.src = imageUrl;
                    loadImage(); // Retry loading recursively
                } else {
                    // Max retries reached, show error message
                    console.error("Failed to load image after multiple retries.");
                }
            };
            image.src = imageUrl;
        }

        loadImage(); // Start loading the image

        // Append the image to the div
        fullscreenDiv.appendChild(image);

        // Create an h1 element
        var heading = document.createElement("h1");
        heading.textContent = "Fracture Is Currently Down";
        heading.style.color = "white"; // White textcolor
        heading.style.fontFamily = "Arial, sans-serif"; // Custom font

        // Append the heading to the div
        fullscreenDiv.appendChild(heading);

        // Append the div to the body
        document.body.appendChild(fullscreenDiv);
    } else {
        // If PageDown is false, remove the fullscreenDiv if it exists
        var fullscreenDiv = document.querySelector("#fullscreenDiv");
        if (fullscreenDiv) {
            fullscreenDiv.remove();
        }
    }
});
