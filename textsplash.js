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
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "You are not the Lisan Al Gaib",
        "Distressed Red Ball",
        "Math Helpers 2? I barely know her",
        "Slug Car"
    ];

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function getRandomOption() {
        return options[Math.floor(Math.random() * options.length)];
    }

    // Randomize options
    shuffle(options);

    function updateH3Text() {
        const h3 = document.getElementById('random-h1');
        h3.textContent = getRandomOption();
    }

    updateH3Text();
});
