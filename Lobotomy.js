document.addEventListener("DOMContentLoaded", function() {
    var activationProbability = 100;
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber > activationProbability) {
        return;
    }

    function fetchImageUrls() {
        return [
            "Lobotomy/BearFive.png",
            "Lobotomy/Carson.png",
            "Lobotomy/figglebottom.png",
            "Lobotomy/Gyatt.png",
            "Lobotomy/Shnappy.gif",
            "Lobotomy/Not-Fason.png",
            "Lobotomy/Burger.gif",
            "Lobotomy/sprung-bob-grape.gif",
            "Lobotomy/Lean.png",
            "Lobotomy/AngelsAbove.jpg",
            "Lobotomy/MrsLee1.jpg",
            "Lobotomy/ohholybigmac.jpg",
            "Lobotomy/balls-busted.jpg",
            "Lobotomy/daddy.jpg",
            "Lobotomy/cat.png",
            "Lobotomy/big_bong_jhon.jpeg",
            "Lobotomy/guy.png",
            "Lobotomy/mario.png",
            "Lobotomy/smile.gif",
            "Lobotomy/blue.gif",
            "Lobotomy/TheKiwi.gif",
            "Lobotomy/funtime-drake.gif",
            "Lobotomy/chromebook.png",
            "Lobotomy/Sunshine.jpg",
            "Lobotomy/Games-Icon.png",
            "Lobotomy/JumboJorts.png",
            "Lobotomy/botomized.gif",
            "Lobotomy/fnaf.png",
            "Lobotomy/ps2.gif",
            "Lobotomy/whart.png",
            "Lobotomy/Sunshine.jpg",
            "Lobotomy/rice-spice.png",
            "Lobotomy/eruope.png",
            "Lobotomy/devorse.png",
            "Lobotomy/discord.png",
            "Lobotomy/kiwi.png",
            "Lobotomy/curse.jpg",
            "Lobotomy/sex.jpg",
            "Lobotomy/jesse.jpg",
            "Lobotomy/arab.jpg",
            "Lobotomy/midget.gif",
            "Lobotomy/dinara-princesedinara.gif",
        ];
    }

    function shuffleArray(array) {
        array = array.filter(function(url) {
            return url.trim() !== "Lobotomy/"; // Remove empty strings
        });

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    var imageUrls = fetchImageUrls();
    var shuffledImageUrls = shuffleArray(imageUrls);
    var previousImageUrl = "";
    var randomImageUrl = "";

    do {
        randomImageUrl = shuffledImageUrls[Math.floor(Math.random() * shuffledImageUrls.length)];
    } while (randomImageUrl === previousImageUrl);

    var img = new Image();
    img.src = randomImageUrl;
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "fill";
    img.style.zIndex = "9999";
    document.body.appendChild(img);

    var fadeOutDuration = 4; // Default fade-out duration in seconds

    var shakeInterval = setInterval(function() {
        var offsetX = Math.random() * 20 - 10;
        var offsetY = Math.random() * 20 - 10;
        img.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
        img.style.transition = "opacity " + fadeOutDuration + "s ease-out";
        img.style.opacity = "0";
    }, 50);

    setTimeout(function() {
        clearInterval(shakeInterval);
        document.body.removeChild(img);
    }, fadeOutDuration * 1000);
});
