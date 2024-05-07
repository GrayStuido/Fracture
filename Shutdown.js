<script>
var PageDown = true; // Set this variable to true or false based on your condition

document.addEventListener("DOMContentLoaded", function() {
    if (PageDown) {
        // Create a new div element
        var fullscreenDiv = document.createElement("div");

        // Set styles to make the div fullscreen
        fullscreenDiv.style.position = "fixed";
        fullscreenDiv.style.top = "0";
        fullscreenDiv.style.left = "0";
        fullscreenDiv.style.width = "100%";
        fullscreenDiv.style.height = "100%";
        fullscreenDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
        fullscreenDiv.style.display = "flex";
        fullscreenDiv.style.justifyContent = "center";
        fullscreenDiv.style.alignItems = "center";
        fullscreenDiv.style.flexDirection = "column";

        // Create an img element
        var image = document.createElement("img");
        var imageUrl = "favicon.png";
        var retryCount = 0;

        function loadImage() {
            image.onload = function() {
                image.style.width = "300px";
                image.style.height = "auto";
            };
            image.onerror = function() {
                if (retryCount < 8) {
                    retryCount++;
                    imageUrl = "../" + imageUrl;
                    image.src = imageUrl;
                    loadImage();
                } else {

                    console.error("Failed to load image after multiple retries.");
                }
            };
            image.src = imageUrl;
        }

        loadImage();


        fullscreenDiv.appendChild(image);


        var heading = document.createElement("h1");
        heading.textContent = "Fracture Is Currently Down";
        heading.style.color = "white"; // White text color
        heading.style.fontFamily = "Arial, sans-serif"; // Custom font


        fullscreenDiv.appendChild(heading);


        document.body.appendChild(fullscreenDiv);
    }
});
