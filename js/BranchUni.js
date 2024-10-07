// Function to compare version numbers
function compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    
    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const part1 = parts1[i] || 0;
        const part2 = parts2[i] || 0;
        if (part1 > part2) return 1;
        if (part1 < part2) return -1;
    }
    return 0;
}

// Function to get the appropriate label based on the current URL
function getUrlLabel() {
    const currentUrl = window.location.href;
    if (currentUrl.startsWith('file:')) {
        return '(File)';
    } else if (currentUrl.startsWith('https://graystuido.github.io/')) {
        return '(Yggdrasil)';
    } else {
        return '(Branch)';
    }
}

// Function to fetch and update the version number
function updateVersionNumber() {
    const url = 'https://api.github.com/repos/GrayStuido/Fracture/contents/UpdateNumber.txt';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Decode the content from base64
            const latestVersion = atob(data.content).trim();
            
            // Get the current version from the HTML element
            const versionElement = document.getElementById('fractureVersionNumber');
            if (versionElement) {
                const currentVersion = versionElement.textContent.split(' ')[0]; // Get the version number only
                
                // Compare versions
                const comparison = compareVersions(currentVersion, latestVersion);
                const urlLabel = getUrlLabel();
                
                let newText, textColor;
                
                if (comparison < 0) {
                    // Current version is older
                    newText = `${currentVersion} (Outdated, update fork)`;
                    textColor = 'red';
                } else if (comparison > 0) {
                    // Current version is newer (shouldn't happen normally)
                    newText = `${currentVersion} ${urlLabel}`;
                } else {
                    // Versions are the same
                    newText = `${currentVersion} ${urlLabel}`;
                }
                
                versionElement.textContent = newText;
                versionElement.style.color = textColor;
            } else {
                console.error('Version number element not found');
            }
        })
        .catch(error => {
            console.error('Error fetching version number:', error);
        });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVersionNumber);