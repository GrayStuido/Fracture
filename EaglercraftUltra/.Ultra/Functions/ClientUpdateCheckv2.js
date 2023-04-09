      // Check the local storage for the value of "Client_Version"
      const clientVersion = localStorage.getItem("Client_Version");
      // Compare the value to a set value
      const setVersion = "2.0.1b";
      if (clientVersion === setVersion) {
        // If they match, do nothing
      } else {
        // If they don't match, show the existing div on the page
        const existingDiv = document.getElementById("EaglercraftUltraUpdateDivContainer");
        existingDiv.style.display = "block";
      }
