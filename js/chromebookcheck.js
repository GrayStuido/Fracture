document.addEventListener('DOMContentLoaded', () => {
    function isChromebook() {
        const isChromeOS = navigator.userAgent.includes('CrOS');
        const isChrome = !!window.chrome && (navigator.vendor === "Google Inc." || navigator.vendor === "Google LLC");
        const isPlatformChromeOS = navigator.platform === 'Linux x86_64' || navigator.platform === 'Linux armv7l';
        return isChromeOS && isChrome && isPlatformChromeOS;
    }

    let override = localStorage.getItem('overrideRedirect') === '1'; // Check local storage on load

    const keysToPress = ['~', '`', '\\', '|']; // Specify keys to detect

    // Function to handle keydown events
    function handleKeyDown(event) {
        if (keysToPress.includes(event.key)) {
            override = true;
            localStorage.setItem('overrideRedirect', '1');
            console.log("Overridden");
            document.removeEventListener('keydown', handleKeyDown); // Remove listener after override
        }
    }

    // Add keydown event listener
    document.addEventListener('keydown', handleKeyDown);

    // Delay execution by 1 second
    setTimeout(() => {
        if (!override) {
            if (isChromebook()) {
                console.log("Welcome!");
            } else {
                console.log("Get Out.");
                window.location.href = "https://www.google.com";
            }
        } else {
            console.log("Override");
        }
    }, 500); // 1000 ms = 1 second

    // Log status on load
    if (override) {
        console.log("Overridden");
    }
});
