// Check if 'cloak' is installed in local storage
if (localStorage.getItem('cloak') === 'installed') {
    let imageLoaded = false; // flag to keep track of image loaded status
    
    // Default cloak settings
    const defaultCloakSettings = {
        imageSrc: "icons/cloak-image.png",
        faviconSrc: "icons/page-image.ico",
        pageTitle: "Wikipedia"
    };

    // Load settings from localStorage or use defaults
    let imageSrc = localStorage.getItem('cloakImageSrc') || defaultCloakSettings.imageSrc;
    let faviconSrc = localStorage.getItem('cloakFaviconSrc') || defaultCloakSettings.faviconSrc;
    let pageTitle = localStorage.getItem('cloakPageTitle') || defaultCloakSettings.pageTitle;

    // Store original favicon and title
    const originalFavicon = document.querySelector("link[rel~='icon']") ? document.querySelector("link[rel~='icon']").href : '';
    const originalTitle = document.title;

    // Function to update favicon
    function updateFavicon(src) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = src;
    }

    // Function to update page title
    function updatePageTitle(title) {
        document.title = title;
    }

    // Define a function to show the image and apply cloaking
    function showImageAndCloak() {
        if (imageLoaded) return;

        imageLoaded = true;

        const imageDiv = document.createElement("div");
        imageDiv.style.position = "fixed";
        imageDiv.style.top = "0";
        imageDiv.style.left = "0";
        imageDiv.style.width = "100vw";
        imageDiv.style.height = "100vh";
        imageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        imageDiv.style.zIndex = "9999";

        const image = document.createElement("img");
        image.src = imageSrc;
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.maxHeight = "101%";
        image.style.position = "absolute";
        image.style.top = "50%";
        image.style.left = "50%";
        image.style.transform = "translate(-50%, -50%)";

        imageDiv.appendChild(image);

        imageDiv.addEventListener("click", () => {
            imageDiv.remove();
            imageLoaded = false;
            updateFavicon(originalFavicon);
            updatePageTitle(originalTitle);
        });

        document.body.appendChild(imageDiv);
        updateFavicon(faviconSrc);
        updatePageTitle(pageTitle);
    }

    window.addEventListener("beforeunload", showImageAndCloak);
    window.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            showImageAndCloak();
        }
    });
    window.addEventListener("blur", showImageAndCloak);

    // Function to change cloak settings
    window.updateCloakSettings = function(newImageSrc, newFaviconSrc, newPageTitle) {
        imageSrc = newImageSrc || imageSrc;
        faviconSrc = newFaviconSrc || faviconSrc;
        pageTitle = newPageTitle || pageTitle;

        localStorage.setItem('cloakImageSrc', imageSrc);
        localStorage.setItem('cloakFaviconSrc', faviconSrc);
        localStorage.setItem('cloakPageTitle', pageTitle);

        if (imageLoaded) {
            document.querySelector("img").src = imageSrc;
            updateFavicon(faviconSrc);
            updatePageTitle(pageTitle);
        }
    }

    // Function to set default cloak settings
    window.setDefaultCloakSettings = function() {
        updateCloakSettings(defaultCloakSettings.imageSrc, defaultCloakSettings.faviconSrc, defaultCloakSettings.pageTitle);
    }

    // Add an event listener to show the image when "`" key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "`") {
            showImageAndCloak();
        }
    });

    // Load settings into input fields (if they exist)
    function loadSettingsIntoInputs() {
        const imageInput = document.getElementById('cloakImageSrc');
        const faviconInput = document.getElementById('cloakFaviconSrc');
        const titleInput = document.getElementById('cloakPageTitle');

        if (imageInput) imageInput.value = imageSrc;
        if (faviconInput) faviconInput.value = faviconSrc;
        if (titleInput) titleInput.value = pageTitle;
    }

    // Call this function when the DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSettingsIntoInputs);
    } else {
        loadSettingsIntoInputs();
    }
}
