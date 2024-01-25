      const options = [
        "We are so back",
        "I take requests for splash texts",
      ];

      function changeText() {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomText = options[randomIndex];
        document.getElementById("random-h1").textContent = randomText;
      }
