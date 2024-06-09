document.addEventListener('DOMContentLoaded', () => {










    let condition = false; // True Shuts down the website keep it false otherwise
    let additionalMessage = "Please check back later."; // Message that displays below the 'Fracture is down' message
    let imageUrl = "icons/android-chrome-192x192.png"; // File of the image displayed above all the text













    if (condition) {
        // Create the overlay div
        const overlay = document.createElement('div');
        overlay.id = 'fracture-overlay';

        // Create the image element
        const image = document.createElement('img');
        image.src = imageUrl;
        image.id = 'fracture-image';

        // Create the main message div
        const mainMessage = document.createElement('div');
        mainMessage.id = 'fracture-main-message';
        mainMessage.textContent = 'Fracture is down';

        // Create the additional message div
        const additionalMessageDiv = document.createElement('div');
        additionalMessageDiv.id = 'fracture-additional-message';
        additionalMessageDiv.textContent = additionalMessage;

        // Append elements to the overlay
        overlay.appendChild(image);
        overlay.appendChild(mainMessage);
        overlay.appendChild(additionalMessageDiv);

        // Append overlay to the body
        document.body.appendChild(overlay);

        // Create and append CSS
        const style = document.createElement('style');
        style.textContent = `
            #fracture-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                text-align: center;
            }
            #fracture-image {
                max-width: 100px;
                margin-bottom: 20px;
            }
            #fracture-main-message {
                font-size: 2em;
                margin-bottom: 10px;
            }
            #fracture-additional-message {
                font-size: 1.2em;
            }
        `;
        document.head.appendChild(style);
    }
});
