document.getElementById('screenshotButton').addEventListener('click', function() {
    // Create the text div
    var textDiv = document.createElement('div');
    textDiv.id = 'textDiv';

    // Get the current date and time
    var now = new Date();
    var dateTime = now.toLocaleString();

    // Get the user agent string for basic OS and browser information
    var userAgent = navigator.userAgent;
    var browserInfo = userAgent.match(/\b(Chrome|Safari|Firefox|Edge|Opera)\b/i)[0];
    var osInfo = userAgent.match(/\b(Windows|Macintosh|Linux|Android|iOS)\b/i)[0];

    // Assuming a placeholder for the file path (since JavaScript cannot access the file system directly)
    var filePath = window.location;  // Placeholder path

    // Detect if the console is open
    var isConsoleOpen = false;
    var threshold = 160;

    console.log("%c ", "font-size: 200px"); // Log something big to the console
    var startTime = performance.now();
    debugger;
    var endTime = performance.now();

    if (endTime - startTime > threshold) {
        isConsoleOpen = true;
    }

    var consoleStatus = isConsoleOpen ? 'Console Opened' : 'Console Closed';

    // Set the content of the div
    textDiv.innerHTML = `
        <p>Date and Time: ${dateTime}</p>
        <p>File Path: ${filePath}</p>
        <p>OS: ${osInfo}</p>
        <p>Browser: ${browserInfo}</p>
        <p class="${isConsoleOpen ? 'console-open' : ''}">Console Status: ${consoleStatus}</p>
    `;

    // Style the text div
    textDiv.style.position = 'fixed';
    textDiv.style.bottom = '0';
    textDiv.style.left = '0';
    textDiv.style.backgroundColor = 'white';
    textDiv.style.padding = '10px';
    textDiv.style.zIndex = '1000';

    // Append the text div to the body
    document.body.appendChild(textDiv);

    // Create the grid div
    var gridDiv = document.createElement('div');
    gridDiv.id = 'gridDiv';

    // Create and append 9 grid boxes with random colors
    for (var i = 0; i < 9; i++) {
        var gridBox = document.createElement('div');
        gridBox.className = 'gridBox';
        gridBox.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color
        gridDiv.appendChild(gridBox);
    }

    // Append the grid div to the body
    document.body.appendChild(gridDiv);

    // Take the screenshot
    html2canvas(document.body).then(canvas => {
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Remove the text and grid divs after taking the screenshot
        document.body.removeChild(textDiv);
        document.body.removeChild(gridDiv);
    });
});