        let echolog = {};
       
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
            };
           
            // Get current date and time
            const currentTime = new Date().toLocaleTimeString();
            const currentDate = new Date().toLocaleDateString();
            echolog.time = currentTime;
            echolog.date = currentDate;
           
            // Log information to console
            console.log("Log:");
            console.table(echolog); // Output information in a table format
            console.log("Additional Information:");
            console.log("Time:", echolog.time);
            console.log("Date:", echolog.date);
           
            // Save to local storage
            localStorage.setItem('echolog', JSON.stringify(echolog));
          })
          .catch((error) => console.error(error));
