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
        "Im Not Fixing Doom Lul",
      ];

      function changeText() {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomText = options[randomIndex];
        document.getElementById("random-h1").textContent = randomText;
      }
