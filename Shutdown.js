document.addEventListener("DOMContentLoaded", function() {
    var PageDown = true;
    
    if (PageDown) {
        var maxZIndex = 9999;

        var fullscreenDiv = document.createElement("div");
        fullscreenDiv.id = "fullscreenDiv";
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
        fullscreenDiv.style.zIndex = maxZIndex;

        var image = new Image();
        image.width = 300;
        image.style.height = "auto";

        var imageUrl = "favicon.png";
        var retryCount = 0;

        function loadImage() {
            image.onload = function() {

            };
            image.onerror = function() {
                if (retryCount < 3) {
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
        heading.style.color = "white";
        heading.style.fontFamily = "Arial, sans-serif";

        fullscreenDiv.appendChild(heading);

        document.body.appendChild(fullscreenDiv);
    } else {
        var fullscreenDiv = document.querySelector("#fullscreenDiv");
        if (fullscreenDiv) {
            fullscreenDiv.remove();
        }
    }
});
