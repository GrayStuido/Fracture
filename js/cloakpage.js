// Check if 'cloak' is installed in local storage
if (localStorage.getItem('cloak') === 'installed') {
    let imageLoaded = false; // flag to keep track of image loaded status
    
    // Default cloak settings
    const defaultCloakSettings = {
        imageSrc: "icons/cloak-image.png",
        faviconSrc: "icons/page-image.ico",
        pageTitle: "Wikipedia",
        blacklist: ["studentvue", "chat"] // Default blacklist
    };

    // Load settings from localStorage or use defaults
    let imageSrc = localStorage.getItem('cloakImageSrc') || defaultCloakSettings.imageSrc;
    let faviconSrc = localStorage.getItem('cloakFaviconSrc') || defaultCloakSettings.faviconSrc;
    let pageTitle = localStorage.getItem('cloakPageTitle') || defaultCloakSettings.pageTitle;
    let blacklist = JSON.parse(localStorage.getItem('cloakBlacklist')) || defaultCloakSettings.blacklist;

    // Store original favicon and title
    const originalFavicon = document.querySelector("link[rel~='icon']") ? document.querySelector("link[rel~='icon']").href : '';
    const originalTitle = document.title;

    // Function to update favicon with retry mechanism
    async function updateFavicon(src) {
        const maxRetries = 3;
        const retryDelay = 1000; // 1 second

        for (let i = 0; i < maxRetries; i++) {
            try {
                let link = document.querySelector("link[rel~='icon']");
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = src;

                // Wait for the favicon to load
                await new Promise((resolve, reject) => {
                    link.onload = resolve;
                    link.onerror = reject;
                    setTimeout(reject, retryDelay); // Timeout if it takes too long
                });

                console.log('Favicon updated successfully');
                return; // Success, exit the function
            } catch (error) {
                console.log(`Attempt ${i + 1} to update favicon failed. Retrying...`);
                if (i === maxRetries - 1) {
                    console.error('Failed to update favicon after multiple attempts');
                } else {
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                }
            }
        }
    }

    // Function to update page title
    function updatePageTitle(title) {
        document.title = title;
    }

    // Function to check if the current URL is blacklisted
    function isBlacklisted() {
        const currentUrl = window.location.href.toLowerCase();
        return blacklist.some(keyword => currentUrl.includes(keyword.toLowerCase()));
    }

    // Define a function to show the image and apply cloaking
    async function showImageAndCloak() {
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
        await updateFavicon(faviconSrc);
        updatePageTitle(pageTitle);

        // Retry updating favicon after 1 second
        setTimeout(() => updateFavicon(faviconSrc), 1000);
    }

    // Modified event listeners
    window.addEventListener("beforeunload", () => {
        if (!isBlacklisted()) {
            showImageAndCloak();
        }
    });

    window.addEventListener("visibilitychange", () => {
        if (document.hidden && !isBlacklisted()) {
            showImageAndCloak();
        }
    });

    window.addEventListener("blur", () => {
        if (!isBlacklisted()) {
            showImageAndCloak();
        }
    });

    // Function to change cloak settings
    window.updateCloakSettings = function(newImageSrc, newFaviconSrc, newPageTitle, newBlacklist) {
        imageSrc = newImageSrc || imageSrc;
        faviconSrc = newFaviconSrc || faviconSrc;
        pageTitle = newPageTitle || pageTitle;
        blacklist = newBlacklist || blacklist;

        localStorage.setItem('cloakImageSrc', imageSrc);
        localStorage.setItem('cloakFaviconSrc', faviconSrc);
        localStorage.setItem('cloakPageTitle', pageTitle);
        localStorage.setItem('cloakBlacklist', JSON.stringify(blacklist));

        if (imageLoaded) {
            document.querySelector("img").src = imageSrc;
            updateFavicon(faviconSrc);
            updatePageTitle(pageTitle);
        }
    }

    // Function to set default cloak settings
    window.setDefaultCloakSettings = function() {
        updateCloakSettings(
            defaultCloakSettings.imageSrc, 
            defaultCloakSettings.faviconSrc, 
            defaultCloakSettings.pageTitle,
            defaultCloakSettings.blacklist
        );
    }

    // Function to add a keyword to the blacklist
    window.addToBlacklist = function(keyword) {
        if (!blacklist.includes(keyword)) {
            blacklist.push(keyword);
            localStorage.setItem('cloakBlacklist', JSON.stringify(blacklist));
        }
    }

    // Function to remove a keyword from the blacklist
    window.removeFromBlacklist = function(keyword) {
        blacklist = blacklist.filter(item => item !== keyword);
        localStorage.setItem('cloakBlacklist', JSON.stringify(blacklist));
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
        const blacklistInput = document.getElementById('cloakBlacklist');

        if (imageInput) imageInput.value = imageSrc;
        if (faviconInput) faviconInput.value = faviconSrc;
        if (titleInput) titleInput.value = pageTitle;
        if (blacklistInput) blacklistInput.value = blacklist.join(', ');
    }

    // Call this function when the DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSettingsIntoInputs);
    } else {
        loadSettingsIntoInputs();
    }
}