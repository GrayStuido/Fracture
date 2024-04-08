document.addEventListener("DOMContentLoaded", function() {
    // Keys variable
    var keys = [
        
    "FracDev",
    "wujSNJSbpxcXkDPqpUbQ",
    "2JBBe8NnpBBEZ2QKQUE8",
    "key2",
    "key3"

        ];

    // Function to set cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Function to get cookie value by name
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Check if key is already saved in cookie
    var savedKey = getCookie("accessKey");
    if (savedKey && keys.includes(savedKey)) {
        // If key is saved and valid, don't show the input div
        return;
    }

    // Create a div element
    var overlayDiv = document.createElement("div");
    
    // Style the div to cover the entire page
    overlayDiv.style.position = "fixed";
    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.width = "100%";
    overlayDiv.style.height = "100%";
    overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlayDiv.style.zIndex = "9999";

    // Create a centered div for the input box
    var inputDiv = document.createElement("div");
    inputDiv.style.position = "absolute";
    inputDiv.style.top = "50%";
    inputDiv.style.left = "50%";
    inputDiv.style.transform = "translate(-50%, -50%)";
    inputDiv.style.width = "300px";
    inputDiv.style.backgroundColor = "#fff";
    inputDiv.style.padding = "20px";
    inputDiv.style.borderRadius = "10px";
    inputDiv.style.textAlign = "center";

    // Create an input element
    var inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter key");
    inputField.style.width = "100%";
    inputField.style.marginBottom = "10px";
    inputDiv.appendChild(inputField);

    // Create a button
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style.width = "100px";
    saveButton.style.padding = "10px";
    saveButton.style.borderRadius = "5px";
    saveButton.style.backgroundColor = "#4CAF50";
    saveButton.style.color = "#fff";
    saveButton.style.border = "none";
    saveButton.style.cursor = "pointer";

    // Add click event listener to the button
    saveButton.addEventListener("click", function() {
        var key = inputField.value;
        if (keys.includes(key)) {
            setCookie("accessKey", key, 30); // Save key as cookie for 30 days
            // Remove the overlay
            overlayDiv.parentNode.removeChild(overlayDiv);
        } else {
            alert("Invalid key!");
        }
    });

    // Append the button to the input div
    inputDiv.appendChild(saveButton);

    // Append the input div to the overlay div
    overlayDiv.appendChild(inputDiv);

    // Append the overlay div to the body
    document.body.appendChild(overlayDiv);
});