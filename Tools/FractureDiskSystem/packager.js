document.addEventListener('DOMContentLoaded', function() {
    const insertDiskButton = document.getElementById('insertDiskButton');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const consoleElement = document.getElementById('console');
    const canvas = document.getElementById('myCanvas');
    const diskInfoDiv = document.getElementById('diskInfo');
    const diskTitle = document.getElementById('diskTitle');
    const diskIcon = document.getElementById('diskIcon');

    insertDiskButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.fracturedisk')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileContent = e.target.result;
                const separatorIndex = fileContent.indexOf('\n');
                if (separatorIndex !== -1) {
                    const diskInfoJson = fileContent.substring(0, separatorIndex).trim();
                    const htmlContent = fileContent.substring(separatorIndex + 1).trim();
                    
                    try {
                        const diskInfo = JSON.parse(diskInfoJson)[0]; // Assuming it's in the format [{ TITLE: ..., ICON-PATH: ... }]
                        diskTitle.textContent = diskInfo.TITLE;
                        diskIcon.src = diskInfo['ICON-PATH'];
                        diskInfoDiv.style.display = 'block';
                        
                        uploadButton.style.display = 'block';
                        uploadButton.onclick = function() {
                            insertDiskButton.style.display = 'none';
                            fileInput.style.display = 'none';
                            uploadButton.style.display = 'none';

                            const context = canvas.getContext('2d');
                            context.font = '16px Arial';
                            context.fillStyle = 'black';

                            function drawTextLineByLine(content, canvas) {
                                const lines = content.split('\n');
                                let currentLine = 0;
                                const totalLines = lines.length;
                                const interval = 20;

                                function drawLine() {
                                    if (currentLine < totalLines) {
                                        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                                        context.fillText(lines[currentLine], 10, 30 + (currentLine * 20));
                                        currentLine++;
                                        setTimeout(drawLine, interval);
                                    } else {
                                        canvas.style.display = 'none';
                                        document.documentElement.innerHTML = htmlContent;
                                    }
                                }

                                drawLine();
                            }

                            simulateConsoleMessage('Loading HTML', () => {
                                canvas.style.display = 'block';
                                drawTextLineByLine(htmlContent, canvas);
                            });
                        };
                    } catch (error) {
                        console.error('Error parsing disk info JSON:', error);
                        alert('Error parsing disk info. Please upload a valid .fracturedisk file.');
                    }
                } else {
                    alert('Invalid .fracturedisk file format. Please upload a valid file.');
                }
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid .fracturedisk file.');
        }
    });

    function simulateConsoleMessage(message, callback) {
        const spinner = ['|', '/', '-', '\\'];
        let spinnerIndex = 0;
        let intervalId;

        const messageElement = document.createElement('div');
        messageElement.textContent = message + ' [ ]';
        consoleElement.appendChild(messageElement);

        function updateSpinner() {
            messageElement.textContent = message + ' [' + spinner[spinnerIndex] + ']';
            spinnerIndex = (spinnerIndex + 1) % spinner.length;
        }

        updateSpinner();
        intervalId = setInterval(updateSpinner, 100);

        setTimeout(() => {
            clearInterval(intervalId);
            messageElement.textContent = message; // Remove spinner
            callback();
        }, randomIntFromInterval(60, 1000));
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
