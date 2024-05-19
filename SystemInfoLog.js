let echolog = {};

// Initialize log name and number
const logNumber = parseInt(localStorage.getItem('[System Info] Log Number')) || 0;
const currentDate = new Date();
const datePart = currentDate.toLocaleDateString().replaceAll('/', '-');
const timePart = currentDate.toLocaleTimeString().replace(/:/g, '');
const logName = `[System Info Log]`;

// Generate log name
function generateLogName() {
    return logName;
}

// Fetch Information
fetch('https://wtfismyip.com/json')
  .then((response) => response.json())
  .then((data) => {
    echolog = {
      ipAddress: data.YourFuckingIPAddress,
      location: data.YourFuckingLocation,
      hostname: data.YourFuckingHostname,
      isp: data.YourFuckingISP,
      city: data.YourFuckingCity,
      country: data.YourFuckingCountry,
      countryCode: data.YourFuckingCountryCode,
      userAgent: navigator.userAgent,
      windowProp: Object.keys(window).length,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      windowRatio: window.innerWidth / window.innerHeight,
      screenWidth: window.screen.availWidth,
      screenHeight: window.screen.availHeight,
      screenRatio: window.screen.availWidth / window.screen.availHeight,
      DPI: window.devicePixelRatio,
      colorDepth: window.screen.colorDepth,
      orientation: window.screen.orientation.type,
      orientationAngle: window.screen.orientation.angle,
      os: navigator.platform,
      threads: navigator.hardwareConcurrency,
      memory: navigator.deviceMemory,
      systemLanguages: navigator.languages.join(', '),
      languages: navigator.language,
      currentURL: window.location.href,
      filePath: window.location.pathname,
    };

    // Get ping time
    const startPingTime = performance.now();
    fetch('https://wtfismyip.com/json')
      .then(() => {
        const endPingTime = performance.now();
        const pingTime = endPingTime - startPingTime;
        echolog.pingTime = pingTime.toFixed(2);
        // Log information to console
        console.log("Log:");
        console.table(echolog); // Output information in a table format
        // Save to local storage with custom log name
        localStorage.setItem(logName, JSON.stringify(echolog));
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));

// Update log number in local storage
localStorage.setItem('[System Info] Log Number', logNumber + 1);
