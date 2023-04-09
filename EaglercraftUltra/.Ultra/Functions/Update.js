    <div id="updateDiv2345" style="display: none; width: 500px; height: 100px; background-color: #474747; color: white;; font-size: 10px;">
      <h1>Your EaglercraftUltra Is Outdated!</h1>
<br>
<p>Download The Latest Here: </p>
    </div>
    <script>
      // Check the local storage for the value of "Client_Version"
      const clientVersion = localStorage.getItem("Client_Version");
      // Compare the value to a set value
      const setVersion = "2.0.1b";
      if (clientVersion === setVersion) {
        // If they match, do nothing
      } else {
        // If they don't match, show the existing div on the page
        const existingDiv = document.getElementById("updateDiv2345");
        existingDiv.style.display = "flex";
      }
