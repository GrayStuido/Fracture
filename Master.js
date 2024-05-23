// auth-check.js

// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = '../index.html'; // Redirect to login page if not logged in
    }
});

// Screenshot Code
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.shiftKey && event.key === ':') {
                event.preventDefault();
                let consoleOpenCount = 0;

                window.addEventListener('devtoolschange', function(event) {
                    consoleOpenCount++;
                    updateWatermarkText();
                });

                function findImageAndAddWatermarkAndScreenshot(path, attempt = 0) {
                    if (attempt >= 10) {
                        console.error('Failed to find watermark image.');
                        return;
                    }

                    const img = document.createElement('img');
                    img.src = path + 'favicon.png';
                    img.onload = function() {
                        addWatermarkAndScreenshot(img.src);
                    };
                    img.onerror = function() {
                        // Try with a parent directory
                        findImageAndAddWatermarkAndScreenshot('../' + path, attempt + 1);
                    };
                }

                function addWatermarkAndScreenshot(imagePath) {
                    const style = document.createElement('style');
                    style.textContent = `
                        #watermark {
                            position: fixed;
                            bottom: 10px;
                            right: 10px;
                            opacity: 0.5;
                            background-color: white;
                            padding: 5px;
                            border-radius: 5px;
                            display: flex;
                            align-items: center;
                            z-index: 1000;
                        }
                        #watermark img {
                            height: 30px;
                            margin-right: 10px;
                        }
                        #grid {
                            position: fixed;
                            bottom: 10px;
                            left: 10px;
                            z-index: 999;
                        }
                        .grid-square {
                            width: 20px;
                            height: 20px;
                            opacity: 0.7;
                            float: left;
                        }
                    `;
                    document.head.appendChild(style);

                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                    script.onload = function() {
                        const watermark = document.createElement('div');
                        watermark.id = 'watermark';

                        const img = document.createElement('img');
                        img.src = imagePath; // Image path found
                        img.alt = 'Logo';

                        const text = document.createElement('span');
                        updateWatermarkText();
                        watermark.appendChild(img);
                        watermark.appendChild(text);
                        document.body.appendChild(watermark);

                        img.onload = function() {
                            const grid = document.createElement('div');
                            grid.id = 'grid';
                            for (let i = 0; i < 3; i++) {
                                for (let j = 0; j < 3; j++) {
                                    const square = document.createElement('div');
                                    square.className = 'grid-square';
                                    square.style.backgroundColor = getRandomColor();
                                    grid.appendChild(square);
                                }
                            }
                            document.body.appendChild(grid);

                            setTimeout(function() {
                                html2canvas(document.body).then(canvas => {
                                    canvas.toBlob(function(blob) {
                                        const url = URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = 'screenshot.png';
                                        document.body.appendChild(a);
                                        a.click();
                                        document.body.removeChild(a);
                                        URL.revokeObjectURL(url);

                                        // Remove watermark and grid after screenshot
                                        document.body.removeChild(watermark);
                                        document.body.removeChild(grid);
                                    });
                                });
                            }, 1000); // 1 second delay
                        };

                        img.onerror = function() {
                            console.error('Failed to load watermark image.');
                            document.body.removeChild(watermark);
                        };
                    };
                    document.body.appendChild(script);
                }

                function getRandomColor() {
                    const letters = '0123456789ABCDEF';
                    let color = '#';
                    for (let i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }

                function updateWatermarkText() {
                    const text = document.querySelector('#watermark span');
                    const now = new Date();
                    const dateTime = now.toLocaleString();
                    const filePath = window.location.href;
                    text.innerText = `Sample Text | ${dateTime} | ${filePath} | Console Opened ${consoleOpenCount} times`;
                }

                // Start by searching in the current directory
                findImageAndAddWatermarkAndScreenshot('');
            }
        });
