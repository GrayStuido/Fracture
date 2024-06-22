document.addEventListener("DOMContentLoaded", function() {
    const options = [
        "We are so back",
        "I take requests for splash texts",
        "Down bad for Emulators",
        "Life Is Roblox - Drake",
        "Who's in Paris?",
        "What is your favorite angle?",
        "The Earth isn't not flat",
        "Ealgercraft Multiplayer DOESNT WORK IDIOTS",
        "Please Do Not The Cat",
        "Canny",
        "Uncanny",
        "Making the mother of all omelets here Jack. Can't fret over every egg",
        "Ultra Rare Splash Text",
        "🤫🧏‍♂️🗿",
        "Big Vanilla",
        "Jumbo Jorts",
        "Does He Know?",
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "You are not the Lisan Al Gaib",
        "Distressed Red Ball",
        "Math Helpers 2? I barely know her",
        "Slug Car",
        "We Log ur ip btw :D",
        "Dont open console",
        "You are my sunshine",
        "The Docs are your friend! Use it like a guide!",
        "The Docs are your friend!",
        "Good Froyo flavors when??",
        "Me everytime after the this website is blocked",
        '웃 "Hello!"',
        "🐈 <-- Fred",
        "🐈‍⬛ <-- Evil Fred",
        "You like kissing boys dont you",
        "The game crashed??????",
        "PodPopular",
        "████████████████",
        "Big Update When??",
        "Look ma no GoGuardian",
        ">:(",
        ":D",
        "6/7/2024",
        "Add more games!!11!1!",
        "Yall dont really know me....",
        "Freakybob is Calling",
        "What if instead of Fracture it was 𝓕𝓻𝓮𝓪𝓴𝓽𝓾𝓻𝓮",
        "Finals D:",
        "You arent my sunshine",
        "I was crazy once",
        "Lobotomy"
    ];

    // Retrieve last option from local storage or initialize
    let lastOption = localStorage.getItem('lastOption');
    if (!lastOption) {
        lastOption = options[Math.floor(Math.random() * options.length)]; // Initial random option
        localStorage.setItem('lastOption', lastOption);
    }

    // Fisher-Yates shuffle algorithm for shuffling the array
    function shuffle(array) {
        var currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(getEntropy() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Function to generate entropy using multiple sources
    function getEntropy() {
        const now = Date.now(); // Current timestamp in milliseconds
        const datePart = now % 1000 / 1000; // Fractional part of current millisecond
        const timePart = now % (24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000); // Fractional part of current day
        const fpsPart = getFPS() / 60; // Fractional part of FPS (normalized to range [0, 1])
        const mouseEntropy = getMouseEntropy(); // Mouse movement entropy
        const keyEntropy = getKeyEntropy(); // Keyboard input entropy

        // Combine and normalize parts
        let combinedEntropy = (datePart + timePart + fpsPart + mouseEntropy + keyEntropy) % 1;

        // Ensure that combinedEntropy is within [0, 1]
        if (isNaN(combinedEntropy) || combinedEntropy < 0 || combinedEntropy > 1) {
            combinedEntropy = Math.random(); // Fall back to Math.random() if needed
        }

        return combinedEntropy;
    }

    // Function to get frames per second (FPS)
    function getFPS() {
        return performance.now() / 1000; // Using performance.now() to get high-resolution time
    }

    // Function to get mouse movement entropy
    function getMouseEntropy() {
        let entropy = 0;
        window.addEventListener('mousemove', function(e) {
            entropy = (entropy + (e.clientX + e.clientY) % 100) % 1;
        });
        return entropy;
    }

    // Function to get keyboard input entropy
    function getKeyEntropy() {
        let entropy = 0;
        window.addEventListener('keypress', function(e) {
            entropy = (entropy + e.charCode) % 1;
        });
        return entropy;
    }

    // Function to generate a random number between 50 and 1000
    function generateRandomNumber(min, max) {
        return Math.floor(getEntropy() * (max - min + 1)) + min;
    }

    // Shuffle options array
    shuffle(options);

    // Initialize the current index to a random position
    let currentIndex = generateRandomNumber(0, options.length - 1);

    // Function to update the text content of the h3 element
    function updateH3Text() {
        const h3 = document.getElementById('random-h1');

        // If lastOption is the same as current option, shuffle options again
        while (options[currentIndex] === lastOption) {
            shuffle(options);
            currentIndex = generateRandomNumber(0, options.length - 1);
        }

        // Update lastOption and store in local storage
        lastOption = options[currentIndex];
        localStorage.setItem('lastOption', lastOption);

        h3.textContent = lastOption;
    }

    // Call updateH3Text function to initially set the text content
    updateH3Text();

    // Event listener for refreshing the option
    h3.addEventListener('click', updateH3Text);
});