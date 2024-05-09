document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the website is down
    function checkWebsiteStatus() {
        var PageDown = false;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = xhr.responseText.trim().toLowerCase();
                    if (response === "true") {
                        PageDown = true;
                    } else {
                        PageDown = false;
                    }
                    handlePageDown();
                } else {
                    console.error("Failed to fetch WebsiteDown.txt");
                }
            }
        };
        xhr.open("GET", "WebsiteDown.txt");
        xhr.send();
    }

    // Function to handle the display based on website status
    function handlePageDown() {
        if (PageDown) {
            // Website is down
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
                    // Do something on image load if needed
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
            // Website is not down
            var fullscreenDiv = document.querySelector("#fullscreenDiv");
            if (fullscreenDiv) {
                fullscreenDiv.remove();
            }
        }
    }

    checkWebsiteStatus();
});
